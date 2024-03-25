import { Route } from '@angular/router';
import { APP_PATHS } from '../constants/routes/app-routes';

export const APP_ROUTES: Route[] = [
  {
    path: APP_PATHS.home,
    loadComponent: () =>
      import('../../pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: APP_PATHS.game,
    loadComponent: () =>
      import('../../pages/game-page/game-page.component').then(
        (m) => m.GamePageComponent,
      ),
  },
  {
    path: APP_PATHS.leaderboards,
    loadComponent: () =>
      import('../../pages/leaderboard/leaderboard.component').then(
        (m) => m.LeaderboardComponent,
      ),
  },
  { path: '**', redirectTo: APP_PATHS.error404 },
];
