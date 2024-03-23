import { Routes } from '@angular/router';
import { AUTH_PATHS } from './shared/constants/routes/auth-routes';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { isAuthenticated } from './shared/guards/authentication.guard';
import { isNotAuthenticated } from './shared/guards/no-authentication.guard';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { APP_PATHS } from './shared/constants/routes/app-routes';
import { ADMIN_PATHS } from './shared/constants/routes/admin-routes';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [isAuthenticated],
    loadChildren: () =>
      import('./shared/routes/app.routes').then((mod) => mod.APP_ROUTES),
  },
  {
    path: ADMIN_PATHS.base,
    component: AdminLayoutComponent,
    canActivate: [isAuthenticated],
    loadChildren: () =>
      import('./shared/routes/admin.routes').then((mod) => mod.ADMIN_ROUTES),
  },
  {
    path: AUTH_PATHS.base,
    component: AuthLayoutComponent,
    canActivate: [isNotAuthenticated],
    loadChildren: () =>
      import('./shared/routes/auth.routes').then((mod) => mod.AUTH_ROUTES),
  },
  {
    path: '**',
    redirectTo: APP_PATHS.home,
  },
];
