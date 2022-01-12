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
            <li class="breadcrumb-item" aria-current="page"><a href="{{route('tasks.index')}}">Daftar Proyek</a></li>
            <li class="breadcrumb-item active" aria-current="page"><a href="{{route('tasks.edit',['task'=>$task->id ])}}">{{$task->title}}</a></li>
        </ol>
    </nav>
</div>

<div class="card border-0 shadow mb-4">
    <div class="card-body">
        <form class="mt-4"action="{{ route('tasks.update',['task'=>$task->id]) }}" method="POST">
            @method('PUT')  
            @csrf
            @if(Session::has('message'))
                <div class="alert {{Session::get('alert-class')}}" role="alert">
                    {{Session::get('message')}}
                </div>
            @endif
            <!-- Form -->
            <div class="row">
                <h1 class="h4">Form Edit Proyek</h1>
                <div class="col-12">
                    <div class="mb-2">
                        <label class="my-1 me-2" for="title">Nama</label>
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
                <div class="col-6">
                    <div class="mb-2">
                        <label class="my-1 me-2" for="start">Tanggal mulai</label>
                        <input type="date" name="start" id="start" 
                            class="form-control @error('start') is-invalid @enderror"
                            value="{{ $task->start?(\Carbon\Carbon::parse($task->start)->isoformat('YYYY-MM-DD')):''}}" required>
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
                            value="{{$task->end?(\Carbon\Carbon::parse($task->end)->isoformat('YYYY-MM-DD')):''}}" required>
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
                            value="{{$task->actual_start?(\Carbon\Carbon::parse($task->actual_start)->isoformat('YYYY-MM-DD')):''}}" required>
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
                            value="{{$task->actual_end?(\Carbon\Carbon::parse($task->actual_end)->isoformat('YYYY-MM-DD')):''}}" required>
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
                        <select name="users[]" class="form-control basic-select2 w-100" multiple>
                            @foreach ($users as $user)
                                <option value="{{$user->id}}"  
                                    @if(count($task->users))
                                        {{$task->users->contains($user->id)? 'selected' : ''}}
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
                        <select name="clients[]" class="form-control basic-select2" multiple>
                            @foreach ($clients as $client)
                                <option value="{{$client->id}}"
                                    @if($task->clients)
                                        {{$task->clients->contains($client->id)? 'selected' : ''}}
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
                <div class="col-12 mb-2">
                    <label class="my-1 me-2" for="tags">Tag (Kategori)</label>
                    <select name="tags[]" class="form-control basic-select2" multiple>
                        @foreach ($tags as $tag)
                            <option value="{{$tag->id}}"  
                                @if($task->tags)
                                    {{$task->tags->contains($tag->id)? 'selected' : ''}}
                                @endif>{{$tag->title}}</option>
                        @endforeach
                    </select>
                    @error('tags')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror    
                </div>
                <div class="col-12">
                    <div class="mb-2">
                        <label class="my-1 me-2" for="description">Deskripsi</label>
                        <textarea name="description" class="form-control" 
                            cols="20" rows="4">{{$task->description}}</textarea>
                        @error('description')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror    
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-secondary" style="float:right">Simpan</button>
                </div>
                <!-- End of Form -->
            </div>
        </form>
    </div>
</div> 

<div class="card border-0 shadow mb-4">
    <div class="card-body" id="daftartugas">
        <div class="row">
            <div class="col-12">
                <a class="btn btn-secondary" href="{{route('tasks.lists.create',['task'=>$task->id])}}" style="float:right"> + Tambah daftar tugas</a>
            </div>
            <div class="col-12">
                <div class="table-responsive mt-2">
                    @if(count($task->lists)>0)
                        <table class="table table-centered table-nowrap mb-0 rounded basic-datatable">
                            <thead class="thead-light">
                                <tr>
                                    <th class="border-0 rounded-start">ID</th>
                                    <th class="border-0">Nama</th>
                                    <th class="border-0">Dibuat</th>
                                    <th class="border-0">Diubah</th>
                                    <th class="border-0 rounded-end"></th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($task->lists as $i => $list)
                                    <tr>
                                        <td>
                                            {{$list->id}}
                                        </td>
                                        <td>
                                            {{$list->title}}
                                        </td>
                                        <td>
                                            {{ \Carbon\Carbon::parse($list->created_at)->isoformat('D MMMM Y')}}
                                        </td>
                                        <td>
                                            {{ \Carbon\Carbon::parse($list->updated_at)->isoformat('D MMMM Y')}}
                                        </td>
                                        <td style="text-align:left">
                                            <a class="btn btn-info m-2" 
                                                href="{{route('lists.edit',[
                                                    'list'=>$list->id, 
                                                    'task'=>$task->id])}}">Ubah</a>
                                        </td>
                                    </tr>
                                    <!-- End of Item -->
                                @endforeach                        
                            </tbody>
                        </table>
                    @else                        
                        <div class="alert alert-info" task="alert">
                            Belum ada data 
                        </div>
                    @endif
                </div>
            </div>     
        </div>
    </div>
</div>
<div class="card border-0 shadow mb-4">
    <div class="card-body">
        <form action="{{route('tasks.destroy',['task'=>$task->id])}}" 
            method="POST" id="form-delete"
            >
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
            title: `Anda yakin ingin menghapus {{$task->name}}?`,
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