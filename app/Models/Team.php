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

    public function members(){
        return $this->hasMany(TeamMember::class,'teams_id');
    }

    public function projects(){
        return $this->belongsToMany(Project::class,'teams_has_projects','teams_id','projects_id');
    }
}
