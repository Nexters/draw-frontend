import { Toaster, ToasterProps } from 'react-hot-toast';
import { palette } from '@/styles/palette';

type ToastProps = ToasterProps;

const Toast = (props: ToastProps) => (
  <Toaster
    toastOptions={{
      style: {
        backgroundColor: palette.main.purple,
        color: palette.text.white,
        borderRadius: '999px',
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

export default Toast;
