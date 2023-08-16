import Button from '@/components/Button/Button';
import Styled from './FlipBottomSheet.styles';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import { ReactComponent as Point } from '@/assets/point.svg';
import { ReactComponent as ToIcon } from '@/assets/to-icon.svg';
import Spacing from '@/components/Spacing/Spacing';
import useMyInfo from '@/hooks/api/useMyInfo';

interface FlipBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onClickYes: () => void;
}

const FlipBottomSheet = ({ isOpen, onClose, onClickYes }: FlipBottomSheetProps) => {
  const { data: myData } = useMyInfo();
  return (
    <BottomSheet open={isOpen} onClose={onClose} isBottomBarToggleDisabled={true}>
      <Styled.SheetContentContainer>
        <Styled.SheetTitle>필요해요!</Styled.SheetTitle>
        <Styled.NeededPoint>
          <Point />
          <p>10D</p>
        </Styled.NeededPoint>
        <Spacing size={32} />
        <Styled.PointInformation>
          <Styled.PointBefore>
            <p>현재</p>
            <p>{myData?.point}D</p>
          </Styled.PointBefore>
          <ToIcon />
          <Styled.PointAfter>
            <p>사용 후</p>
            <p>{myData && myData?.point - 10}D</p>
          </Styled.PointAfter>
        </Styled.PointInformation>
        <Spacing size={20} />
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
