import { Route } from '@angular/router';
import { ADMIN_PATHS } from '../constants/routes/admin-routes';
import { APP_PATHS } from '../constants/routes/app-routes';

export const ADMIN_ROUTES: Route[] = [
  {
    path: ADMIN_PATHS.declarations,
    loadComponent: () =>
      import('../../pages/admin/declarations/declarations.component').then(
        (m) => m.DeclarationsComponent,
      ),
  },
  {
    path: ADMIN_PATHS.games,
    loadComponent: () =>
      import('../../pages/admin/games/games.component').then(
        (m) => m.GamesComponent,
      ),
  },
  { path: '**', redirectTo: APP_PATHS.error404 },
];
