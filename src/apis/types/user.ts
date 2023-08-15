import { GenderType, MbtiType } from '.';

export interface OAuthReq {
  code: string;
  provider: 'KAKAO' | 'APPLE';
  appleAuthorizationCode?: string;
}
export interface LoginResult {
  result: 'NEWLY_REGISTERED' | 'NORMAL' | 'NOT_FOUND' | 'SUSPENDED';
  accessToken?: string;
  refreshToken?: string;
}
export interface RegisterReq {
  birthday: string;
  gender: GenderType;
  mbti: MbtiType;
}
export interface RefreshReq {
  accessToken: string;
  refreshToken: string;
}
