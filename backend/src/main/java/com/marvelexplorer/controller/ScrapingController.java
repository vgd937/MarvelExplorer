package com.marvelexplorer.controller;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/scraping")
public class ScrapingController {
    @GetMapping("/bio")
    public String getBio(@RequestParam String character) throws Exception {
        String url = "https://es.wikipedia.org/wiki/" + character.replace(" ", "_");
        Document doc = Jsoup.connect(url).get();
        return doc.select("p").first().text();
    }
}
