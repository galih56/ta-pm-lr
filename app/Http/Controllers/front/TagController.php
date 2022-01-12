<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tag;

class TagController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:sanctum',['only'=>['index','show','update','store','destroy']]); 
    }

    public function index()
    {
        $tags=Tag::all();
        return response()->json($tags);
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    {
        $tag=new Tag();
        $tag->title=$request->title;
        $tag->save();
        return response()->json($tag);
    }

    public function show($id)
    {
        $tag=Tag::with('tasks.task')->findOrFail($id)->toArray();

        $tasks=[];
        for ($i=0; $i < count($tag['tasks']); $i++) 
        {
            $task=$tag['tasks'][$i]['task'];
            if($task){ 
                $task['tags_id']=$tag['id'];
                $tasks[]=$task;
            }
        }
        $tag['tasks']=$tasks;
        return response()->json($tag);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $tag=Tag::findOrFail($id);
        if($request->has('title')) $tag->title=$request->title;
        $tag->save();
        return response()->json($tag);
    }

    public function destroy($id)
    {
        $tag=Tag::findOrFail($id);
        return response()->json($tag->delete(),200);
    }
}