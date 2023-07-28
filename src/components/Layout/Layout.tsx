import { palette } from '@/styles/palette';
import { Global, css } from '@emotion/react';
import Styled from './Layout.styles';

type LayoutProps = {
  backgroundColor: (typeof palette.background)[keyof typeof palette.background];
  hasTabBar?: boolean;
  children?: React.ReactNode;
};

const Layout = ({ backgroundColor, hasTabBar, children }: LayoutProps) => {
  return (
    <Styled.Layout hasTabBar={hasTabBar}>
      <Global
        styles={css`
          body {
            background-color: ${backgroundColor};
            user-select: none;
          }
        `}
      />
      {children}
    </Styled.Layout>
  );
};

export default Layout;
