<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meeting;

class MeetingController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:sanctum',['only'=>['index','show','update','store','destroy']]); 
    }

    public function index()
    {
        $meetings=Meeting::with('creator')->get();
        return response()->json($meetings);
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    {
        $meeting=new Meeting();
        $meeting->title=$request->title;
        $meeting->description=$request->description;
        $meeting->start=$request->start;
        $meeting->end=$request->end;
        $meeting->users_id=$request->users_id;
        $meeting->projects_id=$request->projects_id;
        $meeting->save();
        return response()->json($meeting);
    }

    public function show($id)
    {
        $meeting=Meeting::with('creator')->with('project')->with('meeting_members.user')->findOrFail($id)->toArray();
        $members=[];
        for ($i=0; $i < count($meeting->meeting_members); $i++) { 
            $meeting_member=$meeting->meeting_members[$i];
            $user=  $meeting_member['user'];
            $user['meetings_id']=$meeting_member['meetings_id'];
            $members[]=$user;
        }
        $meeting['members']=$members;
        return response()->json($meeting);
    }

    public function edit($id)
    {
        abort(404);
    }

    public function update(Request $request, $id)
    {
        $meeting=Meeting::findOrFail($id);
        if($request->has('title')) $meeting->title=$request->title;
        if($request->has('description')) $meeting->description=$request->description;
        if($request->has('start')) $meeting->start=$request->start;
        if($request->has('end')) $meeting->end=$request->end;
        if($request->has('googleCalendarInfo')) $meeting->googleCalendarInfo=$request->googleCalendarInfo;
        if($request->has('users_id')) $meeting->users_id=$request->users_id;
        $meeting->save();
        return response()->json($meeting,200);
    }

    public function destroy($id)
    {
        $meeting=Meeting::findOrFail($id);
        return response()->json($meeting->delete(),200);
    }
}
