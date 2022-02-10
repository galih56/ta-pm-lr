<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\TaskMember;
use App\Models\User;
use App\Models\ClientsHasProjects;

class TaskMemberController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:sanctum',['only'=>['index','update','show','store','destroy']]); 
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
        $users=$request->users;
        for ($i=0; $i < count($users); $i++) { 
            $user=$users[$i];
            $task_member=new TaskMember();
            $task_member->tasks_id=$request->tasks_id;
            if($user['is_client']){
                $task_member->project_clients_id=$user['project_clients_id'];
                $task_member->users_id=null;
                $task_member->project_members_id=null;
            }
            if($user['is_user']){
                $task_member->project_clients_id=null;
                $task_member->users_id=$user['id'];
                $task_member->project_members_id=$user['project_members_id'];
            }
            $task_member->save();
            $inserted_members[]=$task_member->toArray();
        }
                
        $task=Task::with('creator')->with('list')->with('members.user.role')
                    ->with('members.project_client.client')->findOrFail($request->tasks_id);

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
                if($task_member['project_client']['client']){
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

        }
    
        return response()->json($members);
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
        if($request->has('project_clients_id')) $task_member->project_clients_id=$request->project_clients_id;
        $task_member->save();
        return response()->json($task_member);
    }

    public function destroy($id)
    {
        $task_member=TaskMember::findOrFail($id);
        return response($task_member->delete(),200);
    }
}
