<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\TaskList;
use App\Models\Project;
use App\Models\Approval;

class ApprovalController extends Controller
{
    public function __construct(Request $request)
    {        
        $this->middleware('auth:sanctum',['only'=>['update','store','destroy']]); 
    }

    public function index(Request $request)
    {
        $approval=Approval::select('*');
        if($request->has('projects_id')){
            $approval=$approval->where('projects_id','=',$request->projects_id);
        }
        if($request->has('lists_id')){
            $approval=$approval->where('lists_id','=',$request->lists_id);
        }
        if($request->has('tasks_id')){
            $approval=$approval->where('tasks_id','=',$request->tasks_id);
        }
        $approval=$approval->with(['user'=>function($q){
                        return $q->select('id','name','email');
                    }])->with(['task'=>function($q){
                        return $q->select('id','title','start','end','old_deadline','actual_start','actual_end');
                    }])->with(['list'=>function($q){
                        return $q->select('id','title');
                    }])->with(['project'=>function($q){
                        return $q->select('id','title');
                    }])->get();
        return response()->json($approval);
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    {
        $approval=new Approval();
        $approval->title=$request->title;
        $approval->description=$request->description;
        if($request->has('tasks_id')) $approval->tasks_id=$request->tasks_id;
        if($request->has('users_id'))  $approval->users_id=$request->users_id;
        if($request->has('lists_id'))  $approval->lists_id=$request->lists_id;
        if($request->has('projects_id')) $approval->projects_id=$request->projects_id;
        $approval->status=$request->status;
        $approval->save();
        return response()->json($approval,200);
    }

    public function show($id)
    {
        $approval=$this->getDetailApproval($id);
        return response()->json($approval);
    }

    public function edit($id)
    {
        abort(404);
    }

    public function update(Request $request, $id)
    {
        $approval=Approval::findOrFail($id);
        if($request->has('title')) $approval->title=$request->title;
        if($request->has('description')) $approval->description=$request->description;
        if($request->has('tasks_id')) $approval->tasks_id=$request->tasks_id;
        if($request->has('lists_id')) $approval->lists_id=$request->lists_id;
        if($request->has('projects_id')) $approval->projects_id=$request->projects_id;
        if($request->has('status')){ 
            if($request->status=="accepted"){
                if($approval->projects_id && !$approval->tasks_id && !$approval->lists_id){
                    $project=Project::findOrFail($approval->projects_id);
                    $project->end=$approval->new_deadline;
                    $project->old_deadline=$project->end;
                    $project->extended=true;
                    $project->save();
                }
                if($approval->projects_id && $approval->tasks_id && ($approval->lists_id || $approval->parent_task_id)){
                    $task=Task::findOrFail($approval->tasks_id);
                    $task->end=$approval->new_deadline;
                    $task->old_deadline=$task->end;
                    $task->extended=true;
                    $task->save();
                }
                if($approval->projects_id && !$approval->tasks_id && ($approval->lists_id && !$approval->parent_task_id)){
                    $list=TaskList::findOrFail($approval->lists_id);
                    $list->end=$approval->new_deadline;
                    $list->old_deadline=$list->end;
                    $list->extended=true;
                    $list->save();
                }
            }
            $approval->status=$request->status;
        }
        
        $approval->save();
        $approval=$this->getDetailApproval($id);
        return response()->json($approval);
    }

    public function destroy($id)
    {
        $approval=Approval::findOrFail($id);
        return response()->json($approval->delete(),200);
    }

    function getDetailApproval($id){ 
        $approval=Approval::with(['user'=>function($q){
            return $q->select('id','name','email','occupations_id')->with('occupation');
        }])->with(['task'=>function($q){
            return $q->select('id','title','start','end','old_deadline','actual_start','actual_end');
        }])->with(['list'=>function($q){
            return $q->select('id','title');
        }])->with(['project'=>function($q){
            return $q->select('id','title');
        }])->findOrFail($id);
        return $approval;
    }
}
