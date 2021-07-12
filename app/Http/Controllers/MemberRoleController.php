<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MemberRole;

class MemberRoleController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:sanctum',['only'=>['index','show','update','store','destroy']]);  
    }
    
    public function index()
    {
        $roles=MemberRole::get();
        return response()->json($roles);
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    {
        $member_role=new MemberRole();
        $member_role->name=$request->name;
        $member_role->color=$request->color;
        $member_role->bg_color=$request->bg_color;
        $member_role->save();
        return response()->json($member_role);
    }

    public function show($id)
    {
        $member_role=MemberRole::with('members.user')->findOrFail()->toArray();
        $users=[];
        $members=$member_role['members'];
        for ($i=0; $i < count($members); $i++) { 
            $member=$members[$i];
            $user=$member['user'];
            $user['roles_id']=$member['roles_id'];
            $users[]=$user;
        }
        $member_role['members']=$users;
        return response()->json($member_role);
    }

    public function edit($id)
    {
        abort(404);
    }

    public function update(Request $request, $id)
    {
        $member_role=MemberRole::findOrFail($id);
        if($request->has('name'))$member_role->name=$request->name;
        $member_role->save();
        return response()->json($member_role);
    }

    public function destroy($id)
    {
        $member_role=MemberRole::findOrFail($id);
        $member_role->delete();
        return response()->json("",200);
    }
}
