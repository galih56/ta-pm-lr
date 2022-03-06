<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Task extends Model
{
    use HasFactory;
    
    protected $table = 'tasks';

    public $timestamps = true;

    protected $fillable = [
        'id','users_id', 'title', 'description', 'complete', 'end', 'start',
        'actual_start', 'actual_end', 'start_label', 'end_label', 
        'progress', 'is_subtask', 'lists_id','parent_task_id'
    ];

    protected $casts = [
        'progress' => 'double',
    ];


    public static function boot() {
        parent::boot();
        static::saving(function($task){
            if(!empty($task->start)  && !empty($task->end)){
                $start = Carbon::parse($task->start);
                $end = Carbon::parse($task->end);
                $days= $start->diffInDays($end);
                $task->days=$days+1;
            }       

            if(!empty($task->actual_start) && !empty($task->actual_end)){
                $actual_start = Carbon::parse($task->actual_start);
                $actual_end = Carbon::parse($task->actual_end);
                $work_days= $actual_start->diffInDays($actual_end);
                $task->work_days=$work_days+1;
            }
            
            if($task->progress==100){
                $task->complete=true;
            }else{
                $task->complete=false;
            }
            
            
            if($task->actual_start){
                $start = Carbon::parse($task->start)->format('Y-m-d');
                $actual_start = Carbon::parse($task->actual_start)->format('Y-m-d');
                if($actual_start<$start) $task->start_label='Mulai lebih cepat';
                if($actual_start>$start) $task->start_label='Mulai terlambat';
                if($actual_start==$start) $task->start_label='Mulai tepat waktu';
                $task->startParent();
            }else{
                $task->actual_start=$task->actual_start;
                $task->start_label='Belum dimulai';
            }

            if($task->actual_end){
                $end = Carbon::parse($task->end)->format('Y-m-d');
                $actual_end = Carbon::parse($task->actual_end)->format('Y-m-d');
                if($actual_end<$end) $task->end_label='Selesai lebih cepat';
                if($actual_end>$end) $task->end_label='Selesai terlambat';
                if($actual_end==$end) $task->end_label='Selesai tepat waktu';
            }else{
                $task->actual_end=$task->actual_end;
                $task->end_label='Belum selesai';
            }    
        });
        
        static::saved(function($task){
            //is a subtask
            if($task->parentTask){
                $task->parentTask->updateProgress();
            }else{
                $task->list->updateProgress();
            }
        });

        static::deleted(function($task){
            //is a subtask
            if($task->parentTask){
                $task->parentTask->updateProgress();
            }else{
                $task->list->updateProgress();
            }
        });

        static::deleting(function($task) { 
            foreach ($task->members as $i => $member) {
                $member->delete();
            }
            foreach ($task->cards as $k => $subtask) {
                $subtask->delete();
            }
            $task->tags()->detach();
            $task->task_members()->detach();
        });
    }

    public function updateProgress(){      
        if(count($this->cards)){
            $valuePerSubtask=100/count($this->cards);
            $completeSubtaskCounter=0;
            for ($i = 0; $i < count($this->cards); $i++) {
                $subtask = $this->cards[$i];
                if($subtask->complete){ 
                    $completeSubtaskCounter++; 
                }
            }
            $progress=$completeSubtaskCounter*$valuePerSubtask;
            if($progress>=100){
                $this->actual_end= Carbon::now()->toDateTimeString();
                $this->complete=true;
            }else{
                $this->actual_end= null;
                $this->complete=false;
            }
            // dd($this->progress,$this->actual_end);

            $this->progress=$progress;
            $this->save();
            return $this->progress;
        }
    }

    
    function startParent(){   
        $parent=$this->parentTask;
        if($parent){
            //if has parent
            //mark parent as started
            if(empty($this->parentTask->actual_start)){
                $parent->actual_start=Carbon::now()->toDateTimeString();
                $parent->save();
            }
        }
        return $this->parentTask;
    }

    public function scopeExclude($query, $value = []) 
    {
        return $query->select(array_diff($this->fillable, (array) $value));
    }
    
    public function logs(){
        return $this->hasMany(ActivityLog::class,'tasks_id');
    }

    public function comments(){
        return $this->hasMany(Comment::class,'tasks_id');
    }

    public function tags(){
        return $this->belongsToMany(Tag::class,'tasks_has_tags','tasks_id','tags_id');
    }

    public function childrenTasks(){
        return $this->hasMany(Task::class,'parent_task_id');
    }

    public function members(){
        return $this->hasMany(TaskMember::class,'tasks_id');
    }

    public function task_members(){
        return $this->belongsToMany(ProjectMember::class,'task_members','tasks_id','project_members_id');
    }

    public function parentTask(){
        return $this->belongsTo(Task::class,'parent_task_id');
    }

    public function attachments(){
        return $this->hasMany(TaskAttachment::class,'tasks_id');
    }

    public function list(){
        return $this->belongsTo(TaskList::class,'lists_id');
    }

    public function creator(){
        return $this->belongsTo(User::class,'users_id');
    }
    
    public function column(){
        return $this->belongsTo(TaskList::class,'lists_id');
    }

    public function cards(){
        return $this->hasMany(Task::class,'parent_task_id');
    }

    public function approvals(){
        return $this->hasMany(Approval::class,'lists_id');
    }

    function validateDateTime($data)
    {       
        try {
            $date=null;
            switch (gettype($data)) {
                case 'integer':
                    $date=Carbon::instance(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($data))->format('d/m/Y');
                    break;
                case 'string':
                    $date=Carbon::createFromFormat('d/m/Y', $data)->format('d/m/Y');
                    break;
                default:
                    $date=Carbon::createFromFormat('d/m/Y', $data)->format('d/m/Y');
                    break;
            }
            return $date;
        } catch (\Exception $e) {
            return null;
        }
    }

}



    // SELECT avg(progress),parent_task_id
    // FROM tasks
    // GROUP BY parent_task_id
    // public function getDynamicProgressAttribute(){
    //     if(count($this->cards)){
    //         $subtasks=$this->cards()->selectRaw('avg(progress)')->first();
    //         return $subtasks->avg;
    //     }else if($this->progress!=null){
    //         return $this->progress;
    //     }else{
    //         return 0;
    //     }
    // }