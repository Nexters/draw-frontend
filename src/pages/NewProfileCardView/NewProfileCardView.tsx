import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import Styled from './NewProfileCardView.styles';
import Layout from '@/components/Layout/Layout';
import { palette } from '@/styles/palette';
import womanINFJLottie from '@/assets/lottie/wo_infj.json';

const NewProfileCardView = () => {
  const navigate = useNavigate();

  const handleClickStartButton = () => {
    navigate('/feed');
  };

  return (
    <Layout backgroundColor={palette.background.white1}>
      <Styled.NewProfile>
        <Styled.GraphicContainer>
          <Lottie
            animationData={womanINFJLottie}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid meet',
            }}
            loop
            autoplay
            style={{ width: '100%', height: '100%' }}
          />
        </Styled.GraphicContainer>
        <Styled.StartButton onClick={handleClickStartButton}>가보자고-!</Styled.StartButton>
      </Styled.NewProfile>
    </Layout>
  );
};

export default NewProfileCardView;
