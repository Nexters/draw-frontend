import { useLocation } from 'react-router-dom';
import Loading from './components/Loading.tsx/Loading';

const Kakao = () => {
  const search = useLocation().search;
  const code = new URLSearchParams(search).get('code');
  console.log(code);
  return (
    <>
      <Loading />
    </>
  );
};
export default Kakao;
