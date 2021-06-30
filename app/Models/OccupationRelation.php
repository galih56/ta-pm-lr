<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OccupationRelation extends Model
{
    use HasFactory;

    protected $table = 'occupation_relations';

    public $timestamps = false;

    protected $fillable = [
        'parent_id',
        'child_id',
    ];

    public function parent(){
        return $this->belongsTo(Occupation::class,'parent_id');
    }
    
    public function child(){
        return $this->belongsTo(Occupation::class,'child_id');
    }
}
