import styled from '@emotion/styled';

const NewProfile = styled.div`
  width: 100vw;
  height: 100svh;
  padding: 40px 24px 48px;
  display: flex;
  flex-direction: column;
`;

const GraphicContainer = styled.div`
  flex: 1;
`;

const StartButton = styled.button`
  ${({ theme }) => theme.typo['body.4']};
  background-color: ${({ theme }) => theme.palette.btn.black};
  color: ${({ theme }) => theme.palette.text.white};
  border-radius: 12px;
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  NewProfile,
  GraphicContainer,
  StartButton,
};
