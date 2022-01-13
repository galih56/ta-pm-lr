<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Task extends Model
{
    use HasFactory;
    
    protected $table = 'tasks';

    public $timestamps = true;

    protected $fillable = [
        'users_id', 'title', 'description', 'complete', 'end', 'start',
        'actual_start', 'actual_end', 'start_label', 'end_label', 
        'progress', 'is_subtask', 'lists_id','parent_task_id'
    ];

    protected $casts = [
        'progress' => 'double',
    ];
    
    public static function boot() {
        parent::boot();
        static::saving(function($task){
            if(!empty($task->start)  && !empty($task->end)){
                $start = Carbon::parse($task->start);
                $end = Carbon::parse($task->end);
                $days= $start->diffInDays($end);
                $task->days=$days;
            }       

            if(!empty($task->actual_start) && !empty($task->actual_end)){
                $actual_start = Carbon::parse($task->actual_start);
                $actual_end = Carbon::parse($task->actual_end);
                $work_days= $actual_start->diffInDays($actual_end);
                $task->work_days=$work_days;
            }
        });
        
        static::deleting(function($task) { 
             $task->cards()->delete();
        });
    }

    public function logs(){
        return $this->hasMany(ActivityLog::class,'tasks_id');
    }

    public function comments(){
        return $this->hasMany(Comment::class,'tasks_id');
    }

    public function tags(){
        return $this->belongsToMany(Tag::class,'tasks_has_tags','tasks_id','tags_id');
    }

    public function childrenTasks(){
        return $this->hasMany(Task::class,'parent_task_id');
    }

    public function members(){
        return $this->hasMany(TaskMember::class,'tasks_id');
    }

    public function task_members(){
        return $this->belongsToMany(ProjectMember::class,'task_members','tasks_id','project_members_id');
    }

    public function parentTask(){
        return $this->belongsTo(Task::class,'parent_task_id');
    }

    public function attachments(){
        return $this->hasMany(TaskAttachment::class,'tasks_id');
    }

    public function list(){
        return $this->belongsTo(TaskList::class,'lists_id');
    }

    public function creator(){
        return $this->belongsTo(User::class,'users_id');
    }
    
    public function column(){
        return $this->belongsTo(TaskList::class,'lists_id');
    }

    public function cards(){
        return $this->hasMany(Task::class,'parent_task_id');
    }

    public function approvals(){
        return $this->hasMany(Approval::class,'lists_id');
    }
    
}


