import { AgeOptionType, GenderType, MbtiCharType } from '.';
import { ReplyWriterRes } from './reply';

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

export type GetFeedDetailReponse = {
  id: number;
  content: string;
  isFavorite: boolean;
  favoriteCount: number;
  isFit: boolean;
};

export type GetRepliesResponse = {
  replies: ReplyResponse[];
};
export type ReplyResponse = {
  id: number;
  content: string;
  status: 'NORMAL' | 'MINE' | 'PEEKED';
  writerId: number;
  writer: ReplyWriterRes | null;
};
export type PostFeedFavoriteRequest = {
  feedId: number;
};

export type PostFeedFavoriteResponse = void;

export type DeleteFeedFavoriteRequest = {
  feedId: number;
};

export type DeleteFeedFavoriteResponse = void;

export type PostFeedClaimRequest = {
  feedId: number;
};

export type PostFeedClaimResponse = void;

export type PostFeedBlockRequest = {
  feedId: number;
};

export type PostFeedBlockResponse = void;
