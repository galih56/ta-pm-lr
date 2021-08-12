<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Client extends Authenticatable
{
    protected $table = 'clients';
    public $timestamps = false;
    /**
     * Disiapkan saja, belum dibutuhkan
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email','description', 'phone_number','city','institution', 
    ];

    public function projects(){
        return $this->hasMany(ClientsHasProjects::class,'clients_id');
    }
}
