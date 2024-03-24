import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectChecked,
  selectHasMember,
} from '../store/auth/selectors/auth.selector';
import { filter, map, switchMap } from 'rxjs';

export const isAuthenticated: CanActivateFn = (
  _: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const { url } = state;
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectChecked).pipe(
    filter((checked) => {
      return checked;
    }),
    switchMap(() => {
      return store.select(selectHasMember);
    }),
    map((hasMember) => {
      if (hasMember) {
        return true;
      } else {
        router.navigate(['/auth/login'], { queryParams: { returnUrl: url } });
        return false;
      }
    }),
  );
};
