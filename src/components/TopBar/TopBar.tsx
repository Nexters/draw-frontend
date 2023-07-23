import { useNavigate } from 'react-router-dom';
import Styled from './TopBar.styles';
import { ReactComponent as BackArrow } from '@/assets/back-arrow.svg';

interface TopBarProps {
  centerElement?: JSX.Element | string;
  rightElement?: JSX.Element | string;
  onSubmit?: () => void;
  onClickBack?: () => void;
}

const TopBar = ({ centerElement, rightElement, onSubmit, onClickBack }: TopBarProps) => {
  const navigate = useNavigate();
  return (
    <Styled.TopBarContainer>
      <Styled.BackButton onClick={onClickBack ? onClickBack : () => navigate(-1)}>
        <BackArrow />
      </Styled.BackButton>
      <div>{typeof centerElement === 'string' ? <Styled.Center>{centerElement}</Styled.Center> : centerElement}</div>
      <div>
        {typeof rightElement === 'string' ? (
          <Styled.RightSubmit onClick={onSubmit}>{rightElement}</Styled.RightSubmit>
        ) : (
          rightElement
        )}
      </div>
    </Styled.TopBarContainer>
  );
};

export default TopBar;
