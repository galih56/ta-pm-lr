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
        'title', 'description', 'actualStart', 'actualEnd',
        'start', 'end'
    ];

    public function members(){
        return $this->hasMany(ProjectMember::class,'projects_id');
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
    
    public function github_repositories(){
        return $this->hasMany(GithubRepository::class,'projects_id');
    }
    
    public function teams(){
        return $this->hasMany(TeamsHasProjects::class,'projects_id');
    }
}
