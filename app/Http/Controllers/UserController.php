<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Task;
use App\Models\TaskMember;
use App\Models\Meeting;
use App\Models\ProjectMember;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use DB;


class UserController extends Controller
{
    public function index()
    {
        $users=User::with('occupation')
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
        abort(404);
    }

    public function show($id)
    {
        $user=User::where('id',$id)->with('occupation')->with('asMember.project')->firstOrFail()->toArray();
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
        $user->name=$request->name;
        $user->email=$request->email;
        $user->phone_number=$request->phone_number;
        $user->token=$request->token;
        $user->occupations_id=$request->occupations_id;
        $user->last_login=$request->last_login;
        $user->verified=$request->verified;
        $user->profile_picture_path=$request->profile_picture_path;
        $user->created_at=$request->created_at;
        $user->updated_at=$request->updated_at;
        $user->save();
        return response()->json($user);
    }

    public function destroy($id)
    {
        $user=User::findOrFail($id);
        return response()->json($user->delete());
    }

    public function getProjects(Request $request,$id){
        $user=User::findOrFail($id);
        $project_members=ProjectMember::where('users_id',$id)
                                        ->with('project.columns',function($q1){
                                            return $q1->with('cards',function($q2){
                                                return $q2->with('cards');
                                            });
                                        })
                                        ->with('role')->get();
        $projects=[];
        for ($i=0; $i < count($project_members); $i++) {
            $projects[]=$project_members[$i]['project'];
        }
        return response()->json($projects);
    }

    public function getMeetings(Request $request,$id){
        $user=User::findOrFail($id);
        $meetings=Meeting::select('m.*')
                            ->from('meetings AS m')
                            ->join('users AS u','m.users_id','=','u.id')
                            ->join(DB::raw("(
                                SELECT meetings_id,count(*) AS counts
                                FROM meeting_members AS tm 
                                GROUP BY meetings_id
                            ) AS counter "),'m.id','=','counter.meetings_id')
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
                                            SELECT tasks_id,count(*) AS counts
                                            FROM task_members AS tm 
                                            GROUP BY tasks_id
                                    ) AS counter "),'t.id','=','counter.tasks_id')
                            ->where('counter.counts','>=','1')
                            ->orWhere('t.users_id','=',$id)
                            ->orderBy('t.start','ASC')
                                ->with('attachments')
                                ->with('list.project')
                                ->with('creator')
                                ->with('cards')->get();
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

    }

    public function logout(Request $request){

    }

    public function register(Request $request){

    }

}
