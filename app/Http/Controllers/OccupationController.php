<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Occupation;

class OccupationController extends Controller
{
    public function index()
    {
        $occupations=Occupation::with('users')->get();
        return response($occupations); 
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    {
        $occupation=new Occupation();
        $occupation->name=$request->name;
        $occupation->color=$request->color;
        $occupation->bg_color=$request->bg_color;
        $occupation->save();
        return response()->json($occupation);
    }

    public function show($id)
    {
        $occupation=Occupation::with('parentRelations')
                                ->with('childrenRelations')
                                ->findOrFail($id);
        return response()->json($occupation);

    }

    public function edit($id)
    {
        abort(404);
    }

    public function update(Request $request, $id)
    {
        $occupation=Occupation::findOrFail($id);
        $occupation->name=$request->name;
        $occupation->save();
        return response()->json($occupation);
    }

    public function destroy($id)
    {
        $occupation=Occupation::with('users')->findOrFail($id);
        $users=$occupation->users;
        for ($i=0; $i < count($users); $i++) { 
            $user=$users[$i];
            $user->delete();
        }
        return response()->json($occupation->delete(),200);
    }
    function findOccupationFromArray($occupations,$id){
        $item=null;
        for ($i=0; $i < count($occupations); $i++) { 
            $occupation=$occupations[$i];
            if($occupation['id']==$id) $item=$occupation;

        }
        return $item;
    }

    function restructureData($root,$all_occupations){
        $children=[];
        $children_relations=$root['children_relations'];
        if($children_relations){
            for ($i=0; $i < count($children_relations); $i++) { 
                $relation=$children_relations[$i];
                $child=$this->findOccupationFromArray($all_occupations,$relation['child_id']);
                if($child){
                    $child=$this->restructureData($child,$all_occupations);
                    $children[]=$child;
                }
            }
        }
        $root['children']=$children;
        return $root;
    }

    public function getTree(Request $request){
        $occupations=Occupation::with('users')
                                ->with('parentRelations')
                                ->with('childrenRelations')
                                ->get()->toArray();
                                
        $users=[];
        for ($i=0; $i < count($occupations); $i++) { 
            $occupation=$occupations[$i];
            for ($j=0; $j < count($occupation['users']); $j++) { 
                $user=$occupation['users'][$j];
                $users[]=[
                    'id'=> $occupation['id'],
                    'users_id'=> $user['id'],
                    'title'=> $user['name'],
                    'name'=> $occupation['name'],
					'parent_relations'=> $occupation['parent_relations'],
					'children_relations'=> $occupation['children_relations'],
					'root'=> $occupation['root']
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
            return response()->json("root not found",200);
        }
    }
}
