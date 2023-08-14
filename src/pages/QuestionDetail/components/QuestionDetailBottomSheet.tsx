import BottomSheet from '@/components/BottomSheet/BottomSheet';
import { useDetailBottomSheetContext } from './useDetailBottomSheetContext';
import FeedStyled from '@/pages/Feed/Feed.styles';
import { feedApi } from '@/apis/handlers/feed';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const QuestionDetailBottomSheet = () => {
  const { isOpen, closeSheet, resetSelect, type, selectedId } = useDetailBottomSheetContext();
  const queryClient = useQueryClient();

  const feedClaimMutation = useMutation(feedApi.postFeedClaim, {
    onSuccess: () => {
      closeSheet();
      toast.success(<>신고했어요</>);
    },
  });
  const feedBlockMutation = useMutation(feedApi.postFeedBlock, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['feed-detail', selectedId]);
      closeSheet();

      toast.success(<>차단했어요</>);
    },
  });

  return (
    <BottomSheet
      open={isOpen}
      onClose={() => {
        closeSheet();
        resetSelect();
      }}
    >
      <FeedStyled.FeedOptionBottomSheet>
        <FeedStyled.FeedOption
          onClick={() => {
            if (type === 'feed' && selectedId) feedBlockMutation.mutate({ feedId: selectedId });
          }}
        >
          {type === 'reply' && '답변'} 차단하기
        </FeedStyled.FeedOption>
        <FeedStyled.FeedOption
          onClick={() => {
            if (type === 'feed' && selectedId) feedClaimMutation.mutate({ feedId: selectedId });
          }}
        >
          {type === 'reply' && '답변'} 신고하기
        </FeedStyled.FeedOption>
      </FeedStyled.FeedOptionBottomSheet>
    </BottomSheet>
  );
};
