import { ReactComponent as BackArrow } from '@/assets/back-arrow.svg';
import Styled from './Back.styles';

const Back = () => {
  return (
    <Styled.BackContainer>
      <Styled.BackButton>
        <BackArrow />
      </Styled.BackButton>
    </Styled.BackContainer>
  );
};

export default Back;
