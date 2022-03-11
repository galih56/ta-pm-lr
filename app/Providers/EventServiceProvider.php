<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use App\Observers\ProjectObserver;
use App\Observers\TaskObserver;
use App\Observers\TaskListObserver;
use App\Observers\UserObserver;
use App\Observers\ClientObserver;
use App\Models\Project;
use App\Models\Task;
use App\Models\TaskList;
use App\Models\User;
use App\Models\Client;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        // unused
        // Project::observe(ProjectObserver::class);
        // TaskList::observe(TaskListObserver::class);
        // Task::observe(TaskObserver::class);
        // User::observe(UserObserver::class);
        // Client::observe(ClientObserver::class);
    }
}
