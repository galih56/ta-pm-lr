<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects';

    public $timestamps = true;

    protected $fillable = [
        'id','title', 'description', 'actual_start', 'actual_end',
        'start', 'end'
    ];

    public static function boot() {
        parent::boot();

        static::deleting(function($project) { 
             $project->members()->delete();
             $project->clients()->delete();
             $project->columns()->delete();
             $project->meetings()->delete();
             $project->teams()->delete();
        });
    }

    public function scopeExclude($query, $value = []) 
    {
        return $query->select(array_diff($this->fillable, (array) $value));
    }

    public function members(){
        return $this->hasMany(ProjectMember::class,'projects_id');
    }

    public function users(){
        return $this->belongsToMany(User::class,'project_members','projects_id','users_id');
    }

    public function lists(){
        return $this->hasMany(TaskList::class,'projects_id');
    }
    
    public function columns(){
        return $this->hasMany(TaskList::class,'projects_id');
    }

    public function meetings(){
        return $this->hasMany(Meeting::class,'projects_id');
    }
    
    public function teams(){
        return $this->belongsToMany(Team::class,'teams_has_projects','projects_id','teams_id');
    }
    
    public function approvals(){
        return $this->hasMany(Approval::class,'lists_id');
    }
    
    public function logs(){
        return $this->hasMany(ActivityLog::class,'projects_id');
    }
    
    public function clients(){
        return $this->belongsToMany(Client::class,'clients_has_projects','projects_id','clients_id');
    }
}


/*
select l.id,l.title,p.id as projects_id,p.title from lists as l
left join projects as p
on l.projects_id=p.id where l.projects_id=201


 select * from teams_has_projects where projects_id=201
select * from clients_has_projects where projects_id=201
select * from meetings where projects_id=201
select * from project_members where projects_id=201
select project_members.id, project_members.users_id,project_members.projects_id , projects.id, projects.title from "project_members"  
left join projects on project_members.projects_id=projects.id where "users_id" = 17

*/