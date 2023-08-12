import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { myPageApi } from '@/apis/handlers/myPage';
import { GetMyInfoResponse } from '@/apis/types/myPage';

const useMyInfo = (options?: UseQueryOptions<GetMyInfoResponse, AxiosError, GetMyInfoResponse, ['my-info']>) =>
  useQuery({
    ...options,
    queryKey: ['my-info'],
    queryFn: () => myPageApi.getMyInfo(),
  });

export default useMyInfo;
