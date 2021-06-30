<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\ProjectMember;
use App\Models\TeamsHasProjects;
use App\Models\File;
use App\Models\Team;
use App\Models\Task;
use App\Models\Meeting;
use App\Models\TaskAttachment;
use DB;

class ProjectController extends Controller
{
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
                $po=$project_managers[$i];
                $new_pm=new ProjectMember();
                $new_pm->projects_id=$project->id;
                if(gettype($po)=='object') $new_pm->users_id=$po->id;
                if(gettype($po)=='string' || gettype($po)=='integer' ) $new_pm->users_id=$po;
                $new_pm->roles_id=2;
                $new_pm->save();
                
                $inserted_members[]=$new_pm->id;
            }
        }        
    }

    public function show($id)
    {
        $project=Project::with(['columns.cards'=>function($q1){
                            return $q1->orderBy('start','ASC')
                                    ->with(['cards'=>function($q2){
                                        return $q2->orderBy('start','ASC');
                                    }]);
                        }])
                        ->with('members.role')->with('members.user')
                        ->findOrFail($id)->toArray();

        $members=$project['members'];
        $project_members=[];
        for ($i=0; $i < count($members); $i++) { 
            $member=$members[$i];
            $role=$member['role'];
            $user=$member['user'];
            $projects_id=$member['projects_id'];
            $member=$user;
            $member['role']=$role;
            $member['project_members_id']=$projects_id;
            $project_members[]=$member;
        }
        $project['members']=$project_members;
        
        return response()->json($project);
    }

    public function edit($id)
    {
        abort(404);
    }

    public function update(Request $request, $id)
    {
        $project=Project::findOrFail($id);
        $project->title=$request->title;
        $project->complete=$request->complete;
        $project->description=$request->description;
        $project->actual_start=$request->actual_start;
        $project->actual_end=$request->actual_end;
        $project->start=$request->start;
        $project->end=$request->end;
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

    public function getTeams($id){
        $teams=Team::from('teams AS t')
                        ->join('teams_has_projects AS tp','t.id','=','tp.teams_id')
                        ->where('tp.projects_id','=',$id)
                        ->get();
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

    public function addTeams(Request $request,$id){
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
        for ($i=0; $i < count($teams_has_projects); $i++) { 
            $teams_has_projects[$i]->delete();
        }
        return response()->json("",200);
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

    public function getReports($id){
        $tasks=Task::selectRaw('t.*,t.parent_task_id AS parentTask,l.projects_id')
                        ->from('tasks AS t')
                        ->leftJoin('lists AS l','t.lists_id','=','l.id')
                        ->where('l.projects_id','=',$id)
                        ->orWhereIn('t.parent_task_id',function($query) use($id){
                            return $query->select('t1.id')
                                        ->from('tasks AS t1')
                                        ->leftJoin('lists AS l1','t1.lists_id','=','l1.id')
                                        ->where('l1.projects_id','=',$id);
                        })->get($id);

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
}
