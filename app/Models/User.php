<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id','name', 'email', 'password', 'profile_picture_path','roles_id','last_login'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected static function boot(){
        parent::boot();
        
        static::deleting(function($user) { 
            $user->projects()->detach();
            $user->meetings()->detach();
            
        });
    }

    public function scopeExclude($query, $value = []) 
    {
        return $query->select(array_diff($this->fillable, (array) $value));
    }
    
    public function asMember(){
        return $this->hasMany(ProjectMember::class,'users_id');
    }

    public function role(){
        return $this->belongsTo(Role::class,'roles_id');
    }

    public function comments(){
        return $this->hasMany(Comment::class,'users_id');
    }

    public function logs(){
        return $this->hasMany(ActivityLog::class,'users_id');
    }

    public function tasks(){
        return $this->hasMany(Task::class,'users_id');
    }

    public function taskMembers(){
        return $this->hasMany(TaskMember::class,'users_id');
    }

    public function meetingMembers(){
        return $this->hasMany(MeetingMember::class,'users_id');
    }
    
    public function meetings(){
        return $this->belongsToMany(Meeting::class,'meeting_members','users_id','meetings_id');
    }

    public function teams(){
        return $this->hasMany(TeamMembers::class,'users_id');
    }

    public function projects(){
        return $this->belongsToMany(Project::class,'project_members','users_id','projects_id');
    }
}
