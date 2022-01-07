<nav id="sidebarMenu" class="sidebar d-lg-block bg-gray-800 text-white collapse" data-simplebar>
    <div class="sidebar-inner px-2 pt-3">
        <div class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
        <div class="collapse-close d-md-none">
            <a href="#sidebarMenu" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu"
            aria-expanded="true" aria-label="Toggle navigation">
            <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            </a>
        </div>
        </div>
        <ul class="nav flex-column pt-3 pt-md-0">
            <li class="nav-item">
                <a href="{{url('/')}}" class="nav-link d-flex align-items-center">
                <span class="mt-1 ms-1 sidebar-text">
                    MANPRO
                </span>
                </a>
            </li>
            <li class="nav-item {{ Request::segment(2)=='projects' ? 'active' : '' }}">
                <a href="{{route('projects.index')}}" class="nav-link">
                    <span class="sidebar-text">Proyek</span>
                </a>
            </li> 
            <li class="nav-item {{ Request::segment(2)=='clients' ? 'active' : '' }}">
                <a href="{{route('clients.index')}}" class="nav-link">
                    <span class="sidebar-text">Client</span>
                </a>
            </li>
            <li class="nav-item {{ Request::segment(2)=='teams' ? 'active' : '' }}">
                <a href="{{route('teams.index')}}" class="nav-link">
                    <span class="sidebar-text">Team</span>
                </a>
            </li>   
            <li class="nav-item {{ Request::segment(2)=='users' ? 'active' : '' }}">
                <a href="{{route('users.index')}}" class="nav-link">
                    <span class="sidebar-text">User</span>
                </a>
            </li>      
            <li class="nav-item {{ Request::segment(2)=='roles' ? 'active' : '' }}">
                <a href="{{route('roles.index')}}" class="nav-link">
                    <span class="sidebar-text">Role</span>
                </a>
            </li>           
            {{-- 
            <li class="nav-item {{ Request::segment(2)=='ads' ? 'active' : '' }}">
                <a href="{{route('ads.index')}}" class="nav-link">
                    <span class="sidebar-text">Iklan</span>
                </a>
            </li>     
            --}}
        </ul>
    </div>
</nav> 