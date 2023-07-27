import Styled from './OptionPreview.styles';
import { ReactComponent as RemoveOptionIcon } from '@/assets/remove-tag.svg';

const OptionPreview = () => {
  return (
    <Styled.OptionPreviewContainer>
      <RemoveOptionIcon />
    </Styled.OptionPreviewContainer>
  );
};

export default OptionPreview;
