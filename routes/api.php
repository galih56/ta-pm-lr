<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register','App\Http\Controllers\front\UserController@register');
Route::post('/login','App\Http\Controllers\front\UserController@login');
Route::post('/logout','App\Http\Controllers\front\UserController@logout');

Route::resource('clients', 'App\Http\Controllers\front\ClientController');
Route::resource('lists', 'App\Http\Controllers\front\ListController');
Route::post('lists/{id}/extend-deadline', 'App\Http\Controllers\front\ListController@extendDeadline');
Route::resource('tasks', 'App\Http\Controllers\front\TaskController');
Route::get('tasks/{id}/members', 'App\Http\Controllers\front\TaskController@getMembers');
Route::post('tasks/{id}/extend-deadline', 'App\Http\Controllers\front\TaskController@extendDeadline');
Route::patch('tasks/{id}/start', 'App\Http\Controllers\front\TaskController@startTask');
Route::patch('tasks/{id}/complete', 'App\Http\Controllers\front\TaskController@updateComplete');
Route::resource('task-members', 'App\Http\Controllers\front\TaskMemberController');
Route::resource('task-attachments', 'App\Http\Controllers\front\TaskAttachmentController');
Route::resource('files', 'App\Http\Controllers\front\FileController');
Route::get('files/{id}/download', 'App\Http\Controllers\front\FileController@download');
Route::patch('meetings/add-meeting-members', 'App\Http\Controllers\front\MeetingController@addMembers');
Route::patch('meetings/remove-meeting-members', 'App\Http\Controllers\front\MeetingController@removeMembers');
Route::resource('meetings', 'App\Http\Controllers\front\MeetingController');
Route::resource('meeting-members', 'App\Http\Controllers\front\MeetingMemberController');
Route::resource('teams', 'App\Http\Controllers\front\TeamController');
Route::resource('team-members', 'App\Http\Controllers\front\TeamMemberController');
Route::resource('tags', 'App\Http\Controllers\front\TagController');
Route::resource('comments', 'App\Http\Controllers\front\CommentController');

Route::group(['prefix'=>'users'],function(){
    Route::get('/{id}/projects','App\Http\Controllers\front\UserController@getProjects');
    Route::get('/{id}/meetings','App\Http\Controllers\front\UserController@getMeetings');
    Route::get('/{id}/tasks','App\Http\Controllers\front\UserController@gettasks');
    Route::post('/{id}/get-github-access-token','App\Http\Controllers\front\UserController@getGithubAccessToken');
    Route::patch('/{id}/changepassword','App\Http\Controllers\front\UserController@changePassword');
});
Route::resource('users', 'App\Http\Controllers\front\UserController');
Route::resource('roles', 'App\Http\Controllers\front\RoleController');
Route::get('projects-overview','App\Http\Controllers\front\ProjectController@getoverallProjectReports');
Route::get('import-format','App\Http\Controllers\admin\ProjectController@getImportFormat')->name('projects.download-import-format');
Route::resource('projects', 'App\Http\Controllers\front\ProjectController');
Route::group(['prefix'=>'projects'],function(){
    Route::post('/{id}/extend-deadline', 'App\Http\Controllers\front\ProjectController@extendDeadline');
    Route::get('/{id}/reports','App\Http\Controllers\front\ProjectController@getReports');
    Route::get('/{id}/kanban','App\Http\Controllers\front\ProjectController@getKanban');
    Route::get('/{id}/export','App\Http\Controllers\front\ProjectController@export');
    Route::post('/{id}/import','App\Http\Controllers\front\ProjectController@import');
    Route::get('/{id}/tasks','App\Http\Controllers\front\ProjectController@getTasks');
    Route::get('/{id}/meetings','App\Http\Controllers\front\ProjectController@getMeetings');
    Route::get('/{id}/clients','App\Http\Controllers\front\ProjectController@getClients');
    Route::post('/{id}/clients','App\Http\Controllers\front\ProjectController@addClients');
    Route::delete('/{id}/clients/{clients_id}','App\Http\Controllers\front\ProjectController@removeClients');
    Route::get('/{id}/teams','App\Http\Controllers\front\ProjectController@getTeams');
    Route::post('/{id}/teams','App\Http\Controllers\front\ProjectController@addTeams');
    Route::delete('/{id}/teams/{teams_id}','App\Http\Controllers\front\ProjectController@removeTeams');
    Route::get('/{id}/members','App\Http\Controllers\front\ProjectController@getMembers');
    Route::get('/{id}/files','App\Http\Controllers\front\ProjectController@getFiles');
    Route::get('/{id}/gantt','App\Http\Controllers\front\ProjectController@getGanttDataSource');
});

Route::resource('project-members', 'App\Http\Controllers\front\ProjectMemberController');
Route::group(['prefix'=>'project-members'],function(){
    Route::get('/{id}/tasks','App\Http\Controllers\front\ProjectMemberController@getTasks');
});
Route::resource('approvals', 'App\Http\Controllers\front\ApprovalController');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
 