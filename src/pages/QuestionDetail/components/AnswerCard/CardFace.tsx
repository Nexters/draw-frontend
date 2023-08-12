import { palette } from '@/styles/palette';
import FlipBottomSheet from '../FlipBottomSheet/FlipBottomSheet';
import Styled from './CardFace.styles';
import CardButton from './CardButton';
import { ComponentProps, useState } from 'react';
import { ReplyWriterRes } from '@/apis/types/feed';
import { getCardBackImage } from './getCardBackImage';

interface FrontProps extends ComponentProps<'div'> {
  contents: string;
  flippable: boolean;
  onFlipCard: () => void;
}
interface BackProps extends ComponentProps<'div'> {
  onReflipCard: () => void;
  writerInfo: ReplyWriterRes;
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

const Back = ({ onReflipCard, writerInfo, ...rest }: BackProps) => {
  const { gender, age, mbti } = writerInfo;
  return (
    <Styled.AnswerCardContainer isFlipped {...rest}>
      <Styled.BackImage>{getCardBackImage(gender, mbti)}</Styled.BackImage>
      <div></div>
      <Styled.CardButtons>
        <Styled.ChatSuspenseButton>챗 준비중</Styled.ChatSuspenseButton>
        <CardButton variants="reflipCard" onClick={onReflipCard} />
      </Styled.CardButtons>
    </Styled.AnswerCardContainer>
  );
};

export default { Front, Back };
