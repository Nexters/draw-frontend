import { useNavigate } from 'react-router-dom';
import Styled from './Setting.styles';
import { ReactComponent as BackArrowIcon } from '@/assets/back-arrow.svg';
import { palette } from '@/styles/palette';
import Layout from '@/components/Layout/Layout';

const Setting = () => {
  const navigate = useNavigate();

  return (
    <Layout backgroundColor={palette.background.white1} hasTabBar>
      <Styled.Header>
        <Styled.BackButton type="button" onClick={() => navigate(-1)}>
          <BackArrowIcon />
        </Styled.BackButton>
      </Styled.Header>
      <Styled.SettingList>
        <Styled.SettingButton type="button">이용약관</Styled.SettingButton>
        <Styled.SettingButton type="button">회원 탈퇴</Styled.SettingButton>
      </Styled.SettingList>
    </Layout>
  );
};

export default Setting;
