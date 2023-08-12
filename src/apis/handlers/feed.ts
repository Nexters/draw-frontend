import { request } from '../axios';
import {
  GetFeedDetailReponse,
  GetFeedsRequest,
  GetFeedsResponse,
  GetRepliesResponse,
  PostFeedBlockRequest,
  PostFeedBlockResponse,
  PostFeedClaimRequest,
  PostFeedClaimResponse,
  PostFeedFavoriteRequest,
  PostFeedFavoriteResponse,
  PostFeedRequest,
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
  /*
   * 피드 좋아요
   */
  postFeedFavorite: async ({ feedId }: PostFeedFavoriteRequest) => {
    const url = `${FEED_BASE_URL}/${feedId}/favorites`;
    return await request.post<PostFeedFavoriteResponse>(url);
  },
  /**
   * 피드 리플조회
   */
  getFeedRepies: async (feedId: number) => {
    const url = `${FEED_BASE_URL}/${feedId}/replies`;
    const response = await request.get<GetRepliesResponse>(url);

    return response.data;
  },
  /*
   * 피드 좋아요 취소
   */
  deleteFeedFavorite: async ({ feedId }: PostFeedFavoriteRequest) => {
    const url = `${FEED_BASE_URL}/${feedId}/favorites`;
    const response = await request.delete<PostFeedFavoriteResponse>(url);

    return response.data;
  },
  /**
   * 피드 신고
   */
  postFeedClaim: async ({ feedId }: PostFeedClaimRequest) => {
    const url = `${FEED_BASE_URL}/${feedId}/claims`;
    const response = await request.post<PostFeedClaimResponse>(url);

    return response.data;
  },
  /**
   * 피드 차단
   */
  postFeedBlock: async ({ feedId }: PostFeedBlockRequest) => {
    const url = `${FEED_BASE_URL}/${feedId}/blocks`;
    const response = await request.post<PostFeedBlockResponse>(url);

    return response.data;
  },
};
