<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;
Route::get('test',function(Request $request){
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
        Route::group(['prefix'=>'projects'],function(){
            Route::get('{project}/lists','App\Http\Controllers\admin\ListController@index')->name('projects.lists');
            Route::get('{project}/lists/create','App\Http\Controllers\admin\ListController@create')->name('projects.lists.create');
            Route::get('{project}/lists/{list}','App\Http\Controllers\admin\ListController@edit')->name('projects.lists.edit');
            Route::get('{project}/lists/{list}/tasks/create','App\Http\Controllers\admin\TaskController@index')->name('projects.lists.tasks');
            Route::get('{project}/lists/{list}/tasks/create','App\Http\Controllers\admin\TaskController@create')->name('projects.lists.tasks.create');
            Route::get('{project}/lists/{list}/tasks/{task}','App\Http\Controllers\admin\TaskController@edit')->name('projects.lists.tasks.edit');
        });
        Route::resource('/lists','App\Http\Controllers\admin\ListController');
        Route::resource('/tasks','App\Http\Controllers\admin\TaskController');
        Route::resource('/clients','App\Http\Controllers\admin\ClientController');
        Route::resource('/teams','App\Http\Controllers\admin\TeamController');
        Route::resource('/roles','App\Http\Controllers\admin\RoleController');        
        Route::resource('/users','App\Http\Controllers\admin\UserController');        
    });
});


Route::get('/{path?}', function () {
    return view('index');
})->where('path', '.*');
