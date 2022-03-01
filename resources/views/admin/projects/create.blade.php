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
            <li class="breadcrumb-item active" aria-current="page"><a href="{{route('projects.index')}}">Daftar Proyek</a></li>
        </ol>
    </nav>
    <div class="card border-0 shadow mb-4">
        <div class="card-body">
            @if(Session::has('message'))
            <div class="alert {{Session::get('alert-class')}}" role="alert">
                {{Session::get('message')}}
            </div>
            @endif
            <form action="{{route('projects.store')}}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="row">
                    <h1 class="h4">Form Tambah Proyek</h1>
                    <div class="col-8">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="title">Nama</label>
                            <input type="text" name="title" id="title" 
                                class="form-control @error('title') is-invalid @enderror"
                                value="{{old('title')}}" required>
                            @error('title')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="progress">Progress</label>
                            <input type="text" name="progress" id="progress" 
                                class="form-control @error('progress') is-invalid @enderror"
                                value="{{$project->progress}}" required>
                            @error('progress')
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
                    <div class="col-12">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="users">Anggota proyek</label>
                            <select name="users[]" id="" class="form-control basic-select2" multiple>
                                @foreach ($users as $user)
                                    <option value="{{$user->id}}"  
                                        @if(old('users'))
                                            {{collect(old('users'))->contains($item->id)? 'selected' : ''}}
                                        @endif>{{$user->name}} - {{$user->role->name}}</option>
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
                            <select name="clients[]" id="" class="form-control basic-select2" multiple>
                                @foreach ($clients as $client)
                                    <option value="{{$client->id}}"
                                        @if(old('clients'))
                                            {{collect(old('clients'))->contains($item->id)? 'selected' : ''}}
                                        @endif>{{$client->institution}}</option>
                                @endforeach
                            </select>
                            @error('clients')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div> 
                    <div class="col-12">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="teams">Tim</label>
                            <select name="teams[]" id="" class="form-control basic-select2" multiple>
                                @foreach ($teams as $team)
                                    <option value="{{$team->id}}"  
                                        @if(old('teams'))
                                            {{collect(old('teams'))->contains($item->id)? 'selected' : ''}}
                                        @endif>{{$team->name}}</option>
                                @endforeach
                            </select>
                            @error('team')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="teams">Deskripsi</label>
                            <textarea name="description" class="form-control" 
                                cols="20" rows="4">{{old('description')}}</textarea>
                            @error('team')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>

                    <div class="col-12 mt-3">
                        <a href="{{url('api/import-format')}}">Download format import</a>
                    </div>
                    <div class="col-12 mt-1">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="teams">Import excel</label>
                            <input type="file" name="file" id="file">   
                        </div>
                    </div>
                    
                </div>
                <button class="btn btn-secondary" style="float:right" type="submit">Simpan</button>
            </form>
        </div>
    </div>  
@endsection