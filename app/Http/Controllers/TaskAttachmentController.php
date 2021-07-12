<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TaskAttachment;
use App\Models\File;

class TaskAttachmentController extends Controller
{
    public function __construct(Request $request)
    {        
        $this->middleware('auth:sanctum',['only'=>['index','show','update','store','destroy']]); 
    }

    public function index()
    {
        $attachments=TaskAttachment::selectRaw('f.id as files_id, f.name, f.type, f.size, f.icon, 
                                    f.path, f.tasks_id, f.users_id, ta.*')
                                    ->from('files AS f')
                                    ->join('task_attachments AS ta','f.id','=','ta.files_id')
                                    ->join('task AS t','t.id','=','ta.tasks_id')
                                    ->get();
        return response()->json($attachments);
    }

    public function create()
    {
        abort(404);
    }

    public function store(Request $request)
    {
        $source=$request->source;
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

    public function show(Request $request,$id)
    {   
        $attachment=TaskAttachment::selectRaw('f.id as files_id, f.name, f.type, f.size, f.icon, f.path, ta.tasks_id, f.users_id, ta.*')
                                    ->from('files AS f')
                                    ->leftJoin('task_attachments AS ta','f.id','=','ta.files_id')
                                    ->leftJoin('tasks AS t','t.id','=','ta.tasks_id')
                                    ->where('ta.id','=',$id)
                                    ->with('user')
                                    ->firstOrFail();
        return response()->json($attachment);
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
        $attachment= Attachment::findOrFail($id);
        return response()->json($attachment->save());
    }
}
