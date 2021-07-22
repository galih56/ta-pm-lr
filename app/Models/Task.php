<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

    public function logs(){
        return $this->hasMany(ActivityLog::class,'tasks_id');
    }

    public function comments(){
        return $this->hasMany(Comment::class,'tasks_id');
    }

    public function tags(){
        return $this->hasMany(TasksHasTags::class,'tasks_id');
    }

    public function childrenTasks(){
        return $this->hasMany(TasksHasTags::class,'parent_task_id');
    }

    public function members(){
        return $this->hasMany(TaskMember::class,'tasks_id');
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
        // subtasks tasks for kanban
        return $this->hasMany(Task::class,'parent_task_id');
    }

    public function approvals(){
        return $this->hasMany(Approval::class,'lists_id');
    }
    
}



// public function getMembersAttribute(){
//     $task_members= $this->taskMembers()->with('user')->get()->toArray();
//     $members=[];
//     for ($i=0; $i < count($task_members); $i++) { 
//        $task_member=$task_members[$i];
//         $user=$task_member['user'];
//         $user['task_members_id']=$task_member['id'];
//         $user['project_members_id']=$task_member['project_members_id'];
//         $members[]=$user;
//     }
//     return $members;
// }
