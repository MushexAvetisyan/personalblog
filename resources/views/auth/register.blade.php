<x-guest-layout>
    <div class="RegistrationForm">
        <div>
            <div class="loginFormContainer">
                <form method="POST" action="{{ route('register') }}">
                    @csrf
                    <h2>Registration</h2>
                    <div class="inputBx">
                        <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name"
                               value="{{ old('name') }}" required placeholder="Name" autocomplete="name" autofocus>

                        @error('name')
                        <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                        @enderror
                    </div>
                    <div class="inputBx">
                        <input id="email" type="email" class="form-control @error('email') is-invalid @enderror"
                               name="email" value="{{ old('email') }}" placeholder="Email" required autocomplete="email">

                        @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>
                    <div class="inputBx">
                        <input id="password" type="password" class="form-control @error('password') is-invalid @enderror"
                               name="password" placeholder="Password" required autocomplete="new-password">

                        @error('password')
                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                        @enderror
                    </div>
                    <div class="inputBx">
                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation"
                               required placeholder="Confirm Password" autocomplete="new-password">
                    </div>
                    <div class="links">
                        <a href="{{route('login')}}" >Sign In</a>
                        <button type="submit" class="btn btn-primary">
                            {{ __('Register') }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-guest-layout>
