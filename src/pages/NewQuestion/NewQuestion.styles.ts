import styled from '@emotion/styled';
import { ReactComponent as BaseAddOptionIcon } from '@/assets/add-tag.svg';
import { css } from '@emotion/react';

const FOOTER_HEIGHT = { default: 85, focused: 50 };
const LAYOUT_PADDING = 48;

const PageWrapper = styled.div<{ height: number; isTextAreaFocused: boolean }>`
  ${({ height, isTextAreaFocused }) => {
    const footerHeight = isTextAreaFocused ? FOOTER_HEIGHT['focused'] : FOOTER_HEIGHT['default'];
    const realHeight = `${height - footerHeight - LAYOUT_PADDING}`;
    return css`
      height: ${realHeight}px;
    `;
  }}

  display: flex;
  flex-direction: column;
`;

const PageBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PageFooter = styled.div<{ height: number; isTextAreaFocused: boolean }>`
  position: absolute;
  top: ${({ height, isTextAreaFocused }) => {
    const footerHeight = isTextAreaFocused ? FOOTER_HEIGHT['focused'] : FOOTER_HEIGHT['default'];
    return `${height - footerHeight}`;
  }}px;
  transition: top 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);
  left: 0;
  right: 0;
`;

const TextArea = styled.textarea`
  flex: 1;
  ${({ theme }) => theme.typo['body.1']}
  color : ${({ theme }) => theme.palette.text.black};
  padding: 0 24px;
  width: 100%;

  word-break: break-all;
  ::placeholder {
    ${({ theme }) => theme.typo['body.1']}
    color: ${({ theme }) => theme.palette.text.grey2};
  }
  &:focus {
    height: auto;
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

const AskOptionDescription = styled.div<{ selected: boolean }>`
  ${({ theme }) => theme.typo['sub.3']}
  color : ${({ theme, selected }) => (selected ? theme.palette.tag.text : theme.palette.text.grey1)};
`;

const BottomSpace = styled.div`
  width: 100%;
  height: 35px;
  background-color: ${({ theme }) => theme.palette.background.white1};
`;

const AddOptionIcon = styled(BaseAddOptionIcon)<{ selected: boolean }>`
  color: ${({ theme, selected }) => (selected ? theme.palette.tag.text : theme.palette.text.grey1)};
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
  AddOptionIcon,
};
