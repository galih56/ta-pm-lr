<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProjectMember;
use App\Models\TeamMember;

class TeamsHasProjects extends Model
{
    use HasFactory;
   
    protected $table = 'teams_has_projects';

    public $timestamps = false;

    protected $fillable = [
        'projects_id',
        'teams_id',
    ];

    protected static function boot(){
        parent::boot();

        static::saving(function($team_has_project){
            $project_id=$team_has_project->projects_id;
            $team=$team_has_project->team;
            $team_members=$team->members;
            
            foreach ($team_members as $member) {
                if($member->user){
                    $exists=ProjectMember::where('projects_id',$project_id)->where('users_id','=',$member->user->id)->first();
                    if(!$exists){
                        ProjectMember::create([
                            'projects_id'=>$project_id,
                            'users_id'=>$member->user->id,
                            'roles_id'=>$member->role->id
                        ]);
                    }
                }
            }
        });

        static::deleting(function ($team_has_project) {
            $project_id=$team_has_project->projects_id;
            $team=$team_has_project->team;
            $team_members=$team->members;

            foreach ($team_members as $member) {
                if($member->user){
                    $exists=ProjectMember::where('projects_id',$project_id)->where('users_id','=',$member->user->id)->first();
                    if($exists){
                        $exists->delete();
                    }
                }
            }
        });
    }

    public function project(){
        return $this->belongsTo(Project::class,'projects_id');
    }

    public function team(){
        return $this->belongsTo(Team::class,'teams_id');
    }
}
