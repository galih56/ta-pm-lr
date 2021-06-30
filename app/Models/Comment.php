<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $table = 'comments';

    protected $fillable = [
        'title', 'description'
    ];
    
    public function creator(){
        return $this->belongsTo(User::class,'users_id');
    }
    
    public function task(){
        return $this->belongsTo(Task::class,'tasks_id');
    }

}
