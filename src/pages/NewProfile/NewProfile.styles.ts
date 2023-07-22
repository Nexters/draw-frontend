import styled from '@emotion/styled';

const NewProfile = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100svh;
  background-color: ${({ theme }) => theme.palette.background.white1};
  padding: 40px 24px 48px;
  overflow-y: auto;
`;

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 52px;
`;

const ProfileFormSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileFormHeading = styled.h2`
  ${({ theme }) => theme.typo['heading.1']};
  margin-bottom: 20px;
`;

const ProfileFormList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProfileFormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProfileFormLabel = styled.label`
  ${({ theme }) => theme.typo['sub.3']};
  color: ${({ theme }) => theme.palette.text.grey1};
`;

const ProfileFormInput = styled.input`
  ${({ theme }) => theme.typo['sub.3']};
  background-color: ${({ theme }) => theme.palette.background.white2};
  border-radius: 12px;
  padding: 11px 0;
  height: 44px;
  text-align: center;

  &::placeholder {
    color: ${({ theme }) => theme.palette.text.grey2};
  }
`;

const ProfileFormSubmit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileFormSubmitMessage = styled.p`
  ${({ theme }) => theme.typo['sub.4.m']};
  color: ${({ theme }) => theme.palette.text.grey1};
  margin-bottom: 12px;
`;

const ProfileFormSubmitButton = styled.button`
  ${({ theme }) => theme.typo['body.4']};
  background-color: ${({ theme }) => theme.palette.btn.black};
  color: ${({ theme }) => theme.palette.text.white};
  border-radius: 12px;
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    background-color: ${({ theme }) => theme.palette.btn.inactive};
  }
`;

export default {
  NewProfile,
  ProfileForm,
  ProfileFormSection,
  ProfileFormHeading,
  ProfileFormList,
  ProfileFormItem,
  ProfileFormLabel,
  ProfileFormInput,
  ProfileFormSubmit,
  ProfileFormSubmitMessage,
  ProfileFormSubmitButton,
};
