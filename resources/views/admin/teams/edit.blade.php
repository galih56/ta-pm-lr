@extends('admin.layouts.layout')

@section('css')
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
@endsection

@section('content')
<div class="py-2">
    <nav aria-label="breadcrumb" class="d-none d-md-inline-block">
        <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
            <li class="breadcrumb-item">
                <a href="#">
                    <svg class="icon icon-xxs" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </a>
            </li>
            <li class="breadcrumb-item" aria-current="page"><a href="{{route('teams.index')}}">Team</a></li>
            <li class="breadcrumb-item active" aria-current="page"><a href="{{route('teams.edit',['team'=>$team->id ])}}">{{$team->title}}</a></li>
        </ol>
    </nav>
</div>

<div class="card border-0 shadow mb-4">
    <div class="card-body">
        @if(Session::has('message'))
        <div class="alert {{Session::get('alert-class')}}" role="alert">
            {{Session::get('message')}}
        </div>
        @endif
        <form class="mt-4" action="{{ route('teams.update',['team'=>$team->id]) }}" method="POST">
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
                    <input type="name" name="name"class="form-control"  id="name" value="{{$team->name}}"autofocus required>
                
                    @error('name')
                    <span class="invalid-feedback" team="alert">
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
            <div class="col-12">
                <div class="mb-2">
                    <label class="my-1 me-2" for="users">Anggota proyek</label>
                    <select name="users[]" id="" class="form-control basic-select2" multiple>
                        @foreach ($users as $user)
                            <option value="{{$user->id}}"  
                                    {{($team->users->pluck('id'))->contains($user->id)? 'selected' : ''}}
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
            <!-- End of Form -->
            <button type="submit" class="btn btn-secondary" style="float:right">Simpan</button>
        </form>
    </div>
</div> 

<div class="card border-0 shadow mb-4">
    <div class="card-body">
        <form action="{{route('teams.destroy',['team'=>$team->id])}}" 
            method="POST" id="form-delete">
            @csrf
            @method('DELETE')
            <div class="alert alert-danger" role="alert">
               Data yang dihapus tidak dapat dikembalikan lagi.
            </div>
            <button type="submit" class="btn btn-danger  button-delete" style="float:right">hapus</button>
        </form>
    </div>
</div>
@endsection


@section('scripts')
<script>
    $('.button-delete').on('click', function (e) {
        e.preventDefault();
        var swal_config={
            title: `Anda yakin ingin menghapus {{$team->name}}?`,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ya!",
            cancelButtonText: "Batal",
            showCancelButton: true,
            buttons: {  cancel: true, confirm: true },
        }
        Swal.fire(swal_config).then((result) => {
            if (result.isConfirmed) {
                $(`#form-delete`).submit();
            } 
        });
    });
    
</script>
@endsection