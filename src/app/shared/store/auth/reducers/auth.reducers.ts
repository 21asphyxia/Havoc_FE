import { createReducer, on } from '@ngrx/store';
import { authActions } from '../actions/auth.actions';
import { Member } from '../../../interfaces/models/member.model';

export interface AuthState {
  member: Member | null;
  loading: boolean;
  checked: boolean;
}

export const initialState: AuthState = {
  member: null,
  loading: false,
  checked: false,
};

export const featureKey = 'auth';

export const authReducer = createReducer(
  initialState,
  on(
    authActions.refresh,
    (state): AuthState => ({
      ...state,
      loading: true,
    }),
  ),
  on(
    authActions.refreshSuccess,
    (state, { member }): AuthState => ({
      ...state,
      member: member,
      loading: false,
      checked: true,
    }),
  ),
  on(
    authActions.refreshFailure,
    (state): AuthState => ({
      ...state,
      loading: false,
      checked: true,
    }),
  ),
  on(
    authActions.login,
    (state): AuthState => ({
      ...state,
      loading: true,
    }),
  ),
  on(
    authActions.loginSuccess,
    (state, { member }): AuthState => ({
      ...state,
      member: member,
      loading: false,
      checked: true,
    }),
  ),
  on(
    authActions.loginFailure,
    (state): AuthState => ({
      ...state,
      loading: false,
      checked: true,
    }),
  ),
  on(
    authActions.logout,
    (state): AuthState => ({
      ...state,
      member: null,
      loading: false,
      checked: true,
    }),
  ),
);
