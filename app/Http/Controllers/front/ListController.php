<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;
use App\Models\Approval;
use App\Models\TaskList;

class ListController extends Controller
{
    public function __construct(Request $request)
    {        
        $this->middleware('auth:sanctum',['only'=>['index','update','store','destroy']]); 
    }

    public function index()
    {
        $lists=TaskList::with('project')->get();
        return response()->json($lists);
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    {
        $list=new TaskList();
        $list->title=$request->title;
        $list->progress=0;
        $list->start=$request->start;
        $list->end=$request->end;
        $list->projects_id=$request->projects_id;
        $list->save();
        $list=TaskList::with('cards.cards')->findOrFail($list->id);

        Notification::create([
            'title'=>'A new list has been created',
            'message'=>$list->title,
            'notifiable_id'=>$list->id,
            'notifiable_type'=>'\App\Models\Project',
            'route'=>'projects/'.$list->project->id,
            'users_id'=>auth('sanctum')->user()->id
        ]);

        return response()->json($list);
    }

    public function show($id)
    {
        $list=TaskList::with('project')->with('cards.cards')->findOrFail($id);
        return response()->json($list);
    }

    public function edit($id)
    {
        abort(404);
    }

    public function update(Request $request, $id)
    {
        $list=TaskList::findOrFail($id);
        if($request->has('title')) $list->title=$request->title;
        if($request->has('start')) $list->start=$request->start;
        if($request->has('end')) $list->end=$request->end;
        $list->save();

         
        Notification::create([
            'title'=>'A new list has been updated',
            'message'=>$list->title,
            'notifiable_id'=>$list->id,
            'notifiable_type'=>'\App\Models\Project',
            'route'=>'projects/'.$list->project->id,
            'users_id'=>auth('sanctum')->user()->id
        ]);

        return response()->json($list);
    }

    public function destroy($id)
    {
        $list=TaskList::findOrFail($id);
        $project=$list->project;
        $list->delete();
        
        Notification::create([
            'title'=>'A list has been deleted',
            'message'=>"List \"$list->title\" has been deleted",
            'notifiable_id'=>$list->id,
            'notifiable_type'=>'\App\Models\Project',
            'route'=>'projects/'.$project->id,
            'users_id'=>auth('sanctum')->user()->id
        ]);
        
        return response()->json(true,200);
    }
    
    public function extendDeadline(Request $request){

    } 

    public function approveExtend(Request $request){

    }

}
