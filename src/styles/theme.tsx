import { ThemeProvider as BaseThemeProvider } from '@emotion/react';

import { palette } from './palette';
import { typo } from './typo';

const theme = {
  palette,
  typo,
};

export const ThemeProvider = (props: React.PropsWithChildren<unknown>) => {
  const { children } = props;
  return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>;
};
