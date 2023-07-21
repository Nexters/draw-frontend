import { ComponentProps } from 'react';
import Styled from './Button.styles';
interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary';
}

const Button = ({ variant = 'primary', children, ...rest }: ButtonProps) => {
  return (
    <Styled.ButtonContainer variant={variant} {...rest}>
      {children}
    </Styled.ButtonContainer>
  );
};

export default Button;
