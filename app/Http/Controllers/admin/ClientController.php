<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client;
use Session;
use Auth;
use Illuminate\Support\Facades\Validator;

class ClientController extends Controller
{
    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(Request $request,$rules)
    {
        return Validator::make($request->all(), $rules);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $clients=Client::orderBy('institution','ASC')->get();
        return view('admin.clients.index',['clients'=>$clients]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.clients.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator=$this->validator($request,
            [ 'name'=>'required', 'content'=>'required', ],
            [ 'name.required'=>'Judul harus diisi']
        );
        if($validator->fails()){
            return redirect()->back()->withErrors($validator);
        }else{
            $client=new Client();
            $client->name=$request->name;
            $client->save();
                
            Session::flash('message', 'Klien baru telah dibuat'); 
            Session::flash('alert-class', 'alert-success'); 
            return redirect(route('clients.edit',['client'=>$client->id]));
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $client=Client::findOrFail($id);
        return view('admin.clients.show')->with(compact('client'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request,$id)
    {
        $client=Client::with('users')->findOrFail($id);
        $users=$client->users()->orderBy('created_at','DESC')->get();
        return view('admin.clients.edit')->with(compact('client','users'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate(
            [ 'name'=>'required', ],
            [ 'name.required'=>'Judul harus diisi']
        );

        $client=Client::findOrFail($id);
        $client->name=$request->name;
        $client->save();

        Session::flash('message', 'Klien "'.$request->name.'" berhasil diubah'); 
        Session::flash('alert-class', 'alert-success'); 
        return redirect(route('clients.edit',['client'=>$client->id]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $client=Client::findOrFail($id);
        Session::flash('message', 'Klien"'.$client->name.'" berhasil dihapus'); 
        Session::flash('alert-class', 'alert-success'); 
        $client->delete();
        return redirect(route('clients.index'));
    }
}
