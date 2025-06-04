package com.marvelexplorer.service;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MarvelApiService {

    @Value("${marvel.public-key}")
    private String publicKey;

    @Value("${marvel.private-key}")
    private String privateKey;

    private final String baseUrl = "https://gateway.marvel.com/v1/public";

    public String getCharacters(String name) {
        long ts = System.currentTimeMillis();
        String hash = DigestUtils.md5Hex(ts + privateKey + publicKey);

        String url = String.format(
            "%s/characters?name=%s&ts=%d&apikey=%s&hash=%s",
            baseUrl, name, ts, publicKey, hash
        );

        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, String.class);
    }
    
public String getCharacterById(long id) {
    long ts = System.currentTimeMillis();
    String hash = DigestUtils.md5Hex(ts + privateKey + publicKey);

    String url = String.format(
        "%s/characters/%d?ts=%d&apikey=%s&hash=%s",
        baseUrl, id, ts, publicKey, hash
    );

    RestTemplate restTemplate = new RestTemplate();
    return restTemplate.getForObject(url, String.class);
}
}
