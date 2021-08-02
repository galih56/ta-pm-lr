<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * Disiapkan saja, belum dibutuhkan
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email','description', 'phone_number', 
    ];

    public function project_clients(){
        return $this->hasMany(ProjectClient::class,'clients_id');
    }
}
