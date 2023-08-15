import { useNavigate } from 'react-router-dom';
import Styled from './Setting.styles';
import { ReactComponent as BackArrowIcon } from '@/assets/back-arrow.svg';
import { palette } from '@/styles/palette';
import Layout from '@/components/Layout/Layout';
import useToast from '@/hooks/useToast';

const Setting = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleClickTerms = () => {
    navigate('/my-page/terms');
  };

  const handleWithdrawUser = () => {
    window.localStorage.removeItem('aT');
    window.localStorage.removeItem('rT');
    toast.success(<>회원탈퇴를 성공했어요</>);
    navigate('/login');
  };

  return (
    <Layout backgroundColor={palette.background.white1} hasTabBar>
      <Styled.Header>
        <Styled.BackButton type="button" onClick={() => navigate(-1)}>
          <BackArrowIcon />
        </Styled.BackButton>
      </Styled.Header>
      <Styled.SettingList>
        <Styled.SettingButton type="button" onClick={handleClickTerms}>
          이용약관
        </Styled.SettingButton>
        <Styled.SettingButton type="button" onClick={handleWithdrawUser}>
          회원 탈퇴
        </Styled.SettingButton>
      </Styled.SettingList>
    </Layout>
  );
};

export default Setting;
