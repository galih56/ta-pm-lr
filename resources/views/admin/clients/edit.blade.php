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
            <li class="breadcrumb-item" aria-current="page"><a href="{{route('clients.index')}}">Daftar klien</a></li>
            <li class="breadcrumb-item active" aria-current="page"><a href="{{route('clients.edit',['client'=>$client->id ])}}">{{$client->institution}}</a></li>
        </ol>
    </nav>
</div>

<div class="card border-0 shadow mb-4">
    <div class="card-body">
        <form class="mt-4"action="{{ route('clients.update',['client'=>$client->id]) }}" method="POST">
            @csrf
            @method('PUT')
            @if(Session::has('message'))
                <div class="alert {{Session::get('alert-class')}}" role="alert">
                    {{Session::get('message')}}
                </div>
            @endif
            <!-- Form -->
            <div class="row">
                <h1 class="h4">Form Ubah Klien</h1>
                <div class="col-12">
                    <div class="mb-2">
                        <label class="my-1 me-2" for="institution">Nama institusi</label>
                        <input type="text" name="institution" id="institution" 
                            value="{{$client->institution}}"
                            class="form-control @error('institution') is-invalid @enderror" required>
                        @error('institution')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror    
                    </div>
                </div>
                
                <div class="col-12">
                    <div class="mb-2">
                        <label class="my-1 me-2" for="city">Kota</label>
                        <input type="text" name="city" id="city" 
                            value="{{$client->city}}"
                            class="form-control @error('city') is-invalid @enderror" required>
                        @error('city')
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
                            placeholder="Isi deskripsi disini..."  rows="4">{{$client->description}}</textarea>
                        @error('description')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror    
                    </div>
                </div>
            </div>
            <!-- End of Form -->
            <button type="submit" class="btn btn-secondary" style="float:right">Simpan</button>
        </form>
    </div>
</div> 
@endsection


@section('scripts')
<script>
    $('.button-delete').on('click', function (e) {
        e.preventDefault();
        var swal_config={
            title: `Anda yakin ingin menghapus {{$client->institution}}?`,
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