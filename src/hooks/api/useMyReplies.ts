import { UseInfiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { myPageApi } from '@/apis/handlers/myPage';
import { GetMyRepliesResponse } from '@/apis/types/myPage';

type UseMyRepliesParams = {
  lastReplyId?: number;
};

type QueryFnParams = {
  pageParam?: number;
};

const useMyReplies = (
  params?: UseMyRepliesParams,
  options?: UseInfiniteQueryOptions<
    GetMyRepliesResponse,
    AxiosError,
    GetMyRepliesResponse,
    GetMyRepliesResponse,
    ['myReplies', UseMyRepliesParams]
  >
) =>
  useInfiniteQuery({
    ...options,
    queryKey: ['myReplies', { lastReplyId: params?.lastReplyId }],
    queryFn: ({ pageParam }: QueryFnParams) => myPageApi.getMyReplies({ lastReplyId: pageParam }),
    getNextPageParam: (response) => {
      if (response.hasNext) {
        return response.myReplies[response.myReplies.length - 1].replyId;
      }

      return undefined;
    },
  });

export default useMyReplies;
