<?php

namespace App\Http\Controllers\admin;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\User;
use App\Models\Tag;
use App\Models\Project;
use App\Models\TaskList;
use App\Models\Task;
use App\Models\File;
use App\Models\Attachment;
use Session;
use Auth;

class TaskController extends Controller
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
    public function index(Request $request,$project=null,$list=null)
    {
        $tasks=Task::orderBy('created_at','DESC')->with('list.project')->with('parentTask.list.project')->get();
        if($project){
            $project=Project::findOrFail($project);
        }
        if($list){
            $list=TaskList::findOrFail($list);
            $tasks=$list->tasks()->orderBy('created_at','DESC')->with('list.project')->with('parentTask.list.project');
        }
        return view('admin.tasks.index',['tasks'=>$tasks]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request,$project=null,$list=null)
    {
        if($project){
            $project=Project::findOrFail($project);
        }
        if($list){
            $list=TaskList::findOrFail($list);
        }
        $users=User::with('role')->orderBy('name','asc')->get();
        $clients=Client::orderBy('institution','asc')->get();
        $tags=Tag::orderBy('title','asc')->get();
        $projects=Project::orderBy('title','asc')->get();
        return view('admin.tasks.create')->with(compact('projects','project','list','users','clients','tags'));
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
            $task=new Task();
            $task->title=$request->title;
            $task->description=$request->description;
            $task->start=$request->start;
            $task->end=$request->end;
            $task->actual_start=$request->actual_start;
            $task->actual_end=$request->actual_end;
            $task->cost=$request->cost;
            $task->actual_cost=$request->actual_cost;
            $task->complete=$request->complete;
            $task->save();
            if($request->hasFile('file')){
                $task=$this->import($request);
                if($task['error']==true){   
                    return response()->json($task);
                }else{
                    $task=$task->toArray();
                    $task['columns']=[];    
                    return response()->json($task);
                }
            }else{
                $task=new Task();
                $task->title=$request->title;
                $task->description=$request->description;
                $task->start=$request->start;
                $task->end=$request->end;
                $task->save();
                
    
                if($request->has('users')){
                    $task->users()->sync($request->users);
                }
    
                
                if($request->has('clients')){
                    $task->clients()->sync($request->clients);
                }
                
                if($request->has('tags')){
                    $task->tags()->sync($request->tags);
                }
            }
            
            Session::flash('message', 'Tugas baru telah dibuat'); 
            Session::flash('alert-class', 'alert-success'); 
            return redirect(route('tasks.edit',['task'=>$task->id]));    
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
        return redirect(url("master/tasks/$id/edit"));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $task=Task::findOrFail($id);
        $users=User::orderBy('name','asc')->get();
        $clients=Client::orderBy('institution','asc')->get();
        return view('admin.tasks.edit')->with(compact('task','users','clients'));
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
        $task=Task::findOrFail($id);
        $task->title=$request->title;
        $task->description=$request->description;
        $task->start=$request->start;
        $task->end=$request->end;
        $task->actual_start=$request->actual_start;
        $task->actual_end=$request->actual_end;
        $task->cost=$request->cost;
        $task->actual_cost=$request->actual_cost;
        $task->complete=$request->complete;
        $task->save();

        if($request->has('users')){
            $task->users()->sync($request->users);
        }

        
        if($request->has('clients')){
            $task->clients()->sync($request->clients);
        }
        
        if($request->has('tags')){
            $task->tags()->sync($request->tags);
        }

        Session::flash('message', 'Tugas  "'.$request->title.'" berhasil diubah'); 
        Session::flash('alert-class', 'alert-success'); 
        return redirect(route('tasks.edit',['task'=>$task->id]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $task=Task::findOrFail($id);
        Session::flash('message', 'Tugas "'.$task->title.'" berhasil dihapus'); 
        Session::flash('alert-class', 'alert-success'); 
        $task->delete();
        return redirect(route('tasks.index'));
    }
}
