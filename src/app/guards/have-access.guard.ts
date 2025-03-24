import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '@app/services';

export const haveAccessGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (route.params['id'] === auth.userValue?.id) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  };
};