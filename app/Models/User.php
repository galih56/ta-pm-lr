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
        'name', 'email', 'password', 'verified',
        'token', 'profile_picture_path', 'phone_number', 
        'occupations_id',
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

    public function asMember(){
        return $this->hasMany(ProjectMember::class,'users_id');
    }

    public function occupation(){
        return $this->belongsTo(Occupation::class,'occupations_id');
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

    public function teams(){
        return $this->hasMany(TeamMembers::class,'users_id');
    }
}
