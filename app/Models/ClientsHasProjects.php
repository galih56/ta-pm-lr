<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientsHasProjects extends Model
{
    protected $table = 'clients_has_projects';

    public $timestamps = false;

    protected $fillable = [
        'projects_id',
        'clients_id',
    ];

    protected static function boot(){
        parent::boot();
        static::deleting(function ($cp) {
            foreach ($cp->task_member as $item) {
                $item->delete();
            }
        });
    }

    public function project(){
        return $this->belongsTo(Project::class,'projects_id');
    }

    public function client(){
        return $this->belongsTo(Client::class,'clients_id');
    }

    public function task_member(){
        return $this->hasOne(TaskMember::class,'project_clients_id');
    }  
}
