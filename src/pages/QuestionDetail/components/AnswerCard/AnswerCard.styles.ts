import styled from '@emotion/styled';
import Flippy from 'react-flippy';

const FlipCard = styled(Flippy)`
  & > * > * > * {
    box-shadow: none;
    padding: 0;
  }
  margin-right: 12px;

  &:first-of-type {
    margin-left: 20px;
  }
`;

const AnswerCardContainer = styled.div<{ isFlipped?: boolean }>`
  height: 180px;
  width: 139px;
  border-radius: 20px;
  background-color: ${({ theme, isFlipped }) =>
    isFlipped ? theme.palette.btn.green : theme.palette.background.white1};
  display: inline-block;

  white-space: normal;
  flex-shrink: 0;
  padding-top: 20px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Contents = styled.div`
  height: 114px;
  overflow-y: auto;
  word-break: break-all;
  ${({ theme }) => theme.typo['body.4']}
  padding : 0 16px;
`;

const CardButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 2px;
  padding-right: 8px;
`;

export default { AnswerCardContainer, Contents, CardButtons, FlipCard };
