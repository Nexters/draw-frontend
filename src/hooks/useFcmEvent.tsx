import { useCallback, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { userApi } from '@/apis/handlers/user';

const useFcmEvent = () => {
  const { mutate: postFcmToken } = useMutation(userApi.postFcm, { onSuccess: () => console.log('fcm 전송 성공') });

  const handleUpdateFcm = useCallback(
    (event: CustomEvent<{ value: string }>) => {
      console.log('fcm 이벤트 받음', event.detail.value);
      postFcmToken(event.detail.value);
    },
    [postFcmToken]
  );

  useEffect(() => {
    window.addEventListener('updateFcm', handleUpdateFcm);

    return () => {
      window.removeEventListener('updateFcm', handleUpdateFcm);
    };
  }, [handleUpdateFcm]);
};

export default useFcmEvent;
