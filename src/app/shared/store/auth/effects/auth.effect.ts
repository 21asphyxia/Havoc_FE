import { inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { authActions } from '../actions/auth.actions';
import { catchError, exhaustMap, filter, map, of, tap } from 'rxjs';
import { AuthUserData } from '../../../interfaces/responses/auth-user-data.interface';
import { Router } from '@angular/router';

export const authenticate = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.refresh),
      exhaustMap(({ refresh_token }) =>
        authService.refresh(refresh_token).pipe(
          filter((authData): authData is AuthUserData => !!authData),
          tap((authData) => {
            localStorage.setItem('token', authData.access_token);
            localStorage.setItem('refresh', authData.refresh_token);
          }),
          map(({ member }) => authActions.refreshSuccess({ member })),
          catchError(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');
            return of(authActions.refreshFailure());
          }),
        ),
      ),
    );
  },
  { functional: true },
);

export const login = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    router = inject(Router),
  ) => {
    return actions$.pipe(
      ofType(authActions.login),
      exhaustMap(({ payload }) =>
        authService.login(payload).pipe(
          filter((authData): authData is AuthUserData => !!authData),
          tap((authData) => {
            localStorage.setItem('token', authData.access_token);
            localStorage.setItem('refresh', authData.refresh_token);
            console.log('login tap');
            router.navigate(['/']);
          }),
          map(({ member }) => authActions.loginSuccess({ member })),
          catchError(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');
            return of(authActions.loginFailure());
          }),
        ),
      ),
    );
  },
  { functional: true },
);

export const logout = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.logout),
      tap(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh');
        router.navigate(['/']);
      }),
    );
  },
  { functional: true },
);
