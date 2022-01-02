<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;
Route::get('test',function(Request $request){
    
    $user=User::create([
        'name'=> 'administrator 2',
        'email'=> 'admin2@pttati.co.id',
        'roles_id'=> 2,
        'password'=> Hash::make('123456'),
        'verified'=> true,
    ]);

    dd($user);
    event(new \App\Events\NotificationEvent(['users_id'=>18]));
});
Route::group(['prefix' => 'master'],function(){
    Route::redirect('/', 'master/users')->name('home');
    Route::get('/login' , 'App\Http\Controllers\admin\UserController@loginForm')->name('login.form.admin');
    Route::post('/login' , 'App\Http\Controllers\admin\UserController@login')->name('login.admin');
    Route::post('/logout' , 'App\Http\Controllers\admin\UserController@logout')->name('logout.admin');
    Route::group(['middleware'=>['auth']],function(){ 
        Route::resource('/users','App\Http\Controllers\UserController');
        Route::group(['prefix'=>'users'],function(){
                Route::post('/{id}/change-password','App\Http\Controllers\admin\UserController@changePassword')->name('admins.change-password');
        });
        Route::resource('/projects','App\Http\Controllers\admin\ProjectController');
        Route::resource('/clients','App\Http\Controllers\admin\ClientController');
        Route::resource('/teams','App\Http\Controllers\admin\TeamController');
        Route::resource('/roles','App\Http\Controllers\admin\RoleController');        
        Route::resource('/users','App\Http\Controllers\admin\UserController');        
    });
});


Route::get('/{path?}', function () {
    return view('index');
})->where('path', '.*');
