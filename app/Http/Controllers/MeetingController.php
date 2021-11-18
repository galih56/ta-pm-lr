<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Meeting;
use App\Models\MeetingMember;

class MeetingController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:sanctum',['only'=>['index','update','store','destroy']]); 
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

        $member_ids=[];
        if($request->has('members')){
            $member_ids=array_column($request->members,'id');
        }
        if($request->has('users_id')){
            $member_ids[]=$request->users_id;
        }
        $meeting->members()->sync($member_ids);
        return response()->json($meeting);
    }

    public function show(Request $request,$id)
    {
        $meeting=Meeting::with('creator')
                        ->with('members')
                        ->with('meeting_members.user')
                        ->findOrFail($id);
        $member=null;
        $user=null;
        if($request->has('users_id')){
            $user=User::findOrFail($request->users_id);
            if($user){
                $member=MeetingMember::where('users_id',$user->id)->where('meetings_id',$meeting->id)->first();
            }   
        }
        return response()->json(['meeting'=>$meeting,'member'=>$member,'user'=>$user]);
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
        if($request->has('users_id')) $meeting->users_id=$request->users_id;
        $meeting->save();
        
        $member_ids=[];
        if($request->has('members')){
            $member_ids=array_column($request->members,'id');
        }
        
        $meeting=Meeting::with('creator')->with('members')->with('meeting_members.user')->findOrFail($id);
        $member=null;
        $user=null;
        if($request->has('users_id')){
            $user=User::findOrFail($request->users_id);
            if($user){
                $member=MeetingMember::where('users_id',$request->users_id)->where('meetings_id',$meeting->id)->first();
                if(empty($member)){
                    $member=new MeetingMember();
                    $member->meetings_id=$meeting->id;
                    $member->users_id=$request->users_id;
                    $member->google_calendar_info=json_encode($request->google_calendar_info);
                    $member->save();
                }
                if($request->has('google_calendar_info') && $member) $member->google_calendar_info=$request->google_calendar_info;
            }   
        }
        return response()->json(['meeting'=>$meeting,'member'=>$member,'user'=>$user]);
    
    }

    public function destroy($id)
    {
        $meeting=Meeting::findOrFail($id);
        return response()->json($meeting->delete(),200);
    }

    public function addMembers(Request $request,$id){
        $meeting=Meeting::findOrFail($id);
        
        $member_ids=[];
        if($request->has('members')){
            $member_ids=array_column($request->members,'id');
        }
        $meeting->members()->attach($member_ids);
        return redirect(route('meetings.show',['meeting'=>$id]));
    }
    
    public function removeMembers(Request $request,$id){
        $meeting=Meeting::findOrFail($id);
        
        $member_ids=[];
        if($request->has('members')){
            $member_ids=array_column($request->members,'id');
        }
        $meeting->members()->detach($member_ids);
        
        $meeting=Meeting::with('creator')->with('members')->with('meeting_members.user')->findOrFail($id)->toArray();
        return response()->json($meeting);
    }

}
