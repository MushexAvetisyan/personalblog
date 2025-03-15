@extends('layouts.app')

@section('content')
    <h1>All Posts</h1>
    @foreach ($posts as $post)
        <div class="LanguageSection">
            <h3>Author: {{$post->user->name}}</h3>
            <h2><a href="{{ route('posts.show', $post) }}">{{ $post->title }}</a></h2>
            <p>{{ Str::limit($post->content, 100) }}</p>
            @if(Auth::id() === $post->user_id)
                <a href="{{ route('posts.edit', $post) }}">Edit</a>
                <form action="{{ route('posts.destroy', $post) }}" method="POST">
                    @csrf @method('DELETE')
                    <button type="submit">Delete</button>
                </form>
            @endif
        </div>
    @endforeach

    {{ $posts->links() }}
@endsection
