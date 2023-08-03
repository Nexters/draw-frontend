import { palette } from '@/styles/palette';
import Styled from './Loading.styles';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <Styled.LoadingContainer>
      <ReactLoading type="spokes" color={palette.text.grey1} width={18} height={18} />
    </Styled.LoadingContainer>
  );
};

export default Loading;
