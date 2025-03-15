@extends('layouts.app')

@section('content')
    <div class="RegistrationForm">
        <h1>{{ isset($post) ? 'Edit Post' : 'Create Post' }}</h1>
        <form action="{{ isset($post) ? route('posts.update', $post) : route('posts.store') }}" method="POST">
            @csrf
            @isset($post) @method('PUT') @endisset
            <label>Title: <input style="border: 1px solid white" type="text" name="title" value="{{ $post->title ?? '' }}" required></label>
            <label>Content: <textarea name="content" required>{{ $post->content ?? '' }}</textarea></label>
            <button type="submit">{{ isset($post) ? 'Update' : 'Create' }}</button>
        </form>
    </div>
@endsection
