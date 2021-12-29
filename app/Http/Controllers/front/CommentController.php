<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function __construct(Request $request)
    {        
        $this->middleware('auth:sanctum',['only'=>['index','show','update','store','destroy']]); 
    }

    public function index()
    {
        $comments=Comment::with('creator')->with('task')->get();
        return response()->json($comments);
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    {
        $comment=new Comment();
        $comment->title=$request->title;
        $comment->description=$request->description;
        $comment->tasks_id=$request->tasks_id;
        $comment->users_id=$request->users_id;
        $comment->save();
        return response()->json($comment,200);
    }

    public function show($id)
    {
        $comment=Comment::with('creator')->with('task')->findOrFail($id);
        return response()->json($comment);
    }

    public function edit($id)
    {
        abort(404);
    }

    public function update(Request $request, $id)
    {
        $comment=Comment::findOrFail($id);
        if($request->has('title')) $comment->title=$request->title;
        if($request->has('description')) $comment->description=$request->description;
        $comment->save();
        return response()->json($comment);
    }

    public function destroy($id)
    {
        $comment=Comment::findOrFail($id);
        return response()->json($comment->delete(),200);
    }

}
