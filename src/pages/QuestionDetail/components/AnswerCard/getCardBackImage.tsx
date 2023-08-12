import { GenderType, MbtiType } from '@/apis/types';
import { ReactComponent as ManE } from '@/assets/mini-card/man_E.svg';
import { ReactComponent as ManI } from '@/assets/mini-card/man_I.svg';
import { ReactComponent as WomanE } from '@/assets/mini-card/wo_E.svg';
import { ReactComponent as WomanI } from '@/assets/mini-card/wo_I.svg';
import { ReactNode } from 'react';

const backImageMap: Record<string, ReactNode> = {
  'MALE-E': <ManE />,
  'MALE-I': <ManI />,
  'FEMALE-E': <WomanE />,
  'FEMALE-I': <WomanI />,
};

export const getCardBackImage = (gender: GenderType, mbti: MbtiType) => {
  const IorE = mbti[0];
  return backImageMap[`${gender}-${IorE}`];
};
