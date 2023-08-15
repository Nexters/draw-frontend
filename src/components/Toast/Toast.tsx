import { Toaster, ToasterProps } from 'react-hot-toast';
import { palette } from '@/styles/palette';
import { isDrawWebview } from '@/utils/webview';

type ToastProps = ToasterProps;

const isWebview = isDrawWebview();

const Toast = (props: ToastProps) => {
  return (
    <Toaster
      toastOptions={{
        style: {
          backgroundColor: palette.main.purple,
          color: palette.text.white,
          borderRadius: '999px',
          position: 'relative',
          top: isWebview ? '48px' : '0',
          padding: '9px 20px',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '600',
        },
        error: {
          style: {
            backgroundColor: palette.btn.black,
          },
        },
      }}
      containerStyle={{
        top: 5,
      }}
      {...props}
    />
  );
};

export default Toast;
