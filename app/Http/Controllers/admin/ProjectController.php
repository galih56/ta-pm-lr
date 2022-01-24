<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\User;
use App\Models\Client;
use App\Models\Team;
use App\Models\Task;
use App\Models\TaskList;
use Response;
use Session;
use Auth;
use App\Exports\ProjectExport;
use App\Imports\ProjectImport;
use Carbon\Carbon;

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

    public function getImportFormat(){
        $file_path = public_path('admin/import-format.xlsx');
        if (file_exists($file_path))
        {
            // Send Download
            return Response::download($file_path, 'import-format.xlsx', [
                'Content-Length: '. filesize($file_path)
            ]);
        }
        else
        {
            // Error
            exit('Requested file does not exist on our server!');
        }
    }

    function checkWBSFormat($row){  
        $wbs=explode('.',$row['wbs'].'');
        if($row['wbs'])
        $first_item=$wbs[array_key_first($wbs)];
        $last_item=$wbs[array_key_last($wbs)];
        if($first_item='' || $last_item=='') return false;
        for ($i=0; $i < count($wbs); $i++) { 
            $check=$wbs[$i];
            if(empty($check) || !is_numeric($check)){
                return false;
            }
        }
        return $wbs;
    }

    function validateDateTime($str)
    {   
        try {
            $str1=Carbon::createFromFormat('d/m/Y', $str)->format('d/m/Y');
            return true;
        } catch (\Exception $e) {
            return false;
        }
        return false;
        
        // d/m/Y
        if(strlen($str)>=8){
            return false;
        }
        // if (preg_match("/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/",$str)) return true;  
    }
    

    function makeLabel($data){
        if(!empty($data['actual_start'])){
            $start = Carbon::createFromFormat('d/m/Y', $data['start'])->format('d/m/Y');
            $actual_start = Carbon::createFromFormat('d/m/Y', $data['actual_start'])->format('d/m/Y');
            if($actual_start<$start) $data['start_label']='Mulai lebih cepat';
            if($actual_start>$start) $data['start_label']='Mulai terlambat';
            if($actual_start==$start) $data['start_label']='Mulai tepat waktu';
        }
        
        if(!empty($data['actual_end'])){
            $end = Carbon::createFromFormat('d/m/Y', $data['end'])->format('d/m/Y');
            $actual_end = Carbon::createFromFormat('d/m/Y', $data['actual_end'])->format('d/m/Y');
            if($actual_end<$end) $data['end_label']='Selesai lebih cepat';
            if($actual_end>$end) $data['end_label']='Selesai terlambat';
            if($actual_end==$end) $data['end_label']='Selesai tepat waktu';
        }
        return $data;
    }


    public function import(Request $request,$id=null){
        // https://github.com/SpartnerNL/Laravel-Excel/issues/1226#issuecomment-306734223
        $project=null;
        try {
            $import = new ProjectImport();
            $imported_data = $import->toCollection($request->file('file')->store('temp'));
    
            $data=[];
            $earliest_date=null;
            $latest_date=null;
            $errors=['error'=>false,'messages'=>[],'data'=>null];
            if($imported_data->count()){
                $rows=$imported_data[0];
                for ($i=0; $i < $rows->count(); $i++) { 
                    $row=$rows[$i]->toArray();          
                    
                    if(empty($row['title'])) {
                        $errors['error']=true;
                        $errors['messages'][]=['row'=>$i,'title'=> 'Title column is required','data'=>$row];
                    }
                    if(empty($row['wbs'])) {
                        $errors['error']=true;
                        $errors['messages'][]=['row'=>$i,'title'=> 'WBS column is required','data'=>$row];
                    }

                    if(!$this->validateDateTime($row['start']) || !$this->validateDateTime($row['end'])) {
                        $errors['error']=true;
                        $errors['messages'][]=['row'=>$i,'title'=> 'start/end column must be a valid date (d/m/Y)','data'=>$row];
                    }
                    
                    if(array_key_exists('actual_start',$row)){ 
                        if(!empty($row['actual_start']) ){
                            if(!$this->validateDateTime($row['actual_start'])) {
                                $errors['error']=true;
                                $errors['messages'][]=['row'=>$i,'title'=> 'actual_start column must be a valid date (d/m/Y)','data'=>$row];
                            }
                        }   
                    }
                    
                    if(array_key_exists('actual_end',$row)){ 
                        if(!empty($row['actual_end'])){
                            if(!$this->validateDateTime($row['actual_end'])) {
                                $errors['error']=true;
                                $errors['messages'][]=['row'=>$i,'title'=> 'actual_end column must be a valid date (d/m/Y)','data'=>$row];
                            }
                        }   
                    }

                    $wbs=$this->checkWBSFormat($row);
                    if(!$wbs){
                        $errors['error']=true;
                        $errors['messages'][]=['row'=>$i,'title'=> 'WBS format is invalid','data'=>$row];
                    }
                    
                    if($this->validateDateTime($row['start'])) {  
                        $start = Carbon::createFromFormat('d/m/Y', $row['start']);
                        if(empty($earliest_date)){
                            $earliest_date=$start;   
                        }else if($earliest_date->gt($start))
                        {
                            $earliest_date=$start;   
                        }
                    }   
                    if($this->validateDateTime($row['end'])){
                        $end = Carbon::createFromFormat('d/m/Y', $row['end']);
                        if(empty($latest_date)){
                            $latest_date=$end;   
                        } else if($latest_date->lt($start)){
                            $latest_date=$end;   
                        }    
                    }

                    if($wbs){
                        if(count($wbs) == 1){
                            //create list
                            $data[$wbs[0]]=$row;
                        }
                        
                        if(count($wbs) == 2){
                            //create task
                            $data[$wbs[0]]['tasks'][$wbs[1]]=$row;
                        }
        
                        if(count($wbs) == 3){
                            //create subtask
                            $data[$wbs[0]]['tasks'][$wbs[1]]['subtasks'][$wbs[2]]=$row;
                        }
                    }
                }

                if($errors['error']==true){
                    return $errors;
                }
                
                if($id){
                    $project=Project::findOrFail($id);
                }  else{
                    $project=new Project();
                    $project->title=$request->title;
                    $project->description=$request->description;
                    $project->start=$earliest_date;
                    $project->end=$latest_date;
                    $project->save();
                    
                    if($request->has('teams')){
                        $project->teams()->sync($request->teams);
                    }
                    
                    if($request->has('clients')){
                        $project->clients()->sync($request->clients);
                    }
                }  
    
                foreach ($data as $i => $list) {
                    $list['projects_id']=$project->id;
                    $tasks=[];
                    if(array_key_exists('tasks',$list)) $tasks= $list['tasks'];
                    $list['start']=Carbon::createFromFormat('d/m/Y', $list['start'])->format('Y-m-d');
                    $list['end']=Carbon::createFromFormat('d/m/Y', $list['end'])->format('Y-m-d');
                    if($list['actual_start']) $list['actual_start']=Carbon::createFromFormat('d/m/Y', $list['actual_start'])->format('Y-m-d');
                    if($list['actual_end']) $list['actual_end']=Carbon::createFromFormat('d/m/Y', $list['actual_end'])->format('Y-m-d');
                    $list=TaskList::create($list);
                    foreach ($tasks as $j => $task) {
                        $task['lists_id']=$list->id;
                        $task['is_subtask']=true;
                        $subtasks=[];
                        if(array_key_exists('subtasks',$task)) $subtasks=$task['subtasks'];
                        $task['start']=Carbon::createFromFormat('d/m/Y', $task['start'])->format('Y-m-d');
                        $task['end']=Carbon::createFromFormat('d/m/Y', $task['end'])->format('Y-m-d');
                        if($task['actual_start']) $task['actual_start']=Carbon::createFromFormat('d/m/Y', $task['actual_start'])->format('Y-m-d');
                        if($task['actual_end']) $task['actual_end']=Carbon::createFromFormat('d/m/Y', $task['actual_end'])->format('Y-m-d');
                        $task=$this->makeLabel($task);
                        $task=Task::create($task);
                        foreach ($subtasks as $k => $subtask) {
                            $subtask['parent_task_id']=$task->id;
                            $subtask['is_subtask']=true;
                            $subtask=$this->makeLabel($subtask);
                            $subtask['start']=Carbon::createFromFormat('d/m/Y', $subtask['start'])->format('Y-m-d');
                            $subtask['end']=Carbon::createFromFormat('d/m/Y', $subtask['end'])->format('Y-m-d');
                            if($subtask['actual_start']) $subtask['actual_start']=Carbon::createFromFormat('d/m/Y', $subtask['actual_start'])->format('Y-m-d');
                            if($subtask['actual_end']) $subtask['actual_end']=Carbon::createFromFormat('d/m/Y', $subtask['actual_end'])->format('Y-m-d');
                            Task::create($subtask);
                        }
                    }
                }
    
                return $project;
            }
        } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
            $failures = $e->failures();
            return response()->json($failures,500);
        } 
    }
    // https://stackoverflow.com/questions/57212305/how-to-skip-blank-rows-in-maatwebsite-excel-3-1-for-model-way-import-on-laravel
}
