<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RecipeController extends Controller
{
    public function index()
    {
        $recipes = Recipe::with('likes')
            ->orderBy('created_at')
            ->get();

        return Inertia::render('Welcome', [
            'recipes' => $recipes
        ]);
    }

    public function create()
    {
        return Inertia::render('Recipe/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'ingredients' => 'required|array',
            'ingredients.*' => 'required',
            'instructions' => 'required|array',
            'instructions.*' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        try {
            // upload image
            $image = $request->file('image');
            $imageName = time() . '.' . $image->extension();
            $image->move(public_path('images/recipes'), $imageName);
            $path = '/images/recipes/' . $imageName;

            // save recipe
            Recipe::create([
                'title' => $request->title,
                'description' => $request->description,
                'image' => $path,
                'user_id' => auth()->user()->id,
                'ingredients' => json_encode($request->ingredients),
                'instructions' => json_encode($request->instructions),
            ]);

            return to_route('recipe.create')->with('success', 'Recipe created successfully');
        } catch (Exception $e) {
            return to_route('recipe.create')->with('error', $e->getMessage());
        }
    }

    public function show($id)
    {
        $recipe = Recipe::find($id);

        return Inertia::render('Recipe/Detail', [
            'recipe' => $recipe
        ]);
    }
}
