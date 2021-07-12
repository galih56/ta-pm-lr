<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Team;
use App\Models\TeamMember;

class TeamController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:sanctum',['only'=>['index','show','update','store','destroy']]); 
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
                    ->with('projects.project')
                    ->where('id','=',$id)
                    ->firstOrFail()->toArray();
        for ($i=0; $i < count($team['members']); $i++) { 
            $team['members'][$i]=$team['members'][$i]['user'];
        }
        for ($i=0; $i < count($team['projects']); $i++) { 
            $team['projects'][$i]=$team['projects'][$i]['project'];
        }
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
        return response()->json($team->delete());
    }
}
