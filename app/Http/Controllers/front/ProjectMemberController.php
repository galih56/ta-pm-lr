<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProjectMember;
use App\Models\TaskMember;

class ProjectMemberController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:sanctum',['only'=>['index','show','update','store','destroy']]); 
    }

    public function index()
    {
        $members=ProjectMember::with('project')->with('user')->get();
        return response()->json($members);
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    {
        $new_members=$request->members;
        $inserted_members=[];
        if($new_members){
            for ($i=0; $i < count($new_members); $i++) { 
                $new_member=$new_members[$i];
                $project_member=new ProjectMember();
                $project_member->users_id=$new_member['id'];
                $project_member->projects_id=$request->projects_id;
                $project_member->roles_id=$request->roles_id;
                $project_member->save();

                $inserted_members[]=$project_member->id;
            }
            $members=ProjectMember::whereIn('id',$inserted_members)
                                    ->with('project')->with('user.role')
                                    ->get()->toArray();
            $inserted_members=[];
            for ($i=0; $i < count($members); $i++) { 
                $member=$members[$i];
                $user=$member['user'];
                $user['projects_id']=$member['project']['id'];
                $user['project_members_id']=$member['id'];
                $inserted_members[]=$user;
            }
            return response()->json($inserted_members);
        }
    }

    public function show($id)
    {
        $member=$this->getDetailProjectMember($id);
        return response()->json($member);
    }

    public function edit($id)
    {
        abort(404);
    }

    public function update(Request $request, $id)
    {
        $project_member=ProjectMember::findOrFail($id);
        if($request->has('roles_id')) $project_member->roles_id=$request->roles_id;
        if($request->has('role')) $project_member->roles_id=$request->role['id'];
        $project_member->save();
        
        $project_member=$this->getDetailProjectMember($id);
        return response()->json($project_member);
    }

    public function destroy($id)
    {
        $project_member=ProjectMember::findOrFail($id);
        return response()->json($project_member->delete());
    }

    public function getTasks($id){
        $task_members=TaskMember::where('project_members_id','=',$id)
                                ->with('task.creator',function($q){
                                    return $q->select('id','name','email')->with('role',function($q2){
                                        return $q2->select('id','name');
                                    });
                                })->get();
        $tasks=[];
        for ($i=0; $i < count($task_members); $i++) { 
            $task=$task_members[$i]->task;
            if($task) $tasks[]=$task;
            else $task_members[$i]->delete();
        }
        return response()->json($tasks);
    }

    function getDetailProjectMember($id){
        $member=ProjectMember::with('project')->with('role')->with('user')->with('taskMembers.task')
                                ->findOrFail($id)->toArray();
                                
        $task_members=$member['task_members'];
        $tasks=[];
        for ($i=0; $i < count($task_members); $i++) { 
            $task=$task_members[$i]['task'];
            if($task) $tasks[]=$task;
        }
        $user=$member['user'];
        $user['tasks']=$tasks;
        $user['project_members_id']=$member['id'];
        $user['projects_id']=$member['project']['id'];
        $user['role']=$member['role'];
        return $user;

    }
}
