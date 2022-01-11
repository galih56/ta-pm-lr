<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\TaskList;
use App\Models\Task;
use App\Models\File;
use App\Models\Attachment;
use Session;
use Auth;

class ListController extends Controller
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
    public function index(Request $request,$project=null)
    {
        $lists=new TaskList;
        
        $projects=[];
        if($project){
            $lists=$lists->where('projects_id',$project);
        }

        $lists=$lists->orderBy('title','ASC')->get();

        if($request->ajax()) return response()->json($lists);
        else return view('admin.lists.index',['lists'=>$lists]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request,$project=null)
    {   
        $projects=[];
        if($project){
            $project=Project::find($request->project);
        }
        $projects=Project::orderBy('title','asc')->get();
        
        return view('admin.lists.create')->with(compact('projects','project',));
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
            [ 
                'title'=>'required', 
                'start'=>'required', 
                'end'=>'required', 
            ],
            [ 
                'title.required'=>'Judul harus diisi', 
                'start.required'=>'Tanggal mulai harus diisi' ,
                'end.required'=>'Tanggal selesai harus diisi' 
            ]
        );
        if($validator->fails()){
            return redirect()->back()->withErrors($validator);
        }else{
            $list=new TaskList();
            $list->title=$request->title;
            $list->projects_id=$request->projects_id;
            $list->start=$request->start;
            $list->end=$request->end;
            $list->save();
            
            Session::flash('message', 'Daftar tugas baru telah dibuat'); 
            Session::flash('alert-class', 'alert-success'); 
            return redirect(route('lists.edit',['list'=>$list->id]));
          
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
        return redirect(url("master/lists/$id/edit"));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request,$id)
    {
        $list=TaskList::findOrFail($id);

        $project=null;
        $projects=[];
        
        if($request->has('project')){
            $project=Project::find($request->project);
        }

        if($list->project){
            $project=$list->project;
        }

        $projects=Project::orderBy('title','asc')->get();
        return view('admin.lists.edit')->with(compact('list','projects','project'));    
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator=$this->validator($request,
            [ 
                'title'=>'required', 
                'start'=>'required', 
                'end'=>'required', 
            ],
            [ 
                'title.required'=>'Judul harus diisi', 
                'start.required'=>'Tanggal mulai harus diisi' ,
                'end.required'=>'Tanggal selesai harus diisi' 
            ]
        );
        $list=TaskList::findOrFail($id);
        $list->projects_id=$request->projects_id;
        $list->title=$request->title;
        $list->start=$request->start;
        $list->end=$request->end;
        $list->save();

        Session::flash('message', 'Daftar tugas "'.$request->title.'" berhasil diubah'); 
        Session::flash('alert-class', 'alert-success'); 
        return redirect(route('lists.edit',['list'=>$list->id]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $list=TaskList::findOrFail($id);
        Session::flash('message', 'Daftar tugas "'.$list->title.'" berhasil dihapus'); 
        Session::flash('alert-class', 'alert-success'); 
        $list->delete();
        return redirect(route('lists.index'));
    }
}
