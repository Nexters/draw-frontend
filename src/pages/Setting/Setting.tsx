import { useNavigate } from 'react-router-dom';
import Styled from './Setting.styles';
import { ReactComponent as BackArrowIcon } from '@/assets/back-arrow.svg';
import { palette } from '@/styles/palette';
import Layout from '@/components/Layout/Layout';
import useToast from '@/hooks/useToast';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import { useState } from 'react';
import Spacing from '@/components/Spacing/Spacing';
import Button from '@/components/Button/Button';
import { useMutation } from '@tanstack/react-query';
import { userApi } from '@/apis/handlers/user';

const Setting = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const { mutate: withdrawMutate } = useMutation(userApi.deleteUserWithdraw, {
    onSuccess: () => {
      window.localStorage.removeItem('aT');
      window.localStorage.removeItem('rT');
      toast.success(<>회원탈퇴를 성공했어요</>);
      navigate('/login');
    },
  });
  const handleClickTerms = () => {
    navigate('/my-page/terms');
  };

  const handleWithdrawUser = () => {
    withdrawMutate();
    setSheetOpen(false);
  };

  return (
    <Layout backgroundColor={palette.background.white1} hasTabBar>
      <Styled.Header>
        <Styled.BackButton type="button" onClick={() => navigate(-1)}>
          <BackArrowIcon />
        </Styled.BackButton>
      </Styled.Header>
      <Styled.SettingList>
        <Styled.SettingButton type="button" onClick={handleClickTerms}>
          이용약관
        </Styled.SettingButton>
        <Styled.SettingButton type="button" onClick={() => setSheetOpen(true)}>
          회원 탈퇴
        </Styled.SettingButton>
      </Styled.SettingList>
      <BottomSheet open={sheetOpen}>
        <Styled.SheetContainer>
          <Styled.SheetTitle>정말 떠나시나요?</Styled.SheetTitle>
          <Styled.SheetDescription>
            탈퇴하시면 보유중인 드로우가 모두 사라지며,
            <br />
            모든 데이터는 복구가 불가능합니다.
          </Styled.SheetDescription>
          <Spacing size={48} />
          <Styled.ButtonContainer>
            <Button variant="secondary" onClick={handleWithdrawUser}>
              네
            </Button>
            <Button onClick={() => setSheetOpen(false)}>아니요</Button>
          </Styled.ButtonContainer>
        </Styled.SheetContainer>
      </BottomSheet>
    </Layout>
  );
};

export default Setting;
