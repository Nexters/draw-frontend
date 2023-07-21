import Button from '@/components/Button/Button';
import Styled from './FlipBottomSheet.styles';
import BottomSheet from '@/components/BottomSheet/BottomSheet';

interface FlipBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onClickYes: () => void;
}

const FlipBottomSheet = ({ isOpen, onClose, onClickYes }: FlipBottomSheetProps) => {
  return (
    <BottomSheet open={isOpen} onClose={onClose}>
      <Styled.SheetContentContainer>
        <Styled.ButtonSetContainer>
          <Button variant="secondary" onClick={onClose}>
            아니요
          </Button>
          <Button
            onClick={() => {
              onClose();
              onClickYes();
            }}
          >
            볼래요
          </Button>
        </Styled.ButtonSetContainer>
      </Styled.SheetContentContainer>
    </BottomSheet>
  );
};

export default FlipBottomSheet;
