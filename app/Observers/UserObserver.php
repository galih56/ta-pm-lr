<?php

namespace App\Observers;

use App\Models\User;
use App\Models\Notification;

class UserObserver
{
   
    /**
     * Handle the User "created" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function created(User $user)
    {
        Notification::create([
            'title'=>'A new user has been created',
            'message'=>$user->name,
            'notifiable_id'=>$user->id,
            'notifiable_type'=>'\App\Models\User',
            'route'=>'\users\\'.$user->id
        ]);
    }

    /**
     * Handle the User "updated" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function updated(User $user)
    {
        Notification::create([
            'title'=>'A user has been updated',
            'message'=>$user->name,
            'notifiable_id'=>$user->id,
            'notifiable_type'=>'\App\Models\User',
            'route'=>'\users\\'.$user->id
        ]);
    }

    /**
     * Handle the User "deleted" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function deleted(User $user)
    {
        Notification::create([
            'title'=>'A user has been deleted',
            'message'=>$user->name,
            'notifiable_id'=>$user->id,
            'notifiable_type'=>'\App\Models\User',
            'route'=>'\users\\'.$user->id
        ]);
    
    }
}
