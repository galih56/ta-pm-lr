<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\File;
use App\Models\Task;
use App\Models\Tag;
use App\Models\TasksHasTags;
use App\Models\TaskMember;
use App\Models\ProjectMember;
use App\Models\Approval;
use App\Models\ActivityLog;
use App\Models\User;
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
        $task->cost=$request->cost;
        $task->start=$request->start;
        $task->end=$request->end;
        
        // if($request->start && $request->end){
        //     $start = Carbon::parse($request->start);
        //     $end = Carbon::parse($request->end);
        //     $days= $start->diffInDays($end);
        //     $task->days=$days;
        // }
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
            $tag_ids=[];
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
                if($member['is_client']){
                    $task_member=new TaskMember();
                    $task_member->tasks_id=$task->id;
                    $task_member->project_clients_id=$member['project_clients_id'];
                    $task_member->users_id=null;
                    $task_member->project_members_id=null;
                    $task_member->save();
                }
                if($member['is_user']){
                    $task_member=new TaskMember();
                    $task_member->tasks_id=$task->id;
                    $task_member->project_clients_id=null;
                    $task_member->users_id=$member['id'];
                    $task_member->project_members_id=$member['project_members_id'];
                    $task_member->save();
                }
            }
        } 
        $task=$this->getDetailTask($task->id);
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
        if($request->has('cost')) $task->cost=$request->cost;
        if($request->has('actual_cost')) $task->actual_cost=$request->actual_cost;
        if($request->has('start')) $task->start=$request->start;
        if($request->has('end')) $task->end=$request->end;
        if(($request->has('actual_start') 
            && !empty($request->actual_start))) $task->actual_start=$request->actual_start;
        if(($request->has('actual_end')) 
            && !empty($request->actual_end)) $task->actual_end=$request->actual_end;
        if($request->has('parent_task_id')) $task->parent_task_id=$request->parent_task_id;

        if(($request->has('actual_start') && !empty($request->actual_start))){
            $start = Carbon::parse($task->start)->format('Y-m-d');
            $actual_start = Carbon::parse($task->actual_start)->format('Y-m-d');
            if($actual_start<$start) $task->start_label='Mulai lebih cepat';
            if($actual_start>$start) $task->start_label='Mulai terlambat';
            if($actual_start==$start) $task->start_label='Mulai tepat waktu';
        }
        
        if(($request->has('actual_end')) && !empty($request->actual_end)){
            $end = Carbon::parse($task->end)->format('Y-m-d');
            $actual_end = Carbon::parse($task->actual_end)->format('Y-m-d');
            if($actual_end<$end) $task->end_label='Selesai lebih cepat';
            if($actual_end>$end) $task->end_label='Selesai terlambat';
            if($actual_end==$end) $task->end_label='Selesai tepat waktu';
        }
        /*
        if(($request->has('start') && !empty($request->start)) 
                && ($request->has('end')) && !empty($request->end)){
            $start = Carbon::parse($request->start);
            $end = Carbon::parse($request->end);
            $days= $start->diffInDays($end);
            $task->days=$days;
        }       

        if(($request->has('actual_start') && !empty($request->actual_start)) 
                && ($request->has('actual_end')) && !empty($request->actual_end)){
            $actual_start = Carbon::parse($request->actual_start);
            $actual_end = Carbon::parse($request->actual_end);
            $work_days= $actual_start->diffInDays($actual_end);
            $task->work_days=$work_days;
        }
        */
        $task->save();
        
        if($task->is_subtask){
            $parent_task=Task::with('cards')->findOrFail($task->parent_task_id);
            $valuePerSubtask=100/count($parent_task->cards);
            $completeSubtaskCounter=0;
            for ($i = 0; $i < count($parent_task->cards); $i++) {
                $subtask = $parent_task->cards[$i];
                if($subtask->complete){ $completeSubtaskCounter++; }
            }
            $progress=$completeSubtaskCounter*$valuePerSubtask;
            $parent_task->progress=$progress;
            $parent_task->save();
        }
        
        if($request->has('tags')){
            $tags=$request->tags;
            $inserted_tags=[];
            $tag_ids=array_filter($tags,function($tag){
                if(array_key_exists('id',$tag)){ 
                    return $tag; 
                }
            });

            $tag_ids=array_map(function($tag){
                return $tag['id'];
            },$tag_ids);

            $checkExistingTags=TasksHasTags::where('tasks_id',$task->id)->whereNotIn('tags_id',$tag_ids)->delete();
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
                    $inserted_tags[]=$new_tag_relation;
                }else{
                    $check=TasksHasTags::where('tasks_id',$task->id)->where('tags_id',$tag['id'])->first();
                    if(!$check){
                        $new_tag_relation=new TasksHasTags();
                        $new_tag_relation->tasks_id=$task->id;
                        $new_tag_relation->tags_id=$tag['id'];
                        $new_tag_relation->save();
                        $inserted_tags[]=$new_tag_relation;
                    }
                }
            }
        }

        $task=$this->getDetailTask($id);
        return response()->json($task);
    }

    public function destroy($id)
    {
        $task=Task::findOrFail($id);
        return response()->json($task->delete());
    }
    public function startTask(Request $request,$id){
        $task=Task::findOrFail($id);
        $task->actual_start= Carbon::now()->toDateTimeString();

        if($task->actual_start){
            $start = Carbon::parse($task->start)->format('Y-m-d');
            $actual_start = Carbon::parse($task->actual_start)->format('Y-m-d');
            if($actual_start<$start) $task->start_label='Mulai lebih cepat';
            if($actual_start>$start) $task->start_label='Mulai terlambat';
            if($actual_start==$start) $task->start_label='Mulai tepat waktu';
        }
        $task->save();
        $task=$this->getDetailTask($id);
        return response()->json($task);
    }
    public function updateComplete(Request $request,$id){
        
        $task=Task::with('cards')->findOrFail($id);
        if($request->has('complete')){ 
            if($task->is_subtask){
                $parent_task=Task::with('cards')->findOrFail($task->parent_task_id);
                $valuePerSubtask=100/count($parent_task->cards);
                $completeSubtaskCounter=0;
                for ($i = 0; $i < count($parent_task->cards); $i++) {
                    $subtask = $parent_task->cards[$i];
                    if($subtask->complete){ $completeSubtaskCounter++; }
                }
                $progress=$completeSubtaskCounter*$valuePerSubtask;
                $parent_task->progress=$progress;
                $parent_task->save();
            }
            if($request->complete===true){
                $current_date_time = Carbon::now()->toDateTimeString();
                $task->actual_end=$current_date_time;
            }else{
                $task->actual_end=null;
                $task->end_label='Belum Selesai';
            }
            $task->complete=$request->complete;
        }

        if(($task->actual_start && $task->actual_start!='Invalid date' && !empty($task->actual_start))){
            $start = Carbon::parse($task->start)->format('Y-m-d');
            $actual_start = Carbon::parse($task->actual_start)->format('Y-m-d');
            if($actual_start<$start) $task->start_label='Mulai lebih cepat';
            if($actual_start>$start) $task->start_label='Mulai terlambat';
            if($actual_start==$start) $task->start_label='Mulai tepat waktu';
        }
        
        if(($task->actual_end && $task->actual_end!='Invalid date') && !empty($task->actual_end)){
            $end = Carbon::parse($task->end)->format('Y-m-d');
            $actual_end = Carbon::parse($task->actual_end)->format('Y-m-d');
            if($actual_end<$end) $task->end_label='Selesai lebih cepat';
            if($actual_end>$end) $task->end_label='Selesai terlambat';
            if($actual_end==$end) $task->end_label='Selesai tepat waktu';
        }
        
        if(($task->actual_start && $task->actual_start!='Invalid date' && !empty($task->actual_start)) 
                && ($task->actual_end && $task->actual_end!='Invalid date') && !empty($task->actual_end)){
            $actual_start = Carbon::parse($task->actual_start);
            $actual_end = Carbon::parse($task->actual_end);
            $days= $actual_start->diffInDays($actual_end);
            $work_days= $actual_start->diffInDays($actual_end);
            $task->work_days=$work_days;
        }

        $task->save();
        $task=$this->getDetailTask($task->id);
        return response()->json($task);
    }

    function getDetailTask($id){
        $task=Task::findOrFail($id);
        
        $task=Task::with('creator')->with('cards')->with('logs')->with('comments.creator')
                    ->with('list')->with('members.user.occupation')
                    ->with('members.project_client.client')
                    ->with('tags')
                    ->with(['parentTask'=>function($q){
                        return $q->select('id','start','end','old_deadline','actual_start','actual_end','created_at','updated_at');
                    }])->findOrFail($id)->toArray();

        $task['attachments']=$this->getAttachments($id);
        $task['members']=$this->getTaskMembers($task);
        unset($task['task_members']);
        return collect($task);
    }
    
    public function addTag(Request $request,$id){
        $task=Task::with('tags')->findOrFail($id);
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
        
        $task=Task::with('tags')->findOrFail($id)->toArray();
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

        $task=Task::with('tags')->findOrFail($id)->toArray();
        return response()->json($taks,200);
    }
    function getAttachments($tasks_id){
        $attachments=File::selectRaw('ta.id, f.id AS files_id, ta.tasks_id, f.name, 
                                    f.type, f.size, f.icon, f.path, f.source, f.base64, f.users_id')
                            ->from('task_attachments as ta')
                            ->join('files AS f','f.id','=','ta.files_id')
                            ->where('ta.tasks_id','=',$tasks_id)->with('user')->get()->toArray();
        return $attachments;
    }
    public function getMembers($id){
        $task=Task::with('members.user.occupation')
                    ->with('members.project_client.client')->findOrFail($id)->toArray();
        $members=$this->getTaskMembers($task);
        return response()->json($members);
    }
    function getTaskMembers($task){
        $members=[];
        $task_members=$task['members'];
        for ($i=0; $i < count($task_members); $i++) { 
            $task_member=$task_members[$i];
            if($task_member['user']){
                $user=$task_member['user'];
                $user['project_members_id']=$task_member['project_members_id'];
                $user['tasks_id']=$task_member['tasks_id'];
                $user['task_members_id']=$task_member['id'];
                $user['is_user']=true;
                $user['is_client']=false;
                $members[]=$user;
            }
            if($task_member['project_client']){
                $client=[];
                $client=$task_member['project_client']['client'];
                $client['project_clients_id']=$task_member['project_client']['id'];
                $client['clients_id']=$task_member['project_client']['client']['id'];
                $client['tasks_id']=$task_member['tasks_id'];
                $client['task_members_id']=$task_member['id'];
                $client['is_client']=true;
                $client['is_user']=false;
                $members[]=$client;
            }

        }
        return $members;
    }
    
    public function extendDeadline(Request $request,$id){
        $request->validate([
            'users_id'=>'required',
            'new_deadline'=>'required'
        ]);
        $user=User::findOrFail($request->users_id);
        $task=Task::with('list.project')->with('parentTask')->findOrFail($id);
        
        $new_approval=new Approval();
        $new_approval->tasks_id=$task->id;
        if($task->is_subtask){
            $new_approval->parent_task_id=$task->parentTask->id;
            $new_approval->lists_id=$task->parentTask->list->id;
            $new_approval->projects_id=$task->parentTask->list->project->id;
        }else{
            $new_approval->lists_id=$task->list->id;
            $new_approval->projects_id=$task->list->project->id;
        }
        $new_approval->users_id=$request->users_id;
        $new_approval->new_deadline=$request->new_deadline;
        $new_approval->old_deadline=$task->end;
        $new_approval->description=$request->description;
        $new_approval->status="Waiting for confirmation";
        $new_approval->title="Task deadline extension request from ".$user->name ;
        $new_approval->save();

        $task=$this->getDetailTask($task->id);
        return response()->json($task);
    } 
}
