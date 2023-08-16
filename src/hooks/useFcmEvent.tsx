import { useCallback, useEffect } from 'react';
import { CustomEventMap } from './useNativeMessage';
import { useMutation } from '@tanstack/react-query';
import { userApi } from '@/apis/handlers/user';

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

const useFcmEvent = () => {
  const { mutate: postFcmToken } = useMutation(userApi.postFcm, { onSuccess: () => console.log('fcm 전송 성공') });

  const handleUpdateFcm = useCallback((event: CustomEvent<{ value: string }>) => {
    console.log('fcm 이벤트 받음', event.detail.value);
    postFcmToken(event.detail.value);
  }, []);

  useEffect(() => {
    window.addEventListener('updateFcm', handleUpdateFcm);

    return () => {
      window.removeEventListener('updateFcm', handleUpdateFcm);
    };
  }, [handleUpdateFcm]);
};

export default useFcmEvent;
