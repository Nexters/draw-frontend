import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTransition, config } from '@react-spring/web';
import Styled from './BottomSheet.styles';
import useNativeMessage from '@/hooks/useNativeMessage';

type BottomSheetProps = {
  open: boolean;
  children?: React.ReactNode;
  isBottomBarToggleDisabled?: boolean;
  onClose?: () => void;
};

const BottomSheet = ({ open, children, isBottomBarToggleDisabled = false, onClose }: BottomSheetProps) => {
  const { showBottomBar } = useNativeMessage();

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

  useEffect(() => {
    if (isBottomBarToggleDisabled) return;

    showBottomBar(!open);
  }, [isBottomBarToggleDisabled, open, showBottomBar]);

  return createPortal(
    <>
      {dimmer}
      {bottomSheet}
    </>,
    document.body
  );
};

export default BottomSheet;
