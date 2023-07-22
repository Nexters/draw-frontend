import { palette } from '@/styles/palette';
import FlipBottomSheet from '../FlipBottomSheet/FlipBottomSheet';
import Styled from './CardFace.styles';
import CardButton from './CardButton';
import { ComponentProps, useState } from 'react';

interface FrontProps extends ComponentProps<'div'> {
  contents: string;
  flippable: boolean;
  onFlipCard: () => void;
}
interface BackProps extends ComponentProps<'div'> {
  onReflipCard: () => void;
}

const Front = ({ contents, flippable, onFlipCard, ...rest }: FrontProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Styled.AnswerCardContainer {...rest}>
      <Styled.Contents>{contents}</Styled.Contents>
      <Styled.CardButtons>
        <CardButton variants="threeDots" />
        {flippable ? (
          <>
            <CardButton
              variants="flipCard"
              css={{ color: `${palette.btn.green}` }}
              onClick={() => setIsSheetOpen(true)}
            />
            <FlipBottomSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} onClickYes={onFlipCard} />
          </>
        ) : (
          <CardButton variants="flipCard" css={{ color: `${palette.text.grey2}` }} onClick={onFlipCard} />
        )}
      </Styled.CardButtons>
    </Styled.AnswerCardContainer>
  );
};

const Back = ({ onReflipCard, ...rest }: BackProps) => {
  return (
    <Styled.AnswerCardContainer isFlipped {...rest}>
      <div></div>
      <Styled.CardButtons>
        <CardButton variants="reflipCard" onClick={onReflipCard} />
      </Styled.CardButtons>
    </Styled.AnswerCardContainer>
  );
};

export default { Front, Back };
