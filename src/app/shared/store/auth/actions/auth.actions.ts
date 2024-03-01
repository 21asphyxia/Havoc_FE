import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Member } from '../../../interfaces/models/member.model';
import { LoginPayload } from '../../../interfaces/requests/login-request.interface';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    Refresh: props<{ refresh_token: string }>(),
    'Refresh Success': props<{ member: Member }>(),
    'Refresh Failure': emptyProps(),
    Login: props<{ payload: LoginPayload }>(),
    'Login Success': props<{ member: Member }>(),
    'Login Failure': emptyProps(),
    Logout: props<{ member: Member }>(),
  },
});
