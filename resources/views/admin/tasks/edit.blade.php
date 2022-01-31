@extends('admin.layouts.layout')
@section('content')
<div class="py-2">
    <nav aria-label="breadcrumb" class="d-none d-md-inline-block">
        <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
            <li class="breadcrumb-item">
                <a href="#">
                    <svg class="icon icon-xxs" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </a>
            </li>
            @if ($project)
                <li class="breadcrumb-item"><a href="{{route('projects.index')}}">Daftar Proyek</a></li>
                <li class="breadcrumb-item"><a href="{{route('projects.edit',['project'=>$project->id])}}">{{$project->title}}</a></li>
                <li class="breadcrumb-item"><a href="{{route('projects.edit',['project'=>$project->id])}}#daftartugas">Daftar tugas</a></li>
                <li class="breadcrumb-item"><a href="{{route('lists.edit',['list'=>$list->id,'project'=>$project->id])}}">{{$list->title}}</a></li>
                @if ($list)
                    <li class="breadcrumb-item active" aria-current="page"><a href="{{route('tasks.edit',['list'=>$list->id,'project'=>$project->id,'task'=>$task->id])}}">{{$task->title}}</a></li>
                @endif
            @else
                <li class="breadcrumb-item"><a href="{{route('tasks.index')}}">Tugas</a></li>
                <li class="breadcrumb-item active" aria-current="page"><a href="{{route('tasks.edit',['task'=>$task->id])}}">{{$task->title}}</a></li>    
            @endif    
        </ol>
    </nav>
    <div class="card border-0 shadow mb-4">
        <div class="card-body">
            @if(Session::has('message'))
            <div class="alert {{Session::get('alert-class')}}" role="alert">
                {{Session::get('message')}}
            </div>
            @endif
            <div class="row">
                <div class="col-12">
                    <h1 class="h4">Form Ubah Data Tugas</h1>
                </div>
            </div>
            <div class="row">
                <form action="{{route('tasks.start',['task'=>$task->id])}}" method="post" class="px-2">
                    @csrf
                    @method('PATCH')
                    <button type="submit" class="btn btn-primary">Start</button>
                </form>
                <form action="{{route('tasks.complete',['task'=>$task->id])}}" method="post" class="px-2">
                    @csrf
                    @method('PATCH')
                    <input type="hidden" name="complete" value="{{!$task->complete}}">
                    <button type="submit" class="btn btn-secondary">Mark as complete</button>
                </form>
            </div>
            <form action="{{route('tasks.update',['task'=>$task->id])}}" method="POST">
                @csrf
                <div class="row">
                    <div class="col-12">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="title">Judul</label>
                            <input type="text" name="title" id="title" 
                                class="form-control @error('title') is-invalid @enderror"
                                value="{{$task->title}}" required>
                            @error('title')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                    {{-- <div class="col-6">
                        <div class="mb-2">
                            @php
                                $project_id=$project?$project->id:null;
                            @endphp
                            <label class="my-1 me-2" for="projects_id">Proyek</label>
                            <select name="projects_id" id="projects-select"class="form-control basic-select2 w-100"
                                @if ($project_id) disabled @endif
                                required
                            >
                                <option value=""> Pilih daftar tugas </option>
                                @foreach ($projects as $item)
                                <option value="{{$item->id}}"  
                                    @if (old('projects_id'))
                                        {{(old('projects_id')==$item->id)? 'selected' : ''}}
                                    @else
                                        {{$project_id==$item->id?'selected':''}}
                                    @endif
                                    @if(count($project->users))
                                        {{$project->users->contains($user->id)? 'selected' : ''}}
                                    @endif
                                >{{$item->title}}</option>
                                @endforeach
                            </select>
                            @error('projects_id')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div> --}}
                    
                    <div class="col-6">
                        <div class="mb-2">
                            @php
                                $project_id=$project?$project->id:null;
                            @endphp
                            <label class="my-1 me-2" for="lists_id">Daftar Tugas (List)</label>
                            <select name="lists_id" class="form-control w-100" 
                                id="dynamic-select2-list"
                                @if ($project_id) disabled @endif
                                required
                            >
                                <option value=""> Pilih proyek </option>
                            </select>
                            @error('lists_id')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="start">Tanggal mulai</label>
                            <input type="date" name="start" id="start" 
                                class="form-control @error('start') is-invalid @enderror"
                                value="{{old('start')}}" required>
                            @error('start')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="end">Tanggal selesai</label>
                            <input type="date" name="end" id="end" 
                                class="form-control @error('end') is-invalid @enderror"
                                value="{{old('end')}}" required>
                            @error('end')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="actual_start">Tanggal realisasi mulai</label>
                            <input type="date" name="actual_start" id="actual_start" 
                                class="form-control @error('actual_start') is-invalid @enderror"
                                value="{{old('actual_start')}}" required>
                            @error('actual_start')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="actual_end">Tanggal realisasi selesai</label>
                            <input type="date" name="actual_end" id="actual_end" 
                                class="form-control @error('actual_end') is-invalid @enderror"
                                value="{{old('actual_end')}}" required>
                            @error('actual_end')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                    {{-- <div class="col-12">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="users">Anggota proyek</label>
                            <select name="users[]" id="" class="form-control basic-select2" multiple>
                                @foreach ($users as $user)
                                    <option value="{{$user->id}}"  
                                        @if(count($task->users))
                                            {{$task->task_members->pluck('user.id')->contains($user->id)? 'selected' : ''}}
                                        @endif
                                        >{{$user->name}} - {{$user->role->name}}</option>
                                    @endforeach
                            </select>
                            @error('users')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="clients">Klien</label>
                            <select name="clients" id="" class="form-control basic-select2" multiple>
                                @foreach ($clients as $client)
                                    <option value="{{$client->id}}"
                                        @if(old('clients'))
                                            {{$task->task_members->pluck('client.id')->contains($item->id)? 'selected' : ''}}
                                        @endif>{{$client->institution}}</option>
                                @endforeach
                            </select>
                            @error('clients')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>  --}}
                    <div class="col-12">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="tags">Tag (Kategori)</label>
                            <select name="tags" id="" class="form-control basic-select2" multiple>
                                @foreach ($tags as $tag)
                                    <option value="{{$tag->id}}"  
                                        @if(old('tags'))
                                            {{collect(old('tags'))->contains($item->id)? 'selected' : ''}}
                                        @endif>{{$tag->title}}</option>
                                @endforeach
                            </select>
                            @error('tags')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="description">Deskripsi</label>
                            <textarea name="description" class="form-control" 
                                cols="20" rows="4">{{old('description')}}</textarea>
                            @error('description')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                </div>
                <button class="btn btn-secondary" style="float:right" type="submit">Simpan</button>
            </form>
        </div>
    </div>  
@endsection

@section('scripts')
    <script>
        @if($project)
            const default_projects_id={{$project->id}};
            const default_lists_id={{$list->id}};
            function loadLists(projects_id){
                var url='';
                if(projects_id){
                    url="{{url('master/projects')}}/"+projects_id+"/lists";
                }else{
                    url="{{url('master/lists')}}";
                }
                $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'json', // added data type
                    success: function(data) {
                        var html='';
                        data.forEach(list => {
                            html+=`<option value="${list.id}">${list.title}</option>`
                        });
                        $('#dynamic-select2-list').html(html);
                        $('#dynamic-select2-list').select2();
                        console.log(data);
                    }
                });
            }

            $(document).ready(function(){
                loadLists(default_projects_id);
            });

            //  dynamic-select2-list
            $('#projects-select').change(function(){
                loadLists(default_projects_id);
            })
        @else
        @endif
    </script>
@endsection