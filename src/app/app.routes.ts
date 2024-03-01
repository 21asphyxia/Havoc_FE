import { Routes } from '@angular/router';
import { APP_PATHS } from './shared/constants/routes/app-routes';
import { AUTH_PATHS } from './shared/constants/routes/auth-routes';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { isAuthenticated } from './shared/guards/authentication.guard';
import { isNotAuthenticated } from './shared/guards/no-authentication.guard';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [isAuthenticated],
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
