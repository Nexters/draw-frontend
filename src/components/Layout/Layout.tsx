import { useEffect } from 'react';
import { Global, css } from '@emotion/react';
import { palette } from '@/styles/palette';
import Styled from './Layout.styles';
import useNativeMessage from '@/hooks/useNativeMessage';
import useNavigateEvent from '@/hooks/useNavigateEvent';
import { isDrawWebview } from '@/utils/webview';
import useFcmEvent from '@/hooks/useFcmEvent';

type LayoutProps = {
  backgroundColor: (typeof palette.background)[keyof typeof palette.background];
  hasTabBar?: boolean;
  hasScrollBouncing?: boolean;
  children?: React.ReactNode;
};

const isWebview = isDrawWebview();

const Layout = ({ backgroundColor, hasTabBar, hasScrollBouncing = true, children }: LayoutProps) => {
  const { showBottomBar } = useNativeMessage();
  useNavigateEvent();
  useFcmEvent();

  useEffect(() => {
    showBottomBar(hasTabBar ?? false);
  }, [hasTabBar, showBottomBar]);

  return (
    <Styled.Layout hasNotchPadding={isWebview} hasTabBar={isWebview ? hasTabBar : isWebview}>
      <Global
        styles={css`
          html,
          body {
            ${!hasScrollBouncing && 'overscroll-behavior: none;'};
            ${!hasScrollBouncing && '-webkit-overflow-scrolling: touch;'};
          }

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
