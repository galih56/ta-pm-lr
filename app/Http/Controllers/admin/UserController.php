<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Role;
use App\Models\User;
use Session;
use Auth;
use Hash;

class UserController extends Controller
{
    public function __construct(Request $request)
    {
        // $this->middleware('auth:sanctum',['only'=>['update','destroy']]); 
    }

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

    public function index(Request $request)
    {
        $users=User::orderBy('created_at','DESC')->get();
        return view('admin.users.index',['users'=>$users]);
    }

    public function store(Request $request)
    {
        $fields=$request->validate([
            'name'=>'required|string',
            'email'=>'required|string|unique:users,email',
            'password' => 'string|required_with:password_confirmation|same:password_confirmation',
            'roles_id'=>'required',
        ]);

        $user=User::create([
            'name'=> $fields['name'],
            'email'=> $fields['email'],
            'roles_id'=> $fields['roles_id'],
            'password'=> Hash::make($fields['password']),
        ]);

        $user = User::where('email', $fields['email'])->with('Role')->first();

        Session::flash('message', 'User baru telah dibuat'); 
        Session::flash('alert-class', 'alert-success'); 
        return redirect(route('users.edit',['user'=>$user->id]));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles=Role::all();
        return view('admin.users.create')->with(compact('roles'));
    }


    public function show(Request $request,$id)
    {
        return redirect(url('master/users/'.$id.'/edit'));
    }
    
    public function edit(Request $request,$id){
        $user=User::where('id',$id)->with('role')->with('projects')->firstOrFail();
        $projects=$user->projects()->get();
        $roles=Role::all();
        return view('admin.users.edit')->with(compact('user','projects','roles'));
    }

    public function update(Request $request, $id)
    {
        $user=User::findOrFail($id);
        if($request->has('name')) $user->name=$request->name;
        if($request->has('email')) $user->email=$request->email;
        if($request->has('token')) $user->token=$request->token;
        if($request->has('roles_id')) $user->roles_id=$request->roles_id;
        if($request->has('last_login')) $user->last_login=$request->last_login;
        if($request->has('profile_picture_path')) $user->profile_picture_path=$request->profile_picture_path;
        $user->save();

        $user = User::where('id', $user->id)->with('Role')->first();
        Session::flash('message', 'User"'.$user->name.'" berhasil diubah'); 
        Session::flash('alert-class', 'alert-success');
        return redirect(route('users.index'));
    }

    public function destroy($id)
    {   
        $user=User::findOrFail($id);
        Session::flash('message', 'User"'.$user->name.'" berhasil dihapus'); 
        Session::flash('alert-class', 'alert-success'); 
        $user->delete();
        return redirect(route('users.index'));
    }

    function checkIfUserAssigned($query,$users_id){
        return $query->where('users_id','=',$users_id);
    }

    public function getProjects(Request $request,$id){
        $user=User::findOrFail($id);
        $project_members=ProjectMember::where('users_id',$id)
                                        ->with('project.columns',function($columns_q) use($id){
                                            return $columns_q->with('cards',function($tasks_q) use($id){
                                                return $tasks_q->whereHas('members',function($members_q) use($id){
                                                        return $members_q->where('users_id',$id);
                                                    })->with('cards');
                                            });
                                        })->with('role')->get();
        $projects=[];
        for ($i=0; $i < count($project_members); $i++) {
            $project=$project_members[$i]['project'];
            if($project) $projects[]=$project;
        }

        return response()->json($projects);
    }

