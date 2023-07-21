import styled from '@emotion/styled';

const ButtonContainer = styled.button<{ variant: 'primary' | 'secondary' }>`
  ${({ theme }) => theme.typo['body.4']};
  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return theme.palette.btn.black;
      case 'secondary':
        return theme.palette.background.white1;
    }
  }};
  color: ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return theme.palette.text.white;
      case 'secondary':
        return theme.palette.text.black;
    }
  }};

  border-radius: 12px;
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    background-color: ${({ theme }) => theme.palette.btn.inactive};
  }
`;

export default { ButtonContainer };
