<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Team;
use App\Models\TeamMember;
use App\Models\TeamsHasProjects;

class TeamController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:sanctum',['only'=>['index','update','store','destroy']]); 
    }

    public function index()
    {
        $teams=Team::all();
        return response()->json($teams);
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    {
        $team=new Team();
        if($request->has('name')) $team->name=$request->name;
        if($request->has('description')) $team->description=$request->description;
        $team->save();
        return response()->json($team);
    }

    public function show($id)
    {
        $team=Team::with('members.user')
                    ->with('projects')
                    ->where('id','=',$id)
                    ->firstOrFail()->toArray();
        $members=[];
        for ($i=0; $i < count($team['members']); $i++) { 
            if($team['members'][$i]['user']){
                $member=$team['members'][$i]['user'];
                $member['team_members_id']=$team['members'][$i]['id'];
                $members[]=$member;
            }
        }
        $team['members']=$members;
        return response()->json($team);
    }

    public function edit($id)
    {
        return redirect(url("/teams/$id"));
    }

    public function update(Request $request, $id)
    {
        $team=Team::findOrFail($id);
        $team->name=$request->name;
        $team->description=$request->description;
        $team->save();
        return response()->json($team);
    }

    public function destroy($id)
    {
        $team=Team::findOrFail($id);
        TeamsHasProjects::where('teams_id',$team->id)->delete();
        TeamMember::where('teams_id',$team->id)->delete();
        return response()->json($team->delete());
    }
}
