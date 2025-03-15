@extends('layouts.app')

@section('content')
    <div class="RegistrationForm">
        <div class="ring">
            <div class="loginFormContainer">
                {{ $slot }}
            </div>
        </div>
    </div>
@endsection
