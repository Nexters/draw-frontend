import { HTMLAttributes } from 'react';
import Styled from './Spacing.styles';

export interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
  children?: never;
  direction?: 'horizontal' | 'vertical';
  size: number;
}

const Spacing = ({ direction = 'vertical', size, ...props }: SpacingProps) => {
  return <Styled.SpacingContainer direction={direction} size={size} {...props} />;
};

export default Spacing;
