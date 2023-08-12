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

const lottieDictionary: Record<string, Record<string, string>> = {
  female: {
    ENFJ: 'wo_enfj',
    ENFP: 'wo_enfp',
    ENTJ: 'wo_entj',
    ENTP: 'wo_entp',
    ESFJ: 'wo_esfj',
    ESFP: 'wo_esfp',
    ESTJ: 'wo_estj',
    ESTP: 'wo_estp',
    INFJ: 'wo_infj',
    INFP: 'wo_infp',
    INTJ: 'wo_intj',
    INTP: 'wo_intp',
    ISFJ: 'wo_isfj',
    ISFP: 'wo_isfp',
    ISTJ: 'wo_istj',
    ISTP: 'wo_istp',
  },
  male: {
    ENFJ: 'man_enfj',
    ENFP: 'man_enfp',
    ENTJ: 'man_entj',
    ENTP: 'man_entp',
    ESFJ: 'man_esfj',
    ESFP: 'man_esfp',
    ESTJ: 'man_estj',
    ESTP: 'man_estp',
    INFJ: 'man_infj',
    INFP: 'man_infp',
    INTJ: 'man_intj',
    INTP: 'man_intp',
    ISFJ: 'man_isfj',
    ISFP: 'man_isfp',
    ISTJ: 'man_istj',
    ISTP: 'man_istp',
  },
};

const loadLottieJson = (key: string) =>
  new Promise((resolve) => {
    void import(`../../assets/lottie/${key}.json`).then((data: { default: unknown }) => {
      resolve(data.default);
    });
  });

const NewProfileCardView = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const locationState = location.state as { mbti?: string; gender?: string };

  const mbti = locationState?.mbti;
  const gender = locationState?.gender;
  const iOrE = mbti?.slice(0, 1);

  const isValidProfile = mbti && gender;

  const [lottie, setLottie] = useState<unknown | null>(null);

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

    const response = await loadLottieJson(lottieDictionary[gender][mbti]);
    setLottie(response);
  }, [gender, mbti]);

  useEffect(() => {
    void getLottieJSON();
  }, [getLottieJSON]);

  return (
    <Layout backgroundColor={palette.background.white1}>
      <Styled.NewProfile>
        <Styled.GraphicContainer>
          {isValidProfile && lottie !== null && (
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
        <Styled.StartButton onClick={handleClickStartButton}>가보자고-!</Styled.StartButton>
        {isValidProfile && <Styled.ShadowContainer>{shadow}</Styled.ShadowContainer>}
      </Styled.NewProfile>
    </Layout>
  );
};

export default NewProfileCardView;
