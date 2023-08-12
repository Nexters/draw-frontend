import { GenderType } from '.';
import { FeedResponse } from './feed';

export type MyReplyResponse = {
  feedId: number;
  feedContent: string;
  replyId: number;
  replyContent: string;
};

export type GetMyRepliesRequest = {
  lastReplyId?: number;
};

export type GetMyRepliesResponse = {
  myReplies: MyReplyResponse[];
  hasNext: boolean;
};

export type GetMyQuestionsRequest = {
  lastFeedId?: number;
};

export type GetMyQuestionsResponse = {
  feeds: FeedResponse[];
  hasNext: boolean;
};

export type GetMyFavoritesRequest = {
  lastFavoriteId?: number;
};

export type GetMyFavoritesResponse = {
  myFavoriteFeeds: FeedResponse[];
  hasNext: boolean;
};

export type GetMyInfoResponse = {
  id: number;
  gender: GenderType;
  mbti: string;
  age: number;
  point: number;
};
