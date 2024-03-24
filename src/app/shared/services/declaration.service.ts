import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Declaration } from '../interfaces/models/declaration.model';
import { Match } from '../interfaces/models/match.model';

@Injectable({
  providedIn: 'root',
})
export class DeclarationService {
  private http = inject(HttpClient);

  private readonly baseUrl = environment.api.baseUrl + '/declarations';

  constructor() {}

  getAll() {
    return this.http.get<Declaration[]>(`${this.baseUrl}`);
  }

  sendDeclaration(matchId: string, data: FormData) {
    return this.http.post<Match>(`${this.baseUrl}/${matchId}`, data);
  }

  approve(declarationId: number) {
    return this.http.post<Declaration>(
      `${this.baseUrl}/${declarationId}/approve`,
      {},
    );
  }
}
