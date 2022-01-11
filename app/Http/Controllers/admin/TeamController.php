<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Team;
use App\Models\User;
use App\Models\Project;
use Session;
use Auth;
use Illuminate\Support\Facades\Validator;

class TeamController extends Controller
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

        $teams=Team::orderBy('name','ASC')->get();
        return view('admin.teams.index',['teams'=>$teams]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $users=User::orderBy('name','ASC')->get();
        return view('admin.teams.create')->with(compact('users'));
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
            [ 'name'=>'required', 'users'=>'required|array', ],
            [ 'name.required'=>'Nama harus diisi','users.required'=>'Anggota proyek harus diisi']
        );

        if($validator->fails()){
            return redirect()->back()->withErrors($validator);
        }else{
            $team=new Team();
            $team->name=$request->name;
            $team->save();
            
            $team->users()->sync($request->users);
            Session::flash('message', 'Team baru telah dibuat'); 
            Session::flash('alert-class', 'alert-success'); 
            return redirect(route('teams.edit',['team'=>$team->id]));
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
        return redirect(url("master/teams/$id/edit"));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request,$id)
    {
        $team=Team::with('users')->findOrFail($id);
        $users=User::orderBy('name','ASC')->get();
        $projects=Project::orderBy('title','ASC')->get();
        return view('admin.teams.edit')->with(compact('team','users','projects'));
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
            [ 'name.required'=>'Nama harus diisi']
        );

        $team=Team::findOrFail($id);
        $team->name=$request->name;
        $team->save();
        
        $team->users()->sync($request->users);

        Session::flash('message', 'Team "'.$request->name.'" berhasil diubah'); 
        Session::flash('alert-class', 'alert-success'); 
        return redirect(route('teams.edit',['team'=>$team->id]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $team=Team::findOrFail($id);
        Session::flash('message', 'Team"'.$team->name.'" berhasil dihapus'); 
        Session::flash('alert-class', 'alert-success'); 
        $team->delete();
        return redirect(route('teams.index'));
    }
}
