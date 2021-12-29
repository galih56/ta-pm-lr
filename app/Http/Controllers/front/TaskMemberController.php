<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TaskMember;
use App\Models\User;
use App\Models\ClientsHasProjects;

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
        
        for ($i=0; $i < count($inserted_members); $i++) { 
            $inserted_member=$inserted_members[$i];
            if($inserted_member['users_id']!==null && $inserted_member['project_clients_id']===null){
                $user=User::find($inserted_member['users_id'])->toArray();
                if(!empty($user)){
                    $user['task_members_id']=$inserted_member['id'];
                    $inserted_members[$i]=$user;
                }
            }
            if($inserted_member['users_id']===null && $inserted_member['project_clients_id']!==null){
                $project_client=ClientsHasProjects::with('client')->find($inserted_member['project_clients_id'])->toArray();
                if(!empty($project_client['client'])){
                    $client=$project_client['client'];
                    $client['task_members_id']=$inserted_member['id'];
                    $inserted_members[$i]=$client;
                }
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
