import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable, catchError, switchMap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthUserData } from '../interfaces/responses/auth-user-data.interface';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('httpInterceptor', req.url);

  if (!req.url.includes('login') && !req.url.includes('register')) {
    req = req.clone({
      headers: req.headers.set(
        'Authorization',
        `Bearer ${localStorage.getItem('token')}`,
      ),
    });
  }
  const router = inject(Router);
  return next(req).pipe(
    catchError((error) => {
      console.log('error', error);
      if (error.status === 401) {
        return getNewToken().pipe(
          switchMap((authData) => {
            if (!authData) {
              router.navigate(['/auth/login']);
              return EMPTY;
            }
            localStorage.setItem('token', authData.access_token);
            localStorage.setItem('refresh', authData.refresh_token);
            req = req.clone({
              headers: req.headers.set(
                'Authorization',
                `Bearer ${authData.access_token}`,
              ),
            });

            return next(req);
          }),
        );
      }
      throw error;
    }),
  );
};
function getNewToken(): Observable<AuthUserData> {
  const auth = inject(AuthService);
  return auth.refresh(localStorage.getItem('refresh')!);
}
