<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\ProjectMember;
use App\Models\User;

class VerifyProjectMember
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $user=User::with('occupation')->findOrFail($request->users_id);
        $project_member=ProjectMember::where('projects_id','=',$request->projects_id)->where('users_id','=',$request->creator)->with('role')->first();
        if(!$project_member->role ){
            if(!$project_member->role ){
                return response()->json(["error"=>"User id : $request->creator is not registered in the project $request->projects_id"],403);
            }
        }
        return $next($request);
    }
}
