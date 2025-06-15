package com.marvelexplorer.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Favorite {
    @Id
    private Long characterId;

    @Column
    private String characterName;

    @Column
    private String note;

    @Column
    private String thumbnailUrl; // Añade este campo

    // Getters y setters
    public Long getCharacterId() { return characterId; }
    public void setCharacterId(Long characterId) { this.characterId = characterId; }

    public String getCharacterName() { return characterName; }
    public void setCharacterName(String characterName) { this.characterName = characterName; }

    public String getNote() { return note; }
    public void setNote(String note) { this.note = note; }

    public String getThumbnailUrl() { return thumbnailUrl; }
    public void setThumbnailUrl(String thumbnailUrl) { this.thumbnailUrl = thumbnailUrl; }
}
