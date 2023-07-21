import styled from '@emotion/styled';

const QuestionDetailContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

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

export default { AnswersContainer, QuestionDetailContainer };
