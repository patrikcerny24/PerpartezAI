package com.example.demo.controller;

import com.example.demo.entity.Recipe;
import com.example.demo.repository.RecipeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    private final RecipeRepository repository;

    public RecipeController(RecipeRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Recipe> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Recipe create(@RequestBody Recipe recipe) {
        return repository.save(recipe);
    }
}
