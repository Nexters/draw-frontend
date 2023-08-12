import { useLocation, useNavigate } from 'react-router-dom';
import Loading from './components/Loading.tsx/Loading';
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { userApi } from '@/apis/handlers/user';
import { LoginResult } from '@/apis/types/user';

const Kakao = () => {
  const search = useLocation().search;
  const navigate = useNavigate();
  const code = new URLSearchParams(search).get('code');

  const handleSuccessLogin = (data: LoginResult) => {
    data.accessToken && localStorage.setItem('aT', data.accessToken);
    data.refreshToken && localStorage.setItem('rT', data.refreshToken);

    switch (data.result) {
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
    code && loginMutate({ code, provider: 'KAKAO' });
  }, [code]);

  return (
    <>
      <Loading />
    </>
  );
};
export default Kakao;
