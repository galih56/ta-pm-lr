<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ActivityLog;

class ActivityController extends Controller
{
    public function __construct(Request $request)
    {        
        $this->middleware('auth:sanctum',['only'=>['index','show','update','store','destroy']]); 
    }
       
    public function index()
    {
        $logs=ActivityLog::with('user')->get();
        return response()->json($logs);
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    {
        $log=new ActivityLog();
        $log->description=$request->description;
        $log->save();
        return response()->json($log);
    }

    public function show($id)
    {
        $log=ActivityLog::with('user')->findOrFail($id);
        return response()->json($log);
    }

    public function edit($id)
    {
        abort(404);
    }

    public function update(Request $request, $id)
    {
        $log=ActivityLog::findOrFail($id);
        if($request->has('description')) $log->description=$request->description;
        $log->save();
        return response()->json($log);
    }

    public function destroy($id)
    {
        $log=ActivityLog::with('user')->findOrFail($id);
        return response()->json($log->delete(),200);
    }
}
