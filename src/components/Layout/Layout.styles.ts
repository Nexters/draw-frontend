import styled from '@emotion/styled';

type LayoutProps = {
  hasNotchPadding?: boolean;
  hasTabBar?: boolean;
};

const Layout = styled.div<LayoutProps>`
  width: 100vw;
  height: 100vh;
  height: 100svh;
  overflow-y: auto;

  // Note: 스크롤바 숨김
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  // Note: 아이폰 노치 영역 여백
  ${({ hasNotchPadding }) => hasNotchPadding && `padding-top: 48px;`}

  // Note: 하단 탭바 영역 여백
  ${({ hasTabBar }) => hasTabBar && `padding-bottom: 109px;`}
`;

export default {
  Layout,
};
