<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\File;
use App\Models\Task;
use App\Models\Tag;
use App\Models\TasksHasTags;
use App\Models\TaskMember;
use App\Models\ProjectMember;
use Carbon\Carbon;

class TaskController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:sanctum',['only'=>['index','update','store','destroy']]); 
    }

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
        abort(404);
    }

    public function store(Request $request)
    {
        $fields = $request->validate([
            'users_id' => 'required',
            'projects_id' => 'required',
            'title' => 'required',
            'is_subtask'=>'required',
            'start'=>'required',
            'end'=>'required',
        ]);

        $task=new Task();
        $task->title=$request->title;
        $task->description=$request->description;
        $task->start=$request->start;
        $task->end=$request->end;
        
        if($request->start && $request->end){
            $start = Carbon::parse($request->start);
            $end = Carbon::parse($request->end);
            $days= $start->diffInDays($end);
            $task->days=$days;
    
        }
        $task->lists_id=$request->lists_id;
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
                if(array_key_exists('inputNewTag', $tag)){
                    $new_tag=new Tag();
                    $new_tag->title=$tag['inputNewTag'];
                    $new_tag->save();

                    $new_tag_relation=new TasksHasTags();
                    $new_tag_relation->tasks_id=$task->id;
                    $new_tag_relation->tags_id=$new_tag->id;
                    $new_tag_relation->save();
                }else{
                    $new_tag_relation=new TasksHasTags();
                    $new_tag_relation->tasks_id=$task->id;
                    $new_tag_relation->tags_id=$tag['id'];
                    $new_tag_relation->save();
                }
            }
        }

        $members=$request->members;
        $users_id=$request->users_id;
        if($members){
            for ($i=0; $i < count($members); $i++) { 
                $member=$members[$i];
                if($request->users_id!=$member['id']){
                    $task_member=new TaskMember();
                    $task_member->tasks_id=$task->id;
                    $task_member->users_id=$member['id'];
                    $task_member->project_members_id=$member['project_members_id'];
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
        abort(404);
    }

    public function update(Request $request, $id)
    {
        $task=Task::findOrFail($id);
        if($request->has('title')) $task->title=$request->title;
        if($request->has('description')) $task->description=$request->description;
        if($request->has('lists_id')) $task->lists_id=$request->lists_id;
        if($request->has('progress')) $task->progress=$request->progress;
        if($request->has('start')) $task->start=$request->start;
        if($request->has('end')) $task->end=$request->end;
        if($request->has('actual_start')) $task->actual_start=$request->actual_start;
        if($request->has('actual_end')) $task->actual_end=$request->actual_end;
        if($request->has('parent_task_id')) $task->parent_task_id=$request->parent_task_id;
        if($request->has('complete')) $task->complete=$request->complete;

        if($request->has('actual_start')){
            $start = Carbon::parse($task->start)->format('Y-m-d');
            $actual_start = Carbon::parse($task->actual_start)->format('Y-m-d');
            if($actual_start<$start) $task->start_label='Mulai lebih cepat';
            if($actual_start>$start) $task->start_label='Mulai terlambat';
            if($actual_start==$start) $task->start_label='Mulai tepat waktu';
            // dd($task->start,$request->actual_start,$start,$actual_start,$task->start_label,'($actual_start<$start)',($actual_start<$start),'($actual_start>$start)',($actual_start>$start),'($actual_start==$start)',($actual_start==$start));
        }
        
        if($request->has('actual_end')){
            $end = Carbon::parse($task->end)->format('Y-m-d');
            $actual_end = Carbon::parse($task->actual_end)->format('Y-m-d');
            if($actual_end<$end) $task->end_label='Selesai lebih cepat';
            if($actual_end>$end) $task->end_label='Selesai terlambat';
            if($actual_end==$end) $task->end_label='Selesai tepat waktu';
        }
        
        if($request->has('actual_start') && $request->has('actual_end')){
            $actual_start = Carbon::parse($request->actual_start);
            $actual_end = Carbon::parse($request->actual_end);
            $days= $actual_start->diffInDays($actual_end);
            $work_days= $actual_start->diffInDays($actual_end);
            $task->work_days=$work_days;
        }

        $task->save();
        $task=$this->getDetailTask($task->id);
        return response()->json($task);
    }

    public function destroy($id)
    {
        $task=Task::findOrFail($id);
        return response()->json($task->delete());
    }

    function getDetailTask($id){
        $task=Task::findOrFail($id);
        
        $task=Task::with('creator')->with('cards')->with('logs')->with('comments.creator')
                    ->with('list')->with('taskMembers.member.role')->with('taskMembers.user')
                    ->with('tags.tag')->findOrFail($id)->toArray();

        $task['attachments']=$this->getAttachments($id);
        $task['tags']=$this->getTagsFromTask($task);
        $task['members']=$this->getTaskMembers($task);
        unset($task['task_members']);
        return collect($task);
    }
    
    public function addTag(Request $request,$id){
        $task=Task::with('tags.tag')->findOrFail($id);
        $tags=$request->tags;
        if($tags){
            $inserted_tags=[];
            for ($i=0; $i < count($tags); $i++) { 
                $tag=$tags[$i];
                if(array_key_exists('inputNewTag', $tag)){
                    $new_tag=new Tag();
                    $new_tag->title=$tag['inputNewTag'];
                    $new_tag->save();

                    $new_tag_relation=new TasksHasTags();
                    $new_tag_relation->tasks_id=$task->id;
                    $new_tag_relation->tags_id=$new_tag->id;
                    $new_tag_relation->save();
                }else{
                    $new_tag_relation=new TasksHasTags();
                    $new_tag_relation->tasks_id=$task->id;
                    $new_tag_relation->tags_id=$tag['id'];
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

    function getTaskMembers($task){
        $members=[];
        $task_members=$task['task_members'];
        for ($i=0; $i < count($task_members); $i++) { 
            $task_member=$task_members[$i];
            $user=$task_member['user'];
            $user['role']=$task_member['member']['role'];
            $user['project_members_id']=$task_member['project_members_id'];
            $user['tasks_id']=$task_member['tasks_id'];

            $members[]=$user;
        }
        return $members;
    }
}
