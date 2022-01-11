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
            <li class="breadcrumb-item active" aria-current="page"><a href="{{route('users.index')}}">Daftar User</a></li>
        </ol>
    </nav>
    <div class="card border-0 shadow mb-4">
        <div class="card-body">
            @if(Session::has('message'))
            <div class="alert {{Session::get('alert-class')}}" role="alert">
                {{Session::get('message')}}
            </div>
            @endif
            <form action="{{route('users.store')}}" method="POST">
                @csrf
                <div class="row">
                    <h1 class="h4">Form Tambah User</h1>
                    <div class="col-12">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="name">Nama</label>
                            <input type="text" name="name" id="name" 
                                class="form-control @error('name') is-invalid @enderror" 
                                value="{{old('name')}}"
                                required>
                            @error('name')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                    
                    <div class="col-12">
                        <div class="my-4">
                            <label class="my-1 me-2" for="email">Email</label>
                            <input type="email" name="email" id="email" 
                                class="form-control @error('email') is-invalid @enderror" 
                                value="{{old('email')}}"
                                required>
                            @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="my-4">
                            <label class="my-1 me-2" for="password">Kata sandi</label>
                            <input type="password" name="password" id="password" 
                                class="form-control @error('password') is-invalid @enderror" 
                                required>
                            @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="my-4">
                            <label class="my-1 me-2" for="password_confirmation">Konfirmasi Kata sandi</label>
                            <input type="password" name="password_confirmation" id="password_confirmation" 
                                class="form-control @error('password_confirmation') is-invalid @enderror" 
                                required>
                            @error('password_confirmation')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="my-4">
                            <label for="Role">Role</label>
                            <select name="roles_id" id="role" class="form-control">
                                @foreach ($roles as $item)
                                    <option value="{{$item->id}}">{{$item->name}}</option>
                                @endforeach
                            </select>
                            @error('roles_id')
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