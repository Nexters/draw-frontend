import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    webkit?: {
      messageHandlers: {
        showBottomBar?: {
          postMessage: (value: string) => void;
        };
        showShareSheet?: {
          postMessage: (url: string) => void;
        };
        navigate?: {
          postMessage: (fn: string) => void;
        };
      };
    };
    draw?: {
      showBottomBar: (value: string) => void;
      showShareSheet: (url: string) => void;
      navigate: (fn: string) => void;
    };
  }
}

const useNativeMessage = () => {
  const navigate = useNavigate();

  const showBottomBar = useCallback((value: boolean) => {
    // iOS
    window.webkit?.messageHandlers.showBottomBar?.postMessage(value.toString());

    // Android
    window.draw?.showBottomBar(value.toString());
  }, []);

  const showShareSheet = useCallback((url: string) => {
    // iOS
    window.webkit?.messageHandlers.showShareSheet?.postMessage(url);

    // Android
    window.draw?.showShareSheet(url);
  }, []);

  const sendNavigate = useCallback(() => {
    // iOS
    window.webkit?.messageHandlers.navigate?.postMessage(JSON.stringify(navigate));

    // Android
    window.draw?.navigate(JSON.stringify(navigate));
  }, [navigate]);

  return { showBottomBar, showShareSheet, sendNavigate };
};

export default useNativeMessage;
