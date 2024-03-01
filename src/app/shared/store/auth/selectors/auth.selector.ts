import { createSelector } from '@ngrx/store';
import { selectAuth } from '../..';
import { Member } from '../../../interfaces/models/member.model';

export const selectIsLoading = createSelector(
  selectAuth,
  (state) => state.loading,
);
export const selectHasMember = createSelector(
  selectAuth,
  (state) => !!state.member,
);
export const selectMember = createSelector(
  selectAuth,
  (state) => state.member as Member,
);
export const selectChecked = createSelector(
  selectAuth,
  (state) => state.checked,
);
export const selectIsAdmin = createSelector(
  selectAuth,
  (state) => state.member?.role === 'ROLE_ADMIN',
);
