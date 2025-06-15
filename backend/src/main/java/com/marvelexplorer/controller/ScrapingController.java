package com.marvelexplorer.controller;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/scraping")
public class ScrapingController {
    @GetMapping("/bio")
    public ResponseEntity<String> getBio(@RequestParam String character) {
        try {
            String url = "https://en.wikipedia.org/wiki/" + character.replace(" ", "_") + "_(comics)";
            Document doc = Jsoup.connect(url)
                .userAgent("Mozilla/5.0 (compatible; MarvelExplorerBot/1.0)")
                .timeout(5000)
                .get();

            Element p = doc.select("p").stream()
                .filter(e -> !e.text().isBlank())
                .findFirst()
                .orElse(null);

            if (p != null) {
                return ResponseEntity.ok(p.text());
            } else {
                return ResponseEntity.ok("No se encontró biografía en Wikipedia.");
            }
        } catch (Exception e) {
            return ResponseEntity.ok("No se pudo obtener la biografía de Wikipedia.");
        }
    }
}
