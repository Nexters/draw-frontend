import { useNavigate } from 'react-router-dom';
import Styled from './NewProfileCardView.styles';
import Layout from '@/components/Layout/Layout';
import { palette } from '@/styles/palette';

const NewProfileCardView = () => {
  const navigate = useNavigate();

  const handleClickStartButton = () => {
    navigate('/feed');
  };

  return (
    <Layout backgroundColor={palette.background.white1}>
      <Styled.NewProfile>
        <Styled.GraphicContainer />
        <Styled.StartButton onClick={handleClickStartButton}>가보자고-!</Styled.StartButton>
      </Styled.NewProfile>
    </Layout>
  );
};

export default NewProfileCardView;
