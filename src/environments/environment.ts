import { provideStoreDevtools } from '@ngrx/store-devtools';

export const environment = {
  production: false,
  api: {
    baseUrl: 'http://localhost:8081/api/v1',
  },
  providers: [
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    }),
  ],
};
