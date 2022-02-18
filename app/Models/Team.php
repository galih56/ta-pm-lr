<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $table = 'teams';

    public $timestamps = false;

    protected $fillable = [
        'name',
        'description',
    ];


    protected static function boot(){
        parent::boot();
        
        static::deleting(function($team) { 
            $team->projects()->detach();
            $team->users()->detach();
        });
    }

    public function members(){
        return $this->hasMany(TeamMember::class,'teams_id');
    }

    public function projects(){
        return $this->belongsToMany(Project::class,'teams_has_projects','teams_id','projects_id');
    }
    
    public function users(){
        return $this->belongsToMany(Project::class,'team_members','teams_id','users_id');
    }
}
