<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects';

    protected $columns = [
        'title', 'description', 'actual_start', 'actual_end',
        'start', 'end','created_at','updated_at'
    ];

    public $timestamps = true;

    protected $fillable = [
        'title', 'description', 'actual_start', 'actual_end',
        'start', 'end'
    ];

    public static function boot() {
        parent::boot();

        static::deleting(function($project) { 
             $project->members()->delete();
             $project->clients()->delete();
             $project->lists()->delete();
             $project->meetings()->delete();
        });
    }

    public function scopeExclude($query, $value = []) 
    {
        return $query->select(array_diff($this->columns, (array) $value));
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
