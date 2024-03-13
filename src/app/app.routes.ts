import { Routes } from '@angular/router';
import { AUTH_PATHS } from './shared/constants/routes/auth-routes';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { isAuthenticated } from './shared/guards/authentication.guard';
import { isNotAuthenticated } from './shared/guards/no-authentication.guard';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { APP_PATHS } from './shared/constants/routes/app-routes';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [isAuthenticated],
    loadChildren: () =>
      import('./shared/constants/routes/app.routes').then(
        (mod) => mod.APP_ROUTES,
      ),
  },
  {
    path: AUTH_PATHS.base,
    component: AuthLayoutComponent,
    canActivate: [isNotAuthenticated],
    loadChildren: () =>
      import('./shared/constants/routes/auth.routes').then(
        (mod) => mod.AUTH_ROUTES,
      ),
  },
  {
    path: '**',
    redirectTo: APP_PATHS.home,
  },
];
