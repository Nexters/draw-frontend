import styled from '@emotion/styled';

const OptionSelectWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: 100svh;
  background-color: ${({ theme }) => theme.palette.background.white1};
  overflow-y: auto;
  z-index: 2;
`;

const PaddingContainer = styled.div`
  padding: 0 24px;
`;

const Heading = styled.div`
  margin-top: 28px;
  ${({ theme }) => theme.typo['heading.1']};
`;
const Description = styled.div`
  margin-top: 8px;
  ${({ theme }) => theme.typo['sub.3']}
  color : ${({ theme }) => theme.palette.text.grey1};
`;

const OptionFormContainer = styled.div``;
const OptionFormHeading = styled.div`
  ${({ theme }) => theme.typo['sub.3']}
  color : ${({ theme }) => theme.palette.text.black};
`;
const OptionFormDescription = styled.div`
  ${({ theme }) => theme.typo['sub.4.m']};
  color: ${({ theme }) => theme.palette.text.grey2};
  margin-top: 2px;
`;

export default {
  OptionSelectWrapper,
  Heading,
  PaddingContainer,
  Description,
  OptionFormContainer,
  OptionFormHeading,
  OptionFormDescription,
};
