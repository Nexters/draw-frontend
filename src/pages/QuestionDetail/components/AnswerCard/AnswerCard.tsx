import { useEffect, useRef, useState } from 'react';
import Styled from './AnswerCard.styles';
import CardFace from './CardFace';
import { ReplyResponse } from '@/apis/types/feed';
import { useMutation } from '@tanstack/react-query';
import { replyApi } from '@/apis/handlers/reply';
import { ReplyWriterRes } from '@/apis/types/reply';

const AnswerCard = ({ replyData }: { replyData: ReplyResponse }) => {
  const { id, writer, content, status } = replyData;
  const ref = useRef<any>();
  const [isFlipped, setIsFlipped] = useState(false);
  const [nowPeekedWriterInfo, setNowPeekedWriterInfo] = useState<ReplyWriterRes | null>(null);

  const { mutate: postPeekMutate } = useMutation(replyApi.postPeek, {
    onSuccess: (data) => setNowPeekedWriterInfo(data),
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
