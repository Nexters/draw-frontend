import { useNavigate } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import Styled from './Setting.styles';
import { ReactComponent as BackArrowIcon } from '@/assets/back-arrow.svg';
import { palette } from '@/styles/palette';

const Setting = () => {
  const navigate = useNavigate();

  return (
    <>
      <Global
        styles={css`
          body {
            background-color: ${palette.background.white1};
            margin-bottom: 124px;
          }
        `}
      />
      <Styled.Header>
        <Styled.BackButton type="button" onClick={() => navigate(-1)}>
          <BackArrowIcon />
        </Styled.BackButton>
      </Styled.Header>
      <Styled.SettingList>
        <Styled.SettingButton type="button">이용약관</Styled.SettingButton>
        <Styled.SettingButton type="button">회원 탈퇴</Styled.SettingButton>
      </Styled.SettingList>
    </>
  );
};

export default Setting;
