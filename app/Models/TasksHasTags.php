<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TasksHasTags extends Model
{
    use HasFactory;    
    
    protected $table = 'tasks_has_tags';

    public $timestamps = false;

    protected $fillable = [
        'tasks_id',
        'tags_id',
    ];

    public function task(){
        return $this->belongsTo(Task::class,'tasks_id');
    }

    public function tag(){
        return $this->belongsTo(Tag::class,'tags_id');
    }
}
