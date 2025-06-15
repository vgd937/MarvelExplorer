import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { FavoriteService } from '../services/favorites.service';
import { ComicService } from '../services/comic.service';
import { MarvelApiResponse, MarvelCharacter } from '../models/character';
import { HttpClient } from '@angular/common/http';

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
  bio: string = '';

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private favoritesService: FavoriteService,
    private comicService: ComicService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.loading = true;
        this.error = '';
        this.characterService.getCharacterById(id).subscribe({
          next: (resp) => {
            this.character = resp.data?.results?.[0] ?? null;
            this.comics = this.character?.comics?.items ?? [];
            this.events = this.character?.events?.items ?? [];
            this.loading = false;
            // Llama aquí a la función para cargar la biografía
            this.cargarBio();
          },
          error: () => {
            this.error = 'No se pudo cargar el personaje';
            this.loading = false;
          }
        });
      } else {
        this.error = 'ID de personaje no válido';
        this.loading = false;
      }
    });
  }

  cargarBio() {
    const nombre = this.character?.name?.replace(/ /g, '_');
    if (nombre) {
      this.http.get(`/api/scraping/bio?character=${encodeURIComponent(nombre)}`, { responseType: 'text' })
        .subscribe({
          next: texto => this.bio = texto,
          error: () => this.bio = 'No se pudo obtener la biografía de Wikipedia.'
        });
    }
  }

  addToFavorites(): void {
    if (this.character) {
      this.favoritesService.add({
        characterId: this.character.id,
        characterName: this.character.name,
        note: ''
      }).subscribe(() => {
        alert(`${this.character?.name} añadido a favoritos!`);
      });
    }
  }
}
