export const APP_PATHS = {
  home: '',
  error404: '404',
  game: 'play/:name',
  leaderboards: 'leaderboards',
};

export const APP_ROUTES = {
  home: `/${APP_PATHS.home}`,
  game: `/${APP_PATHS.game}`,
  leaderboard: `/${APP_PATHS.leaderboards}`,
  error404: `/${APP_PATHS.error404}`,
};
