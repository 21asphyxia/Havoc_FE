import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MatchmakingService {
  private http = inject(HttpClient);

  private readonly baseUrl = environment.api.baseUrl + '/matches';

  constructor() {}

  joinMatchmaking(game: string) {
    return this.http.post(`${this.baseUrl}/matchmaking/${game}/join`, {});
  }
}