    public function getMeetings(Request $request,$id){
        $user=User::findOrFail($id);
        
        $meetings=Meeting::select('m.*')
                            ->from('meetings AS m')
                            ->join('users AS u','m.users_id','=','u.id')
                            ->join(DB::raw("(
                                SELECT mm.meetings_id,count(mm.meetings_id) AS counts
                                FROM meeting_members AS mm 
                                WHERE mm.users_id=$id
                                GROUP by mm.meetings_id 
                            ) AS counter"),'m.id','=','counter.meetings_id')
                            ->where('counter.counts','>=',1)
                            ->orWhere('m.users_id','=',$id)
                            ->get();
        return response()->json($meetings);
    }
    
    public function getTasks(Request $request,$id){
        $tasks=Task::select("t.*")
                    ->from('tasks AS t')
                    ->join('lists AS l','t.lists_id','=','l.id')
                    ->join('projects AS p','p.id','l.projects_id')
                    ->join('users AS u','t.users_id','=','u.id')
                    ->join(DB::raw("(
                        SELECT tm.tasks_id,count(tm.tasks_id) AS counts
                        FROM task_members AS tm 
                        WHERE tm.users_id=$id
                        GROUP by tm.tasks_id 
                    ) AS counter"),'t.id','=','counter.tasks_id')
                    ->where('counter.counts','>=','1')
                    ->orWhere('t.users_id','=',$id)
                    ->orderBy('t.start','ASC')
                        ->with('attachments')
                        ->with(['list.project'=>function($query){
                            return $query->select('id','title','start','end','progress','complete');
                        }])
                        ->with(['parentTask.list.project'=>function($query){
                            return $query->select('id','title','start','end','progress','complete');
                        }])
                        ->with('creator')->get();
        return response()->json($tasks);
    }

    public function login(Request $request){
        $validator=$this->validator($request, 
        [ 'email' => ['required'], 'password' => ['required'] ],
        [ 'email.required' => 'Email dibutuhkan', 'password.required' => 'Password dibutuhkan' ]);
        if($validator->fails()){
            return redirect()->back()->withErrors($validator);
        }else{
            $credentials=['email'=>$request->email,'password'=>$request->password];
            if (Auth::attempt($credentials)) { 
                $userExist=User::where('email','like',$request->get('email'))->with('Role')->first();
                if(in_array($userExist->Role->id,[1,2,4],true) ){
                    return redirect(route('home'));
                }
                Session::flash('message', 'Hanya administrator yang boleh masuk'); 
                Session::flash('alert-class', 'alert-danger'); 
                return redirect()->back()->withInput($request->input());
            }else{
                $userExist=User::where('email','like',$request->get('email'))->with('Role')->first();
                if($userExist){
                    Session::flash('message', 'Email atau password tidak sesuai'); 
                    Session::flash('alert-class', 'alert-danger'); 
                    return redirect()->back()->withInput($request->input());
                }else{
                    Session::flash('message', 'Email belum terdaftar, Harap lakukan registrasi terlebih dahulu'); 
                    Session::flash('alert-class', 'alert-danger'); 
                    return redirect()->back()->withInput($request->input());
                }
            
            }
        }
    }

    public function register(Request $request){
        $fields=$request->validate([
            'name'=>'required|string',
            'email'=>'required|string|unique:users,email',
            'password'=>'required|string',
        ]);

        $user=User::create([
            'name'=> $fields['name'],
            'email'=> $fields['email'],
            'password'=> Hash::make($fields['password']),
        ]);

        $user = User::where('email', $fields['email'])->with('Role')->first();
        $token=$user->createToken('tugas-akhir-pm-project-management-2021')->plainTextToken;

        return response([
            'user'=>$user,
            'token' => "Bearer $token",
            'success' =>true
        ],201);
    }
    
    public function changePassword(Request $request,$id){
        $fields=$request->validate([
            'new_password' => 'required_with:confirm_password|same:confirm_password',
            'confirm_password'
        ]);
        
        $new_password=Hash::make($fields['new_password']);
        $user=User::findOrFail($id);
        $user->password=$new_password;
        $user->save();
    
        Session::flash('message', 'Kata sandi user "'.$user->name.'" berhasil diubah'); 
        Session::flash('alert-class', 'alert-success');
        return redirect(route('users.index'));
    }

    public function loginForm(){
        return view('admin.layouts.login');
    }

    public function logout()
    {
        Session::flush();
        Auth::guard('admins')->logout();
        return redirect(route('home'));
    }
}
