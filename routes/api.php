<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('users', 'App\Http\Controllers\UserController');
Route::group(['prefix'=>'users'],function(){
    Route::post('/register','App\Http\Controllers\UserController@register');
    Route::post('/login','App\Http\Controllers\UserController@login');
    Route::post('/logout','App\Http\Controllers\UserController@logout');
    Route::get('/{id}/projects','App\Http\Controllers\UserController@getProjects');
    Route::get('/{id}/meetings','App\Http\Controllers\UserController@getMeetings');
    Route::get('/{id}/tasks','App\Http\Controllers\UserController@gettasks');
});

Route::resource('projects', 'App\Http\Controllers\ProjectController');
Route::group(['prefix'=>'projects'],function(){
    Route::get('/{id}/tasks','App\Http\Controllers\ProjectController@getTasks');
    Route::get('/{id}/meetings','App\Http\Controllers\ProjectController@getMeetings');
    Route::get('/{id}/teams','App\Http\Controllers\ProjectController@getTeams');
    Route::get('/{id}/teams','App\Http\Controllers\ProjectController@addTeams');
    Route::get('/{id}/teams/{teams_id}','App\Http\Controllers\ProjectController@addTeams');
    Route::get('/{id}/members','App\Http\Controllers\ProjectController@getMembers');
    Route::get('/{id}/files','App\Http\Controllers\ProjectController@getFiles');
    Route::get('/{id}/reports','App\Http\Controllers\ProjectController@getReports');
});

Route::resource('project-members', 'App\Http\Controllers\ProjectMemberController');
Route::group(['prefix'=>'project-members'],function(){
    Route::get('/{id}/tasks','App\Http\Controllers\ProjectMemberController@getTasks');
});
Route::resource('lists', 'App\Http\Controllers\ListController');
Route::resource('tasks', 'App\Http\Controllers\TaskController');
Route::resource('task-members', 'App\Http\Controllers\TaskMemberController');
Route::resource('task-attachments', 'App\Http\Controllers\TaskAttachmentController');
Route::resource('files', 'App\Http\Controllers\FileController');
Route::resource('meetings', 'App\Http\Controllers\MeetingController');
Route::resource('meeting-members', 'App\Http\Controllers\MeetingMemberController');
Route::resource('member-role', 'App\Http\Controllers\MemberRoleController');
Route::resource('teams', 'App\Http\Controllers\TeamController');
Route::resource('team-members', 'App\Http\Controllers\TeamMemberController');
Route::resource('tags', 'App\Http\Controllers\TagController');
Route::resource('comments', 'App\Http\Controllers\CommentController');
Route::resource('activity-logs', 'App\Http\Controllers\ActivityLogController');   

Route::get('/occupations/tree','App\Http\Controllers\OccupationController@getTree');
Route::resource('occupations', 'App\Http\Controllers\OccupationController');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
