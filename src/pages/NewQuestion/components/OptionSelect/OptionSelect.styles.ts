import styled from '@emotion/styled';

const OptionSelectWrapper = styled.div`
  max-height: calc(100vh - 20px);
  max-height: calc(100svh - 20px);
  background-color: ${({ theme }) => theme.palette.background.white1};
  overflow-y: auto;
  z-index: 2;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const PaddingContainer = styled.div`
  padding: 0 24px;
`;

const Heading = styled.div`
  margin-top: 12px;
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

const SubmitButton = styled.button`
  position: fixed;
  text-align: right;
  padding-top: 20px;
  padding-right: 24px;
  box-sizing: border-box;
  height: 52px;
  display: block;
  background-color: ${({ theme }) => theme.palette.background.white1};
  width: 100%;
  ${({ theme }) => theme.typo['sub.1']}
  color :${({ theme }) => theme.palette.tag.text};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export default {
  OptionSelectWrapper,
  Heading,
  PaddingContainer,
  Description,
  OptionFormContainer,
  OptionFormHeading,
  OptionFormDescription,
  SubmitButton,
};
