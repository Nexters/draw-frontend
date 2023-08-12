import { UseInfiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { myPageApi } from '@/apis/handlers/myPage';
import { GetMyQuestionsResponse } from '@/apis/types/myPage';

type UseMyQuestionsParams = {
  lastFeedId?: number;
};

type QueryFnParams = {
  pageParam?: number;
};

const useMyQuestions = (
  params?: UseMyQuestionsParams,
  options?: UseInfiniteQueryOptions<
    GetMyQuestionsResponse,
    AxiosError,
    GetMyQuestionsResponse,
    GetMyQuestionsResponse,
    ['myQuestions', UseMyQuestionsParams]
  >
) =>
  useInfiniteQuery({
    ...options,
    queryKey: ['myQuestions', { lastFeedId: params?.lastFeedId }],
    queryFn: ({ pageParam }: QueryFnParams) => myPageApi.getMyQuestions({ lastFeedId: pageParam }),
    getNextPageParam: (response) => {
      if (response.hasNext) {
        return response.feeds[response.feeds.length - 1].id;
      }

      return undefined;
    },
  });

export default useMyQuestions;
