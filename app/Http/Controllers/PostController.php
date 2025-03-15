<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class PostController extends Controller
{
    /**
     * @return View
     */
    public function index(): View
    {
        $posts = Post::latest()->paginate(5);
        return view('posts.index', compact('posts'));
    }

    /**
     * @return View
     */
    public function create(): View
    {
        // Ensure the user is logged in
        if (!Auth::check()) {
            abort(403, 'Unauthorized action.');
        }
        return view('posts.create');
    }

    /**
     * @param PostRequest $request
     * @return RedirectResponse
     */
    public function store(PostRequest $request): RedirectResponse
    {
       $request->validated();

       $input = $request->all();

        // Ensure the user_id is assigned when creating a post
        $input['user_id'] = Auth::id();
        $input['content'] = strip_tags($request->input('content'));

       Post::create($input);

        return redirect()->route('posts.index')->with('success', 'Post created successfully.');
    }

    /**
     * @param Post $post
     * @return View
     */
    public function show(Post $post): View
    {
        return view('posts.show', compact('post'));
    }

    /**
     * @param Post $post
     * @return View
     */
    public function edit(Post $post): View
    {
        if ($post->user_id !== Auth::id()) {
            abort(403);
        }
        return view('posts.edit', compact('post'));
    }

    /**
     * @param PostRequest $request
     * @param Post $post
     * @return RedirectResponse
     */
    public function update(PostRequest $request, Post $post): RedirectResponse
    {
        $request->validated();

        $input = $request->all();
        $input['content'] = strip_tags($request->input('content'));

        if ($post->user_id !== Auth::id()) {
            abort(403);
        }

        $post->update($input);

        return redirect()->route('posts.index')->with('success', 'Post updated successfully.');
    }

    /**
     * @param Post $post
     * @return RedirectResponse
     */
    public function destroy(Post $post): RedirectResponse
    {
        if ($post->user_id !== Auth::id()) {
            abort(403);
        }

        $post->delete();
        return redirect()->route('posts.index')->with('success', 'Post deleted successfully.');
    }




}
