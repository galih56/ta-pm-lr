
@php 
setlocale(LC_TIME, 'id_ID');
\Carbon\Carbon::setLocale('id');
\Carbon\Carbon::now()->formatLocalized("%A, %d %B %Y");
@endphp

<!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <meta name="theme-color" content="#563d7c">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
     <!-- Volt CSS -->
    <link type="text/css" href="{{asset('admin/css/volt-pro.css')}}" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <style>
        .nav-item.active a.nav-link{
            color: #fb503b !important;
        }
        .sidebar-inner{
            /* untuk sidebar */
            overflow-x:hidden !important
        }
    </style>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.3/css/jquery.dataTables.css">  
    
    @yield('css')
</head>
<body>
    @switch(request()->route()->getName())
        @case('login.form.admin')
            @yield('content')
            @break
        @case('register.form.admin')
            @yield('content')
            @break
        @default 
            @include('admin.layouts.nav')
            @include('admin.layouts.sidenav')
            <main class="content">
                @include('admin.layouts.header')
                @yield('content')
                @include('admin.layouts.footer')
            </main>
            @break
    @endswitch
</body>
    <!-- Core -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
    
    <!-- Jquery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <!-- Vendor JS -->
    {{-- <script src="{{asset('admin/assets/js/on-screen.umd.min.js')}}"></script> --}}

    <!-- Slider -->
    <script src="{{asset('admin/assets/js/nouislider.min.js')}}"></script>

    <!-- Simplebar -->
    <script src="{{asset('admin/assets/js/simplebar.min.js')}}"></script>

    <!-- Smooth scroll -->
    <script src="{{asset('admin/assets/js/smooth-scroll.polyfills.min.js')}}"></script>

    <!-- Sweet Alerts 2 -->
    <script src="{{asset('admin/assets/js/sweetalert2.all.min.js')}}"></script>

    <!-- Volt JS -->
    <script src="{{asset('admin/assets/js/volt-pro.js')}}"></script>
    
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.js"></script>
    
    @yield('plugins')
    
    <script>
        $(document).ready(function() {
            $('.basic-select2').select2();
        });
        
        $(document).ready( function () {
            $('.basic-datatable').DataTable({
                "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
            });

        });
        
        function hideMultiLevelCollapse(){
            const multiLevelCollapse = $('.multi-level.collapse.show');
            multiLevelCollapse.each(function() {
                $( this ).removeClass( "show" );
            });
        }
        $('#sidebar-toggle').click(function(){
            var sidebarMenu=$('#sidebar-menu');
            if(sidebarMenu.hasClass('contracted')){
                sidebarMenu.removeClass('contracted');
            }else{
                hideMultiLevelCollapse();
                sidebarMenu.addClass('contracted');
            }
        });

        $('.nav-link.collapsed').click(function(){
            var sidebarMenu=$('#sidebar-menu');
            if(sidebarMenu.hasClass('contracted')){
                sidebarMenu.removeClass('contracted');
            }
        })
    </script>
    
    @yield('scripts')
</html>