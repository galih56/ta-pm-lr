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
        $meeting->google_calendar_info=$request->google_calendar_info;
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
<<<<<<< HEAD
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
=======
        $meeting=$this->getDetailMeeting($id,$request->users_id);
        return response()->json($meeting);
>>>>>>> 553d6033c97fa34d14364136d49cd6b632f825c1
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
<<<<<<< HEAD
=======
        if($request->has('google_calendar_info')) $meeting->google_calendar_info=$request->google_calendar_info;
>>>>>>> 553d6033c97fa34d14364136d49cd6b632f825c1
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

<<<<<<< HEAD
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
=======
    public function addMembers(Request $request){
        $meeting=Meeting::with('members')->findOrFail($request->id);
        
        $member_ids=$meeting->members()->get()->pluck('id')->toArray();
        if($request->has('members')){
            $member_ids=array_merge($member_ids,array_column($request->members,'id'));
        }
        $meeting->members()->sync($member_ids);
        
        $meeting=$this->getDetailMeeting($request->id,$request->users_id);
        return response()->json($meeting);
    }

    public function removeMembers(Request $request){
        $meeting=Meeting::with('members')->findOrFail($request->id);
        
        $member_ids=$meeting->members()->pluck('users_id')->toArray();
>>>>>>> 553d6033c97fa34d14364136d49cd6b632f825c1
        if($request->has('members')){
            $member_ids=array_column($request->members,'id');
        }
        $meeting->members()->detach($member_ids);
        
<<<<<<< HEAD
        $meeting=Meeting::with('creator')->with('members')->with('meeting_members.user')->findOrFail($id)->toArray();
        return response()->json($meeting);
    }

=======
        $meeting=Meeting::with('creator')->with('members')->findOrFail($request->id)->toArray();
        
        $meeting=$this->getDetailMeeting($request->id,$request->users_id);
        return response()->json($meeting);
    }

    function getDetailMeeting($id,$users_id=null ){
        $meeting=Meeting::with('creator')
                        ->with('members')
                        ->findOrFail($id);

        $member=null;
        if($users_id){
            for ($i=0; $i < count($meeting->members); $i++) { 
                $meeting_member=$meeting->members[$i];
                if($meeting_member->id==$users_id){
                    $member=$meeting_member;
                    break;
                }
            }
        }
        return ['meeting'=>$meeting,'member'=>$member];
    }
>>>>>>> 553d6033c97fa34d14364136d49cd6b632f825c1
}
