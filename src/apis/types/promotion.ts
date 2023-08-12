export type PointResponse = {
  value: number;
};

export type PromotionResponse = {
  id: number;
  promotionType: string;
  title: string;
  grantedPoint: PointResponse;
  asIsPoint: PointResponse;
  toBePoint: PointResponse;
};

export type GetPromotionsResponse = PromotionResponse[];

export type PostConsumePromotionRequest = {
  promotionId: number;
};

export type PostConsumePromotionResponse = void;
