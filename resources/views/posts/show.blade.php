@extends('layouts.app')

@section('content')
    <div class="LanguageSection">
        <h1>{{ $post->title }}</h1>
        <p>{{ $post->content }}</p>
        <a href="{{ route('posts.index') }}">Back to Posts</a>
    </div>
@endsection
