<?php
    public function startTask(Request $request,$id){
        $task=Task::with('parentTask')->findOrFail($id);
        $task->actual_start= Carbon::now()->toDateTimeString();

        if($task->actual_start){
            $start = Carbon::parse($task->start)->format('Y-m-d');
            $actual_start = Carbon::parse($task->actual_start)->format('Y-m-d');
            if($actual_start<$start) $task->start_label='Mulai lebih cepat';
            if($actual_start>$start) $task->start_label='Mulai terlambat';
            if($actual_start==$start) $task->start_label='Mulai tepat waktu';
        }
        if($task->parentTask){
            if(empty($task->parentTask->actual_start)){ 
                $task->parentTask->actual_start=Carbon::now()->toDateTimeString();
            }
        }
        $task->save();
        $task=$this->getDetailTask($id);
        return response()->json($task);
    }

    function updateProgress($task_id){
        $task=Task::with('cards')->findOrFail($task_id);
        $valuePerSubtask=100/count($task->cards);
        $completeSubtaskCounter=0;
        for ($i = 0; $i < count($task->cards); $i++) {
            $subtask = $task->cards[$i];
            if($subtask->complete){ $completeSubtaskCounter++; }
        }
        $progress=round($completeSubtaskCounter*$valuePerSubtask);
        $task->progress=$progress;
        if($progress>=100){
            $task->actual_end = Carbon::now()->toDateTimeString();
            $task->complete=true;
        }else{
            $task->actual_end = null;
            $task->complete=false;
        }
        $task->save();
    }    

    public function updateComplete(Request $request,$id){
        $task=Task::with('cards')->with('parentTask')->findOrFail($id);
        if($request->has('complete')){ 

            if($request->complete){
                if(!count($task->cards)){
                    $task->progress=100;
                }
                    
                if($task->parentTask){
                    $this->updateProgress($task->parentTask->id);
                }

                $task->complete=true;
                    
                $end = Carbon::parse($task->end)->format('Y-m-d');
                $task->actual_end = Carbon::now()->toDateTimeString();
                if($task->actual_end<$end) $task->end_label='Selesai lebih cepat';
                if($task->actual_end>$end) $task->end_label='Selesai terlambat';
                if($task->actual_end==$end) $task->end_label='Selesai tepat waktu';
            }else{
                if(!$task->parentTask){
                    $valuePerSubtask=100/count($task->cards);
                    $completeSubtaskCounter=0;
                    for ($i = 0; $i < count($task->cards); $i++) {
                        $subtask = $task->cards[$i];
                        if($subtask->complete){ $completeSubtaskCounter++; }
                    }
                    $progress=$completeSubtaskCounter*$valuePerSubtask;
                    $task->progress=round($progress);
                    $task->save();
                }else{
                    $task->progress=0;
                }                
                $task->actual_end = null;
                $task->end_label='Belum Selesai';
                $task->complete=false;
            }
        }
        $task->save();
        $task=$this->getDetailTask($task->id);
        return response()->json($task);
    }
