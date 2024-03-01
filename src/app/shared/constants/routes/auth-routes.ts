export const AUTH_PATHS = {
  base: 'auth',
  login: 'login',
  register: 'register',
  logout: 'logout',
};

export const AUTH_ROUTES = {
  login: `/${AUTH_PATHS.base}/${AUTH_PATHS.login}`,
  register: `/${AUTH_PATHS.base}/${AUTH_PATHS.register}`,
  logout: `/${AUTH_PATHS.base}/${AUTH_PATHS.logout}`,
};
