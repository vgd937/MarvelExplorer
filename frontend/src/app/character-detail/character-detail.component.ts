import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { FavoritesService } from '../services/favorites.service';
import { ComicService } from '../services/comic.service';
import { MarvelApiResponse, MarvelCharacter } from '../models/character';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character: MarvelCharacter | null = null;
  loading = true;
  error = '';
  comics: any[] = [];
  events: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private favoritesService: FavoritesService,
    private comicService: ComicService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.characterService.getCharacterById(id).subscribe({
      next: (resp: MarvelApiResponse) => {
        this.character = resp.data.results[0];
        this.loading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.error = 'No se pudo cargar el personaje';
        this.loading = false;
      }
    });

    this.comicService.getComics(id).subscribe({
      next: (comics: any[]) => this.comics = comics,
      error: () => this.comics = []
    });
    this.comicService.getEvents(id).subscribe({
      next: (events: any[]) => this.events = events,
      error: () => this.events = []
    });
  }

  addToFavorites(): void {
    if (this.character) {
      this.favoritesService.addFavorite({
        characterId: this.character.id,
        notes: ''
      }).subscribe(() => {
        alert(`${this.character?.name} añadido a favoritos!`);
      });
    }
  }
}
