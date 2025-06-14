import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterService } from '../services/character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CharacterSearchComponent implements OnInit {
  query: string = '';
  characters: any[] = [];
  error: string = '';

  featuredCharacters: any[] = [];
  featuredNames: string[] = ['Spider', 'Iron Man', 'Hulk', 'Thor', 'Captain America'];

  constructor(
    private characterService: CharacterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFeaturedCharacters();
  }

  loadFeaturedCharacters(): void {
    this.featuredCharacters = [];
    this.featuredNames.forEach(name => {
      this.characterService.searchCharacters(name).subscribe({
        next: characters => {
          if (characters.length) {
            this.featuredCharacters.push(characters[0]);
          }
        }
      });
    });
  }

  search(): void {
    if (!this.query.trim()) return;

    this.characterService.searchCharacters(this.query.trim()).subscribe({
      next: characters => {
        this.characters = characters;
        this.error = characters.length === 0 ? 'No se encontraron personajes.' : '';
      },
      error: err => {
        this.error = 'Error al buscar personajes';
      }
    });
  }

  verDetalle(id: number): void {
    this.router.navigate(['/characters', id]);
  }
}
