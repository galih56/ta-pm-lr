<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Team;
use App\Models\TeamMember;

class TeamMemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $team_members=TeamMember::with('team')->with('user')->get();
        return response()->json($team_members);   
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return abort(404);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([ 'teams_id'=>'required' ]);

        if($request->has('users')){
            foreach ($request->users as $users_id) {
                $team_member=new TeamMember();
                $team_member->teams_id=$request->teams_id;
                $team_member->users_id=$users_id;
                $team_member->save();
            }
        }else if($request->has('users_id')){
            $team_member=new TeamMember();
            $team_member->teams_id=$request->teams_id;
            $team_member->users_id=$request->users_id;
            $team_member->save();
        }
        return redirect(url("/api/teams/$request->teams_id"));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return abort(404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return abort(404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $team_member=TeamMember::findOrFail($id);
        if($request->has('teams_id')) $team_member->teams_id=$request->teams_id;
        if($request->has('users_id')) $team_member->users_id=$request->users_id;
        $team_member->save();
        return response()->json("",200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $team_member=TeamMember::findOrFail($id);
        $teams_id=$team_member->teams_id;
        return response()->json($team_member->delete(),200);
    }
}
