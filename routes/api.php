<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register','App\Http\Controllers\UserController@register');
Route::post('/login','App\Http\Controllers\UserController@login');
Route::post('/logout','App\Http\Controllers\UserController@logout');

Route::resource('clients', 'App\Http\Controllers\ClientController');
Route::resource('lists', 'App\Http\Controllers\ListController');
Route::post('lists/{id}/extend-deadline', 'App\Http\Controllers\ListController@extendDeadline');
Route::resource('tasks', 'App\Http\Controllers\TaskController');
Route::get('tasks/{id}/members', 'App\Http\Controllers\TaskController@getMembers');
Route::post('tasks/{id}/extend-deadline', 'App\Http\Controllers\TaskController@extendDeadline');
Route::patch('tasks/{id}/start', 'App\Http\Controllers\TaskController@startTask');
Route::patch('tasks/{id}/complete', 'App\Http\Controllers\TaskController@updateComplete');
Route::resource('task-members', 'App\Http\Controllers\TaskMemberController');
Route::resource('task-attachments', 'App\Http\Controllers\TaskAttachmentController');
Route::resource('files', 'App\Http\Controllers\FileController');
Route::get('files/{id}/download', 'App\Http\Controllers\FileController@download');
Route::patch('meetings/add-meeting-members', 'App\Http\Controllers\MeetingController@addMembers');
Route::patch('meetings/remove-meeting-members', 'App\Http\Controllers\MeetingController@removeMembers');
Route::resource('meetings', 'App\Http\Controllers\MeetingController');
Route::resource('meeting-members', 'App\Http\Controllers\MeetingMemberController');
Route::resource('member-roles', 'App\Http\Controllers\MemberRoleController');
Route::resource('teams', 'App\Http\Controllers\TeamController');
Route::resource('team-members', 'App\Http\Controllers\TeamMemberController');
Route::resource('tags', 'App\Http\Controllers\TagController');
Route::resource('comments', 'App\Http\Controllers\CommentController');
// Route::resource('activity-logs', 'App\Http\Controllers\ActivityLogController');   
// Route::resource('github-repositories', 'App\Http\Controllers\GithubRepositories');   
Route::resource('users', 'App\Http\Controllers\UserController');

Route::get('/occupations/tree','App\Http\Controllers\OccupationController@getTree');
Route::resource('occupations', 'App\Http\Controllers\OccupationController');

Route::group(['prefix'=>'users'],function(){
    Route::get('/{id}/projects','App\Http\Controllers\UserController@getProjects');
    Route::get('/{id}/meetings','App\Http\Controllers\UserController@getMeetings');
    Route::get('/{id}/tasks','App\Http\Controllers\UserController@gettasks');
    Route::post('/{id}/get-github-access-token','App\Http\Controllers\UserController@getGithubAccessToken');
});

Route::get('projects-overview','App\Http\Controllers\ProjectController@getoverallProjectReports');
Route::resource('projects', 'App\Http\Controllers\ProjectController');
Route::group(['prefix'=>'projects'],function(){
    Route::post('/{id}/extend-deadline', 'App\Http\Controllers\ProjectController@extendDeadline');
    Route::get('/{id}/reports','App\Http\Controllers\ProjectController@getReports');
    Route::get('/{id}/kanban','App\Http\Controllers\ProjectController@getKanban');
    Route::get('/{id}/export','App\Http\Controllers\ProjectController@export');
    Route::post('/{id}/import','App\Http\Controllers\ProjectController@import');
    Route::get('/{id}/tasks','App\Http\Controllers\ProjectController@getTasks');
    Route::get('/{id}/meetings','App\Http\Controllers\ProjectController@getMeetings');
    Route::get('/{id}/clients','App\Http\Controllers\ProjectController@getClients');
    Route::post('/{id}/clients','App\Http\Controllers\ProjectController@addClients');
    Route::delete('/{id}/clients/{clients_id}','App\Http\Controllers\ProjectController@removeClients');
    Route::get('/{id}/teams','App\Http\Controllers\ProjectController@getTeams');
    Route::post('/{id}/teams','App\Http\Controllers\ProjectController@addTeams');
    Route::delete('/{id}/teams/{teams_id}','App\Http\Controllers\ProjectController@removeTeams');
    Route::get('/{id}/members','App\Http\Controllers\ProjectController@getMembers');
    Route::get('/{id}/files','App\Http\Controllers\ProjectController@getFiles');
    Route::get('/{id}/github-repositories','App\Http\Controllers\ProjectController@getGithubRepos');
    Route::get('/{id}/gantt','App\Http\Controllers\ProjectController@getGanttDataSource');
});

Route::resource('project-members', 'App\Http\Controllers\ProjectMemberController');
Route::group(['prefix'=>'project-members'],function(){
    Route::get('/{id}/tasks','App\Http\Controllers\ProjectMemberController@getTasks');
});
Route::resource('approvals', 'App\Http\Controllers\ApprovalController');
Route::get('tes-echo',function(Request $request){
    event(new \App\Events\NotificationEvent(['users_id'=>18]));
});
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
 