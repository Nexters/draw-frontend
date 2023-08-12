import styled from '@emotion/styled';

const QuestionDetailContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const QuestionDetailHeader = styled.div``;
const QuestionDetailBody = styled.div``;

const AnswersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-top: 16px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const QuestionDetailTitle = styled.div`
  padding: 28px 24px 0 24px;
`;
const QuestionDetailFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;
const NoReply = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${({ theme }) => theme.typo['sub.2']}
  color : ${({ theme }) => theme.palette.text.grey1};
`;

export default {
  AnswersContainer,
  QuestionDetailHeader,
  QuestionDetailBody,
  QuestionDetailContainer,
  QuestionDetailTitle,
  QuestionDetailFooterContainer,
  NoReply,
};
