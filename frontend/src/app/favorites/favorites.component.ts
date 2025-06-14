import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];
  notes: string = '';

  private apiUrl = 'http://localhost:8080/api/characters';

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favoritesService.getFavorites().subscribe((data: any) => this.favorites = data);
  }

  saveNotes(characterId: number, notes: string) {
    this.favoritesService.updateFavorite(characterId, { characterId, notes }).subscribe(() => this.loadFavorites());
  }

  remove(characterId: number) {
    this.favoritesService.removeFavorite(characterId).subscribe(() => this.loadFavorites());
  }
}
