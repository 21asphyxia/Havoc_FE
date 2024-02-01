import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      AuthModule.forRoot({
        domain: 'dev-a4rjugojfiyegtti.us.auth0.com',
        clientId: 'NPjn3sZnvZznrVzbFvn7DLsTgDtkjKVv',
        authorizationParams: {
          redirect_uri: window.location.origin,
        },
      }),
    ),
  ],
};
