<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MeetingMember;

class MeetingMemberController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:sanctum',['only'=>['index','update','store','destroy']]); 
    }

    public function index()
    {
        $meeting_member=MeetingMember::all();
        return response()->json($meeting_member);
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    {
        $meeting_member=new MeetingMember();
        if($request->has('meetings_id')) $meeting_member->meetings_id=$request->meetings_id;
        if($request->has('google_calendar_info')) $meeting_member->google_calendar_info=$request->google_calendar_info;
<<<<<<< HEAD
        if($request->has('project_members_id')) $meeting_member->project_members_id=$request->project_members_id;
=======
        if($request->has('users_id')) $meeting_member->users_id=$request->users_id;
>>>>>>> 553d6033c97fa34d14364136d49cd6b632f825c1
        $meeting_member->save();

        return response()->json($meeting_member);
    }

    public function show($id)
    {
        $meeting_member=MeetingMember::findOrFail($id);
        return response()->json($meeting_member);
    }

    public function edit($id)
    {
        abort(404);
    }

    public function update(Request $request, $id)
    {
        $meeting_member=MeetingMember::findOrFail($id);
        if($request->has('meetings_id')) $meeting_member->meetings_id=$request->meetings_id;
        if($request->has('google_calendar_info')) $meeting_member->google_calendar_info=$request->google_calendar_info;
<<<<<<< HEAD
        if($request->has('project_members_id')) $meeting_member->project_members_id=$request->project_members_id;
=======
        if($request->has('users_id')) $meeting_member->users_id=$request->users_id;
>>>>>>> 553d6033c97fa34d14364136d49cd6b632f825c1
        $meeting_member->save();

        return response()->json($meeting_member);
    }

    public function destroy($id)
    {
        $meeting_member=MeetingMember::findOrFail($id);
        $meeting_member->delete();
        return response()->json('',200);
    }
}
