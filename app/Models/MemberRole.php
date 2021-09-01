<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MemberRole extends Model
{
    use HasFactory;
    
    protected $table = 'member_roles';

    public $timestamps = false;

    protected $fillable = [
        'name'
    ];

    public function members(){
        return $this->hasMany(ProjectMember::class,'roles_id');
    }
    
    public function teammembers(){
        return $this->hasMany(TeamMember::class,'roles_id');
    }
}
