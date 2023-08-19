import { useEffect, useRef, useState } from 'react';
import Styled from './AnswerCard.styles';
import CardFace from './CardFace';
import { ReplyResponse } from '@/apis/types/feed';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { replyApi } from '@/apis/handlers/reply';
import { ReplyWriterRes } from '@/apis/types/reply';
import { useParams } from 'react-router-dom';

const AnswerCard = ({ replyData, onSelectAnswer }: { replyData: ReplyResponse; onSelectAnswer: () => void }) => {
  const { id, writer, content, status } = replyData;
  const queryClient = useQueryClient();
  const { id: feedId } = useParams<{ id: string }>();

  const ref = useRef<any>();
  const [isFlipped, setIsFlipped] = useState(false);
  const [nowPeekedWriterInfo, setNowPeekedWriterInfo] = useState<ReplyWriterRes | null>(null);

  const { mutate: postPeekMutate } = useMutation(replyApi.postPeek, {
    onSuccess: async (data) => {
      setNowPeekedWriterInfo(data);
      await queryClient.invalidateQueries(['feed-replies', feedId]);
    },
  });
  useEffect(() => {
    nowPeekedWriterInfo && setIsFlipped(true);
  }, [nowPeekedWriterInfo]);

  const handleToggleFlip = () => setIsFlipped(!isFlipped);
  const handlePeekCard = () => {
    if (!writer) {
      postPeekMutate(id);
    } else {
      handleToggleFlip();
    }
  };

  return (
    <>
      <Styled.FlipCard ref={ref} isFlipped={isFlipped}>
        <CardFace.Front
          contents={content}
          flippable={status !== 'PEEKED'}
          onPeekCard={handlePeekCard}
          hidePeekButton={status === 'MINE'}
          onMenuClick={onSelectAnswer}
        />
        <CardFace.Back
          className="back"
          onReflipCard={handleToggleFlip}
          writerInfo={nowPeekedWriterInfo ? nowPeekedWriterInfo : writer}
        />
      </Styled.FlipCard>
    </>
  );
};

export default AnswerCard;
