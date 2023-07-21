/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useRef, useState } from 'react';
import Styled from './AnswerCard.styles';
import CardButton from './CardButton';
import { FrontSide, BackSide } from 'react-flippy';
import { palette } from '@/styles/palette';
import FlipBottomSheet from '../FlipBottomSheet/FlipBottomSheet';

interface AnswerCard {
  contents: string;
  flippable: boolean;
}

const AnswerCard = ({ contents, flippable }: AnswerCard) => {
  const ref = useRef<any>();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <>
      <Styled.FlipCard flipOnClick={false} flipDirection="horizontal" ref={ref}>
        <FrontSide>
          <Styled.AnswerCardContainer>
            <Styled.Contents>{contents}</Styled.Contents>
            <Styled.CardButtons>
              <CardButton variants="threeDots" />
              {flippable ? (
                <>
                  <CardButton
                    variants="flipCard"
                    onClick={() => {
                      setIsSheetOpen(true);
                    }}
                    css={{ color: `${palette.btn.green}` }}
                  />
                  <FlipBottomSheet
                    isOpen={isSheetOpen}
                    onClose={() => setIsSheetOpen(false)}
                    onClickYes={() => {
                      ref.current && ref.current.toggle();
                    }}
                  />
                </>
              ) : (
                <CardButton
                  variants="flipCard"
                  css={{ color: `${palette.text.grey2}` }}
                  onClick={() => {
                    ref.current && ref.current.toggle();
                  }}
                />
              )}
            </Styled.CardButtons>
          </Styled.AnswerCardContainer>
        </FrontSide>
        <BackSide>
          <Styled.AnswerCardContainer isFlipped>
            <div></div>
            <Styled.CardButtons>
              <CardButton
                variants="reflipCard"
                onClick={() => {
                  ref.current && ref.current.toggle();
                }}
              />
            </Styled.CardButtons>
          </Styled.AnswerCardContainer>
        </BackSide>
      </Styled.FlipCard>
    </>
  );
};

export default AnswerCard;
