import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { MarvelApiResponse, MarvelCharacter } from '../models/character';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {
  character: MarvelCharacter | null = null;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const character$ = this.characterService.getCharacterById(id);
    if (character$) {
      character$.subscribe({
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
    } else {
      this.error = 'No se pudo cargar el personaje';
      this.loading = false;
    }
  }

  // <-- Añade este método
  addToFavorites(): void {
    // TODO: implementar la lógica de favoritos
    alert(`${this.character?.name} añadido a favoritos!`);
  }
}
