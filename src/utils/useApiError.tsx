import { userApi } from '@/apis/handlers/user';
import useToast from '@/hooks/useToast';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export const useApiError = (e: any) => {
  const navigate = useNavigate();
  const toast = useToast();
  const { mutate: refreshMutate } = useMutation(userApi.postRefresh, {
    onSuccess: () => console.log('refresh successㅋ'),
  });
  const { code } = (e as AxiosError).response?.data as CustomError;
  if (code === 41110) {
    const aT = window.localStorage.getItem('aT');
    const rT = window.localStorage.getItem('rT');

    if (aT && rT) {
      refreshMutate({ accessToken: aT, refreshToken: rT });
    } else {
      navigate('/login');
      toast.success(<>로그인이 만료되었습니다</>);
    }
  }
  if (code === 40111) {
    navigate('/login');
    toast.success(<>로그인이 만료되었습니다</>);
  }
};
