<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskList extends Model
{
    use HasFactory;

    protected $table = 'lists';

    protected $fillable = [ 'title', 'position', 'projects_id', 'start', 'end', 'actual_start', 'actual_end' ];

    public static function boot() {
        parent::boot();

        static::deleting(function($list) { 
             $list->tasks()->delete();
        });
    }

    public function tasks(){
        return $this->hasMany(Task::class,'lists_id');
    }
    
    public function cards(){
        return $this->hasMany(Task::class,'lists_id');
    }
    
    public function project(){
        return $this->belongsTo(Project::class,'projects_id');
    }

    public function approvals(){
        return $this->hasMany(Approval::class,'lists_id');
    }
    
    public function logs(){
        return $this->hasMany(ActivityLog::class,'lists_id');
    }
}
