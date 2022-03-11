<?php

namespace App\Observers;

use App\Models\Project;
use App\Models\Notification;

class ProjectObserver
{
    /**
     * Handle the Project "created" event.
     *
     * @param  \App\Models\Project  $project
     * @return void
     */
    public function created(Project $project)
    {
        Notification::create([
            'title'=>'A new project has been created',
            'message'=>$project->name,
            'notifiable_id'=>$project->id,
            'notifiable_type'=>'\App\Models\Project',
            'route'=>'\projects\\'.$project->id
        ]);
    }

    /**
     * Handle the Project "updated" event.
     *
     * @param  \App\Models\Project  $project
     * @return void
     */
    public function updated(Project $project)
    {
        Notification::create([
            'title'=>'A project has been updated',
            'message'=>$project->name,
            'notifiable_id'=>$project->id,
            'notifiable_type'=>'\App\Models\Project',
            'route'=>'\projects\\'.$project->id
        ]);
    }

    /**
     * Handle the Project "deleted" event.
     *
     * @param  \App\Models\Project  $project
     * @return void
     */
    public function deleted(Project $project)
    {
        Notification::create([
            'title'=>'A project has been deleted',
            'message'=>$project->name,
            'notifiable_id'=>$project->id,
            'notifiable_type'=>'\App\Models\Project',
            'route'=>'\projects\\'.$project->id
        ]);
    
    }
}
