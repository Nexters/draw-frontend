import styled from '@emotion/styled';
import { SpacingProps } from './Spacing';

const SpacingContainer = styled.div<SpacingProps>`
  flex: 'none';
  width: ${({ direction, size }) => (direction === 'horizontal' ? `${size}px` : undefined)};
  height: ${({ direction, size }) => (direction === 'vertical' ? `${size}px` : undefined)};
`;

export default { SpacingContainer };
