<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectMember extends Model
{
    use HasFactory;

    protected $table = 'project_members';

    protected $fillable = [
        'users_id',
        'projects_id',
    ];

    public static function boot() {
        parent::boot();

        static::deleting(function($project_member) { 
             $project_member->taskMembers()->delete();
        });
    }

    public function user(){
        return $this->belongsTo(User::class,'users_id');
    }

    public function project(){
        return $this->belongsTo(Project::class,'projects_id');
    }
    
    public function taskMembers(){
        return $this->hasMany(TaskMember::class,'project_members_id');
    }

    public function tasks(){
        return $this->belongsToMany(Task::class,'task_members','project_members_id','tasks_id');
    }
}
