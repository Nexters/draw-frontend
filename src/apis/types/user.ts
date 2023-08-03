export interface OAuthReq {
  code: string;
  provider: 'KAKAO' | 'APPLE';
}
export interface LoginResult {
  result: 'NEWLY_REGISTERED' | 'NORMAL' | 'NOT_FOUND' | 'SUSPENDED';
  accessToken?: string;
  refreshToken?: string;
}
