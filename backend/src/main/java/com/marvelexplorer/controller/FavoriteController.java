package com.marvelexplorer.controller;

import com.marvelexplorer.model.Favorite;
import java.util.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/favorites")
public class FavoriteController {
    private final Map<Long, Favorite> favorites = new HashMap<>();

    @GetMapping
    public Collection<Favorite> getAllFavorites() {
        return favorites.values();
    }

    @PostMapping
    public Favorite addFavorite(@RequestBody Favorite favorite) {
        favorites.put(favorite.getCharacterId(), favorite);
        return favorite;
    }

    @PutMapping("/{characterId}")
    public Favorite updateFavorite(@PathVariable Long characterId, @RequestBody Favorite favorite) {
        favorites.put(characterId, favorite);
        return favorite;
    }

    @DeleteMapping("/{characterId}")
    public void removeFavorite(@PathVariable Long characterId) {
        favorites.remove(characterId);
    }
}
