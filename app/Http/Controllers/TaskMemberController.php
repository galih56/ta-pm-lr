<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TaskMember;

class TaskMemberController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:sanctum',['only'=>['index','show','update','store','destroy']]); 
    }

    public function index()
    {
        $task_members=TaskMember::all();
        return response()->json();
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    {
        $inserted_members=[];
        for ($i=0; $i < count($request->users); $i++) { 
            $task_member=new TaskMember();
            $task_member->tasks_id=$request->tasks_id;
            $task_member->users_id=$request->users_id;
            $task_member->project_members_id=$request->project_members_id;
            $task_member->save();
            $inserted_members[]=$task_member;
        }

        for ($i=0; $i < count($inserted_members); $i++) { 
            $user=User::find('id',$inserted_members[$i]->users_id)->toArray();
            if($user){
                $user['task_members_id']=$inserted_members[$i]->id;
                $inserted_members[$i]=$user;
            }
        }
        return response()->json($inserted_members);
    }

    public function show($id)
    {
        $task_member=TaskMember::findOrFail($id)->toArray();
        $user=User::findOrFail($task_member->users_id)->toArray();
        $user['task_members_id']=$task_member->id;
        $user['tasks_id']=$task_member->tasks_id;
        $result=$user;
        return response()->json($result);
    }

    public function edit($id)
    {
        return redirect(url("task-member/$id"));
    }

    public function update(Request $request, $id)
    {
        $task_member=TaskMember::findOrFail($id);
        if($request->has('tasks_id')) $task_member->tasks_id=$request->tasks_id;
        if($request->has('project_members_id')) $task_member->project_members_id=$request->project_members_id;
        $task_member->save();
        return response()->json($task_member);
    }

    public function destroy($id)
    {
        $task_member=TaskMember::findOrFail($id);
        return response()->json($task_member->delete());
    }
}
