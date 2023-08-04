import { useLayoutEffect } from 'react';
import { Global, css } from '@emotion/react';
import { palette } from '@/styles/palette';
import Styled from './Layout.styles';
import useNativeMessage from '@/hooks/useNativeMessage';

type LayoutProps = {
  backgroundColor: (typeof palette.background)[keyof typeof palette.background];
  hasTabBar?: boolean;
  children?: React.ReactNode;
};

const Layout = ({ backgroundColor, hasTabBar, children }: LayoutProps) => {
  const { showBottomBar } = useNativeMessage();

  useLayoutEffect(() => {
    showBottomBar(hasTabBar ?? false);
  }, [hasTabBar, showBottomBar]);

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
