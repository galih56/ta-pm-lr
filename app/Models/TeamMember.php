<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    protected $table = 'team_members';

    public $timestamps = false;

    protected $fillable = [  'users_id',  'teams_id' ];
    
    public function user(){
        return $this->belongsTo(User::class,'users_id');
    }

    public function team(){
        return $this->belongsTo(Team::class,'teams_id');
    }

}
