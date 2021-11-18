<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GithubRepository extends Model
{
    use HasFactory;

    protected $table = 'github_repositories';

    public $timestamps = false;

    protected $fillable = [
        'owner_name',
        'repository_name',
        'projects_id',
    ];

    public function project(){
        return $this->belongsTo(Project::class,'projects_id');
    }
}
