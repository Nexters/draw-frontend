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

export default {
  AnswersContainer,
  QuestionDetailHeader,
  QuestionDetailBody,
  QuestionDetailContainer,
  QuestionDetailTitle,
  QuestionDetailFooterContainer,
};
