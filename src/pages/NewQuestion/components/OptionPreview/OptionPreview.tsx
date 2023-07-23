import Styled from './OptionPreview.styles';
import { ReactComponent as RemoveOption } from '@/assets/remove-tag.svg';

const OptionPreview = () => {
  return (
    <Styled.OptionPreviewContainer>
      <RemoveOption />
    </Styled.OptionPreviewContainer>
  );
};

export default OptionPreview;
