import Styled from './OptionSelect.styles';
import Spacing from '@/components/Spacing/Spacing';
import BinaryPicker from '@/components/BinaryPicker/BinaryPicker';
import MBTIPicker, { MBTI } from '@/components/MBTIPicker/MBTIPicker';
import { AgeOptionType, GenderType } from '@/apis/types';

interface OptionSelectProps {
  closeOptionSelect: () => void;
  onChangeGender: (value: GenderType) => void;
  onChangeAgeOption: (value: AgeOptionType) => void;
  onChangeMBTI: (value: MBTI) => void;
  gender: GenderType | null;
  ageOption: AgeOptionType;
  mbti: MBTI;
}

const OptionSelect = ({
  closeOptionSelect,
  onChangeGender,
  onChangeAgeOption,
  onChangeMBTI,
  gender,
  ageOption,
  mbti,
  ...rest
}: OptionSelectProps) => {
  return (
    <>
      <Styled.OptionSelectWrapper {...rest}>
        <Styled.SubmitButton onClick={closeOptionSelect}>확인</Styled.SubmitButton>
        <Styled.PaddingContainer>
          <Spacing size={52} />
          <Styled.Heading>
            누구한테 질문하고
            <br />
            싶으신가요?
          </Styled.Heading>
          <Styled.Description>원하는 답변자가 있다면 선택해 주세요</Styled.Description>
          <Spacing size={50} />
          <Styled.OptionFormContainer>
            <Styled.OptionFormHeading>성별</Styled.OptionFormHeading>
            <Spacing size={16} />
            <BinaryPicker
              options={[
                {
                  value: 'MALE',
                  label: '남자',
                },
                {
                  value: 'FEMALE',
                  label: '여자',
                },
              ]}
              onChange={onChangeGender}
              defaultChecked={gender}
            />
          </Styled.OptionFormContainer>
          <Spacing size={32} />
          <Styled.OptionFormContainer>
            <Styled.OptionFormHeading>나이</Styled.OptionFormHeading>
            <Styled.OptionFormDescription>또래는 같은 ‘나이대’입니다.</Styled.OptionFormDescription>
            <Spacing size={12} />
            <BinaryPicker
              options={[
                {
                  value: 'ALL',
                  label: '모두',
                },
                {
                  value: 'SAME_AGE_GROUP',
                  label: '또래',
                },
              ]}
              onChange={onChangeAgeOption}
              defaultChecked={ageOption}
            />
          </Styled.OptionFormContainer>
          <Spacing size={41} />
          <Styled.OptionFormContainer>
            <Styled.OptionFormHeading>MBTI</Styled.OptionFormHeading>
            <Styled.OptionFormDescription>최대 4개까지 선택할 수 있어요.</Styled.OptionFormDescription>
            <Spacing size={14} />
            <MBTIPicker onChange={onChangeMBTI} defaultValue={mbti} checkbox />
          </Styled.OptionFormContainer>
        </Styled.PaddingContainer>
        <Spacing size={66} />
      </Styled.OptionSelectWrapper>
    </>
  );
};

export default OptionSelect;
