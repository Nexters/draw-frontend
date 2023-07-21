/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useRef, useState } from 'react';
import Styled from './AnswerCard.styles';
import CardButton from './CardButton';
import { FrontSide, BackSide } from 'react-flippy';

interface AnswerCard {
  contents: string;
  flippable: boolean;
}

const AnswerCard = ({ contents, flippable }: AnswerCard) => {
  const ref = useRef<any>();

  return (
    <>
      <Styled.FlipCard flipOnClick={false} flipDirection="horizontal" ref={ref}>
        <FrontSide>
          <Styled.AnswerCardContainer>
            <Styled.Contents>{contents}</Styled.Contents>
            <Styled.CardButtons>
              <CardButton variants="threeDots" />
              <CardButton
                variants="flipCard"
                onClick={() => {
                  ref.current && ref.current.toggle();
                }}
              />
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
