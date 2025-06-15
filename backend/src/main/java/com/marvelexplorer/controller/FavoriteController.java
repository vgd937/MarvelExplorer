package com.marvelexplorer.controller;

import com.marvelexplorer.model.Favorite;
import com.marvelexplorer.repository.FavoriteRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favorites")
@CrossOrigin
public class FavoriteController {
    private final FavoriteRepository repo;

    public FavoriteController(FavoriteRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Favorite> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Favorite add(@RequestBody Favorite fav) {
        return repo.save(fav);
    }

    @PutMapping("/{id}")
    public Favorite update(@PathVariable Long id, @RequestBody Favorite fav) {
        fav.setCharacterId(id);
        return repo.save(fav);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
}
