import { request } from '../axios';
import { GetFeedsRequest, GetFeedsResponse, PostFeedRequest } from '../types/feed';

const FEED_BASE_URL = 'api/v1/feeds';

export const feedApi = {
  /**
   * 피드 조회
   */
  getFeeds: async ({ lastFeedId }: GetFeedsRequest) => {
    const queryString = lastFeedId ? `?lastFeedId=${lastFeedId}` : '';
    const url = `${FEED_BASE_URL}${queryString}`;
    const response = await request.get<GetFeedsResponse>(url);

    return response.data;
  },
  /**
   * 피드 작성
   */
  postFeeds: async (params: PostFeedRequest) => {
    const response = await request.post<null>(FEED_BASE_URL, params);

    return response.data;
  },
};
