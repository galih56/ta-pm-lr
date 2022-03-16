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
    
    public function loggable()
    {
        return $this->morphTo(__FUNCTION__, 'loggable_type', 'loggable_id');
    }
}
