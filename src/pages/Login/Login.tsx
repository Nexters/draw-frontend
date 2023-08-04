/* eslint-disable @typescript-eslint/no-misused-promises */
import Styled from './Login.styles';
import LoginButton from './components/LoginButton/LoginButton';
import Layout from '@/components/Layout/Layout';
import { palette } from '@/styles/palette';
import { KAKAO_AUTH_URL } from '@/constants/kakaoAuthUrl';
import useAppleLogin from './useAppleLogin';

const Login = () => {
  const { handleClickAppleLogin } = useAppleLogin();

  const handleClickKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
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
