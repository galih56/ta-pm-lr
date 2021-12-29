<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use Session;
use Auth;
use Illuminate\Support\Facades\Validator;

class RoleController extends Controller
{
     /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(Request $request,$rules)
    {
        return Validator::make($request->all(), $rules);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $roles=new Role;
        if($request->has('search')){
            $roles=$roles->where('name','like',"%$request->search%");
        }
        
        $roles=$roles->paginate(10)->appends($request->all());
        return view('admin.roles.index',['roles'=>$roles]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.roles.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator=$this->validator($request,
            [ 'name'=>'required', 'content'=>'required', ],
            [ 
                'name.required'=>'Judul harus diisi', 
            ]
        );
        if($validator->fails()){
            return redirect()->back()->withErrors($validator);
        }else{
            $role=new Role();
            $role->name=$request->name;
            $role->save();
                
            Session::flash('message', 'Role baru telah dibuat'); 
            Session::flash('alert-class', 'alert-success'); 
            return redirect(route('roles.edit',['role'=>$role->id]));
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $role=Role::findOrFail($id);
        return view('admin.roles.show')->with(compact('role'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request,$id)
    {
        $role=Role::with('users')->findOrFail($id);
        $users=$role->users()->paginate(10)->appends($request->all());
        return view('admin.roles.edit')->with(compact('role','users'));
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
        $request->validate(
            [ 'name'=>'required', ],
            [ 'name.required'=>'Judul harus diisi']
        );

        $role=Role::findOrFail($id);
        $role->name=$request->name;
        $role->save();

        Session::flash('message', 'Role "'.$request->name.'" berhasil diubah'); 
        Session::flash('alert-class', 'alert-success'); 
        return redirect(route('roles.edit',['role'=>$role->id]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $role=Role::findOrFail($id);
        Session::flash('message', 'Role"'.$role->name.'" berhasil dihapus'); 
        Session::flash('alert-class', 'alert-success'); 
        $role->delete();
        return redirect(route('roles.index'));
    }
}
