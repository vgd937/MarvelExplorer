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

    @GetMapping
    public String getCharacters(@RequestParam String name) {
        System.out.println("Recibida petición para: " + name);
        return marvelApiService.getCharacters(name);
    }
    @GetMapping("/{id}")
public String getCharacterById(@PathVariable long id) {
    return marvelApiService.getCharacterById(id);
}
}
