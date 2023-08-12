import { request } from '../axios';
import {
  GetFeedDetailReponse,
  GetFeedsRequest,
  GetFeedsResponse,
  GetRepliesResponse,
  PostFeedRequest,
  ReplyResponse,
} from '../types/feed';

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
  /**
   * 상세 조회
   */
  getFeedDetail: async (feedId: number) => {
    const url = `${FEED_BASE_URL}/${feedId}`;
    const response = await request.get<GetFeedDetailReponse>(url);

    return response.data;
  },
  /**
   * 피드 리플조회
   */
  getFeedRepies: async (feedId: number) => {
    const url = `${FEED_BASE_URL}/${feedId}/replies`;
    const response = await request.get<GetRepliesResponse>(url);

    return response.data;
  },
};
