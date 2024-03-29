<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    use HasFactory;
    
    protected $table = 'meetings';

    protected $fillable = [
        'title', 'description', 'google_calendar_info',
        'start', 'end', 'users_id',
    ];
    protected $casts = [
        'google_calendar_info' => 'json',
    ];
  
    protected static function boot(){
        parent::boot();
        
        static::deleting(function($client) { 
            $client->members()->detach();
        });
    }

    public function creator(){
        return $this->belongsTo(User::class,'users_id');
    }

    public function meeting_members(){
        return $this->hasMany(MeetingMember::class,'meetings_id');
    }
    
    public function project(){
        return $this->belongsTo(User::class,'projects_id');
    }

    public function members(){
        return $this->belongsToMany(User::class,'meeting_members','meetings_id','users_id');
    }
}
