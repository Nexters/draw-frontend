import Styled from './LoginButton.styles';
import { ReactComponent as KakaoLogo } from '@/assets/kakao.svg';
import { ReactComponent as AppleLogo } from '@/assets/apple.svg';

export type LoginService = 'kakao' | 'apple';

type LoginButtonProps = {
  serviceName: LoginService;
  onClick?: () => void;
};

const LoginButton = ({ serviceName, onClick }: LoginButtonProps) => {
  const loginButtonLogo: Record<LoginService, JSX.Element> = {
    kakao: <KakaoLogo width="18px" />,
    apple: <AppleLogo width="18px" />,
  };

  const loginButtonLabel: Record<LoginService, string> = {
    kakao: '카카오로 시작하기',
    apple: 'Apple로 시작하기',
  };

  return (
    <Styled.LoginButton serviceName={serviceName} onClick={onClick}>
      <Styled.ServiceLogoContainer>{loginButtonLogo[serviceName]}</Styled.ServiceLogoContainer>
      <span>{loginButtonLabel[serviceName]}</span>
    </Styled.LoginButton>
  );
};

export default LoginButton;
