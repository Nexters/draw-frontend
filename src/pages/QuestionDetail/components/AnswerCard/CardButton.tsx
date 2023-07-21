import { ReactComponent as ThreeDots } from '@/assets/three-dots.svg';
import { ReactComponent as FlipCard } from '@/assets/flip-card.svg';
import { ReactComponent as ReflipCard } from '@/assets/reflip-card.svg';
import { ComponentProps } from 'react';
import Styled from './CardButton.styles';

export type CardButtonVariants = 'threeDots' | 'flipCard' | 'reflipCard';

const cardButtonVariantsLogo: Record<CardButtonVariants, JSX.Element> = {
  threeDots: <ThreeDots />,
  flipCard: <FlipCard />,
  reflipCard: <ReflipCard />,
};

interface CardButtonProps extends ComponentProps<'button'> {
  variants: CardButtonVariants;
}

const CardButton = ({ variants, ...rest }: CardButtonProps) => {
  return <Styled.CardButtonContainer {...rest}>{cardButtonVariantsLogo[variants]}</Styled.CardButtonContainer>;
};

export default CardButton;
