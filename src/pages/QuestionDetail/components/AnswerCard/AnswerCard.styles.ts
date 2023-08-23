import { css } from '@emotion/react';
import styled from '@emotion/styled';

const FlipCard = styled.div<{ isFlipped: boolean }>`
  margin-right: 12px;
  &:first-of-type {
    padding-left: 24px;
  }
  &:last-of-type {
    padding-right: 24px;
  }
  transform-style: preserve-3d;
  transition: transform 0.3s;
  transform: perspective(800px) rotateY(0deg);

  ${({ isFlipped }) =>
    isFlipped &&
    css`
      transform: perspective(800px) rotateY(180deg);
    `}
  .back {
    transform: rotateY(180deg);
  }

  display: inline-grid;
  & > * {
    backface-visibility: hidden;
    grid-area: 1/1/1/1;
  }
`;

export default { FlipCard };
