import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Declaration } from '../interfaces/models/declaration.model';

@Injectable({
  providedIn: 'root',
})
export class DeclarationService {
  private http = inject(HttpClient);

  private readonly baseUrl = environment.api.baseUrl;

  constructor() {}

  getAll() {
    return this.http.get<Declaration[]>(`${this.baseUrl}/declarations`);
  }
}
