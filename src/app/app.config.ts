import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { reducers } from './shared/store';
import { authEffects } from './shared/store/auth';
import { environment } from '../environments/environment';
import { appEffects } from './shared/store/app';
import { httpInterceptor } from './shared/interceptors/http-request.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors([httpInterceptor])),
    provideStore(reducers),
    environment.providers,
    provideEffects(appEffects, authEffects),
  ],
};
