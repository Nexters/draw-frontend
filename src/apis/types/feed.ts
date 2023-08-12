export type FeedResponse = {
  id: number;
  content: string;
  isFavorite: boolean;
  favoriteCount: number;
  isFit: boolean;
};

export type GetFeedsRequest = {
  lastFeedId?: number;
};

export type GetFeedsResponse = {
  feeds: FeedResponse[];
  hasNext: boolean;
};
