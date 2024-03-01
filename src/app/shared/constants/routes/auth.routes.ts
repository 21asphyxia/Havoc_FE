import { Route } from '@angular/router';
import { AUTH_PATHS } from './auth-routes';
import { APP_PATHS } from './app-routes';

export const AUTH_ROUTES: Route[] = [
  {
    path: AUTH_PATHS.login,
    loadComponent: () =>
      import('../../../pages/login/login.component').then((m) => m.LoginComponent),
  },
  { path: '**', redirectTo: APP_PATHS.error404 },
];
