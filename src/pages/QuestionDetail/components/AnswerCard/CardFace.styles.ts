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

export default { AnswerCardContainer, Contents, CardButtons, BackImage, ChatSuspenseButton };
