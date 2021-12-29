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
            <li class="breadcrumb-item" aria-current="page"><a href="{{route('admins.index')}}">Daftar Admin</a></li>
            <li class="breadcrumb-item active" aria-current="page"><a href="{{route('admins.edit',['admin'=>$admin->id ])}}">{{$admin->name}}</a></li>
        </ol>
    </nav>
</div>

<div class="card border-0 shadow mb-4">
    <div class="card-body">
        <form class="mt-4"action="{{ route('admins.update',['admin'=>$admin->id]) }}" method="POST">
            @csrf
            @method('PATCH')
            @if(Session::has('message'))
                <div class="alert {{Session::get('alert-class')}}" role="alert">
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
                        class="form-control" 
                        placeholder="John doe" id="name" 
                        value="{{$admin->name}}"
                        autofocus required>
                
                    @error('name')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>  
            </div>
            <!-- End of Form -->
            <!-- Form -->
            <div class="form-group mb-4">
                <label for="email">Email</label>
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon1">
                        <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </span>
                    <input type="email" 
                        name="email" class="form-control" 
                        placeholder="example@company.com" id="email" 
                        autofocus required
                        value="{{$admin->email}}"
                    >
                    @error('email')
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
        <h1 class="h4">Ubah Kata Sandi</h1>
        <form action="{{route('admins.change-password',['id'=>$admin->id])}}" method="POST" 
            id="form-change-password-admin">
            @if(Session::has('change-password-message'))
                <div class="alert {{Session::get('change-password-alert-class')}}" role="alert">
                    {{Session::get('change-password-message')}}
                </div>
            @endif
            @csrf
            <div class="form-group">
                <div class="form-group mb-4">
                    <label for="password">Password</label>
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon2">
                            <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                        </span>
                        <input type="password" name="password" 
                            placeholder="Password" 
                            class="form-control" id="password" required>
                        @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>  
                </div>
                <div class="form-group mb-4">
                    <label for="confirm_password">Confirm Password</label>
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon2">
                            <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                        </span>
                        <input type="password" 
                            placeholder="Confirm Password" 
                            name="password_confirmation"
                            class="form-control" id="confirm_password" required>
                        @error('password_confirmation')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>  
                </div>
            </div>
            <button type="submit" class="btn btn-danger" 
                id="button-change-password-admin"
                style="float:right">Simpan</button>
        </form>
    </div>
</div>


<div class="card border-0 shadow mb-4">
    <div class="card-body">
        <form action="{{route('admins.destroy',['admin'=>$admin->id])}}" 
            method="POST" id="form-delete-admin"
            >
            @csrf
            @method('DELETE')
            <div class="alert alert-danger" role="alert">
               Data akun yang dihapus tidak dapat dikembalikan lagi.
            </div>
            <button type="submit" class="btn btn-danger" id="button-delete-admin" style="float:right">hapus</button>
        </form>
    </div>
</div>
@endsection
@section('plugins')
<script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
@endsection

@section('scripts')
<script>
    $(document).ready(function() {
        $('#select-roles').select2();
    });
    
    $('#button-delete-admin').on('click', function (e) {
        e.preventDefault();
        var swal_config={
            title: `Anda yakin ingin menghapus admin {{$admin->name}}?`,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ya!",
            cancelButtonText: "Batal",
            showCancelButton: true,
            buttons: {  cancel: true, confirm: true },
        }
        Swal.fire(swal_config).then((result) => {
            if (result.isConfirmed) {
                $(`#form-delete-admin`).submit();
            } 
        });
    });
    
    $('#button-change-password-admin').on('click', function (e) {
        e.preventDefault();
        var swal_config={
            title: `Anda yakin ingin mengubah kata sandi akun ini?`,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ya!",
            cancelButtonText: "Batal",
            showCancelButton: true,
            buttons: {  cancel: true, confirm: true }
        }
        
        Swal.fire(swal_config).then((result) => {
            if (result.isConfirmed) {
                $(`#form-change-password-admin`).submit();
            } 
        });
    });
</script>
@endsection