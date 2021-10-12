<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskAttachment extends Model
{
    use HasFactory;

    protected $table = 'task_attachments';

    public $timestamps = false;

    protected $fillable = [
        'files_id',
        'tasks_id',
        'users_id',
    ];

    public function task(){
        return $this->belongsTo(Task::class,'tasks_id');
    }

    public function file(){
        return $this->belongsTo(File::class,'files_id');
    }

    public function user(){
        return $this->belongsTo(User::class,'users_id');
    }
}
