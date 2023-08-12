import styled from '@emotion/styled';

const NewProfile = styled.div`
  height: 100%;
  padding: 40px 0 48px;
  display: flex;
  flex-direction: column;
`;

const GraphicContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 90px;
`;

const StartButton = styled.button`
  ${({ theme }) => theme.typo['body.4']};
  background-color: ${({ theme }) => theme.palette.btn.black};
  color: ${({ theme }) => theme.palette.text.white};
  border-radius: 12px;
  height: 54px;
  min-height: 54px;
  margin: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const ShadowContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export default {
  NewProfile,
  GraphicContainer,
  StartButton,
  ShadowContainer,
};
