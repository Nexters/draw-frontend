import { userApi } from '@/apis/handlers/user';
import { LoginResult } from '@/apis/types/user';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    AppleID: { auth: { init: (args?: any) => void; signIn: (config?: any) => Promise<AppleCallbackData> } };
  }
}
interface AppleCallbackData {
  authorization: { code: string; id_token: string };
}

const useAppleLogin = () => {
  const navigate = useNavigate();

  const handleSuccessLogin = (data: LoginResult) => {
    data.accessToken && localStorage.setItem('aT', data.accessToken);
    data.refreshToken && localStorage.setItem('rT', data.refreshToken);

    switch (data.result) {
      //TODO (네이티브 파트와 논의 필요)
      case 'NEWLY_REGISTERED':
        navigate('/new-profile', { replace: true });
        break;
      case 'NORMAL':
        navigate('/feed', { replace: true });
        break;
      case 'NOT_FOUND':
      case 'SUSPENDED':
        navigate('/');
    }
  };

  const { mutate: loginMutate } = useMutation(userApi.login, {
    onSuccess: handleSuccessLogin,
  });

  useEffect(() => {
    window.AppleID.auth.init({
      clientId: 'kr.kro.draw-nexters',
      scope: 'name',
      redirectURI: 'https://draw-nexters.netlify.app/callback/apple',
      usePopup: true,
    });
  }, []);

  const handleClickAppleLogin = async () => {
    try {
      const data = await window.AppleID.auth.signIn();
      loginMutate({ code: data.authorization.code, provider: 'APPLE' });
    } catch (error) {
      console.error(error);
    }
  };

  return { handleClickAppleLogin };
};
export default useAppleLogin;
