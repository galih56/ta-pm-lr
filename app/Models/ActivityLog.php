<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityLog extends Model
{
    use HasFactory;

    protected $table = 'activity_logs';

    protected $fillable = [
        'description','tasks_id','users_id'

    ];
    
    public function user(){
        return $this->belongsTo(User::class,'users_id');
    }
    
    public function task(){
        return $this->belongsTo(Task::class,'tasks_id');
    }
}
