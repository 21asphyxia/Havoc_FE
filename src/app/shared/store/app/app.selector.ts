import { createSelector } from '@ngrx/store';
import { fromAuth } from '../auth';

export const selectIsLoading = createSelector(
  fromAuth.selectIsLoading,
  (...isLoadingStates) => isLoadingStates.includes(true),
);
