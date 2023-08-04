/* eslint-disable @typescript-eslint/no-misused-promises */
import Styled from './Login.styles';
import LoginButton from './components/LoginButton/LoginButton';
import Layout from '@/components/Layout/Layout';
import { palette } from '@/styles/palette';
import { KAKAO_AUTH_URL } from '@/constants/kakaoAuthUrl';
import { useEffect } from 'react';

declare global {
  interface Window {
    AppleID: { auth: { init: (args?: any) => void; signIn: (config?: any) => Promise<any> } };
  }
}

const Login = () => {
  const handleClickKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  useEffect(() => {
    window.AppleID.auth.init({
      clientId: 'kr.kro.draw-nexters',
      scope: 'name',
      redirectURI: 'https://draw-nexters.netlify.app/callback/apple',
      usePopup: true,
    });
  }, []);

  const appleLogin = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await window.AppleID.auth.signIn();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout backgroundColor={palette.background.white2}>
      <Styled.Login>
        <Styled.GraphicContainer>
          <Styled.Graphic />
        </Styled.GraphicContainer>
        <Styled.LoginButtonContainer>
          <LoginButton serviceName="kakao" onClick={handleClickKakaoLogin} />
          <LoginButton serviceName="apple" onClick={() => appleLogin()} />
        </Styled.LoginButtonContainer>
      </Styled.Login>
    </Layout>
  );
};

export default Login;
