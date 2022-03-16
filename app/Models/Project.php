<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects';

    public $timestamps = true;

    protected $fillable = [
        'id','title', 'description', 'actual_start', 'actual_end',
        'start', 'end','progress'
    ];

    protected $casts = [
        'progress' => 'double',
    ];
    
    public static function boot() {
        parent::boot();
        static::saving(function($project) { 
            if($project->progress>=100){
                $project->actual_end= Carbon::now()->toDateTimeString();
            }
        });

        static::deleting(function($project) { 
            
            $project->clients()->detach();
            $project->teams()->detach();
            $project->users()->detach();
            
             foreach ($project->members as $i => $member) {
                $member->delete();
             }

             foreach ($project->meetings as $i => $meet) {
                $meet->delete();
             }

             foreach ($project->columns as $i => $list) {
                foreach ($list->cards as $j => $task) {
                    foreach ($task->cards as $k => $subtask) {
                        $subtask->delete();
                    }
                    $task->delete();
                }
                $list->delete();
             }
        });
    }

    public function updateProgress(){      
        $sum=0;
        if(count($this->columns)){
            for ($i = 0; $i < count($this->columns); $i++) {
                $list = $this->columns[$i];
                if($list->progress==null){
                    $list->progress=0;
                }
                $sum+=$list->progress;
            }
            $progress=$sum/count($this->columns);
            $this->progress=round($progress);
            $this->save();
        }
        return $this->progress;
    }

    
    public function startProgress(){      
        $this->actual_start= Carbon::now()->toDateTimeString();
        $this->save();
        return $this;
    }


    public function scopeExclude($query, $value = []) 
    {
        return $query->select(array_diff($this->fillable, (array) $value));
    }

    public function members(){
        return $this->hasMany(ProjectMember::class,'projects_id');
    }

    public function users(){
        return $this->belongsToMany(User::class,'project_members','projects_id','users_id');
    }

    public function lists(){
        return $this->hasMany(TaskList::class,'projects_id');
    }
    
    public function columns(){
        return $this->hasMany(TaskList::class,'projects_id');
    }

    public function meetings(){
        return $this->hasMany(Meeting::class,'projects_id');
    }
    
    public function teams(){
        return $this->belongsToMany(Team::class,'teams_has_projects','projects_id','teams_id');
    }
    
    public function approvals(){
        return $this->hasMany(Approval::class,'lists_id');
    }
    
    public function logs(){
        return $this->hasMany(ActivityLog::class,'projects_id');
    }
    
    public function clients(){
        return $this->belongsToMany(Client::class,'clients_has_projects','projects_id','clients_id');
    }

    public function notifications(){
        return $this->morphMany('App\Models\Notification', 'notifiable');
    }

    public function activities(){
        return $this->morphMany(ActivityLog::class, 'loggable');
    }

    public function notificationsCount()
    {
        return $this->notifications()->selectRaw('count(*) as count');
    }
    
    public function activitiesCount()
    {
        return $this->activities()->selectRaw('count(*) as count');
    }
}
