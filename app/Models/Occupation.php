<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Occupation extends Model
{
    use HasFactory;
    
    protected $table = 'occupations';

    public $timestamps = false;

    protected $fillable = [
        'name',
        'color',
        'bg_color',
        'root',
    ];

    public function users(){
        return $this->hasMany(User::class,'occupations_id');
    }
    
    public function parentRelations(){
        return $this->hasOne(OccupationRelation::class,'child_id');
    }
    
    public function childrenRelations(){
        return $this->hasMany(OccupationRelation::class,'parent_id');
    }
}
