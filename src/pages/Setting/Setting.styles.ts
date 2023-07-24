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

export default {
  Header,
  BackButton,
  SettingList,
  SettingButton,
};
