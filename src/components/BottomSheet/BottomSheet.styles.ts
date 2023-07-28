import styled from '@emotion/styled';
import { animated } from '@react-spring/web';

const BottomSheet = styled(animated.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: ${({ theme }) => theme.palette.background.white2};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Dimmed = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: 100svh;
  background-color: ${({ theme }) => theme.palette.text.black};
  opacity: 0.7;
  z-index: 99;
`;

export default {
  BottomSheet,
  Dimmed,
};
