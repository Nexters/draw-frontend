import { css } from '@emotion/react';

const generateTypo = (size: number, weight: number) => css`
  font-family:
    'Pretendard Variable',
    Pretendard,
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    Roboto,
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    sans-serif;
  font-style: normal;
  line-height: 140%;
  font-display: auto;
  font-weight: ${weight};
  font-size: ${size}px;
`;

export const typo = {
  'heading.1': generateTypo(22, 600),
  'heading.2': generateTypo(16, 500),
  'body.1': generateTypo(24, 600),
  'body.2': generateTypo(24, 500),
  'body.3': generateTypo(22, 600),
  'body.4': generateTypo(16, 600),
  'body.5': generateTypo(12, 600),
  'sub.1': generateTypo(16, 600),
  'sub.3': generateTypo(16, 500),
  'sub.2': generateTypo(16, 400),
  'sub.4.m': generateTypo(12, 500),
  'sub.4.sb': generateTypo(12, 600),
  'point.1': generateTypo(32, 600),
  'point.2': generateTypo(20, 600),
} as const;
