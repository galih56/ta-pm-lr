<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;

class RoleController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:sanctum',['only'=>['show','update','store','destroy']]); 
    }

    public function index()
    {
        $roles=Role::with('users')->get();
        return response($roles); 
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    {
        $role=new Role();
        $role->name=$request->name;
        $role->save();
        return response()->json($role);
    }

    public function show($id)
    {
        $role=Role::with('parentRelations')
                                ->with('childrenRelations')
                                ->findOrFail($id);
        return response()->json($role);

    }

    public function edit($id)
    {
        abort(404);
    }

    public function update(Request $request, $id)
    {
        $role=Role::findOrFail($id);
        if($request->has('name')) $role->name=$request->name;
        $role->save();
        return response()->json($role);
    }

    public function destroy($id)
    {
        $role=Role::with('users')->findOrFail($id);
        $users=$role->users;
        for ($i=0; $i < count($users); $i++) { 
            $user=$users[$i];
            $user->delete();
        }
        return response()->json($role->delete(),200);
    }
    function findRoleFromArray($roles,$id){
        $item=null;
        for ($i=0; $i < count($roles); $i++) { 
            $role=$roles[$i];
            if($role['id']==$id) $item=$role;

        }
        return $item;
    }

    function restructureData($root,$all_roles){
        $children=[];
        $children_relations=$root['children_relations'];
        if($children_relations){
            for ($i=0; $i < count($children_relations); $i++) { 
                $relation=$children_relations[$i];
                $child=$this->findRoleFromArray($all_roles,$relation['child_id']);
                if($child){
                    $child=$this->restructureData($child,$all_roles);
                    $children[]=$child;
                }
            }
        }
        $root['children']=$children;
        return $root;
    }

    public function getTree(Request $request){
        $roles=Role::with('users')
                                ->with('parentRelations')
                                ->with('childrenRelations')
                                ->get()->toArray();
                                
        $users=[];
        for ($i=0; $i < count($roles); $i++) { 
            $role=$roles[$i];
            for ($j=0; $j < count($role['users']); $j++) { 
                $user=$role['users'][$j];
                $users[]=[
                    'id'=> $role['id'],
                    'users_id'=> $user['id'],
                    'title'=> $user['name'],
                    'name'=> $role['name'],
					'parent_relations'=> $role['parent_relations'],
					'children_relations'=> $role['children_relations'],
					'root'=> $role['root']
                ];
            }
        }
        
            $root=null;
            for ($i=0; $i < count($users); $i++) { 
                $item=$users[$i];
                if($item['root']===true) $root=$item;
            }
        if($root){
            $tree=$this->restructureData($root,$users);
            return response()->json($tree,200); 
        }else{
            return response()->json("root not found",204);
        }
    }
}
