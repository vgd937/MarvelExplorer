import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private apiUrl = '/api/favorites';

  constructor(private http: HttpClient) {}

  getFavorites() {
    return this.http.get(this.apiUrl);
  }

  addFavorite(favorite: any) {
    return this.http.post(this.apiUrl, favorite);
  }

  updateFavorite(characterId: number, favorite: any) {
    return this.http.put(`${this.apiUrl}/${characterId}`, favorite);
  }

  removeFavorite(characterId: number) {
    return this.http.delete(`${this.apiUrl}/${characterId}`);
  }
}
