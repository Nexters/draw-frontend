import { useRef, useState } from 'react';
import Styled from './AnswerCard.styles';
import CardFace from './CardFace';

interface AnswerCard {
  contents: string;
  flippable: boolean;
}

const AnswerCard = ({ contents, flippable }: AnswerCard) => {
  const ref = useRef<any>();
  const [isFlipped, setIsFlipped] = useState(false);
  const handleToggleFlip = () => setIsFlipped(!isFlipped);

  return (
    <>
      <Styled.FlipCard ref={ref} isFlipped={isFlipped}>
        <CardFace.Front contents={contents} flippable={flippable} onFlipCard={handleToggleFlip} />
        <CardFace.Back className="back" onReflipCard={handleToggleFlip} />
      </Styled.FlipCard>
    </>
  );
};

export default AnswerCard;
