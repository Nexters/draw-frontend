import { BottomSheet } from 'react-spring-bottom-sheet';

const FlipBottomSheet = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <BottomSheet open={isOpen} onDismiss={onClose}>
      <button></button>
    </BottomSheet>
  );
};

export default FlipBottomSheet;
