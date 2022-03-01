<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MeetingMember;

class MeetingMemberController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:sanctum',['only'=>['index','update','show','store','destroy']]); 
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
        if($request->has('users_id')) $meeting_member->users_id=$request->users_id;
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
        if($request->has('meetings_id') && $request->has('users_id')){
            $meeting_member=MeetingMember::where('meetings_id',$request->meetings_id)->where('users_id',$request->users_id)->first();
        }else{
            $meeting_member=MeetingMember::find($id);
        }
        if(empty($meeting_member)){
            abort(404);
        }
        if($request->has('meetings_id')) $meeting_member->meetings_id=$request->meetings_id;
        if($request->has('google_calendar_info')) $meeting_member->google_calendar_info=$request->google_calendar_info;
        if($request->has('users_id')) $meeting_member->users_id=$request->users_id;
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
