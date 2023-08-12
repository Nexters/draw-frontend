import { setQueryString } from '@/utils/setQueryString';
import { request } from '../axios';
import { LoginResult, OAuthReq, RefreshReq, RegisterReq } from '../types/user';

const USERS_BASE_URL = `/api/v1/users`;

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
  /**
   * fcm 업데이트
   */
  postFcm: async (token: string) => {
    const url = `${USERS_BASE_URL}/fcm`;
    await request.post(url, { fcm_token: token });
  },
  /**
   * 회원정보 입력 및 가입 완료
   */
  postRegister: async (payload: RegisterReq) => {
    const url = `${USERS_BASE_URL}/register`;
    await request.post(url, payload);
  },
  /**
   * 리프레쉬
   */
  postRefresh: async (payload: RefreshReq) => {
    const url = `/auth/v1/token/refresh`;
    try {
      const response = await request.post<RefreshReq>(url, payload);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
