import useInput from '@/hooks/useInput';
import Spacing from '@/components/Spacing/Spacing';
import Styled from './NewQuestion.styles';
import { ReactComponent as AddOptionIcon } from '@/assets/add-tag.svg';
import { useRef, useState } from 'react';
import OptionList from './components/OptionPreview/OptionPreview';
import OptionSelect from './components/OptionSelect/OptionSelect';
import TopBar from '@/components/TopBar/TopBar';
import { useSpring } from '@react-spring/web';
import { MultiMBTI } from '@/components/MBTIPicker/MultiMBTIPicker';

const NewQuestion = () => {
  const [value, onChange] = useInput('');
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
  const [isOptionSelectOpen, setIsOptionSelectOpen] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [gender, setGender] = useState<string | null>(null);
  const [isPeer, setIsPeer] = useState<string | null>('all');
  const [mbti, setMBTI] = useState<MultiMBTI>([]);

  const handleChangeGender = (value: string) => {
    setGender(value);
  };
  const handleChangeIsPeer = (value: string) => {
    setIsPeer(value);
  };
  const handleChangeMBTI = (value: MultiMBTI) => {
    setMBTI(value);
  };

  const toggleOptionSelectOpen = () => setIsOptionSelectOpen(!isOptionSelectOpen);
  const bottomSheetTransition = useSpring({
    transform: isOptionSelectOpen ? 'translate(0%, 0%)' : 'translate(0%, 100%)',
  });

  return (
    <>
      <Styled.PageWrapper>
        <Styled.PageBody>
          <TopBar centerElement={`${value.length}/150`} rightElement={'등록'} />
          <Spacing size={28} />
          <Styled.TextArea
            maxLength={150}
            placeholder="자유롭게 질문해 보세요"
            ref={textAreaRef}
            onFocus={() => setIsTextAreaFocused(true)}
            onBlur={() => setIsTextAreaFocused(false)}
            onChange={onChange}
          />
        </Styled.PageBody>
        <Styled.PageFooter>
          <OptionList />
          <Styled.AskOption onClick={toggleOptionSelectOpen}>
            <Styled.AskOptionBody>
              <Styled.AskOptionDescription>이런 사람에게 질문하고 싶어요!</Styled.AskOptionDescription>
              <AddOptionIcon />
            </Styled.AskOptionBody>
            {!isTextAreaFocused && <Styled.BottomSpace />}
          </Styled.AskOption>
        </Styled.PageFooter>
        <OptionSelect
          closeOptionSelect={toggleOptionSelectOpen}
          style={bottomSheetTransition}
          onChangeGender={handleChangeGender}
          onChangeIsPeer={handleChangeIsPeer}
          onChangeMBTI={handleChangeMBTI}
        />
      </Styled.PageWrapper>
    </>
  );
};

export default NewQuestion;
