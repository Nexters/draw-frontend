import { UseInfiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { myPageApi } from '@/apis/handlers/myPage';
import { GetMyFavoritesResponse } from '@/apis/types/myPage';

type UseMyFavoritesParams = {
  lastFavoriteId?: number;
};

type QueryFnParams = {
  pageParam?: number;
};

const useMyFavorites = (
  params?: UseMyFavoritesParams,
  options?: UseInfiniteQueryOptions<
    GetMyFavoritesResponse,
    AxiosError,
    GetMyFavoritesResponse,
    GetMyFavoritesResponse,
    ['myFavorites', UseMyFavoritesParams]
  >
) =>
  useInfiniteQuery({
    ...options,
    queryKey: ['myFavorites', { lastFavoriteId: params?.lastFavoriteId }],
    queryFn: ({ pageParam }: QueryFnParams) => myPageApi.getMyFavorites({ lastFavoriteId: pageParam }),
    getNextPageParam: (response) => {
      if (response.hasNext) {
        return response.myFavoriteFeeds[response.myFavoriteFeeds.length - 1].id;
      }

      return undefined;
    },
  });

export default useMyFavorites;
