<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\File;

class FileController extends Controller
{
    public function __construct(Request $request)
    {        
        $this->middleware('auth:sanctum',['only'=>['index','show','update','store','destroy']]); 
    }

    public function index()
    {
        $files=File::with('user')->get();
        return response()->json($files);
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    { $source=$request->source;
        $saved_files=[];
        $tasks_id=$request->tasks_id;
        $users_id=$request->users_id;

        if($source=='upload'){
            foreach ($request->file('file') as $uploaded_file) {
                $file = new File();
                $namafile=$uploaded_file->getClientOriginalName();
                $uploaded_file->move(public_path('files/task-'.$id),$namafile);
                $file->name = $namafile;
                $file->path = 'files/task-'.$id.'/'.$namafile;
                $file->source = 'upload';
                $file->users_id=$request->users_id;
                $file->save();

                $attachment=new TaskAttachment();
                $attachment->files_id=$file->id;
                $attachment->tasks_id=$tasks_id;
                $attachment->save();

                $saved_file=$file->toArray();
                $saved_file['id']=$attachment->id;
                $saved_file['files_id']=$file['id'];

                $saved_files[]=$saved_file;
            }
        }

        if($source=='pick'){
            $file=File::findOrFail($request->files_id);

            $attachment=new TaskAttachment();
            $attachment->files_id=$request->files_id;
            $attachment->tasks_id=$tasks_id;
            $attachment->save();
            
            $saved_file=$file->toArray();
            $saved_file['id']=$attachment->id;
            $saved_file['files_id']=$file['id'];
            $saved_files[]=$saved_file;
        }

        if($source=='google-drive'){
            $uploaded_files=$request->files;
            for ($i=0; $i < count($uploaded_files); $i++) { 
                $uploaded_file=$uploaded_files[$i];
                
                $file=new File();
                $file->name=$uploaded_file->sizeBytes;
                $file->type=$uploaded_file->mimeType;
                $file->path=$uploaded_file->url;
                $file->icon=$uploaded_file->iconUrl;
                $file->users_id=$request->users_id;
                $file->save();

                $attachment=new TaskAttachment();
                $attachment->files_id=$file->id;
                $attachment->tasks_id=$tasks_id;
                $attachment->save();

                    
                $saved_file=$file->toArray();
                $saved_file['id']=$attachment->id;
                $saved_file['files_id']=$file['id'];
                $saved_files[]=$saved_file;
            }
        }
        return response()->json($saved_files);
    }

    public function show($id)
    {
        $file=File::with('user')->findOrFail($id);
        return response()->json($file);
    }

    public function download($id){
        $file=File::with('user')->findOrFail($id);
        $pathToFile = public_path($file->path);
        $getContent = file_get_contents($pathToFile); // Here cURL can be use.
        file_put_contents( $pathToFile, $getContent ); 
        return response()->download($pathToFile, $file->name); 
    }

    public function edit($id)
    {
        abort(404);
    }

    public function update(Request $request, $id)
    {
        abort(404);
    }

    public function destroy($id)
    {
        $file=File::findOrFail($id);
        $attachments=TaskAttachment::where('files_id','=',$id)->get();
        for ($i=0; $i < count($attachments); $i++) { 
            $attachments->delete();
        }

        if($file->source=='google-drive'){
            return response()->json($file->delete(),200);
        }

        if($file->source=='upload'){
            $dir='files/task-'.$file->id.'/'.$file->name;
            unlink($dir);
            return response()->json($file->delete(),200);
        }

        if($file->base64){
            return response()->json($file->delete(),200);
        }
    }

}
