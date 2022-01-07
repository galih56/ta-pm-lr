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
            <li class="breadcrumb-item" aria-current="page"><a href="{{route('users.index')}}">User</a></li>
            <li class="breadcrumb-item active" aria-current="page"><a href="{{route('users.edit',['user'=>$user->id ])}}">{{$user->name}}</a></li>
        </ol>
    </nav>
</div>

<div class="card border-0 shadow mb-4">
    <div class="card-body">
        <form class="mt-4"action="{{ route('users.update',['user'=>$user->id]) }}" method="POST">
            @csrf
            @method('PUT')
            @if(Session::has('message'))
                <div class="alert {{Session::get('alert-class')}}" role="alert">
                    {{Session::get('message')}}
                </div>
            @endif
            <!-- Form -->
            <div class="col-12">
                <div class="mb-2">
                    <label class="my-1 me-2" for="name">Nama</label>
                    <input type="text" name="name" id="name" 
                        class="form-control @error('name') is-invalid @enderror" 
                        value="{{$user->name}}"
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
                        value="{{$user->email}}"
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
                    <label for="Role">Role</label>
                    <select name="roles_id" id="role" class="form-control">
                        @foreach ($roles as $item)
                            <option value="{{$item->id}}" @if($item->id==$user->roles_id) selected @endif>{{$item->name}}</option>
                        @endforeach
                    </select>
                </div>
            </div>
            <!-- End of Form -->
            <button type="submit" class="btn btn-secondary" style="float:right">Simpan</button>
        </form>
    </div>
</div> 
<div class="card border-0 shadow mb-4">
    <div class="card-body">
        <form action="{{route('admins.change-password',['id'=>$user->id])}}" method="post">
            @csrf
            @method('PUT')
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
            <button type="submit" class="btn btn-danger" style="float:right">Ubah password</button>
        </form>
    </div>
</div>
<div class="card border-0 shadow mb-4">
    <div class="card-body">
        <form action="{{route('users.destroy',['user'=>$user->id])}}" 
            method="POST" id="form-delete-user-{{$user->id}}"
            >
            @csrf
            @method('DELETE')
            <div class="alert alert-danger" role="alert">
               Data akun yang dihapus tidak dapat dikembalikan lagi.
            </div>
            <button type="submit" class="btn btn-danger" style="float:right">hapus</button>
        </form>
    </div>
</div>
@endsection

@section('scripts')
<script>
    $(document).ready(function() {
        $('#select-users').select2();
    });
    
    $('.button-delete-role').on('click', function (e) {
        e.preventDefault();
        var swal_config={
            title: `Anda yakin ingin menghapus role {{$user->name}}?`,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ya!",
            cancelButtonText: "Batal",
            showCancelButton: true,
            buttons: {  cancel: true, confirm: true },
        }
        Swal.fire(swal_config).then((result) => {
            if (result.isConfirmed) {
                $(`#form-delete-user-{{$user->id}}`).submit();
            } 
        });
    });
    
    $('.form-change-password-user-{{$user->id}}').on('click', function (e) {
        e.preventDefault();
        var swal_config={
            title: `Anda yakin ingin menghapus role {{$user->name}}?`,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ya!",
            cancelButtonText: "Batal",
            showCancelButton: true,
            buttons: {  cancel: true, confirm: true }
        }
        
        Swal.fire(swal_config).then((result) => {
            if (result.isConfirmed) {
                $(`#form-change-password-user-{{$user->id}}`).submit();
            } 
        });
    });
</script>
@endsection