import { request } from '../axios';
import { ReplyWriterRes } from '../types/reply';

const REPLY_BASE_URL = `/api/v1/replies`;

export const replyApi = {
  postPeek: async (replyId: number) => {
    const url = `${REPLY_BASE_URL}/${replyId}/peek`;
    const response = await request.post<ReplyWriterRes>(url, { replyId });
    return response.data;
  },
};
