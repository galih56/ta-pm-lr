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
use Carbon\Carbon;

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
    public function edit($id,$project=null,$list=null)
    {
        $task=Task::with('list')->with('parentTask')->with('members.user')->findOrFail($id);
        $tasks=Task::orderBy('created_at','DESC')->with('list.project')->with('parentTask.list.project')->get();
        if($project){
            if($task->parentTask){
                return $task->parentTask->list->project;
            }else{
                return $task->list->project;
            }
            if(empty($project)) $project=Project::findOrFail($project);
        }
        if($list){
            $list=$task->list;
            if(empty($list)) $list=TaskList::findOrFail($list);
        }
        $users=User::orderBy('name','asc')->get();
        $projects=Project::orderBy('title','asc')->get();
        $tags=Tag::orderBy('title','asc')->get();
        $clients=Client::orderBy('institution','asc')->get();
        $lists=TaskList::orderBy('title','asc')->get();
        $tasks=Task::orderBy('title','asc')->get();
        return view('admin.tasks.edit')->with(compact('project','list','task','projects','users','clients','tags','lists','tasks'));
    }
    // bayu@pttati.co.id
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
        $task->progress=$request->progress;
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


    public function startTask(Request $request,$id){
        $task=Task::findOrFail($id);
        $task->actual_start= Carbon::now()->toDateTimeString();

        if($task->actual_start){
            $start = Carbon::parse($task->start)->format('Y-m-d');
            $actual_start = Carbon::parse($task->actual_start)->format('Y-m-d');
            if($actual_start<$start) $task->start_label='Mulai lebih cepat';
            if($actual_start>$start) $task->start_label='Mulai terlambat';
            if($actual_start==$start) $task->start_label='Mulai tepat waktu';
        }
        $task->save();
        return redirect()->back();
    }

    function updateParentProgress($parent_task_id){
        $parent_task=Task::with('cards')->findOrFail($parent_task_id);
        $valuePerSubtask=100/count($parent_task->cards);
        $completeSubtaskCounter=0;
        for ($i = 0; $i < count($parent_task->cards); $i++) {
            $subtask = $parent_task->cards[$i];
            if($subtask->complete){ $completeSubtaskCounter++; }
        }
        $progress=round($completeSubtaskCounter*$valuePerSubtask);
        $parent_task->progress=$progress;
        if($progress>=100){
            $parent_task->actual_end = Carbon::now()->toDateTimeString();
            $parent_task->complete=true;
        }else{
            $parent_task->actual_end = null;
            $parent_task->complete=false;
        }
        $parent_task->save();
    }    

    public function updateComplete(Request $request,$id){
        $task=Task::with('cards')->with('parentTask')->findOrFail($id);
        if($request->complete){
            $task->progress=100;
            $task->complete=true;
                
            $end = Carbon::parse($task->end)->format('Y-m-d');
            $task->actual_end = Carbon::now()->toDateTimeString();
            if($task->actual_end<$end) $task->end_label='Selesai lebih cepat';
            if($task->actual_end>$end) $task->end_label='Selesai terlambat';
            if($task->actual_end==$end) $task->end_label='Selesai tepat waktu';
        }else{
            $task->progress=0;
            $task->complete=false;
            $task->actual_end=null;
            $task->end_label='Belum selesai';
        }
        $task->save();
          //is a subtask
        // if($task->parentTask){
        //     // dd('subtask',$task->id,$task->complete,$task->progress,$task->parentTask,$task->list);
        //     $task->parentTask->updateProgress();
        // }else{
        //     // dd('parent task',$task->id,$task->complete,$task->progress,$task->parentTask,$task->list);
        //     $task->list->updateProgress();
        // }
        return redirect()->back();
    }

}
