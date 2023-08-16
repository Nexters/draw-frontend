import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
