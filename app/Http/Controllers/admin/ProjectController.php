<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\User;
use App\Models\Client;
use App\Models\Team;
use Response;
use Session;
use Auth;

class ProjectController extends Controller
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

        $projects=Project::orderBy('created_at','DESC')->get();
        return view('admin.projects.index',['projects'=>$projects]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $users=User::with('role')->orderBy('name','asc')->get();
        $teams=Team::orderBy('name','asc')->get();
        $clients=Client::orderBy('institution','asc')->get();
        return view('admin.projects.create')->with(compact('users','teams','clients'));
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
            $project=new Project();
            $project->title=$request->title;
            $project->description=$request->description;
            $project->start=$request->start;
            $project->end=$request->end;
            $project->actual_start=$request->actual_start;
            $project->actual_end=$request->actual_end;
            $project->cost=$request->cost;
            $project->actual_cost=$request->actual_cost;
            $project->complete=$request->complete;
            $project->save();
            if($request->hasFile('file')){
                $project=$this->import($request);
                if($project['error']==true){   
                    return response()->json($project);
                }else{
                    $project=$project->toArray();
                    $project['columns']=[];    
                    return response()->json($project);
                }
            }else{
                $project=new Project();
                $project->title=$request->title;
                $project->description=$request->description;
                $project->start=$request->start;
                $project->end=$request->end;
                $project->save();
                
                if($request->has('teams')){
                    $project->teams()->sync($request->teams);
                }
    
                if($request->has('users')){
                    $project->users()->sync($request->users,['roles_id'=>1]);
                }
    
                
                if($request->has('clients')){
                    $project->clients()->sync($request->clients);
                }
                
                Session::flash('message', 'Proyek baru telah dibuat'); 
                Session::flash('alert-class', 'alert-success'); 
                return redirect(route('projects.edit',['project'=>$project->id]));
          
            }
          
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
        return redirect(url("master/projects/$id/edit"));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $project=Project::findOrFail($id);
        $users=User::orderBy('name','asc')->get();
        $clients=Client::orderBy('institution','asc')->get();
        $teams=Team::orderBy('name','asc')->get();
        return view('admin.projects.edit')->with(compact('project','users','clients','teams'));
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
        $project=Project::findOrFail($id);
        $project->title=$request->title;
        $project->description=$request->description;
        $project->start=$request->start;
        $project->end=$request->end;
        $project->actual_start=$request->actual_start;
        $project->actual_end=$request->actual_end;
        $project->cost=$request->cost;
        $project->actual_cost=$request->actual_cost;
        $project->complete=$request->complete;
        $project->save();

        Session::flash('message', 'Proyek "'.$request->title.'" berhasil diubah'); 
        Session::flash('alert-class', 'alert-success'); 
        return redirect(route('projects.edit',['project'=>$project->id]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $project=Project::findOrFail($id);
        Session::flash('message', 'Proyek"'.$project->title.'" berhasil dihapus'); 
        Session::flash('alert-class', 'alert-success'); 
        $project->delete();
        return redirect(route('projects.index'));
    }

    public function downloadImportFormat(){
        $response=Response::make(public_path('admin/format-import.xlsx'));
        $response->header('Content-Type', 'application/xls');
        return $response;
    }
}
