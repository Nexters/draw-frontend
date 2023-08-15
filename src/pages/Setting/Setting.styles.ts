import styled from '@emotion/styled';

const Header = styled.div`
  padding: 4px 20px;
  position: sticky;
  top: 0;
`;

const BackButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

const SettingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
`;

const SettingButton = styled.button`
  ${({ theme }) => theme.typo['sub.3']};
  color: ${({ theme }) => theme.palette.text.black};
  background-color: ${({ theme }) => theme.palette.background.white2};
  padding: 25px 20px;
  border-radius: 16px;
`;
const SheetContainer = styled.div`
  padding: 36px 24px;
`;
const SheetTitle = styled.div`
  ${({ theme }) => theme.typo['heading.1']}
  color : ${({ theme }) => theme.palette.text.black};
`;
const SheetDescription = styled.div`
  margin-top: 8px;
  ${({ theme }) => theme.typo['sub.2']}
  color : ${({ theme }) => theme.palette.text.grey1};
`;
const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 8px;
`;

export default {
  Header,
  BackButton,
  SettingList,
  SettingButton,
  SheetTitle,
  SheetContainer,
  SheetDescription,
  ButtonContainer,
};
