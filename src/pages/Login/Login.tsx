import Styled from './Login.styles';
import LoginButton from './components/LoginButton/LoginButton';

const Login = () => {
  return (
    <Styled.Login>
      <Styled.GraphicContainer>
        <Styled.Graphic />
      </Styled.GraphicContainer>
      <Styled.LoginButtonContainer>
        <LoginButton serviceName="kakao" />
        <LoginButton serviceName="apple" />
      </Styled.LoginButtonContainer>
    </Styled.Login>
  );
};

export default Login;
