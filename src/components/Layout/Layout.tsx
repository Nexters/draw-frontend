import { useLayoutEffect } from 'react';
import { Global, css } from '@emotion/react';
import isUserAgentWebview from 'is-ua-webview';
import { palette } from '@/styles/palette';
import Styled from './Layout.styles';
import useNativeMessage from '@/hooks/useNativeMessage';
import useNavigateEvent from '@/hooks/useNavigateEvent';

type LayoutProps = {
  backgroundColor: (typeof palette.background)[keyof typeof palette.background];
  hasTabBar?: boolean;
  children?: React.ReactNode;
};

const Layout = ({ backgroundColor, hasTabBar, children }: LayoutProps) => {
  const { showBottomBar } = useNativeMessage();
  useNavigateEvent();

  const isWebview = isUserAgentWebview(window.navigator.userAgent);

  useLayoutEffect(() => {
    showBottomBar(hasTabBar ?? false);
  }, [hasTabBar, showBottomBar]);

  return (
    <Styled.Layout hasNotchPadding={isWebview} hasTabBar={isWebview ? hasTabBar : isWebview}>
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
