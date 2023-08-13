import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import Styled from './NewProfileCardView.styles';
import Layout from '@/components/Layout/Layout';
import { palette } from '@/styles/palette';
import { ReactComponent as ShadowWoI } from '@/assets/shadow_wo_i.svg';
import { ReactComponent as ShadowWoE } from '@/assets/shadow_wo_e.svg';
import { ReactComponent as ShadowManI } from '@/assets/shadow_man_i.svg';
import { ReactComponent as ShadowManE } from '@/assets/shadow_man_e.svg';
import cardLoadingUrl from '@/assets/card_loading.svg';
import { lottieDictionary } from '@/constants/lottie';

const NewProfileCardView = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const locationState = location.state as { mbti?: string; gender?: string };

  const mbti = locationState?.mbti;
  const gender = locationState?.gender;
  const iOrE = mbti?.slice(0, 1);

  const isValidProfile = mbti && gender;

  const [lottie, setLottie] = useState<unknown | null>(null);
  const [isLottieLoading, setIsLottieLoading] = useState<boolean>(true);

  const shadow = (() => {
    if (!iOrE) return null;

    if (iOrE === 'I' && gender === 'female') {
      return <ShadowWoI width="100%" height="100%" />;
    }

    if (iOrE === 'E' && gender === 'female') {
      return <ShadowWoE width="100%" height="100%" />;
    }

    if (iOrE === 'I' && gender === 'male') {
      return <ShadowManI width="100%" height="100%" />;
    }

    if (iOrE === 'E' && gender === 'male') {
      return <ShadowManE width="100%" height="100%" />;
    }
  })();

  const handleClickStartButton = () => {
    navigate('/feed');
  };

  const getLottieJSON = useCallback(async () => {
    if (!gender || !mbti) return;

    const response = await fetch(`/lottie/${lottieDictionary[gender][mbti]}.json`);
    const lottieJSON: unknown = await response.json();
    setLottie(lottieJSON);
    setIsLottieLoading(false);
  }, [gender, mbti]);

  useEffect(() => {
    void getLottieJSON();
  }, [getLottieJSON]);

  return (
    <Layout backgroundColor={palette.background.white1}>
      <Styled.NewProfile>
        <Styled.GraphicContainer>
          {isValidProfile && isLottieLoading && (
            <Styled.CardLoading>
              <object
                data={cardLoadingUrl}
                type="image/svg+xml"
                aria-label="프로필 카드 로딩 중"
                style={{ width: '51px' }}
              />
            </Styled.CardLoading>
          )}
          {isValidProfile && !isLottieLoading && lottie !== null && (
            <Lottie
              animationData={lottie}
              rendererSettings={{
                preserveAspectRatio: 'xMidYMid meet',
              }}
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </Styled.GraphicContainer>
        {!isLottieLoading && <Styled.StartButton onClick={handleClickStartButton}>가보자고-!</Styled.StartButton>}
        {isValidProfile && <Styled.ShadowContainer>{shadow}</Styled.ShadowContainer>}
      </Styled.NewProfile>
    </Layout>
  );
};

export default NewProfileCardView;
