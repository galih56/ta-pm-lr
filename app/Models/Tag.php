<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    protected $table = 'tags';

    public $timestamps = false;

    protected $fillable = [
        'title',
    ];

    public function tasks(){
        return $this->hasMany(TasksHasTags::class,'tags_id');
    }
}
