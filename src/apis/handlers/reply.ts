import { request } from '../axios';
import { ReplyWriterRes } from '../types/reply';

const REPLY_BASE_URL = `/api/v1/replies`;

export const replyApi = {
  /**
   * 답변 뒤집기
   */
  postPeek: async (replyId: number) => {
    const url = `${REPLY_BASE_URL}/${replyId}/peek`;
    const response = await request.post<ReplyWriterRes>(url, { replyId });
    return response.data;
  },
  /**
   * 답변 작성하기
   */
  postReply: async (feedId: number, { content }: { content: string }) => {
    const url = `/api/v1/${feedId}/replies`;
    await request.post(url, { content });
  },
  /**
   * 답변 신고
   */
  postReplyClaim: async ({ replyId }: { replyId: number }) => {
    const url = `${REPLY_BASE_URL}/${replyId}/claims`;
    await request.post(url);
  },
  /**
   * 답변 차단
   */
  postReplyBlock: async ({ replyId }: { replyId: number }) => {
    const url = `${REPLY_BASE_URL}/${replyId}/blocks`;
    await request.post(url);
  },
};
