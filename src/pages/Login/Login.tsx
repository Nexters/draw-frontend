import { useNavigate } from 'react-router-dom';
import Styled from './Login.styles';
import LoginButton from './components/LoginButton/LoginButton';
import Layout from '@/components/Layout/Layout';
import { palette } from '@/styles/palette';
import { KAKAO_AUTH_URL } from '@/constants/kakaoAuthUrl';

const Login = () => {
  const navigate = useNavigate();

  const handleClickKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const handleClickAppleLogin = () => {
    // TODO: 실제 로그인 로직 구현 필요
    navigate('/new-profile');
  };

  return (
    <Layout backgroundColor={palette.background.white2}>
      <Styled.Login>
        <Styled.GraphicContainer>
          <Styled.Graphic />
        </Styled.GraphicContainer>
        <Styled.LoginButtonContainer>
          <LoginButton serviceName="kakao" onClick={handleClickKakaoLogin} />
          <LoginButton serviceName="apple" onClick={handleClickAppleLogin} />
        </Styled.LoginButtonContainer>
      </Styled.Login>
    </Layout>
  );
};

export default Login;
