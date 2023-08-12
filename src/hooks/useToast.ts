import { toast } from 'react-hot-toast';

const useToast = () => {
  const success = (message: JSX.Element | null) =>
    toast.success(message, {
      icon: null,
      duration: 2000,
    });

  const error = (message: JSX.Element | null) =>
    toast.error(message, {
      icon: null,
    });

  return {
    success,
    error,
  };
};

export default useToast;
