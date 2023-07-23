import styled from '@emotion/styled';

const OptionSelectWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: 100svh;
  background-color: ${({ theme }) => theme.palette.background.white1};
  overflow-y: auto;
  z-index: 2;
`;

export default { OptionSelectWrapper };
