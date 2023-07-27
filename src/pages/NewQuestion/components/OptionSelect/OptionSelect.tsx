import Styled from './OptionSelect.styles';
import Spacing from '@/components/Spacing/Spacing';
import BinaryPicker from '@/components/BinaryPicker/BinaryPicker';
import MBTIPicker, { MBTI } from '@/components/MBTIPicker/MBTIPicker';

interface OptionSelectProps {
  closeOptionSelect: () => void;
  onChangeGender: (value: string) => void;
  onChangeIsPeer: (value: string) => void;
  onChangeMBTI: (value: MBTI) => void;
  gender: string | null;
  isPeer: string | null;
  mbti: MBTI;
}

const OptionSelect = ({
  closeOptionSelect,
  onChangeGender,
  onChangeIsPeer,
  onChangeMBTI,
  gender,
  isPeer,
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
                  value: 'male',
                  label: '남자',
                },
                {
                  value: 'female',
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
                  value: 'all',
                  label: '모두',
                },
                {
                  value: 'peer',
                  label: '또래',
                },
              ]}
              onChange={onChangeIsPeer}
              defaultChecked={isPeer}
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
