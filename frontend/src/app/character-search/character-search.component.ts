import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CharacterSearchComponent {
  query: string = '';
  characters: any[] = [];
  error: string = '';

  constructor(private characterService: CharacterService) {}

  search(): void {
    if (!this.query.trim()) return;

    this.characterService.searchCharacters(this.query.trim()).subscribe({
      next: resp => {
        this.characters = resp;
        this.error = '';
      },
      error: err => {
        console.error('Error al buscar personajes:', err);
        this.error = 'Error al buscar personajes';
      }
    });
  }
}
