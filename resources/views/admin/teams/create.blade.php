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
            <li class="breadcrumb-item active" aria-current="page"><a href="{{route('roles.index')}}">Daftar Peran Admin</a></li>
        </ol>
    </nav>
    <div class="card border-0 shadow mb-4">
        <div class="card-body">
            <form action="{{route('roles.store')}}" method="POST">
                @csrf
                <div class="row">
                    <h1 class="h4">Form Tambah Team</h1>
                    <div class="col-12">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="name">Nama</label>
                            <input type="text" name="name" id="name" class="form-control @error('name') is-invalid @enderror" required>
                            @error('name')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="my-4">
                            <label for="textarea-description">Deskripsi</label>
                            <textarea name="description" class="form-control @error('description') is-invalid @enderror" 
                                placeholder="Isi deskripsi disini..."  rows="4"></textarea>
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