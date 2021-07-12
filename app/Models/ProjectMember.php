<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectMember extends Model
{
    use HasFactory;

    protected $table = 'project_members';

    protected $fillable = [
        'title',
        'users_id',
        'projects_id',
    ];

    public function user(){
        return $this->belongsTo(User::class,'users_id');
    }

    public function project(){
        return $this->belongsTo(Project::class,'projects_id');
    }
    
    public function taskMembers(){
        return $this->hasMany(TaskMember::class,'project_members_id');
    }

    public function role(){
        return $this->belongsTo(MemberRole::class,'roles_id');
    }

    public function verifyMemberAndRole(){
        
        $project_member=$this::where('projects_id','=',$request->projects_id)->where('users_id','=',$request->creator)->with('role')->first();
        dd($project_member);
        if(!$project_member ){
            return response()->json(["error"=>"User id : $request->creator is not registered in the project $request->projects_id"],403);
        }
    }
}
