import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  selectChecked,
  selectHasMember,
} from '../store/auth/selectors/auth.selector';
import { filter, map, switchMap } from 'rxjs';

export const isNotAuthenticated: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectChecked).pipe(
    filter((checked) => checked),
    switchMap(() => store.select(selectHasMember)),
    map((hasMember) => {
      if (!hasMember) {
        return true;
      }

      router.navigate(['/']);
      return false;
    }),
  );
};
