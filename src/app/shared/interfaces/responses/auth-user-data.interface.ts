import { Member } from '../models/member.model';

export interface AuthUserData {
  access_token: string;
  refresh_token: string;
  member: Member;
}
