import Spacing from '@/components/Spacing/Spacing';
import Styled from './QuestionDetail.styles';
import AnswerCard from './components/AnswerCard/AnswerCard';
import Back from './components/Back/Back';

const MOCK_DATA = {
  contents: 'T도 박은빈 시상식 보고 우나요?',
  likes: 10,
  isMatchedQuestion: true,
  isLiked: false,
  answerList: [
    { id: 1, contents: '왜움?', flippable: true },
    {
      id: 2,
      contents: '왜움?왜움?왜움?왜움?왜움?왜움?왜움?왜움?왜움?왜움?왜움?asdfasdfasdf왜움?ㅋ?',
      flippable: false,
    },
    { id: 3, contents: '왜움?', flippable: false },
    { id: 4, contents: '왜움?', flippable: true },
  ],
};

const QuestionDetail = () => {
  return (
    <>
      <Styled.QuestionDetailContainer>
        <div>
          <Back />
        </div>
        <div>
          <Styled.AnswersContainer>
            {MOCK_DATA.answerList.map((v) => (
              <AnswerCard contents={v.contents} flippable={v.flippable} key={v.id} />
            ))}
          </Styled.AnswersContainer>
          <Spacing size={42} />
        </div>
      </Styled.QuestionDetailContainer>
    </>
  );
};

export default QuestionDetail;
