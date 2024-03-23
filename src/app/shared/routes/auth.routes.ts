import { Route } from '@angular/router';
import { AUTH_PATHS } from '../constants/routes/auth-routes';
import { APP_PATHS } from '../constants/routes/app-routes';

export const AUTH_ROUTES: Route[] = [
  {
    path: AUTH_PATHS.login,
    loadComponent: () =>
      import('../../pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: AUTH_PATHS.register,
    loadComponent: () =>
      import('../../pages/register/register.component').then(
        (m) => m.RegisterComponent,
      ),
  },
  { path: '**', redirectTo: APP_PATHS.error404 },
];
