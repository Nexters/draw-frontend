import { useCallback } from 'react';

declare global {
  interface Window {
    webkit?: {
      messageHandlers: {
        showBottomBar: {
          postMessage: (value: string) => void;
        };
        showShareSheet: {
          postMessage: (url: string) => void;
        };
      };
    };
    draw?: {
      showBottomBar: (value: string) => void;
      showShareSheet: (url: string) => void;
    };
  }
}

const useNativeMessage = () => {
  const showBottomBar = useCallback((value: boolean) => {
    // iOS
    window.webkit?.messageHandlers.showBottomBar.postMessage(value.toString());

    // Android
    window.draw?.showBottomBar(value.toString());
  }, []);

  const showShareSheet = useCallback((url: string) => {
    // iOS
    window.webkit?.messageHandlers.showShareSheet.postMessage(url);

    // Android
    window.draw?.showShareSheet(url);
  }, []);

  return { showBottomBar, showShareSheet };
};

export default useNativeMessage;
