import { request } from '../axios';
import { GetPromotionsResponse, PostConsumePromotionResponse } from '../types/promotion';

export const promotionApi = {
  getPromotions: async () => {
    const url = `api/v1/promotions`;
    const response = await request.get<GetPromotionsResponse>(url);

    return response.data;
  },
  postConsumePromotion: async (promotionIds: number[]) => {
    const url = `api/v1/promotions/consume`;

    return await request.post<PostConsumePromotionResponse>(url, {
      promotionIds,
    });
  },
};
