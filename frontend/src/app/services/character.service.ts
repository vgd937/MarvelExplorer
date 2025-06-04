import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'http://localhost:8080/api/characters';

  constructor(private http: HttpClient) {}

  searchCharacters(name: string): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}?name=${name}`).pipe(
      map(resp => resp.data?.results ?? [])
    );
  }
}
