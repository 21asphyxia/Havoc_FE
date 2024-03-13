import { Injectable, inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { RegisterPayload } from '../interfaces/requests/register-request.interface';
import { AuthUserData } from '../interfaces/responses/auth-user-data.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Member } from '../interfaces/models/member.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  private readonly baseUrl = environment.api.baseUrl;

  static decodeToken(token: string): { exp: number } | null {
    try {
      return jwtDecode(token);
    } catch (e) {
      return null;
    }
  }

  register({
    email,
    username,
    password,
  }: RegisterPayload): Observable<Member | null> {
    return this.http.post<Member>(`${this.baseUrl}/auth/register`, {
      email,
      username,
      password,
    });
  }

  login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Observable<AuthUserData | null> {
    return this.http.post<AuthUserData>(`${this.baseUrl}/auth/login`, {
      email,
      password,
    });
  }

  refresh(refresh_token: string): Observable<AuthUserData> {
    return this.http.post<AuthUserData>(`${this.baseUrl}/auth/refresh`, {
      refreshToken: refresh_token,
    });
  }
}
