<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class ProjectImport implements ToCollection, WithHeadingRow, WithValidation
{
    use Importable;
    public $collection;

    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        dd($rows);
        // $this->collection = $collection->transform(function ($row) {
        //     return [
        //         'rank' => $row[0],
        //         'name' => $row[1],
        //     ];
        // });
        // return $this->collection;
    }
    
    public function rules(): array
    {
        return [
            'wbs' => 'required|string', 
            'title' => 'required|string', 
            'start' => 'required|date|date_format:d/m/y' ,
            'end' => 'required|date|date_format:d/m/y' ,
            'actual_start' => 'required|date|date_format:d/m/y' ,
            'actual_end' => 'date|date_format:d/m/y' ,
        ];
    }
}



/*
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
        $start=$this->validateDateTime($row['start']);
        $end=$this->validateDateTime($row['end']);
        $actual_start=$this->validateDateTime($row['actual_start']);
        $actual_end=$this->validateDateTime($row['actual_end']);
        
        if(empty($row['title'])) {
            $errors['error']=true;
            $errors['messages'][]=['row'=>$i,'title'=> 'Title column is required','data'=>$row];
        }
        if(empty($row['wbs'])) {
            $errors['error']=true;
            $errors['messages'][]=['row'=>$i,'title'=> 'WBS column is required','data'=>$row];
        }

        if(!$start || !$end) {
            $errors['error']=true;
            $errors['messages'][]=['row'=>$i,'title'=> 'start/end column must be a valid date (d/m/Y)','data'=>$row];
        }
        
        if(array_key_exists('actual_start',$row)){ 
            if(!empty($row['actual_start']) ){
                if(!$actual_start) {
                    $errors['error']=true;
                    $errors['messages'][]=['row'=>$i,'title'=> 'actual_start column must be a valid date (d/m/Y)','data'=>$row];
                }
            }   
        }
        
        if(array_key_exists('actual_end',$row)){ 
            if(!empty($row['actual_end'])){
                if(!$actual_end) {
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
        
        if($start) {  
            $start = Carbon::createFromFormat('d/m/Y', $start);
            if(empty($earliest_date)){
                $earliest_date=$start;   
            }else if($earliest_date->gt($start))
            {
                $earliest_date=$start;   
            }
        }   
        if($end){
            $end = Carbon::createFromFormat('d/m/Y',$end);
            if(empty($latest_date)){
                $latest_date=$end;   
            } else if($latest_date->lt($end)){
                $latest_date=$end;   
            }    
        }

        if($start) $row['start']=$start->format('Y-m-d');
        if($end) $row['end']=$end->format('Y-m-d');
        if($actual_start) $row['actual_start']=$actual_start->format('Y-m-d');
        if($actual_end) $row['actual_end']=$actual_end->format('Y-m-d');

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
        $list['start']=$list['start'];
        $list['end']=$list['end'];
        if($list['actual_start']) $list['actual_start']=$list['actual_start'];
        if($list['actual_end']) $list['actual_end']=$list['actual_end'];
        $list=TaskList::create($list);
        foreach ($tasks as $j => $task) {
            $task['lists_id']=$list->id;
            $task['is_subtask']=true;
            $subtasks=[];
            if(array_key_exists('subtasks',$task)) $subtasks=$task['subtasks'];
            $task['start']=$task['start'];
            $task['end']=$task['end'];
            if($task['actual_start']) $task['actual_start']=$task['actual_start'];
            if($task['actual_end']) $task['actual_end']=$task['actual_end'];
            $task=$this->makeLabel($task);
            $task=Task::create($task);
            foreach ($subtasks as $k => $subtask) {
                $subtask['parent_task_id']=$task->id;
                $subtask['is_subtask']=true;
                $subtask=$this->makeLabel($subtask);
                $subtask['start']=$subtask['start'];
                $subtask['end']=$subtask['end'];
                if($subtask['actual_start']) $subtask['actual_start']=$subtask['actual_start'];
                if($subtask['actual_end']) $subtask['actual_end']=$subtask['actual_end'];
                Task::create($subtask);
            }
        }
    }

    return $project;
}

*/
