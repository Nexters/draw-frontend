/* eslint-disable @typescript-eslint/no-misused-promises */
import Styled from './Login.styles';
import LoginButton from './components/LoginButton/LoginButton';
import useAppleLogin from './useAppleLogin';
import Layout from '@/components/Layout/Layout';
import { palette } from '@/styles/palette';
import { KAKAO_AUTH_URL } from '@/constants/kakaoAuthUrl';
import { ReactComponent as DrawYourCardLogo } from '@/assets/draw_your_card.svg';
import { ReactComponent as DrawLogo } from '@/assets/logo.svg';
import onboardingGraphicUrl from '@/assets/onboarding.svg';

const Login = () => {
  const { handleClickAppleLogin } = useAppleLogin();
  const handleClickKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Layout backgroundColor={palette.background.white1}>
      <Styled.Login>
        <Styled.Landscape>
          <DrawLogo />
        </Styled.Landscape>
        <Styled.Portrait>
          <Styled.DrawYourCardLogo>
            <DrawYourCardLogo />
          </Styled.DrawYourCardLogo>
          <Styled.GraphicContainer>
            <Styled.Graphic style={{ backgroundImage: `url(${onboardingGraphicUrl})` }} />
          </Styled.GraphicContainer>
        </Styled.Portrait>
        <Styled.LoginButtonContainer>
          <LoginButton serviceName="kakao" onClick={handleClickKakaoLogin} />
          <LoginButton serviceName="apple" onClick={handleClickAppleLogin} />
        </Styled.LoginButtonContainer>
      </Styled.Login>
    </Layout>
  );
};

export default Login;
