<?php

namespace App\Observers;

use App\Models\Task;
use App\Models\Notification;

class TaskObserver
{

    /**
     * Handle the Task "created" event.
     *
     * @param  \App\Models\Task  $task
     * @return void
     */
    public function created(Task $task)
    {
        Notification::create([
            'title'=>'A new task has been created',
            'message'=>$task->name,
            'notifiable_id'=>$task->id,
            'notifiable_type'=>'\App\Models\Task',
            'route'=>'\tasks\\'.$task->id
        ]);
    }

    /**
     * Handle the Task "updated" event.
     *
     * @param  \App\Models\Task  $task
     * @return void
     */
    public function updated(Task $task)
    {
        Notification::create([
            'title'=>'A task has been updated',
            'message'=>$task->name,
            'notifiable_id'=>$task->id,
            'notifiable_type'=>'\App\Models\Task',
            'route'=>'\tasks\\'.$task->id
        ]);
    }

    /**
     * Handle the Task "deleted" event.
     *
     * @param  \App\Models\Task  $task
     * @return void
     */
    public function deleted(Task $task)
    {
        Notification::create([
            'title'=>'A task has been deleted',
            'message'=>$task->name,
            'notifiable_id'=>$task->id,
            'notifiable_type'=>'\App\Models\Task',
            'route'=>'\tasks\\'.$task->id
        ]);
    }
}
