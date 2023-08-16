import { useCallback } from 'react';

declare global {
  interface Window {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, event: CustomEventMap[K]) => void
    ): void;
    removeEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, event: CustomEventMap[K]) => void
    ): void;
    dispatchEvent<K extends keyof CustomEventMap>(ev: CustomEventMap[K]): void;
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
        updateFcm?: {
          postMessage: (fn: string) => void;
        };
      };
    };
    draw?: {
      showBottomBar: (value: string) => void;
      showShareSheet: (url: string) => void;
      navigate: (fn: string) => void;
      updateFcm: (fn: string) => void;
    };
  }
}

export interface CustomEventMap {
  navigate: CustomEvent<{ url: string }>;
  updateFcm: CustomEvent<{ value: string }>;
}

const useNativeMessage = () => {
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

  return { showBottomBar, showShareSheet };
};

export default useNativeMessage;
