<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GithubRepository;

class GithubRepositoryController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:sanctum',['only'=>['index','show','update','store','destroy']]); 
    }

    public function index()
    {
        $repos=GithubRepository::with('project')->get();
        return response()->json($repos);
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    {
        $repo=new GithubRepository();
        $repo->owner_name=$request->owner_name;
        $repo->repository_name=$request->repository_name;
        $repo->projects_id=$request->projects_id;
        $repo->save();
        return response()->json($repo);
    }

    public function show($id)
    {
        $repo=GithubRepository::with('project')->findOrFail($id);
        return response()->json($repo);
    }

    public function edit($id)
    {
        abort(404);
    }

    public function update(Request $request, $id)
    {
        $repo=GithubRepository::findOrFail($id);
        if($request->has('owner_name')) $repo->owner_name=$request->owner_name;
        if($request->has('repository_name')) $repo->repository_name=$request->repository_name;
        $repo->save();
        return response()->json($repo);
    }

    public function destroy($id)
    {
        $repo=GithubRepository::findOrFail($id);
        return response()->json($repo->delete(),200);
    }

}
