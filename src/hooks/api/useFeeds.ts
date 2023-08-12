import { useInfiniteQuery, UseInfiniteQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { feedApi } from '@/apis/handlers/feed';
import { GetFeedsResponse } from '@/apis/types/feed';

type UseFeedsParams = {
  lastFeedId?: number;
};

type QueryFnParams = {
  pageParam?: number;
};

const useFeeds = (
  params?: UseFeedsParams,
  options?: UseInfiniteQueryOptions<
    GetFeedsResponse,
    AxiosError,
    GetFeedsResponse,
    GetFeedsResponse,
    ['feeds', UseFeedsParams]
  >
) =>
  useInfiniteQuery({
    queryKey: ['feeds', { lastFeedId: params?.lastFeedId }],
    queryFn: ({ pageParam }: QueryFnParams) => feedApi.getFeeds({ lastFeedId: pageParam }),
    getNextPageParam: (response) => {
      if (response.hasNext) {
        return response.feeds[response.feeds.length - 1].id;
      }

      return undefined;
    },
    ...options,
  });

export default useFeeds;
