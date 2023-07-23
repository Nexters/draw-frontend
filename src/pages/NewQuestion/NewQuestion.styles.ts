import styled from '@emotion/styled';

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PageBody = styled.div`
  flex-grow: 1;
`;
const PageFooter = styled.div``;

const TextArea = styled.textarea`
  ${({ theme }) => theme.typo['body.1']}
  color : ${({ theme }) => theme.palette.text.black};
  padding: 0 24px;
  width: 100%;
  height: calc(100% - 60px);
  word-break: break-all;
  ::placeholder {
    ${({ theme }) => theme.typo['body.1']}
    color: ${({ theme }) => theme.palette.text.grey2};
  }
`;

const AskOption = styled.div`
  background-color: ${({ theme }) => theme.palette.background.white1};
`;

const AskOptionBody = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  padding: 0 24px;
`;

const AskOptionDescription = styled.div`
  ${({ theme }) => theme.typo['sub.3']}
  color : ${({ theme }) => theme.palette.text.grey1};
`;

const BottomSpace = styled.div`
  width: 100%;
  height: 35px;
  background-color: ${({ theme }) => theme.palette.background.white1};
`;

export default {
  TextArea,
  AskOption,
  AskOptionBody,
  AskOptionDescription,
  BottomSpace,
  PageWrapper,
  PageBody,
  PageFooter,
};
