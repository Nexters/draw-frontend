import { ReactComponent as BackArrow } from '@/assets/back-arrow.svg';
import Styled from './TopBar.styles';

const TopBar = ({ length, onSubmit }: { length: number; onSubmit: () => void }) => {
  return (
    <Styled.BackContainer>
      <Styled.BackButton>
        <BackArrow />
      </Styled.BackButton>
      <Styled.Length>{length}/150</Styled.Length>
      <Styled.SubmitButton onClick={onSubmit}>등록</Styled.SubmitButton>
    </Styled.BackContainer>
  );
};

export default TopBar;
