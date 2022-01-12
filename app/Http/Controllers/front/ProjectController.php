<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\User;
use App\Models\ProjectMember;
use App\Models\TeamMember;
use App\Models\TeamsHasProjects;
use App\Models\File;
use App\Models\Team;
use App\Models\Task;
use App\Models\TaskList;
use App\Models\Meeting;
use App\Models\TaskAttachment;
use App\Models\Approval;
use App\Models\Client;
use App\Models\ClientsHasProjects;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\ProjectExport;
use App\Imports\ProjectImport;
use Carbon\Carbon;
use DB;
use Illuminate\Support\Facades\Log;

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
        if($request->hasFile('file')){
            $project=$this->import($request);
            if($project['error']==true){   
                return response()->json($project);
            }else{
                $project=$project->toArray();
                $project['columns']=[];    
                return response()->json($project);
            }
        }else{
            $project=new Project();
            $project->title=$request->title;
            $project->description=$request->description;
            $project->start=$request->start;
            $project->end=$request->end;
            $project->save();
            
            if($request->has('teams')){
                $project->teams()->sync($request->teams);
            }

            if($request->has('members')){
                $project->users()->sync($request->members);
            }

            
            if($request->has('clients')){
                $project->clients()->sync($request->clients);
            }
            
            $project=$project->toArray();
            $project['columns']=[];    
            return response()->json($project);
        }
        
    }
    function getDetailProject($id,$request){
        $project=Project::with(['columns'=>function($q) use($request){
            return $q->orderBy('title','ASC')
                ->with(['cards'=>function($q1) use($request){
                    $q1=$q1->orderBy('title','ASC');
                    if($request->has('users_id')){
                        $users_id=$request->users_id;
                        $q1=$q1->orWhereHas('members',function($members_q) use($users_id){
                            return $members_q->where('users_id',$users_id);
                        });
                    }
                    $q1=$q1->with(['cards'=>function($q2) use($request){
                            $q2=$q2->orderBy('title','ASC');
                                if($request->has('users_id')){
                                    $users_id=$request->users_id;
                                    $q2=$q2->whereHas('members',function($members_q) use($users_id){
                                        return $members_q->where('users_id',$users_id);
                                    });
                                }
                            $q2=$q2->with('members.user.role')
                                ->with('members.project_client.client')
                                ->with('tags');
                            return $q2;
                        }])
                    ->with('members.user.role')
                    ->with('members.project_client.client')
                    ->with('tags');
                    return $q1;
                }]);
        }])
        ->with('members.user.role')
        ->with('meetings')
        ->findOrFail($id);
        return $project;
    }
    public function show(Request $request,$id)
    {
        $project=$this->getDetailProject($id,$request)->toArray();

        $members=$project['members'];
        $project_members=[];
        for ($i=0; $i < count($members); $i++) { 
            $member=$members[$i];
            $project_members_id=$member['id'];
            $user=$member['user'];
            $projects_id=$member['projects_id'];
            $member=$user;
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
                        ->where('tp.projects_id','=',$id)
                        ->with('members.user')
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
        $project_members=ProjectMember::where('projects_id','=',$id)->with('user.role')->get()->toArray();

        $members=[];
        for ($i=0; $i < count($project_members); $i++) { 
            $member=$project_members[$i];
            $user=$member['user'];
            $user['project_members_id']=$member['id'];
            if(array_key_exists('role',$member['user'])) $user['role']=$member['user']['role'];
            else $user['role']=['id'=>'','name'=>"-"]; 
            unset($user['role']);
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
            if(gettype($new_client)=='array') $client_has_project->clients_id=$new_client['id'];
            if(gettype($new_client)=='integer'||gettype($new_client)=='string') $client_has_project->clients_id=$new_client;
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

    public function addTeams(Request $request,$id){
        $project=Project::findOrFail($id);

        $new_teams=$request->teams;
        $inserted_teams=[];
        for ($i=0; $i < count($new_teams); $i++) { 
            $new_team=$new_teams[$i];
            $team_has_project=new  TeamsHasProjects();
            $team_has_project->projects_id=$id;
            if(gettype($new_team)=='object') $team_has_project->teams_id=$new_team->id;
            elseif(gettype($new_team)=='array') $team_has_project->teams_id=$new_team['id'];
            else $team_has_project->teams_id=$new_team;
            $team_has_project->save();

            $inserted_teams[]=$team_has_project->id;
        }

        $teams=Team::from('teams AS t')
                    ->join('teams_has_projects AS tp','t.id','=','tp.teams_id')
                    ->whereIn('tp.id',$inserted_teams)
                    ->with('members.user')->with('members.role')
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
        return response()->json($teams);
    }

    public function removeTeams(Request $request,$id,$teams_id){
        $project=Project::findOrFail($id);
        $team_members=TeamMember::where('teams_id','=',$teams_id)->pluck('users_id')->toArray();
        $project_members=ProjectMember::whereIn('users_id',$team_members)->delete();
        $teams_has_projects=TeamsHasProjects::where('projects_id','=',$id)
                                                ->where('teams_id','=',$teams_id)
                                                ->delete();
        
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

    public function getReports(Request $request,$id){
        $tasks=Task::selectRaw('tasks.*,tasks.parent_task_id AS parentTask,l.projects_id')
                        ->leftJoin('lists AS l','tasks.lists_id','=','l.id')
                        ->where('l.projects_id','=',$id)
                        ->orderBy('tasks.end','ASC');

        if($request->has('users_id')){
            $users_id=$request->users_id;
            $tasks=$tasks->whereHas('members',function($members_q) use($users_id){
                return $members_q->where('users_id','=',$users_id);
            });
        }
        $tasks=$tasks->get();
        
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
        $projects=Project::select('id','title','start','end',
            'actual_start','actual_end','progress','complete','created_at','updated_at');
        if($request->has('users_id')){
            $users_id=$request->users_id;
            $projects=$projects->whereHas('members',function($members_q) use($users_id){
                return $members_q->where('users_id','=',$users_id);
            });
        }
        $projects=$projects->get()->toArray();
        $new_projects=[];
        for ($i=0; $i < count($projects); $i++) { 
            $project=$projects[$i];
            $tasks=Task::selectRaw('tasks.id,tasks.title,tasks.progress,tasks.complete,
                tasks.lists_id,tasks.start,tasks.end,tasks.actual_start,tasks.actual_end,tasks.is_subtask,
                tasks.cost,tasks.actual_cost,tasks.start_label,tasks.end_label,tasks.parent_task_id,tasks.days,
                tasks.work_days,tasks.parent_task_id AS parentTask,l1.projects_id')
                ->from('tasks')
                ->join('lists AS l1','tasks.lists_id','=','l1.id')
                ->where('l1.projects_id','=',$project['id']);

            $tasks=$tasks->orWhereIn('tasks.parent_task_id',function($query) use($project){
                        return $query->select('subtasks.id')
                                ->from('tasks AS subtasks')
                                ->leftJoin('lists AS l2','subtasks.lists_id','l2.id')
                                ->where('l2.projects_id','=',$project['id'])->get();
                    });
            $tasks=$tasks->get();

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

    public function getGanttDataSource(Request $request,$id){
        
        $project=Project::with(['columns'=>function($q1) use($request){
            return $q1->orderBy('start','ASC')
                    ->with(['cards'=>function($q1) use($request){
                        $q1=$q1->orderBy('end','ASC');
                        if($request->has('users_id')){
                            $users_id=$request->users_id;
                            $q1=$q1->whereHas('members',function($members_q) use($users_id){
                                return $members_q->where('users_id',$users_id);
                            });
                        }
                    }])    
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
        $new_approval->old_deadline=$project->end;
        $new_approval->description=$request->description;
        $new_approval->status="Waiting for confirmation";
        $new_approval->title="Project deadline extension request from ".$user->name ;
        $new_approval->save();
        return response()->json($project);
    } 

    public function export($id){
        $project=Project::with(['columns'=>function($q){
            $q->orderBy('end','ASC')
            ->with(['cards'=>function($q1){
                $q1->select('id','title','lists_id',
                                'start','end','days',
                                'actual_start','actual_end','work_days',
                                'description', 'parent_task_id','is_subtask')
                    ->orderBy('end','ASC')
                    ->with(['cards'=>function($q1){
                        $q1->select('id','title','lists_id',
                                        'start','end','days',
                                        'actual_start','actual_end','work_days',
                                        'description', 'parent_task_id','is_subtask')
                            ->orderBy('end','ASC');
                    }]);
            }]);
        }])->findOrFail($id);
        
        return Excel::download(new ProjectExport($project), str_slug($project->title).'.xlsx');
    }

    public function import(Request $request,$id=null){
        // https://github.com/SpartnerNL/Laravel-Excel/issues/1226#issuecomment-306734223
        $project=null;
        try {
            $import = new ProjectImport();
            $imported_data = $import->toCollection($request->file('file')->store('temp'));
    
            $data=[];
            $earliest_date=null;
            $latest_date=null;
            $errors=['error'=>false,'messages'=>[],'data'=>null];
            if($imported_data->count()){
                $rows=$imported_data[0];
                for ($i=0; $i < $rows->count(); $i++) { 
                    $row=$rows[$i]->toArray();
                    if(empty($row['title'])) {
                        $errors['error']=true;
                        $errors['messages'][]=['row'=>$i,'title'=> 'Title column is required'];
                    }
                    if(empty($row['wbs'])) {
                        $errors['error']=true;
                        $errors['messages'][]=['row'=>$i,'title'=> 'WBS column is required'];
                    }
                    if(gettype($row['start'])=='integer' || gettype($row['end'])=='integer') {
                        $errors['error']=true;
                        $errors['messages'][]=['row'=>$i,'title'=> 'start/end column must be a valid date (yyyy-mm-dd)'];
                    }
                    // if(gettype($row['actual_start'])=='integer' || gettype($row['actual_end'])=='integer') {
                    //     $errors['error']=true;
                    //     $errors['messages'][]=['row'=>$i,'title'=> 'actual_start/actual_end column must be a valid date (yyyy-mm-dd)'];
                    // }
                    
                    $start = Carbon::parse($row['start'])->format('Y-m-d');
                    $end = Carbon::parse($row['end'])->format('Y-m-d');
                    
                    if(!empty($row['start'])){
                        $earliest_date=$start;   
                    }else if($earliest_date>$start){
                        $earliest_date=$start;   
                    }
    
                    if(!empty($row['end'])){
                        $latest_date=$end;   
                    } else if($latest_date<$end){
                        $latest_date=$end;   
                    }
                                    
                    $wbs=explode('.',$row['wbs'].'');
                    if(count($wbs) == 1){
                        //create list
                        $data[$wbs[0]]=$row;
                    }
                    
                    if(count($wbs) == 2){
                        //create task
                        $data[$wbs[0]]['tasks'][$wbs[1]]=$row;
                    }
    
                    if(count($wbs) == 3){
                        //create subtask
                        $data[$wbs[0]]['tasks'][$wbs[1]]['subtasks'][$wbs[2]]=$row;
                    }
                }

                if($errors['error']==true){
                    return $errors;
                }
                if($id){
                    $project=Project::findOrFail($id);
                }  else{
                    $project=new Project();
                    $project->title=$request->title;
                    $project->description=$request->description;
                    $project->start=$earliest_date;
                    $project->end=$latest_date;
                    $project->save();
                    
                    if($request->has('teams')){
                        $project->teams()->sync($request->teams);
                    }
                    
                    if($request->has('clients')){
                        $project->clients()->sync($request->clients);
                    }
                }  
    
                foreach ($data as $i => $list) {
                    $list['projects_id']=$project->id;
                    $tasks=[];
                    if(array_key_exists('tasks',$list)) $tasks= $list['tasks'];
                    $list=TaskList::create($list);
                    foreach ($tasks as $j => $task) {
                        $task['lists_id']=$list->id;
                        $task['is_subtask']=true;
                        $subtasks=[];
                        if(array_key_exists('subtasks',$task)) $subtasks=$task['subtasks'];
                        $task=Task::create($task);
                        foreach ($subtasks as $k => $subtask) {
                            $subtask['parent_task_id']=$task->id;
                            $subtask['is_subtask']=true;
                            Task::create($subtask);
                        }
                    }
                }
    
                if($id){
                    return redirect(route('projects.show',['project'=>$project->id]));
                }else{
                    return $project;
                }
            }
        } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
            $failures = $e->failures();
            return response()->json($failures,500);
        } 
    }

    public function getKanban(Request $request,$id){
        $project=$this->getDetailProject($id,$request);
    
        $custom_columns=[
            [ 'id'=>'planned', 'title'=>'Plan', 'cards'=>[] ],
            [ 'id'=>'started','title'=>'Started', 'cards'=>[] ],
            [ 'id'=>'in-progress', 'title'=>'In progress', 'cards'=>[] ],
            [ 'id'=>'finished', 'title'=>'Finished', 'cards'=>[] ],
        ];

        for ($i=0; $i < $project->lists->count(); $i++) { 
            $list=$project->lists[$i];
            for ($j=0; $j < $list->cards->count(); $j++) { 
                $task=$list->cards[$j];       
                if(!$task->actual_start && !$task->actual_end){
                    $custom_columns[0]['cards'][]=$task;
                }
                
                if($task->actual_start && !$task->actual_end){ 
                    $custom_columns[1]['cards'][]=$task;
                }
    
                if($task->actual_start && $task->actual_end && !$task->complete){   
                    $custom_columns[2]['cards'][]=$task;
                }
    
                if($task->actual_start && $task->actual_end && $task->complete){
                    $custom_columns[3]['cards'][]=$task;
                }
            }
        }
        return response()->json($custom_columns);
    }
}
