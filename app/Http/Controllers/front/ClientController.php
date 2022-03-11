<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Notification;
use App\Models\Client;
use App\Models\ClientsHasProjects;
use App\Models\TaskMember;

class ClientController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:sanctum',['only'=>['index','update','store','destroy']]); 
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
            'city'=>'required',
            'institution'=>'required',
        ]);

        $client=new Client();
        if($request->has('description')) $client->description=$request->description;
        if($request->has('city')) $client->city=$request->city;
        if($request->has('institution')) $client->institution=$request->institution;
        $client->save();
        
        Notification::create([
            'title'=>'A new client has been created',
            'message'=>$client->name,
            'notifiable_id'=>$client->id,
            'notifiable_type'=>'\App\Models\Client',
            'route'=>'\clients\\'.$client->id
        ]);
        return response()->json($client);
    }

    public function show($id)
    {
        $client=Client::with('projects')
                    ->where('id','=',$id)
                    ->firstOrFail();
        return response()->json($client);
    }

    public function edit($id)
    {
        return redirect(url("/clients/$id"));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'city'=>'required',
            'institution'=>'required',
        ]);

        $client=Client::findOrFail($id);
        $client->description=$request->description;
        $client->city=$request->city;
        $client->institution=$request->institution;
        $client->save();

        Notification::create([
            'title'=>'A client has been updated',
            'message'=>$client->name,
            'notifiable_id'=>$client->id,
            'notifiable_type'=>'\App\Models\Client',
            'route'=>'\clients\\'.$client->id
        ]);
        return response()->json($client);
    }

    public function destroy($id)
    {
        $client=Client::findOrFail($id);
        ClientsHasProjects::where('clients_id',$client->id)->delete();
        
        Notification::create([
            'title'=>'A client has been deleted',
            'message'=>$client->name,
            'notifiable_id'=>$client->id,
            'notifiable_type'=>'\App\Models\Client',
            'route'=>'\clients\\'.$client->id
        ]);
        return response()->json($client->delete());
    }
}
