import { request } from '../axios';
import { GetFeedsRequest, GetFeedsResponse } from '../types/feed';

export const feedApi = {
  getFeeds: async ({ lastFeedId }: GetFeedsRequest) => {
    const queryString = lastFeedId ? `?lastFeedId=${lastFeedId}` : '';
    const url = `api/v1/feeds${queryString}`;
    const response = await request.get<GetFeedsResponse>(url);

    return response.data;
  },
};
