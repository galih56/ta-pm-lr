<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    protected $table = 'lists';

    public $timestamps = true;

    protected $fillable = [
        'name', 'type', 'size', 'source', 'base64',
        'icon', 'path',

    ];

    public function taskAttachments(){
        return $this->hasMany(TaskAttachment::class,'files_id');
    }
    
    public function user(){
        return $this->belongsTo(User::class,'users_id');
    }
}
