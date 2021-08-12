<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskMember extends Model
{
    use HasFactory;
    
    protected $table = 'task_members';

    public $timestamps = false;

    protected $fillable = [
        'project_members_id',
        'tasks_id',
        'users_id',
        'clients_id'
    ];

    public function member(){
        return $this->belongsTo(ProjectMember::class,'project_members_id');
    }

    public function user(){
        return $this->belongsTo(User::class,'users_id');
    }

    public function client(){
        return $this->belongsTo(Client::class,'clients_id');
    }

    public function task(){
        return $this->belongsTo(Task::class,'tasks_id');
    }
}
