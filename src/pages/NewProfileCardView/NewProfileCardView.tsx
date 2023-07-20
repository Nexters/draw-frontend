import { useNavigate } from 'react-router-dom';
import Styled from './NewProfileCardView.styles';

const NewProfileCardView = () => {
  const navigate = useNavigate();

  const handleClickStartButton = () => {
    navigate('/feed');
  };

  return (
    <Styled.NewProfile>
      <Styled.GraphicContainer />
      <Styled.StartButton onClick={handleClickStartButton}>가보자고-!</Styled.StartButton>
    </Styled.NewProfile>
  );
};

export default NewProfileCardView;
