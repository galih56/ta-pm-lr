<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TaskList;

class ListController extends Controller
{
    public function __construct(Request $request)
    {        
        $this->middleware('auth:sanctum',['only'=>['index','show','update','store','destroy']]); 
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
        $list->start=$request->start;
        $list->end=$request->end;
        $list->projects_id=$request->projects_id;
        $list->save();
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
        return response()->json($list);
    }

    public function destroy($id)
    {
        $list=TaskList::findOrFail($id);
        return response()->json($list->delete(),200);
    }
}
