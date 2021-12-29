@extends('admin.layouts.layout')

@section('css')
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
@endsection

@section('content')
<div class="py-4">
    <nav aria-label="breadcrumb" class="d-none d-md-inline-block">
        <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
            <li class="breadcrumb-item">
                <a href="#">
                    <svg class="icon icon-xxs" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </a>
            </li>
            <li class="breadcrumb-item" aria-current="page"><a href="{{route('team.index')}}">Team</a></li>
            <li class="breadcrumb-item active" aria-current="page"><a href="{{route('team.edit',['team'=>$team->id ])}}">{{$team->title}}</a></li>
        </ol>
    </nav>
</div>

<div class="card border-0 shadow mb-4">
    <div class="card-body">
        <form class="mt-4"action="{{ route('team.update',['team'=>$team->id]) }}" method="POST">
            @csrf
            @method('PUT')
            @if(Session::has('message'))
                <div class="alert {{Session::get('alert-class')}}" team="alert">
                    {{Session::get('message')}}
                </div>
            @endif
            <!-- Form -->
            <div class="form-group mb-4">
                <label for="name">Name</label>
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon1">
                        <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </span>
                    <input type="name" 
                        name="name"
                        class="form-control"  id="name" 
                        value="{{$team->name}}"
                        autofocus required>
                
                    @error('name')
                    <span class="invalid-feedback" team="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>  
            </div>
            <!-- End of Form -->
            <button type="submit" class="btn btn-secondary" style="float:right">Simpan</button>
        </form>
    </div>
</div> 

<div class="card border-0">
    <div class="card-body">
        <h1 class="h4">Daftar team</h1>
        <div class="row">
            <div class="table-responsive">
                <table class="table table-centered table-nowrap mb-0 rounded">
                    <thead class="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        @foreach ($team->users as $user)
                            <tr>
                                <td>{{$user->name}}</td>
                                <td>{{$user->email}}</td>
                                <td><a href="{{url('/master/users/'.$user->id)}}" class="btn btn-primary">Ubah</a></td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

@endsection