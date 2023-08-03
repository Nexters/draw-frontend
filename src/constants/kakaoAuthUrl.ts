const restApiKey = import.meta.env.VITE_KAKAO_REST_KEY;
const redirectUrl = `${import.meta.env.VITE_DOMAIN}/callback/kakao`;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUrl}&response_type=code`;
