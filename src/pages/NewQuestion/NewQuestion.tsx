import useInput from '@/hooks/useInput';
import TopBar from './components/TopBar/TopBar';
import Spacing from '@/components/Spacing/Spacing';
import Styled from './NewQuestion.styles';
import { ReactComponent as AddOption } from '@/assets/add-tag.svg';
import { useRef, useState } from 'react';

const NewQuestion = () => {
  const [value, onChange] = useInput('');
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <Styled.PageWrapper>
      <Styled.PageBody>
        <TopBar length={value.length} onSubmit={() => console.log('TODO')} />
        <Spacing size={28} />
        <Styled.TextArea
          maxLength={150}
          placeholder="자유롭게 질문해 보세요"
          ref={textAreaRef}
          onFocus={() => setIsTextAreaFocused(true)}
          onBlur={() => setIsTextAreaFocused(false)}
        />
      </Styled.PageBody>
      <div>
        <Styled.AskOption>
          <Styled.AskOptionDescription>이런 사람에게 질문하고 싶어요!</Styled.AskOptionDescription>
          <AddOption />
        </Styled.AskOption>
        {!isTextAreaFocused && <Styled.BottomSpace />}
      </div>
    </Styled.PageWrapper>
  );
};

export default NewQuestion;
