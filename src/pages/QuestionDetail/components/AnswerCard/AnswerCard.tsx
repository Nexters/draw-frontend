import { useRef, useState } from 'react';
import Styled from './AnswerCard.styles';
import CardFace from './CardFace';
import { ReplyResponse } from '@/apis/types/feed';

const AnswerCard = ({ replyData }: { replyData: ReplyResponse }) => {
  const { content, status, writer, writerId, id } = replyData;

  const ref = useRef<any>();
  const [isFlipped, setIsFlipped] = useState(false);
  const handleToggleFlip = () => setIsFlipped(!isFlipped);

  return (
    <>
      <Styled.FlipCard ref={ref} isFlipped={isFlipped}>
        <CardFace.Front contents={content} flippable={status !== 'PEEKED'} onFlipCard={handleToggleFlip} />
        {writer && <CardFace.Back className="back" onReflipCard={handleToggleFlip} writerInfo={writer} />}
      </Styled.FlipCard>
    </>
  );
};

export default AnswerCard;
