<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{
    public function index()
    {
    	$posts = Post::all();
    	/*if($posts->isEmpty()) return response()->json(NULL, 404);
    	else return response()->json($posts, 200);*/
        return response()->json($posts, 200);
    }
    public function show($id)
    {
    	$post = Post::findOrFail($id);
    	return response()->json($post, 200);
    }

    public function edit($id)
    {
    	$post = Post::find($id); 
    	if(empty($post)) return response()->json(NULL, 404);
    	else return response()->json($post, 200);
    }
    public function update(Request $request, $id)
    {
    	$post = Post::findOrFail($id);
    	$post->update($request->all());
    	return $post;
    }

    public function add()
    {
    	// return Post::where('id', $id)->first();
    }
    public function store(Request $request)
    {
        $post = Post::create($request->all());
    	return response()->json($post, 200);
    }

    public function delete($id)
    {
    	$post = Post::findOrFail($id);
    	$post->delete();

    	return 204;
    }
}
