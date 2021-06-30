<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MeetingMember;

class MeetingMemberController extends Controller
{
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
        $meeting_member->meetings_id=$request->meetings_id;
        $meeting_member->project_members_id=$request->project_members_id;
        $meeting_member->save();

        return response()->json($meeting_member);
    }

    public function show($id)
    {
        $meeting_member=MeetingMember::findOrFail($id);
        return response()->json($id);
    }

    public function edit($id)
    {
        abort(404);
    }

    public function update(Request $request, $id)
    {
        $meeting_member=MeetingMember::findOrFail($id);
        $meeting_member->meetings_id=$request->meetings_id;
        $meeting_member->project_members_id=$request->project_members_id;
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
