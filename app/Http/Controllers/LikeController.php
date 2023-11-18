<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function like(Request $request, $id)
    {
        $like = $request->user()->likes()->where('recipe_id', $id)->first();

        if ($like) {
            $like->delete();
        } else {
            $request->user()->likes()->create([
                'recipe_id' => $id
            ]);
        }


        return to_route('home');
    }
}
