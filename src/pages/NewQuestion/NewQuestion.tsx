import useInput from '@/hooks/useInput';
import Spacing from '@/components/Spacing/Spacing';
import Styled from './NewQuestion.styles';
import { useEffect, useRef, useState } from 'react';
import OptionSelect from './components/OptionSelect/OptionSelect';
import TopBar from '@/components/TopBar/TopBar';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import { MBTI } from '@/components/MBTIPicker/MBTIPicker';

const NewQuestion = () => {
  const [value, onChange] = useInput('');
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
  const [isOptionSelectOpen, setIsOptionSelectOpen] = useState(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [isPeer, setIsPeer] = useState<string | null>('peer');
  const [mbti, setMBTI] = useState<MBTI>([null, null, null, null]);
  const [selectedOptionText, setSelectedOptionText] = useState<string | null>(null);

  const handleChangeGender = (value: string) => {
    setGender(value);
  };
  const handleChangeIsPeer = (value: string) => {
    setIsPeer(value);
  };
  const handleChangeMBTI = (value: MBTI) => {
    setMBTI(value);
  };

  const toggleOptionSelectOpen = () => setIsOptionSelectOpen(!isOptionSelectOpen);

  useEffect(() => {
    setSelectedOptionText(() => getSelectedOptionText(gender, isPeer, mbti));
  }, [gender, isPeer, mbti]);

  const getSelectedOptionText = (gender: string | null, peer: string | null, mbti: MBTI) => {
    const genderTag = gender ? `# ${gender === 'male' ? '남자' : '여자'}` : null;
    const peerTag = peer === 'all' ? `# 모두` : null;
    const mbtiTag = !mbti.every((v) => v === null) ? `# ${mbti.filter((v) => v !== null).join(',')}` : null;

    if (!genderTag && !peerTag && !mbtiTag) return null;
    return `${genderTag || ''}\u00A0\u00A0${peerTag || ''}\u00A0\u00A0${mbtiTag || ''}`;
  };

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
          <Styled.AskOption onClick={toggleOptionSelectOpen}>
            <Styled.AskOptionBody>
              <Styled.AskOptionDescription selected={Boolean(selectedOptionText)}>
                {selectedOptionText || '이런 사람에게 질문하고 싶어요!'}
              </Styled.AskOptionDescription>
              <Styled.AddOptionIcon selected={Boolean(selectedOptionText)} />
            </Styled.AskOptionBody>
            {!isTextAreaFocused && <Styled.BottomSpace />}
          </Styled.AskOption>
        </Styled.PageFooter>
        <BottomSheet open={isOptionSelectOpen} onClose={toggleOptionSelectOpen}>
          <OptionSelect
            closeOptionSelect={toggleOptionSelectOpen}
            onChangeGender={handleChangeGender}
            onChangeIsPeer={handleChangeIsPeer}
            onChangeMBTI={handleChangeMBTI}
            gender={gender}
            isPeer={isPeer}
            mbti={mbti}
          />
        </BottomSheet>
      </Styled.PageWrapper>
    </>
  );
};

export default NewQuestion;
