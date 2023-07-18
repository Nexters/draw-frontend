import { useNavigate } from 'react-router-dom';
import Styled from './Login.styles';
import LoginButton from './components/LoginButton/LoginButton';

const Login = () => {
  const navigate = useNavigate();

  const handleClickKakaoLogin = () => {
    // TODO: 실제 로그인 로직 구현 필요
    navigate('/new-profile');
  };

  const handleClickAppleLogin = () => {
    // TODO: 실제 로그인 로직 구현 필요
    navigate('/new-profile');
  };

  return (
    <Styled.Login>
      <Styled.GraphicContainer>
        <Styled.Graphic />
      </Styled.GraphicContainer>
      <Styled.LoginButtonContainer>
        <LoginButton serviceName="kakao" onClick={handleClickKakaoLogin} />
        <LoginButton serviceName="apple" onClick={handleClickAppleLogin} />
      </Styled.LoginButtonContainer>
    </Styled.Login>
  );
};

export default Login;
