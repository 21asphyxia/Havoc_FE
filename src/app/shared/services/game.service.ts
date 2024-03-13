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
}
