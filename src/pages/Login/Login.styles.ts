import styled from '@emotion/styled';

const Login = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  gap: 58px;
`;

const GraphicContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Graphic = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.white1};
  margin: 0 16px;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 24px;
`;

export default {
  Login,
  GraphicContainer,
  Graphic,
  LoginButtonContainer,
};
