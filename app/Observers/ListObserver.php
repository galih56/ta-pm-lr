<?php

namespace App\Observers;

use App\Models\TaskList;
use App\Models\Notification;

class ListObserver
{
    /**
     * Handle the TaskList "created" event.
     *
     * @param  \App\Models\TaskList  $list
     * @return void
     */
    public function created(TaskList $list)
    {
        Notification::create([
            'title'=>'A new list has been created',
            'message'=>$list->name,
            'notifiable_id'=>$list->id,
            'notifiable_type'=>'\App\Models\Project',
            'route'=>'\lists\\'.$list->id
        ]);
    }

    /**
     * Handle the TaskList "updated" event.
     *
     * @param  \App\Models\TaskList  $list
     * @return void
     */
    public function updated(TaskList $list)
    {
        
        Notification::create([
            'title'=>'A new list has been updated',
            'message'=>$list->name,
            'notifiable_id'=>$list->id,
            'notifiable_type'=>'\App\Models\Project',
            'route'=>'\lists\\'.$list->id
        ]);
    
    }

    /**
     * Handle the TaskList "deleted" event.
     *
     * @param  \App\Models\TaskList  $list
     * @return void
     */
    public function deleted(TaskList $list)
    {
        Notification::create([
            'title'=>'A new list has been deleted',
            'message'=>$list->name,
            'notifiable_id'=>$list->id,
            'notifiable_type'=>'\App\Models\Project',
        ]);
    }

    /**
     * Handle the TaskList "restored" event.
     *
     * @param  \App\Models\TaskList  $list
     * @return void
     */
    public function restored(TaskList $list)
    {
        //
    }

    /**
     * Handle the TaskList "force deleted" event.
     *
     * @param  \App\Models\TaskList  $list
     * @return void
     */
    public function forceDeleted(TaskList $list)
    {
        //
    }
}
