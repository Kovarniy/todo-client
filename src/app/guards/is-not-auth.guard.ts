import {CanActivateFn} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '@app/services';
import {map} from 'rxjs';

export const isNotAuthGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  return auth.user$.pipe(map((user) => !user));
};
