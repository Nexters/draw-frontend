import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Styled from './NewProfile.styles';
import BinaryPicker from '@/components/BinaryPicker/BinaryPicker';
import { BIRTHDAY_REGEXP_STRING } from '@/constants/regexp';
import MBTIPicker, { MBTI } from '@/components/MBTIPicker/MBTIPicker';

const BIRTHDAY_LENGTH = 6;

const NewProfile = () => {
  const navigate = useNavigate();

  const [gender, setGender] = useState<string | null>(null);
  const [birthday, setBirthday] = useState<string>('');
  const [mbti, setMBTI] = useState<MBTI>([null, null, null, null]);

  const handleChangeGender = (value: string) => {
    setGender(value);
  };

  const handleChangeBirthday = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday(event.target.value);
  };

  const handleChangeMBTI = (value: MBTI) => {
    setMBTI(value);
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: API 연동
    navigate('/new-profile-card-view');
  };

  const isValidForm = gender !== null && birthday.length === BIRTHDAY_LENGTH && mbti.every((value) => value !== null);

  return (
    <Styled.NewProfile>
      <Styled.ProfileForm onSubmit={handleSubmitForm}>
        <Styled.ProfileFormSection>
          <Styled.ProfileFormHeading>
            성별과 나이를
            <br />
            알려주세요
          </Styled.ProfileFormHeading>
          <Styled.ProfileFormList>
            <Styled.ProfileFormItem>
              <Styled.ProfileFormLabel>성별</Styled.ProfileFormLabel>
              <BinaryPicker
                options={[
                  {
                    value: 'male',
                    label: '남자',
                  },
                  {
                    value: 'female',
                    label: '여자',
                  },
                ]}
                onChange={handleChangeGender}
              />
            </Styled.ProfileFormItem>
            <Styled.ProfileFormItem>
              <Styled.ProfileFormLabel>나이 (생년월일)</Styled.ProfileFormLabel>
              <Styled.ProfileFormInput
                type="text"
                value={birthday}
                placeholder="예) 980903"
                minLength={BIRTHDAY_LENGTH}
                maxLength={BIRTHDAY_LENGTH}
                pattern={BIRTHDAY_REGEXP_STRING}
                inputMode="numeric"
                onChange={handleChangeBirthday}
              />
            </Styled.ProfileFormItem>
          </Styled.ProfileFormList>
        </Styled.ProfileFormSection>
        <Styled.ProfileFormSection>
          <Styled.ProfileFormHeading>
            MBTI를
            <br />
            알려주세요
          </Styled.ProfileFormHeading>
          <Styled.ProfileFormItem>
            <MBTIPicker onChange={handleChangeMBTI} />
          </Styled.ProfileFormItem>
        </Styled.ProfileFormSection>
        <Styled.ProfileFormSubmit>
          <Styled.ProfileFormSubmitMessage>온보딩 이후에 수정할 수 없어요</Styled.ProfileFormSubmitMessage>
          <Styled.ProfileFormSubmitButton type="submit" disabled={!isValidForm}>
            시작하기
          </Styled.ProfileFormSubmitButton>
        </Styled.ProfileFormSubmit>
      </Styled.ProfileForm>
    </Styled.NewProfile>
  );
};

export default NewProfile;
