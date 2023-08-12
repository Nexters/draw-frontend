import { GenderType, MbtiType } from '@/apis/types';
import { ReactComponent as ManE } from '@/assets/mini-card/man_E.svg';
import { ReactComponent as ManI } from '@/assets/mini-card/man_i.svg';
import { ReactComponent as WomanE } from '@/assets/mini-card/wo_E.svg';
import { ReactComponent as WomanI } from '@/assets/mini-card/wo_i.svg';
import { palette } from '@/styles/palette';
import { ReactNode } from 'react';

const backImageMap: Record<string, ReactNode> = {
  'MALE-E': <ManE />,
  'MALE-I': <ManI />,
  'FEMALE-E': <WomanE />,
  'FEMALE-I': <WomanI />,
};

const typoColorMap: Record<string, string> = {
  'MALE-E': palette.card.manE,
  'MALE-I': palette.card.manI,
  'FEMALE-E': palette.card.woE,
  'FEMALE-I': palette.card.woI,
};

export const getCardSource = (gender: GenderType, mbti: MbtiType) => {
  const IorE = mbti[0];
  return { image: backImageMap[`${gender}-${IorE}`], color: typoColorMap[`${gender}-${IorE}`] };
};
