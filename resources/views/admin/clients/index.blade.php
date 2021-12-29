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
            <li class="breadcrumb-item active" aria-current="page"><a href="{{route('clients.index')}}">Client</a></li>
        </ol>
    </nav>
</div>  

<div class="card border-0 shadow mb-4">
    <div class="card-body">
        <h1 class="h4">Daftar Client</h1>
        <div class="row">
            <div class="col-12">
                @if(Session::has('message'))
                <div class="alert {{Session::get('alert-class')}}" client="alert">
                    {{Session::get('message')}}
                </div>
                @endif
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <a class="btn btn-secondary" href="{{route('clients.create')}}" style="float:right"> + Tambah akun</a>
            </div>
            <div class="col-12">
                <div class="table-responsive mt-2">
                    @if(count($clients)>0)
                        <table class="table table-centered table-nowrap mb-0 rounded">
                            <thead class="thead-light">
                                <tr>
                                    <th class="border-0 rounded-start">ID</th>
                                    <th class="border-0">Nama</th>
                                    <th class="border-0 rounded-end"></th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($clients as $i => $client)
                                    <tr>
                                        <td>
                                            {{$client->id}}
                                        </td>
                                        <td>
                                            {{$client->name}}
                                        </td>
                                        <td style="text-align:left">
                                            <a class="btn btn-info m-2" 
                                                href="{{route('clients.edit',['client'=>$client->id])}}">Ubah</a>
                                        </td>
                                    </tr>
                                    <!-- End of Item -->
                                @endforeach                        
                            </tbody>
                        </table>
                    @else                        
                        <div class="alert alert-info" client="alert">
                            Belum ada data 
                        </div>
                    @endif
                </div>
            </div>     
        </div>
        @include('admin.layouts.pagination', ['data'=>$clients])
    </div>
</div>
@endsection
