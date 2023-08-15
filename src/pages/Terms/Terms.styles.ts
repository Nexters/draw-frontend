import styled from '@emotion/styled';

const Header = styled.div`
  padding: 4px 20px;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.palette.background.white1};
`;

const BackButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

const TermsContent = styled.div`
  padding: 24px;
  ${({ theme }) => theme.typo['sub.3']}
  color: ${({ theme }) => theme.palette.text.black};

  p {
    margin-bottom: 8px;
  }
`;

export default {
  Header,
  BackButton,
  TermsContent,
};
