@extends('admin.layouts.layout')
@section('content')
<div class="py-4">
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
                <li class="breadcrumb-item"><a href="{{route('lists.create',['project'=>$project->id])}}#daftartugas">Daftar tugas</a></li>
                <li class="breadcrumb-item active" aria-current="page"><a href="{{route('lists.create',['project'=>$project->id])}}">Daftar tugas</a></li>
            @endif
            <li class="breadcrumb-item"><a href="{{route('lists.index')}}">Daftar tugas</a></li>
        </ol>
    </nav>
    <div class="card border-0 shadow mb-4">
        <div class="card-body">
            <form action="{{route('projects.store')}}" method="POST">
                @csrf
                <div class="row">
                    <h1 class="h4">Form Tambah Daftar Tugas</h1>
                    <div class="col-12">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="title">Judul</label>
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
                    <div class="col-12">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="projects">proyek</label>
                            <select name="projects" class="form-control basic-select2 w-100">
                                <option value=""> Pilih proyek </option>
                                    @foreach ($projects as $project)
                                    <option value="{{$project->id}}"  
                                            {{collect(old('projects'))->contains($project->id)? 'selected' : ''}}
                                    >{{$project->title}}</option>
                                    @endforeach
                            </select>
                            @error('projects')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <button class="btn btn-secondary" style="float:right" type="submit">Simpan</button>
                        </div>
                    </div>
                    
                </div>
            </form>
        </div>
    </div>  
@endsection