import { palette } from '@/styles/palette';
import FlipBottomSheet from '../FlipBottomSheet/FlipBottomSheet';
import Styled from './CardFace.styles';
import CardButton from './CardButton';
import { ComponentProps, useCallback, useState } from 'react';
import { ReplyWriterRes } from '@/apis/types/reply';
import { getCardSource } from './getCardSoure';

interface FrontProps extends ComponentProps<'div'> {
  contents: string;
  flippable: boolean;
  hidePeekButton?: boolean;
  onPeekCard: () => void;
  onMenuClick: () => void;
}
interface BackProps extends ComponentProps<'div'> {
  onReflipCard: () => void;
  writerInfo: ReplyWriterRes | null;
}

const Front = ({ contents, flippable, onPeekCard, hidePeekButton = false, onMenuClick, ...rest }: FrontProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Styled.AnswerCardContainer {...rest}>
      <Styled.Contents>{contents}</Styled.Contents>
      <Styled.CardButtons>
        {!hidePeekButton && (
          <>
            <CardButton variants="threeDots" onClick={onMenuClick} />
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
          </>
        )}
      </Styled.CardButtons>
    </Styled.AnswerCardContainer>
  );
};

const Back = ({ onReflipCard, writerInfo, ...rest }: BackProps) => {
  const countOnes = useCallback(
    (num: number) => {
      const matches = String(num).match(/1/g);
      return matches ? matches.length : 0;
    },
    [Number]
  );
  return (
    <Styled.AnswerCardContainer isFlipped {...rest}>
      {writerInfo && (
        <>
          <Styled.Age
            oneCount={countOnes(writerInfo.age)}
            color={getCardSource(writerInfo.gender, writerInfo.mbti).color}
            type={getCardSource(writerInfo.gender, writerInfo.mbti).type}
          >
            {writerInfo?.age}
          </Styled.Age>
          <Styled.Mbti
            color={getCardSource(writerInfo.gender, writerInfo.mbti).color}
            type={getCardSource(writerInfo.gender, writerInfo.mbti).type}
          >
            {writerInfo?.mbti}
          </Styled.Mbti>
          <Styled.Gender
            color={getCardSource(writerInfo.gender, writerInfo.mbti).color}
            type={getCardSource(writerInfo.gender, writerInfo.mbti).type}
          >
            {writerInfo?.gender === 'FEMALE' ? 'Woman' : 'Man'}
          </Styled.Gender>
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
