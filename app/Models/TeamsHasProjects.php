<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamsHasProjects extends Model
{
    use HasFactory;
   
    protected $table = 'teams_has_projects';

    public $timestamps = false;

    protected $fillable = [
        'projects_id',
        'teams_id',
    ];

    public function project(){
        return $this->belongsTo(Project::class,'projects_id');
    }

    public function team(){
        return $this->belongsTo(Team::class,'teams_id');
    }
}
