import { AxiosError } from 'axios';

//type CustomError = { code: number; message: string };

export const useApiError = () => {
  const handleError = (e: unknown) => {
    const response = e as AxiosError['response'];
    //const data = response?.data as CustomError;

    /*     if (data && data.code === 40111) {
      //navigate('/login');
      console.log(data.code);
      toast.success(<>로그인이 만료되었습니다</>);
    } */
  };

  return handleError;
};
