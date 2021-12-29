<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
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
        $this->middleware('auth:sanctum',['only'=>['update','destroy']]); 
    }

    public function index()
    {
        $users=User::with('role')
                    ->with('asMember.project')->get()->toArray();

        for ($i=0; $i < count($users); $i++) { 
            $as_member=$users[$i]['as_member'];
            for ($j=0; $j < count($as_member); $j++) { 
                if($as_member[$j]['project']) $users[$i]['projects'][]=$as_member[$j]['project'];
            }
            unset($users[$i]['as_member']);
        }
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
            'verified'=> false,
        ]);

        $user = User::where('email', $fields['email'])->with('role')->first();

        return response($user,201);
    }

    public function show($id)
    {
        $user=User::where('id',$id)->with('role')->with('asMember.project')->firstOrFail()->toArray();
        $as_member=$user['as_member'];
        for ($j=0; $j < count($as_member); $j++) { 
            if($as_member[$j]['project']) $user['projects'][]=$as_member[$j]['project'];
        }
        unset($user['as_member']);
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
        if($request->has('verified')) $user->verified=$request->verified;
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

    public function getGithubAccessToken(Request $request){
        try {    
            $client = new Client();
            $GITHUB_AUTH_ACCESSTOKEN_URL = 'https://github.com/login/oauth/access_token';
            $CLIENT_ID = '60c4703444a36d8057ac';
            $CLIENT_SECRET = '5747b8f92feeb7bf03b8519511a1239ee7ea19bf';
            $CODE = $request->code;

            $http_request = $client->request('POST', $GITHUB_AUTH_ACCESSTOKEN_URL, [
                'body' => [
                    'client_id'=>$CLIENT_ID,
                    'client_secret'=>$CLIENT_SECRET,
                    'code'=>$CODE
                ]
            ]);
            
            $response = $client->send($request, ['timeout' => 2]);

            return response()->json($response);
        } catch (RequestException $ex) {
            abort(500, $ex);
        }
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
        $project_members=ProjectMember::selectRaw('roles_id , count(roles_id)')->where('users_id',1)->groupBy('roles_id')->with('role')->get();
        $user=$user->toArray();

          
        /*
            access levels
            1.  ceo/direktur (id=1), system administrator (id=8)
            3. manager (id=2)
            4. System analyst (id=5)
            5. bendahara (id=9)
        
            6. project owner (id=1)
            7. project manager (id=2)
        */
        
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
            'verified'=> false,
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
}

