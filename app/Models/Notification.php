<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Events\NotificationEvent;

class Notification extends Model
{
    use HasFactory;
    
    protected $table = 'notifications';

    public $timestamps = true;

    protected $fillable = [
        'id', 'title', 'message', 'data',
        'created_at', 'updated_at', 'route',
        'notifiable_id', 'notifiable_type'
    ];

    public static function boot() {
        parent::boot();
        
        static::created(function($notif) { 
            // event(new NotificationEvent($notif->toArray()));
        });
    }

    public function notifiable()
    {
        return $this->morphTo();
    }
}
