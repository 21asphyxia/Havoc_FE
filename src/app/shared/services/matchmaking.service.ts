import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { filter, repeat, take } from 'rxjs';
import { Match } from '../interfaces/models/match.model';

@Injectable({
  providedIn: 'root',
})
export class MatchmakingService {
  private http = inject(HttpClient);

  private readonly baseUrl = environment.api.baseUrl + '/matches';

  constructor() {}

  joinMatchmaking(game: string) {
    return this.http
      .post<Match>(`${this.baseUrl}/matchmaking/${game}/join`, {})
      .pipe(
        repeat({ delay: 1000 }),
        filter((data) => data.status !== 'WAITING'),
        take(1),
      );
  }

  leaveMatchmaking(game: string) {
    return this.http.post<Match>(
      `${this.baseUrl}/matchmaking/${game}/leave`,
      {},
    );
  }
}
