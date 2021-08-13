<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\User;
use App\Models\ProjectMember;
use App\Models\TeamsHasProjects;
use App\Models\File;
use App\Models\Team;
use App\Models\Task;
use App\Models\Meeting;
use App\Models\TaskAttachment;
use App\Models\Approval;
use App\Models\Client;
use App\Models\ClientsHasProjects;
use App\Models\GithubRepository;
use DB;

class ProjectController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:sanctum',['only'=>['update','store','destroy']]); 
    }

    public function index()
    {
        $projects=Project::with('columns.cards.cards')->get();
        return response()->json($projects);
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    {
        $project=new Project();
        $project->title=$request->title;
        $project->description=$request->description;
        $project->start=$request->start;
        $project->end=$request->end;
        $project->cost=$request->cost;
        $project->save();

        $inserted_members=[];
        $project_owners=$request->project_owner;
        if($project_owners){
            
            for ($i=0; $i < count($project_owners); $i++) { 
                $po=$project_owners[$i];
                $new_po=new ProjectMember();
                $new_po->projects_id=$project->id;
                if(gettype($po)=='object') $new_po->users_id=$po->id;
                if(gettype($po)=='string' || gettype($po)=='integer' ) $new_po->users_id=$po;
                $new_po->roles_id=1;
                $new_po->save();
                
                $inserted_members[]=$new_po->id;
            }
        }

        $project_managers=$request->project_manager;
        if($project_managers){
            
            for ($i=0; $i < count($project_managers); $i++) { 
                $pm=$project_managers[$i];
                $new_pm=new ProjectMember();
                $new_pm->projects_id=$project->id;
                if(gettype($pm)=='object') $new_pm->users_id=$pm->id;
                if(gettype($pm)=='string' || gettype($pm)=='integer' ) $new_pm->users_id=$pm;
                $new_pm->roles_id=2;
                $new_pm->save();
                
                $inserted_members[]=$new_pm->id;
            }
        }        
        $project=$project->toArray();
        $project['columns']=[]; //prevent error on front-end
        
        return response()->json($project);
    }

    public function show($id)
    {
        $project=Project::with(['columns.cards'=>function($q1){
                            return $q1->orderBy('start','ASC')
                                    ->with(['cards'=>function($q2){
                                        return $q2->orderBy('start','ASC')
                                                    ->with('members.user.occupation')
                                                    ->with('members.project_client.client')
                                                    ->with('members.member.role');
                                    }])
                                    ->with('members.user')
                                    ->with('members.member.role')
                                    ->with('members.project_client.client');
                        }])
                        ->with('members.role')->with('members.user.occupation')
                        ->with('meetings')
                        ->findOrFail($id)->toArray();

        $members=$project['members'];
        $project_members=[];
        for ($i=0; $i < count($members); $i++) { 
            $member=$members[$i];
            $project_members_id=$member['id'];
            $role=$member['role'];
            $user=$member['user'];
            $projects_id=$member['projects_id'];
            $member=$user;
            $member['role']=$role;
            $member['is_user']=true;
            $member['is_client']=false;
            $member['project_members_id']=$project_members_id;
            $project_members[]=$member;
        }
        $project['members']=$project_members;

        $clients=Client::select('c.*','cp.id as project_clients_id')->from('clients as c')
                        ->join('clients_has_projects AS cp','c.id','=','cp.clients_id')
                        ->where('cp.projects_id','=',$id)
                        ->get()->toArray();

        $project_clients=[];
        for ($i=0; $i < count($clients); $i++) { 
            $client=$clients[$i];
            $client['is_user']=false;
            $client['is_client']=true;
            $project_clients[]=$client;
        }
        $project['clients']=$project_clients;
        return response()->json($project);
    }

    public function edit($id)
    {
        abort(404);
    }

    public function update(Request $request, $id)
    {
        $project=Project::findOrFail($id);
        if($request->has('title')) $project->title=$request->title;
        if($request->has('complete')) $project->complete=$request->complete;
        if($request->has('description')) $project->description=$request->description;
        if($request->has('actual_start')) $project->actual_start=$request->actual_start;
        if($request->has('actual_end')) $project->actual_end=$request->actual_end;
        if($request->has('start')) $project->start=$request->start;
        if($request->has('end')) $project->end=$request->end;
        $project->save();
        return response()->json($project);
    }

    public function destroy($id)
    {
        $project=Project::findOrFail($id);
        return response()->json($project->delete());
    }

    public function getFiles(Request $request,$id){
        $files=TaskAttachment::selectRaw('f.id, f.name AS file_name, f.type, f.path, f.size, 
                                f.users_id, f.updated_at, f.created_at, 
                                f.source, f.icon, t.id as tasks_id, t.title AS task_title, 
                                t.actual_start,t.actual_end, t.start,t.end')
                                ->from('task_attachments AS ta')
                                ->join('files AS f','f.id','=','ta.files_id')
                                ->join('tasks AS t','ta.tasks_id','=','t.id')
                                ->where(function($qw)use($id){
                                    $qw->whereIn('ta.tasks_id',function($query) use($id){
                                        return $query->select('t1.id')
                                                    ->from('tasks AS t1')
                                                    ->join('lists AS l1', 't1.lists_id','=','l1.id')
                                                    ->where('l1.projects_id','=',$id);
                                    })->orWhereIn('ta.tasks_id',function($query)use($id){
                                        return $query->select('t2.id')
                                                    ->from('tasks AS t1')
                                                    ->join('tasks AS t2','t2.parent_task_id','=','t1.id')
                                                    ->join('lists AS l2', 't1.lists_id','=','l2.id')
                                                    ->where('l2.projects_id','=',$id);
                                    });
                                })->with('user')->get();
                                
        return response()->json($files);
    }

    public function getClients($id){
        $clients=Client::select('c.*','cp.id as project_clients_id')->from('clients as c')
                        ->join('clients_has_projects AS cp','c.id','=','cp.clients_id')
                        ->where('cp.projects_id','=',$id)
                        ->get()->toArray();
        $project_clients=[];
        for ($i=0; $i < count($clients); $i++) { 
            $client=$clients[$i];
            $client['is_user']=false;
            $client['is_client']=true;
            $project_clients[]=$client;
        }
        return response()->json($project_clients);
    }

    public function getTeams($id){
        $teams=Team::from('teams AS t')
                        ->join('teams_has_projects AS tp','t.id','=','tp.teams_id')
                        ->where('tp.projects_id','=',$id)->with('members.user')
                        ->get()->toArray();
        $new_teams=[];
        for ($i=0; $i < count($teams); $i++) { 
            $team=$teams[$i];
            $members=[];
            for ($j=0; $j < count($team['members']); $j++) { 
                $member=$team['members'][$j];
                $user=$member['user'];
                $user['teams_id']=$team['id'];
                $user['team_members_id']=$member['id'];
                $member=$user;
                $members[]=$member;
            }
            $team['members']=$members;
            $new_teams[]=$team;
        }
        $teams=$new_teams;
        return response()->json($teams);
    }

    public function getMembers($id){
        $project_members=ProjectMember::where('projects_id','=',$id)->with('role')->with('user')->get()->toArray();
        
        $members=[];
        for ($i=0; $i < count($project_members); $i++) { 
            $member=$project_members[$i];
            $user=$member['user'];
            $user['project_members_id']=$member['id'];
            $user['role']=$member['role'];
            $members[]=$user;
        }
        return response()->json($members);
    }

    public function addClients(Request $request,$id){
        $project=Project::findOrFail($id);

        $new_clients=$request->clients;
        $inserted_clients=[];
        
        foreach ($new_clients as $key => $new_client) {
            $client_has_project=new  ClientsHasProjects();
            $client_has_project->projects_id=$id;
            if(gettype($new_client)=='object') $client_has_project->clients_id=$new_client->id;
            else if(gettype($new_client)=='array'){ 
                $client_has_project->clients_id=$new_client['id'];
            }
            $client_has_project->save();
            $inserted_clients[]=$client_has_project;
        }

        $clients=Client::from('clients AS c')
                        ->join('clients_has_projects AS cp','c.id','=','cp.clients_id');
        
        foreach ($inserted_clients as $i => $client) {
            $clients=$clients->where(function($query) use($client){
                return $query->where('cp.projects_id','=',$client->projects_id)
                                ->where('cp.clients_id','=',$client->clients_id);
            });
        }
        $clients=$clients->get();
        
        return response()->json($clients);
    }

    public function removeClients(Request $request,$id,$clients_id){
        $project=Project::findOrFail($id);
        $clients_has_projects=ClientsHasProjects::where('projects_id','=',$id)->where('clients_id','=',$clients_id)->get();
        for ($i=0; $i < count($clients_has_projects); $i++) { 
            $cp=$clients_has_projects[$i];
            foreach ($cp->task_member as $i => $member) {
                $member->delete();
            }
            $cp->delete();
        }
        return response()->json("",200);
    }

    public function addTeam(Request $request,$id){
        $project=Project::findOrFail($id);

        $new_teams=$request->teams;
        $inserted_teams=[];
        for ($i=0; $i < $new_teams; $i++) { 
            $new_team=$new_teams[$i];
            $team_has_project=new  TeamsHasProjects();
            $team_has_project->projects_id=$id;
            if(gettype($new_team)=='object') $team_has_project->teams_id=$new_team->id;
            else $team_has_project->teams_id=$new_team;
            $team_has_project->save();

            $inserted_teams[]=$team_has_project->id;
        }

        $teams=Team::from('teams AS t')
                        ->join('teams_has_projects AS tp','t.id','=','tp.teams_id')
                        ->whereIn('tp.projects_id','=',$inserted_teams)
                        ->get();
        
        return response()->json($teams);
    }

    public function removeTeams(Request $request,$id,$teams_id){
        $project=Project::findOrFail($id);
        $teams_has_projects=TeamsHasProjects::where('projects_id','=',$id)->where('teams_id','=',$teams_id)->get();
        
        return response()->json($teams_has_projects,200);
    }

    public function getMeetings(Request $request,$id){
        $meetings=Meeting::select('m.*')
                            ->from('meetings AS m')
                            ->join('users AS u','m.users_id','=','u.id')
                            ->join(DB::raw('(
                                    SELECT meetings_id,count(*) AS counts
                                    FROM meeting_members AS tm 
                                    GROUP BY meetings_id
                                ) AS counter '),'m.id','=','counter.meetings_id')
                            ->where('counter.counts','>=',1)->orWhere('m.projects_id',$id)
                            ->with('creator')
                            ->get();
        return response()->json($meetings);
    }
    
    // ->orWhereIn('t.parent_task_id',function($query) use($id){
    //     return $query->select('t1.id')
    //                 ->from('tasks AS t1')
    //                 ->leftJoin('lists AS l1','t1.lists_id','=','l1.id')
    //                 ->where('l1.projects_id','=',$id);
    //})

    public function getReports($id){
        $tasks=Task::selectRaw('t.*,t.parent_task_id AS parentTask,l.projects_id')
                        ->from('tasks AS t')
                        ->leftJoin('lists AS l','t.lists_id','=','l.id')
                        ->where('l.projects_id','=',$id)
                        ->orderBy('t.start','ASC')->get($id);

        $mulai_cepat=[];
        $selesai_cepat=[];
        $mulai_tepat_waktu=[];
        $selesai_tepat_waktu=[];
        $selesai_cepat=[];
        $mulai_telat=[];
        $selesai_telat=[];
        $belum_dilaksanakan=[];
        $belum_selesai=[];
        $complete_tasks=[];
        $incomplete_tasks=[];

        for ($i=0; $i < count($tasks); $i++) { 
            $task=$tasks[$i];
            if($task['complete']) $complete_tasks[]=$task;
            else $incomplete_tasks[]=$task;

            switch (strtolower($task['start_label']))  {
                case 'mulai lebih cepat':
                    $mulai_cepat[]=$task;
                    break;
                case 'mulai tepat waktu':
                    $mulai_tepat_waktu[]=$task;
                    break;
                case 'mulai terlambat':
                    $mulai_telat[]=$task;
                    break;
                case 'belum dilaksanakan' || 'belum dilakukan':
                    $belum_dilaksanakan[]=$task;
                    break;
                default:
                    $belum_dilaksanakan[]=$task;
                    break;
            }
            
            switch (strtolower($task['end_label']))  {
                case 'selesai lebih cepat':
                    $selesai_cepat[]=$task;
                    break;
                case 'selesai tepat waktu':
                    $selesai_tepat_waktu[]=$task;
                    break;
                case 'selesai terlambat':
                    $selesai_telat[]=$task;
                    break;
                case 'belum dilaksanakan' || 'belum dilakukan':
                    $belum_selesai[]=$task;
                    break;
                default:
                    $belum_selesai[]=$task;
                    break;
            }
        }
        $grouped_tasks_counter=[
            'all_tasks'=> $tasks,
            'mulai_cepat'=> count($mulai_cepat),
            'selesai_cepat'=> count($selesai_cepat),
            'mulai_tepat_waktu'=> count($mulai_tepat_waktu),
            'selesai_tepat_waktu'=> count($selesai_tepat_waktu),
            'mulai_telat'=> count($mulai_telat),
            'selesai_telat'=> count($selesai_telat),
            'belum_dilaksanakan'=> count($belum_dilaksanakan),
            'belum_selesai'=> count($belum_selesai),
            'complete'=> count($complete_tasks),
            'incomplete'=> count($incomplete_tasks),
            'total'=> count($tasks)
        ];
        return response()->json($grouped_tasks_counter);
    }

    public function getoverallProjectReports(Request $request){
        $projects=Project::get()->toArray();
        $new_projects=[];
        for ($i=0; $i < count($projects); $i++) { 
            $project=$projects[$i];
            $tasks=Task::selectRaw('t1.*,t1.parent_task_id AS parentTask,l1.projects_id')
                ->from('tasks AS t1')
                ->join('lists AS l1','t1.lists_id','=','l1.id')
                ->where('l1.projects_id','=',$project['id'])
                ->orWhereIn('t1.parent_task_id',function($query) use($project){
                    return $query->select('t2.id')
                                    ->from('tasks AS t2')
                                    ->leftJoin('lists AS l2','t2.lists_id','l2.id')
                                    ->where('l2.projects_id','=',$project['id'])->get();
                })->get();
            $project['tasks']=$tasks;
            $complete_task_counter=0;
            $incomplete_task_counter=0;
            for ($j=0; $j < count($tasks); $j++) { 
                $task=$tasks[$j];
                if($task->complete) $complete_task_counter++;
                else $incomplete_task_counter++;
            }
            $project['total_complete_tasks']=$complete_task_counter;
            $project['total_incomplete_tasks']=$incomplete_task_counter;
            $new_projects[]=$project;
        }
        $projects=$new_projects;
        return response()->json($projects);
    }

    public function getGithubRepos(Request $request,$id){
        $repos=GithubRepository::where('projects_id','=',$id)->get();
        return response()->json($repos);
    }

    public function getGanttDataSource($id){
        
        $project=Project::with(['columns.cards'=>function($q1){
            return $q1->orderBy('start','ASC')
                    ->with(['cards'=>function($q2){
                        return $q2->orderBy('start','ASC');
                    }]);
        }])
        ->findOrFail($id)->toArray();

        $data=[];
        $realization_data=[];
        for ($i=0; $i < count($project['columns']); $i++) { 
            $column=$project['columns'][$i];
            $new_column=$column;
            for ($j=0; $j < count($column['cards']); $j++) { 
                $column['cards'][$j]['realization']=false;
                $task=$column['cards'][$j];
                $task_realization=$task;
                $task_realization['start']=$task['actual_start'];
                $task_realization['end']=$task['actual_end'];
                $task_realization['realization']=true;
                unset($task_realization['actual_start']);
                unset($task_realization['actual_end']);
                for ($k=0; $k < count($task['cards']); $k++) { 
                    $task['cards'][$k]['realization']=false;
                    $subtask=$task['cards'][$k];
                    $subtask_realization=$subtask;
                    $subtask_realization['start']=$subtask['actual_start'];
                    $subtask_realization['end']=$subtask['actual_end'];
                    $subtask_realization['realization']=true;
                    unset($subtask_realization['actual_start']);
                    unset($subtask_realization['actual_end']);
                    $task_realization['cards'][]=$subtask_realization;
                }
                $new_column['cards'][]=$task;
                $new_column['cards'][]=$task_realization;
            }
            $data[]=$new_column;
        }
        return response()->json($data);
    }
    
    public function extendDeadline(Request $request,$id){
        $request->validate([
            'users_id'=>'required',
            'new_deadline'=>'required'
        ]);
        $user=User::findOrFail($request->users_id);
        $project=Project::findOrFail($id);
        
        $new_approval=new Approval();
        $new_approval->projects_id=$project->id;
        $new_approval->users_id=$request->users_id;
        $new_approval->new_deadline=$request->new_deadline;
        $new_approval->description=$request->description;
        $new_approval->status="Waiting for confirmation";
        $new_approval->title="Project deadline extension request from ".$user->name ;
        $new_approval->save();
        return response()->json($project);
    } 
}
