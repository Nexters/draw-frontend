import { css } from '@emotion/react';
import styled from '@emotion/styled';

const AnswerCardContainer = styled.div<{ isFlipped?: boolean }>`
  position: relative;
  height: 180px;
  width: 139px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.background.white1};
  display: inline-block;

  white-space: normal;
  flex-shrink: 0;

  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const Contents = styled.div`
  height: 114px;

  overflow-y: auto;
  word-break: break-all;
  ${({ theme }) => theme.typo['body.4']}
  padding : 20px 16px 0px 16px;
`;

const CardButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 2px;
  padding-right: 8px;
`;

const BackImage = styled.div`
  position: absolute;
  z-index: -1;
  padding-top: -20px;
`;

const ChatSuspenseButton = styled.button`
  width: 79px;
  height: 36px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.palette.btn.black};
  color: #ffffff4d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardText = styled.div<{ color: string }>`
  position: absolute;
  ${({ theme }) => theme.typo['card.1']}
  color : ${({ color }) => color};
`;

const Age = styled(CardText)<{ type: string; oneCount: number }>`
  ${({ type, oneCount }) => {
    switch (type) {
      case 'FEMALE-E':
        return `
          left: ${23 + oneCount * 1.4}px;
          top : 23px;
        `;
      case 'FEMALE-I':
        return `
            left: ${75 + oneCount * 1.4}px;
            top : 29px;
          `;
      case 'MALE-E':
        return `
            left: ${87 + oneCount * 1.4}px;
            top : 25px;
          `;
      case 'MALE-I':
        return `
            left: ${32 + oneCount * 1.4}px;
            top : 84px;
          `;
    }
  }}
`;
const Mbti = styled(CardText)<{ type: string }>`
  ${({ type }) => {
    switch (type) {
      case 'FEMALE-E':
        return `
          left : 89.9px;
          top: 106.6px;
          transform : rotate(-12.5deg)
        `;
      case 'FEMALE-I':
        return `
            left: 4.15px;
            top : 56.83px;
            transform : rotate(30.64deg)
          `;
      case 'MALE-E':
        return `
            left: 55.45px;
            top : 70.69px;
            transform : rotate(17.41deg)
          `;
      case 'MALE-I':
        return `
            left: 28.56px;
            top : 24.29px;
            transform : rotate(-19.22deg)
          `;
    }
  }}
`;
const Gender = styled(CardText)<{ type: string }>`
  ${({ type }) => {
    switch (type) {
      case 'FEMALE-E':
        return `
          left : 33.5px;
          top: 66px;
          transform : rotate(-29.94deg)
        `;
      case 'FEMALE-I':
        return `
            left: 70.6px;
            top : 87.11px;
            transform : rotate(-35.06deg)
          `;
      case 'MALE-E':
        return `
            left: 30.33px;
            top : 104.1px;
            transform : rotate(-20.98deg)
          `;
      case 'MALE-I':
        return `
            left: 94.67px;
            top : 67.51px;
            transform : rotate(15.09deg)
          `;
    }
  }}
`;
export default { AnswerCardContainer, Contents, CardButtons, BackImage, ChatSuspenseButton, Age, Mbti, Gender };
