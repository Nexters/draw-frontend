import useInput from '@/hooks/useInput';

import Spacing from '@/components/Spacing/Spacing';
import Styled from './NewQuestion.styles';
import { ReactComponent as AddOption } from '@/assets/add-tag.svg';
import { useRef, useState } from 'react';
import OptionList from './components/OptionPreview/OptionPreview';
import OptionSelect from './components/OptionSelect/OptionSelect';
import TopBar from '@/components/TopBar/TopBar';

const NewQuestion = () => {
  const [value, onChange] = useInput('');
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
  const [isOptionSelectOpen, setISOptionSelectOpen] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

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
          />
        </Styled.PageBody>
        <Styled.PageFooter>
          <OptionList />
          <Styled.AskOption onClick={() => setISOptionSelectOpen(true)}>
            <Styled.AskOptionBody>
              <Styled.AskOptionDescription>이런 사람에게 질문하고 싶어요!</Styled.AskOptionDescription>
              <AddOption />
            </Styled.AskOptionBody>
            {!isTextAreaFocused && <Styled.BottomSpace />}
          </Styled.AskOption>
        </Styled.PageFooter>
      </Styled.PageWrapper>
      {isOptionSelectOpen && <OptionSelect />}
    </>
  );
};

export default NewQuestion;
