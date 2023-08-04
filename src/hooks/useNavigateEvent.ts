import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface CustomEventMap {
  navigate: CustomEvent<{ url: string }>;
}

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
  }
}

const useNavigateEvent = () => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (event: CustomEvent<{ url: string }>) => {
      navigate(event.detail.url);
    },
    [navigate]
  );

  useEffect(() => {
    window.addEventListener('navigate', handleNavigate);

    return () => {
      window.removeEventListener('navigate', handleNavigate);
    };
  }, [handleNavigate]);
};

export default useNavigateEvent;
