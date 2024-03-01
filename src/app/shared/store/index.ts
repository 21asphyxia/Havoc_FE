import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authReducer } from './auth/reducers/auth.reducers';

export interface AppState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
};

export const selectAuth = (state: AppState) => state.auth;
