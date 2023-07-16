import styled from '@emotion/styled';
import type { LoginService } from './LoginButton';

type LoginButtonProps = {
  serviceName: LoginService;
};

const LoginButton = styled.button<LoginButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  height: 54px;
  border-radius: 12px;
  border: none;
  background-color: ${({ serviceName }) => {
    switch (serviceName) {
      case 'kakao':
        return '#FEE500';
      case 'apple':
        return '#050708';
    }
  }};
  color: ${({ serviceName }) => {
    switch (serviceName) {
      case 'kakao':
        return '#191919';
      case 'apple':
        return '#ffffff';
    }
  }};
`;

const ServiceLogoContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export default {
  LoginButton,
  ServiceLogoContainer,
};
