import styled from '@emotion/styled';

const Login = styled.div`
  padding: 22px 0 48px;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Landscape = styled.div`
  flex: 1;
  display: none;
  justify-content: center;
  align-items: center;

  @media (orientation: landscape) or (max-height: 730px) {
    display: flex;
  }
`;

const Portrait = styled.div`
  flex: 1;
  height: 100%;
  display: none;
  flex-direction: column;

  @media (orientation: portrait) and (min-height: 731px) {
    display: flex;
  }
`;

const DrawYourCardLogo = styled.div`
  margin-left: 24px;
  margin-bottom: 30px;
`;

const GraphicContainer = styled.div`
  margin-bottom: 47px;
  flex: 1;
`;

const Graphic = styled.div`
  flex: 1 0 0;
  min-width: 0;
  min-height: 0;
  width: calc(100% + 48px);
  margin-left: -24px;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 24px;
`;

export default {
  Login,
  Landscape,
  Portrait,
  DrawYourCardLogo,
  GraphicContainer,
  Graphic,
  LoginButtonContainer,
};
