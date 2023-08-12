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

export type PostFeedRequest = {
  content: string;
  genders: GenderType[] | null;
  ageOption: AgeOptionType;
  mbtiChars: MbtiCharType[];
};

export type GenderType = 'MALE' | 'FEMALE';
export type AgeOptionType = 'ALL' | 'SAME_AGE_GROUP';
export type MbtiCharType = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
