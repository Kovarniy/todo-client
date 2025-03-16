import {CanActivateFn} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '@app/services';

export const haveAccessGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  return route.params['id'] === auth.userValue?.id;
};
