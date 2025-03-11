import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {HTTP_INTERCEPTORS, provideHttpClient} from '@angular/common/http';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {jwtInterceptor} from '@app/interceptors';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    NG_EVENT_PLUGINS,
    {
      provide: HTTP_INTERCEPTORS,
      useValue: jwtInterceptor,
      multi: true,
    },
  ],
};
