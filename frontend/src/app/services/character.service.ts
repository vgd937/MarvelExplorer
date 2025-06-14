import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { MarvelApiResponse } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'http://localhost:8080/api/characters';

  constructor(private http: HttpClient) {}

  searchCharacters(name: string): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}?nameStartsWith=${name}`).pipe(
      map(resp => resp.data?.results ?? [])
    );
  }

  getCharacterById(id: number): Observable<MarvelApiResponse> {
    return this.http.get<MarvelApiResponse>(`${this.apiUrl}/${id}`);
  }
}
