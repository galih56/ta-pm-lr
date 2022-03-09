<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Approval extends Model
{
    use HasFactory;

    protected $table = 'approvals';

    protected $fillable = [
        'message','status','description','projects_id','lists_id','tasks_id','users_id'

    ];
    
    public function user(){
        return $this->belongsTo(User::class,'users_id');
    }
    
    public function task(){
        return $this->belongsTo(Task::class,'tasks_id');
    }
    
    public function list(){
        return $this->belongsTo(TaskList::class,'lists_id');
    }
    
    public function project(){
        return $this->belongsTo(Project::class,'projects_id');
    }

    public function notifications()
    {
        return $this->morphMany(Notification::class, 'notifiable');
    }
}
