import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private http = inject(HttpClient);

  private readonly baseUrl = environment.api.baseUrl;

  constructor() {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/games`);
  }

  createGame(data: FormData): Observable<Game> {
    return this.http.post<Game>(`${this.baseUrl}/games`, data);
  }

  updateGame(id: number, data: FormData): Observable<Game> {
    return this.http.put<Game>(`${this.baseUrl}/games/${id}`, data);
  }

  deleteGame(id: number) {
    return this.http.delete(`${this.baseUrl}/games/${id}`);
  }
}
