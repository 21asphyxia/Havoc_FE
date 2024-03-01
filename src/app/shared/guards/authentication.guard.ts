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
      console.log('isAuthenticated filter', checked);
      return checked;
    }),
    switchMap(() => {
      console.log('isAuthenticated switchMap');
      return store.select(selectHasMember);
    }),
    map((hasMember) => {
      console.log('isAuthenticated hasMember', hasMember);

      if (hasMember) {
        console.log('isAuthenticated hasMember');
        return true;
      } else {
        console.log('isAuthenticated !hasMember');
        router.navigate(['/auth/login'], { queryParams: { returnUrl: url } });
        return false;
      }
    }),
  );
};
