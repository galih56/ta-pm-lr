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
            @if ($project)
                <li class="breadcrumb-item"><a href="{{route('projects.index')}}">Daftar Proyek</a></li>
                <li class="breadcrumb-item"><a href="{{route('projects.edit',['project'=>$project->id])}}">{{$project->title}}</a></li>
                <li class="breadcrumb-item"><a href="{{route('lists.index',['project'=>$project->id])}}#daftartugas">Daftar tugas</a></li>
                <li class="breadcrumb-item active" aria-current="page"><a href="{{route('lists.edit',['list'=>$list->id,'project'=>$project->id])}}">{{$list->title}}</a></li>
            @else
                <li class="breadcrumb-item"><a href="{{route('lists.index')}}">Daftar tugas</a></li>
                <li class="breadcrumb-item active" aria-current="page"><a href="{{route('lists.edit',['list'=>$list->id])}}">{{$list->title}}</a></li>    
            @endif
        </ol>
    </nav>
    <div class="card border-0 shadow mb-4">
        <div class="card-body">
            <form action="{{route('lists.update',['list'=>$list->id])}}" method="POST">
                @method('PUT')
                @csrf
                <div class="row">
                    <h1 class="h4">Form Ubah Daftar Tugas (List)</h1>
                    <div class="col-12">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="title">Judul</label>
                            <input type="text" name="title" id="title" 
                                class="form-control @error('title') is-invalid @enderror"
                                value="{{$list->title}}" required>
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
                                value="{{ \Carbon\Carbon::parse($list->start)->isoformat('YYYY-MM-DD')}}" required>
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
                                value="{{ \Carbon\Carbon::parse($list->end)->isoformat('YYYY-MM-DD')}}" required>
                            @error('end')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mb-2">
                            <label class="my-1 me-2" for="projects_id">proyek</label>
                            @php
                                $project_id=$project?$project->id:null;
                            @endphp
                            <select name="projects_id" class="form-control basic-select2 w-100">
                                <option value=""> Pilih proyek </option>
                                    @foreach ($projects as $project)
                                    <option value="{{$project->id}}"  
                                            {{$project->id==$project_id? 'selected' : ''}}
                                    >{{$project->title}}</option>
                                    @endforeach
                            </select>
                            @error('projects_id')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror    
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-secondary" style="float:right" type="submit">Simpan</button>
                    </div>
                </div>
            </form>
        </div>
    </div>  

    <div class="card border-0 shadow mb-4">
        <div class="card-body" id="daftartugas">
            <div class="row">
                <div class="col-12">
                    <a class="btn btn-secondary" href="{{route('projects.lists.tasks.create',['project'=>$project->id,'list'=>$list->id])}}" style="float:right"> + Tambah tugas</a>
                </div>
                <div class="col-12">
                    <div class="table-responsive mt-2">
                        @if(count($list->tasks)>0)
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
                                    @foreach ($list->cards as $i => $task)
                                        <tr>
                                            <td>
                                                {{$task->id}}
                                            </td>
                                            <td>
                                                {{$task->title}}
                                            </td>
                                            <td>
                                                {{ \Carbon\Carbon::parse($task->created_at)->isoformat('D MMMM Y')}}
                                            </td>
                                            <td>
                                                {{ \Carbon\Carbon::parse($task->updated_at)->isoformat('D MMMM Y')}}
                                            </td>
                                            <td style="text-align:left">
                                                <a class="btn btn-info m-2" 
                                                    href="{{route('tasks.edit',[
                                                        'task'=>$task->id, 
                                                        'list'=>$list->id,
                                                        'project'=>$project->id])}}">Ubah</a>
                                            </td>
                                        </tr>
                                        <!-- End of Item -->
                                    @endforeach                        
                                </tbody>
                            </table>
                        @else                        
                            <div class="alert alert-info" project="alert">
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
            <form action="{{route('lists.destroy',['list'=>$list->id])}}" 
                method="POST" id="form-delete">
                @csrf
                @method('DELETE')
                <div class="alert alert-danger" role="alert">
                   Data yang dihapus tidak dapat dikembalikan lagi.
                </div>
                <button type="submit" class="btn btn-danger button-delete" style="float:right">hapus</button>
            </form>
        </div>
    </div>
</div>
@endsection


@section('scripts')
<script>
    $('.button-delete').on('click', function (e) {
        e.preventDefault();
        var swal_config={
            title: `Anda yakin ingin menghapus {{$list->title}}?`,
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