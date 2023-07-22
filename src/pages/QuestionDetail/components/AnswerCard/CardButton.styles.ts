import styled from '@emotion/styled';

const CardButtonContainer = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.background.white2};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default { CardButtonContainer };
