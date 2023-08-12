import { useCallback, useEffect } from 'react';
import { CustomEventMap } from './useNativeMessage';
import { useMutation } from '@tanstack/react-query';
import { userApi } from '@/apis/handlers/user';
import useToast from './useToast';

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
  const { success } = useToast();
  const { mutate: postFcmToken } = useMutation(userApi.postFcm, { onSuccess: () => success(<>토큰 서버전송 성공</>) });

  const handleUpdateFcm = useCallback((event: CustomEvent<{ value: string }>) => {
    success(<>token : {event.detail.value}</>);
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
