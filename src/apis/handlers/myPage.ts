import { request } from '../axios';
import {
  GetMyFavoritesRequest,
  GetMyFavoritesResponse,
  GetMyQuestionsRequest,
  GetMyQuestionsResponse,
  GetMyRepliesRequest,
  GetMyRepliesResponse,
} from '../types/myPage';

export const myPageApi = {
  getMyReplies: async ({ lastReplyId }: GetMyRepliesRequest) => {
    const queryString = lastReplyId ? `?lastReplyId=${lastReplyId}` : '';
    const url = `api/v1/replies/me${queryString}`;
    const response = await request.get<GetMyRepliesResponse>(url);

    return response.data;
  },
  getMyQuestions: async ({ lastFeedId }: GetMyQuestionsRequest) => {
    const queryString = lastFeedId ? `?lastFeedId=${lastFeedId}` : '';
    const url = `api/v1/feeds/me${queryString}`;
    const response = await request.get<GetMyQuestionsResponse>(url);

    return response.data;
  },
  getMyFavorites: async ({ lastFavoriteId }: GetMyFavoritesRequest) => {
    const queryString = lastFavoriteId ? `?lastFavoriteId=${lastFavoriteId}` : '';
    const url = `api/v1/feeds/me/favorites${queryString}`;
    const response = await request.get<GetMyFavoritesResponse>(url);

    return response.data;
  },
};
