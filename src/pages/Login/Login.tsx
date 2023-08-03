import { useNavigate } from 'react-router-dom';
import Styled from './Login.styles';
import LoginButton from './components/LoginButton/LoginButton';
import Layout from '@/components/Layout/Layout';
import { palette } from '@/styles/palette';
import { KAKAO_AUTH_URL } from '@/constants/kakaoAuthUrl';
import { APPLE_AUTH_URL } from '@/constants/appleAuthUrl';

const Login = () => {
  const navigate = useNavigate();

  const handleClickKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const handleClickAppleLogin = () => {
    window.location.href = APPLE_AUTH_URL;
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
