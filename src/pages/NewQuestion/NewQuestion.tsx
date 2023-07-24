import useInput from '@/hooks/useInput';

import Spacing from '@/components/Spacing/Spacing';
import Styled from './NewQuestion.styles';
import { ReactComponent as AddOption } from '@/assets/add-tag.svg';
import { useRef, useState } from 'react';
import OptionList from './components/OptionPreview/OptionPreview';
import OptionSelect from './components/OptionSelect/OptionSelect';
import TopBar from '@/components/TopBar/TopBar';
import { config, useTransition } from '@react-spring/web';
import { MultiMBTI } from '@/components/MBTIPicker/MultiMBTIPicker';

const NewQuestion = () => {
  const [value, onChange] = useInput('');
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
  const [isOptionSelectOpen, setISOptionSelectOpen] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [gender, setGender] = useState<string | null>(null);
  const [isPeer, setIsPeer] = useState<string | null>('all');
  const [mbti, setMBTI] = useState<MultiMBTI>([]);

  const toggleOptionSelectOpen = () => setISOptionSelectOpen(!isOptionSelectOpen);
  const bottomSheetTransition = useTransition(isOptionSelectOpen, {
    from: {
      transform: 'translate(0%, 100%)',
    },
    enter: {
      transform: 'translate(0%, 0%)',
    },
    leave: {
      transform: 'translate(0%, 100%)',
    },
    config: config.default,
  });
  const optionSelect = bottomSheetTransition((style, flag) => (
    <>
      {flag && (
        <OptionSelect
          closeOptionSelect={toggleOptionSelectOpen}
          style={style}
          genderState={[gender, setGender]}
          peerState={[isPeer, setIsPeer]}
          mbtiState={[mbti, setMBTI]}
        />
      )}
    </>
  ));

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
              <AddOption />
            </Styled.AskOptionBody>
            {!isTextAreaFocused && <Styled.BottomSpace />}
          </Styled.AskOption>
        </Styled.PageFooter>
      </Styled.PageWrapper>
      {optionSelect}
    </>
  );
};

export default NewQuestion;
