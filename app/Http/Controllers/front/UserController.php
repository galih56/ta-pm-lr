<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Project;
use App\Models\Task;
use App\Models\TaskMember;
use App\Models\Meeting;
use App\Models\ProjectMember;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use DB;


class UserController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:sanctum',['only'=>['update','destroy','refreshLastLogin']]); 
    }

    public function index()
    {
        $users=User::exclude(['created_at', 'updated_at'])
                    ->with('role')->get()->toArray();
        return response()->json($users);
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

        $user = User::where('email', $fields['email'])->with('role')->first();

        return response($user,201);
    }

    public function show($id)
    {
        //Tidak pakai with('projects'). Karena data $user akan overwrite data project yang ada di client-side
        $user=User::where('id',$id)->with('role')->firstOrFail()->toArray();
        return response()->json($user);
    }
    
    public function edit($id){
        return redirect(url("/users/$id"));
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

        
        $user = User::where('id', $user->id)->with('role')->first();
        return response()->json($user);
    }

    public function destroy($id)
    {
        $user=User::findOrFail($id);
        return response()->json($user->delete());
    }

    function checkIfUserAssigned($query,$users_id){
        return $query->where('users_id','=',$users_id);
    }

    public function getProjects(Request $request,$id){
        $user=User::findOrFail($id);
        $projects=Project::whereHas('users',function($query) use($id){
            $query=$query->where('users.id','=',$id);
        })->with('columns',function($columns_q) use($id){
            return $columns_q->with('cards',function($tasks_q) use($id){
                return $tasks_q->whereHas('members',function($members_q) use($id){
                        return $members_q->where('users_id',$id);
                    })->with('cards');
            });
        })->get();
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
        $tasks=Task::selectRaw("t.id, t.title, t.lists_id, t.start, t.end, t.actual_start, 
            t.actual_end, t.created_at, t.updated_at, l.projects_id, t.progress, t.complete, t.parent_task_id, 
            coalesce(l.projects_id,pt.projects_id)  AS projects_id, 
            coalesce(p.title,pt.projects_title)  AS projects_title")
                    ->from('tasks AS t')
                    ->leftJoin('lists AS l','t.lists_id','=','l.id')
                    ->leftJoin('projects AS p','p.id','l.projects_id')
                    ->leftJoin('users AS u','t.users_id','=','u.id')
                    ->leftJoin(DB::raw('(
                        SELECT tasks.id, projects.id as projects_id, projects.title as projects_title  
                        FROM tasks	
                        left join "lists" on "tasks"."lists_id" = "lists"."id" 
                        left join "projects" on "projects"."id" = "lists"."projects_id"
                    ) AS pt'), 't.parent_task_id','=','pt.id')
                    ->leftJoin(DB::raw("(
                        SELECT tm.tasks_id,count(tm.tasks_id) AS counts
                        FROM task_members AS tm 
                        WHERE tm.users_id=$id
                        GROUP by tm.tasks_id 
                    ) AS counter"),'t.id','=','counter.tasks_id')
                    ->where('counter.counts','>=','1')
                    ->orWhere('t.users_id','=',$id)
                    ->orderBy('t.start','ASC')
                    ->with(['list'=>function($query){
                        return $query->select('id','title','start','end','projects_id')
                                ->with(['project'=>function($query){
                                    return $query->select('id','title','start','end','complete');
                                }]);
                    }])
                    ->with(['parentTask.list'=>function($query){
                        return $query->select('id','title','start','end','projects_id')
                                ->with(['project'=>function($query){
                                    return $query->select('id','title','start','end','complete');
                                }]);
                    }])
                    ->with(['creator'=>function($query){
                        return $query->select('id','name','email');
                    }]);
        // dd($tasks->toSql());
        // dd($tasks->count());
        $tasks=$tasks->get();
        return response()->json($tasks);
    }
    
    public function login(Request $request){
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'string|required',
        ]); 

        $user = User::where('email', $fields['email'])->with('role')->first();
        if(!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Wrong credentials'
            ], 401);
        }

        $token = $user->createToken('tugas-akhir-pm-project-management-2021')->plainTextToken;        
        $user=$user->toArray();
        
        $response = [
            'user' => $user,
            'token' => "Bearer $token",
            'success' =>true
        ];

        return response($response, 201);
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

        $user = User::where('email', $fields['email'])->with('role')->first();
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
        
        // $user = User::where('id', $id)->with('role')->first();
        // $token=$user->createToken('tugas-akhir-pm-project-management-2021')->plainTextToken;

        return response([
            'user'=>$user,
            // 'token' => "Bearer $token",
            'success' =>true
        ],201);
    }

    public function logout(Request $request){
        $user=auth()->user();
        if($user){ 
            $user->tokens()->delete();
        }
        return response()->json([
            'message'=>'Logged Out',
        ]);
    }

    public function refreshLastLogin(Request $request, $id){
        $user=User::with('role')->findOrFail($id);
        $user->last_login= Carbon::now()->toDateTimeString();
        $user->save();
        return response()->json($user);
    }

}

