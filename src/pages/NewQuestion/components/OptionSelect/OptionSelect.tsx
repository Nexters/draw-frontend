import TopBar from '@/components/TopBar/TopBar';
import Styled from './OptionSelect.styles';
import { animated } from '@react-spring/web';

interface OptionSelectProps {
  closeOptionSelect: () => void;
}

const OptionSelect = animated(({ closeOptionSelect, ...rest }: OptionSelectProps) => {
  return (
    <Styled.OptionSelectWrapper {...rest}>
      <TopBar rightElement={'확인'} onClickBack={closeOptionSelect} />
    </Styled.OptionSelectWrapper>
  );
});

export default OptionSelect;
