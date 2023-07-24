import TopBar from '@/components/TopBar/TopBar';
import Styled from './OptionSelect.styles';
import { animated } from '@react-spring/web';
import Spacing from '@/components/Spacing/Spacing';
import BinaryPicker from '@/components/BinaryPicker/BinaryPicker';
import MBTIPicker from '@/components/MBTIPicker/MBTIPicker';
import { MultiMBTI } from '@/components/MBTIPicker/MultiMBTIPicker';

interface OptionSelectProps {
  closeOptionSelect: () => void;
  onChangeGender: (value: string) => void;
  onChangeIsPeer: (value: string) => void;
  onChangeMBTI: (value: MultiMBTI) => void;
}

const OptionSelect = animated(
  ({ closeOptionSelect, onChangeGender, onChangeIsPeer, onChangeMBTI, ...rest }: OptionSelectProps) => {
    return (
      <>
        <Styled.OptionSelectWrapper {...rest}>
          <TopBar rightElement={'확인'} onClickBack={closeOptionSelect} />
          <Styled.PaddingContainer>
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
                    label: '전체',
                  },
                  {
                    value: 'peer',
                    label: '또래',
                  },
                ]}
                onChange={onChangeIsPeer}
                defaultChecked={'all'}
              />
            </Styled.OptionFormContainer>
            <Spacing size={41} />
            <Styled.OptionFormContainer>
              <Styled.OptionFormHeading>MBTI</Styled.OptionFormHeading>
              <Styled.OptionFormDescription>최대 4개까지 선택할 수 있어요.</Styled.OptionFormDescription>
              <Spacing size={14} />
              <MBTIPicker onChange={onChangeMBTI} multiSelect />
            </Styled.OptionFormContainer>
          </Styled.PaddingContainer>
        </Styled.OptionSelectWrapper>
      </>
    );
  }
);

export default OptionSelect;
