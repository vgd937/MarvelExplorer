import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Favorite {
  characterId: number;
  characterName: string;
  note: string;
  thumbnailUrl: string; // Añade esta propiedad
}

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private api = '/api/favorites';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(this.api);
  }

  add(fav: Favorite): Observable<Favorite> {
    return this.http.post<Favorite>(this.api, fav);
  }

  update(fav: Favorite): Observable<Favorite> {
    return this.http.put<Favorite>(`${this.api}/${fav.characterId}`, fav);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
