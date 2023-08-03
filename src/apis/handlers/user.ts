import { setQueryString } from '@/utils/setQueryString';
import { request } from '../axios';
import { LoginResult, OAuthReq } from '../types/user';

export const userApi = {
  login: async (payload: OAuthReq) => {
    const url = 'auth/v1/login';
    const response = await request.post<LoginResult>(url, payload);
    return response.data;
  },
  testKakaoLogin: async (code: string) => {
    const url = setQueryString('/local/kakao/login', { code });
    const response = await request.get<LoginResult>(url);
    return response.data;
  },
};
