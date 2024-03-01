import { inject } from '@angular/core';
import {
  Actions,
  ROOT_EFFECTS_INIT,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { exhaustMap, of } from 'rxjs';
import { authActions } from '../auth/actions/auth.actions';

export const init = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      exhaustMap(() =>
        of(
          localStorage.getItem('refresh')
            ? authActions.refresh({
                refresh_token: localStorage.getItem('refresh')!,
              })
            : authActions.refreshFailure(),
        ),
      ),
    );
  },
  { functional: true },
);
