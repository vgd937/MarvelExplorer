package com.marvelexplorer.controller;

import com.marvelexplorer.service.MarvelApiService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/characters")
@CrossOrigin(origins = "*")
public class CharacterController {
    private final MarvelApiService marvelApiService;

    public CharacterController(MarvelApiService marvelApiService) {
        this.marvelApiService = marvelApiService;
    }

    @GetMapping("/ping")
    public String ping() {
        return "¡Backend activo!";
    }

    @GetMapping(produces = "application/json")
    public String searchCharacters(
        @RequestParam(required = false) String name,
        @RequestParam(required = false, name = "nameStartsWith") String nameStartsWith
    ) {
        String query = nameStartsWith != null ? nameStartsWith : name;
        System.out.println("Petición recibida a /api/characters con query=" + query);
        if (query == null || query.isBlank()) {
            return """
            {
              "data": {
                "results": []
              }
            }
            """;
        }
        // Llama al servicio real de Marvel
        return marvelApiService.getCharacters(query);
    }

    @GetMapping("/{id}")
    public String getCharacterById(@PathVariable long id) {
        return marvelApiService.getCharacterById(id);
    }

    @GetMapping("/{id}/comics")
    public String getComics(@PathVariable long id) {
        return marvelApiService.getComicsByCharacterId(id);
    }

    @GetMapping("/{id}/events")
    public String getEvents(@PathVariable long id) {
        return marvelApiService.getEventsByCharacterId(id);
    }
}
