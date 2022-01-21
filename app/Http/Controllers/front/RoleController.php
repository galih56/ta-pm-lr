<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;

class RoleController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:sanctum',['only'=>['index','update','show','store','destroy']]); 
    }

    public function index()
    {
        $roles=Role::orderBy('name','ASC')->get();
        return response($roles); 
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    {
        $role=new Role();
        $role->name=$request->name;
        $role->save();
        return response()->json($role);
    }

    public function show($id)
    {
        $role=Role::with('users')->findOrFail($id);
        return response()->json($role);

    }

    public function edit($id)
    {
        abort(404);
    }

    public function update(Request $request, $id)
    {
        $role=Role::findOrFail($id);
        if($request->has('name')) $role->name=$request->name;
        $role->save();
        return response()->json($role);
    }

    public function destroy($id)
    {
        $role=Role::with('users')->findOrFail($id);
        $users=$role->users;
        for ($i=0; $i < count($users); $i++) { 
            $user=$users[$i];
            $user->delete();
        }
        return response()->json($role->delete(),200);
    }
}
