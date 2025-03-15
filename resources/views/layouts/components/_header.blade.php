<header class="header" id="header-menu" data-header>
    <div class="container">
        <a href="{{ url('/') }}" class="logo">PersonalBlog</a>
        <nav role="navigation" class="navbar primary-navigation active" data-navbar>
            <ul class="navbar-list">
                <li><a href="{{ url('/') }}" class="navbar-link hover-1" data-nav-toggler>Home</a></li>
                <li><a href="{{ url('posts') }}" class="navbar-link hover-1" data-nav-toggler>Posts</a></li>

                @guest
                    <li><a href="{{ route('login') }}" class="navbar-link hover-1" data-nav-toggler>Login</a></li>
                    <li><a href="{{ route('register') }}" class="navbar-link hover-1" data-nav-toggler>Register</a></li>
                @else
                    <li style="display: flex; align-items: center">
                        <p class="card-title">{{ auth()->user()->name }}</p>
                    </li>
                    <li><a href="{{ route('posts.create') }}" class="navbar-link hover-1">Create Post</a></li>
                    <li><a href="{{ route('logout') }}" class="navbar-link hover-1" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout</a></li>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">@csrf</form>
                @endguest
            </ul>
        </nav>
    </div>
</header>
