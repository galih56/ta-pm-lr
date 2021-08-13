<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\ClientsHasProjects;
use App\Models\TaskMember;

class ClientController extends Controller
{
    public function __construct(Request $request)
    {
        // $this->middleware('auth:sanctum',['only'=>['index','update','store','destroy']]); 
    }

    public function index()
    {
        $clients=Client::all();
        return response()->json($clients);
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'city'=>'required',
            'phone_number'=>'required|numeric'
        ]);

        $client=new Client();
        if($request->has('name')) $client->name=$request->name;
        if($request->has('description')) $client->description=$request->description;
        if($request->has('email')) $client->email=$request->email;
        if($request->has('phone_number')) $client->phone_number=$request->phone_number;
        if($request->has('city')) $client->city=$request->city;
        if($request->has('institution')) $client->institution=$request->institution;
        $client->save();
        return response()->json($client);
    }

    public function show($id)
    {
        $client=Client::with('projects.project')
                    ->where('id','=',$id)
                    ->firstOrFail()->toArray();
        $projects=[];
        for ($i=0; $i < count($client['projects']); $i++) { 
            $projects[]=$client['projects'][$i]['project'];
        }
        $client['projects']=$projects;
        return response()->json($client);
    }

    public function edit($id)
    {
        return redirect(url("/clients/$id"));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name'=>'required',
            'city'=>'required',
            'phone_number'=>'required|numeric'
        ]);

        $client=Client::findOrFail($id);
        $client->name=$request->name;
        $client->description=$request->description;
        $client->phone_number=$request->phone_number;
        $client->city=$request->city;
        $client->institution=$request->institution;
        $client->save();
        return response()->json($client);
    }

    public function destroy($id)
    {
        $client=Client::findOrFail($id);
        ClientsHasProjects::where('clients_id',$client->id)->delete();
        TaskMember::where('clients_id',$client->id)->delete();
        return response()->json($client->delete());
    }
}
