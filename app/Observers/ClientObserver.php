<?php

namespace App\Observers;

use App\Models\Client;
use App\Models\Notification;

class ClientObserver
{
    /**
     * Handle the Client "created" event.
     *
     * @param  \App\Models\Client  $client
     * @return void
     */
    public function created(Client $client)
    {
        Notification::create([
            'title'=>'A new client has been created',
            'message'=>$client->name,
            'notifiable_id'=>$client->id,
            'notifiable_type'=>'\App\Models\Client',
            'route'=>'\clients\\'.$client->id
        ]);
    }

    /**
     * Handle the Client "updated" event.
     *
     * @param  \App\Models\Client  $client
     * @return void
     */
    public function updated(Client $client)
    {
        Notification::create([
            'title'=>'A client has been updated',
            'message'=>$client->name,
            'notifiable_id'=>$client->id,
            'notifiable_type'=>'\App\Models\Client',
            'route'=>'\clients\\'.$client->id
        ]);
    }

    /**
     * Handle the Client "deleted" event.
     *
     * @param  \App\Models\Client  $client
     * @return void
     */
    public function deleted(Client $client)
    {
        Notification::create([
            'title'=>'A client has been deleted',
            'message'=>$client->name,
            'notifiable_id'=>$client->id,
            'notifiable_type'=>'\App\Models\Client',
            'route'=>'\clients\\'.$client->id
        ]);
    
    }
}
