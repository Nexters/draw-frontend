import { palette } from '@/styles/palette';
import FlipBottomSheet from '../FlipBottomSheet/FlipBottomSheet';
import Styled from './CardFace.styles';
import CardButton from './CardButton';
import { ComponentProps, useState } from 'react';
import { ReplyWriterRes } from '@/apis/types/reply';
import { getCardSource } from './getCardSoure';

interface FrontProps extends ComponentProps<'div'> {
  contents: string;
  flippable: boolean;
  onPeekCard: () => void;
}
interface BackProps extends ComponentProps<'div'> {
  onReflipCard: () => void;
  writerInfo: ReplyWriterRes | null;
}

const Front = ({ contents, flippable, onPeekCard, ...rest }: FrontProps) => {
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
            <FlipBottomSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} onClickYes={onPeekCard} />
          </>
        ) : (
          <CardButton variants="flipCard" css={{ color: `${palette.text.grey2}` }} onClick={onPeekCard} />
        )}
      </Styled.CardButtons>
    </Styled.AnswerCardContainer>
  );
};

const Back = ({ onReflipCard, writerInfo, ...rest }: BackProps) => {
  return (
    <Styled.AnswerCardContainer isFlipped {...rest}>
      {writerInfo && (
        <>
          <Styled.Age color={getCardSource(writerInfo.gender, writerInfo.mbti).color}>{writerInfo?.age}</Styled.Age>
          <Styled.BackImage>{getCardSource(writerInfo.gender, writerInfo.mbti).image}</Styled.BackImage>
        </>
      )}

      <div></div>
      <Styled.CardButtons>
        <Styled.ChatSuspenseButton>챗 준비중</Styled.ChatSuspenseButton>
        <CardButton variants="reflipCard" onClick={onReflipCard} />
      </Styled.CardButtons>
    </Styled.AnswerCardContainer>
  );
};

export default { Front, Back };
