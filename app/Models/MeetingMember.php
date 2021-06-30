<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MeetingMember extends Model
{
    use HasFactory;
    
    protected $table = 'meeting_members';

    public $timestamps = false;

    protected $fillable = [
        'users_id', 'meetings_id',
    ];

    public function user(){
        return $this->belongsTo(User::class,'users_id');
    }
    
    public function meeting(){
        return $this->belongsTo(User::class,'meetings_id');
    }
}
