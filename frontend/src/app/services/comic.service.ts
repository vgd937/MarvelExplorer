import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ComicService {
  private apiUrl = '/api/characters';

  constructor(private http: HttpClient) {}

  getComics(characterId: number): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/${characterId}/comics`).pipe(
      map(resp => resp.data?.results ?? [])
    );
  }

  getEvents(characterId: number): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/${characterId}/events`).pipe(
      map(resp => resp.data?.results ?? [])
    );
  }
}
