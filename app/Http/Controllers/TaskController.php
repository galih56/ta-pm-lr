<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\File;
use App\Models\Task;
use App\Models\Tag;
use App\Models\TasksHasTags;

class TaskController extends Controller
{
    public function index()
    {
        $tasks=Task::orderBy('start','ASC')
                    ->with('creator')
                    ->with('cards.cards')
                    ->with('list')->get();
        return response()->json($tasks);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $project_member=ProjectMember::where('projects_id','=',$request->projects_id)->where('users_id','=',$request->creator)->first();
        if(!$project_member){
            return response()->json(["error"=>"User id : $request->creator is not registered in the project $request->projects_id"],403);
        }

        $task=new Task();
        $task->title=$request->title;
        $task->description=$request->description;
        $task->start=$request->start;
        $task->end=$request->end;
        
        if($request->start && $request->end){
            $start = new DateTime($request->start);
            $end = new DateTime($request->end);
            $days= $start->diff($end);
            $task->days=$days;
    
        }
        $task->lists_id=$request->lists_id;
        $task->list=$request->list;
        $task->is_subtask=$request->is_subtask;
        $task->users_id=$request->users_id;
        $task->parent_task_id=$request->parent_task_id;
        $task->start_label='Belum dilaksanakan';
        $task->end_label='Belum selesai';
        $task->save();

        $tags=$request->tags;
        if($tags){
            $inserted_tags=[];
            for ($i=0; $i < count($tags); $i++) { 
                $tag=$tags[$i];
                if($tag->inputNewTag){
                    $new_tag=new Tag();
                    $new_tag->title=$tag->inputNewTag;
                    $new_tag->save();

                    $new_tag_relation=new TasksHasTags();
                    $new_tag_relation->tasks_id=$task->id;
                    $new_tag_relation->tags_id=$new_tag->id;
                    $new_tag_relation->save();
                }else{
                    $new_tag_relation=new TasksHasTags();
                    $new_tag_relation->tasks_id=$task->id;
                    $new_tag_relation->tags_id=$tag->id;
                    $new_tag_relation->save();
                }
            }
        }

        $members=$request->members;
        $users_id=$request->users_id;
        if($members){
            for ($i=0; $i < count($members); $i++) { 
                $member=$members[$i];
                if($request->users_id!=$member->id){
                    $task_member=new TaskMember();
                    $task_member->tasks_id=$task->id;
                    $task_member->users_id=$member->id;
                    $task_member->project_members_id=$project_member->id;
                    $task_member->save();
                }
            }
        }
        return response()->json($task);
    }

    public function show(Request $request,$id)
    {
        $task=$this->getDetailTask($id);
        return response()->json($task);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $task=Task::findOrFail($id);
        $task->title=$request->title;
        $task->description=$request->description;
        $task->lists_id=$request->lists_id;
        $task->progress=$request->progress;
        $task->start=$request->start;
        $task->end=$request->end;
        $task->actual_start=$request->actual_start;
        $task->actual_end=$request->actual_end;
        $task->parent_task_id=$request->parent_task_id;

        if($request->actual_start){
            $start = new DateTime($request->start);
            $actual_start = new DateTime($request->actual_start);
            	
            if($start<$actual_start) $task->start_label='Mulai terlambat';
            if($start>$actual_start) $task->start_label='Mulai lebih cepat';
            if($start==$actual_start) $task->start_label='Mulai tepat waktu';
        }
        
        if($request->actual_end){
            $end = new DateTime($request->end);
            $actual_end = new DateTime($request->actual_end);
            	
            if($end<$actual_end) $task->end_label='Selesai terlambat';
            if($end>$actual_end) $task->end_label='Selesai lebih cepat';
            if($end==$actual_end) $task->end_label='Selesai tepat waktu';
        }
        
        if($request->actual_start && $request->actual_end){
            $work_days= $request->actual_start->diff($request->actual_end);
            $task->work_days=$work_days;
        }

        $task->save();

        $task=Task::with('tags.tag')->findOrFail($task->id)->toArray();
        $task['tags']=$this->getTagsFromTask($task);
        return response()->json($task);
    }

    public function destroy($id)
    {
        $task=Task::findOrFail($id);
        return response()->json($task->delete());
    }

    function getDetailTask($id){
        $task=Task::findOrFail($id);
        
        $task=Task::with('creator')->with('cards')->with('logs')->with('comments.creator')->with('list')
                    ->with('tags.tag')->findOrFail($id)->toArray();

        $task['attachments']=$this->getAttachments($id);

        $task['tags']=$this->getTagsFromTask($task);
        return $task;
    }
    
    public function addTag(Request $request,$id){
        $task=Task::with('tags.tag')->findOrFail($id);
        $tags=$request->tags;
        if($tags){
            $inserted_tags=[];
            for ($i=0; $i < count($tags); $i++) { 
                $tag=$tags[$i];
                if($tag->inputNewTag){
                    $new_tag=new Tag();
                    $new_tag->title=$tag->inputNewTag;
                    $new_tag->save();

                    $new_tag_relation=new TasksHasTags();
                    $new_tag_relation->tasks_id=$task->id;
                    $new_tag_relation->tags_id=$new_tag->id;
                    $new_tag_relation->save();
                }else{
                    $new_tag_relation=new TasksHasTags();
                    $new_tag_relation->tasks_id=$task->id;
                    $new_tag_relation->tags_id=$tag->id;
                    $new_tag_relation->save();
                }
            }
        }
        
        $task=Task::with('tags.tag')->findOrFail($id)->toArray();
        $task['tags']=$this->getTagsFromTask($task);
        return response()->json($task);
    }

    public function removeTag(Request $request,$id){
        $task=Task::findOrFail($id);
        $tags=TasksHasTags::where('tasks_id','=',$id)
                            ->where('tags_id','=',$request->tags_id)
                            ->orWhere('id','=',$request->task_tag_id)
                            ->get();

        for ($i=0; $i < count($tags); $i++) { 
            $tag=$tags[$i];
            $tag->delete();
        }

        $task=Task::with('tags.tag')->findOrFail($id)->toArray();
        $task['tags']=$this->getTagsFromTask($task);
        return response()->json($taks,200);
    }

    function getTagsFromTask($task){
        $tag_relations=$task['tags'];
        $tags=[];
        for ($i=0; $i < count($tag_relations); $i++) { 
            $tag_relation=$tag_relations[$i];
            $tag_relation['tag']['task_tag_id']=$tag_relation['id'];
            $tag=$tag_relation['tag'];
            if($tag)$tags[]=$tag;
        }
        return $tags;        
    }

    function getAttachments($tasks_id){
        $attachments=File::selectRaw('ta.id, f.id AS files_id, ta.tasks_id, f.name, 
                                    f.type, f.size, f.icon, f.path, f.source, f.base64, f.users_id')
                            ->from('task_attachments as ta')
                            ->join('files AS f','f.id','=','ta.files_id')
                            ->where('ta.tasks_id','=',$tasks_id)->with('user')->get()->toArray();
        return $attachments;
    }
}
