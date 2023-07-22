import { useTransition, config } from '@react-spring/web';
import Styled from './BottomSheet.styles';
import { createPortal } from 'react-dom';

type BottomSheetProps = {
  open: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
};

const BottomSheet = ({ open, children, onClose }: BottomSheetProps) => {
  const dimmedTransition = useTransition(open, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 0.5,
    },
    leave: {
      opacity: 0,
    },
    config: config.default,
  });

  const bottomSheetTransition = useTransition(open, {
    from: {
      transform: 'translate(0%, 100%)',
    },
    enter: {
      transform: 'translate(0%, 0%)',
    },
    leave: {
      transform: 'translate(0%, 100%)',
    },
    config: config.default,
  });

  const dimmer = dimmedTransition((style, flag) => <>{flag && <Styled.Dimmed onClick={onClose} style={style} />}</>);

  const bottomSheet = bottomSheetTransition((style, flag) => (
    <>{flag && <Styled.BottomSheet style={style}>{children}</Styled.BottomSheet>}</>
  ));

  return createPortal(
    <>
      {dimmer}
      {bottomSheet}
    </>,
    document.body
  );
};

export default BottomSheet;
