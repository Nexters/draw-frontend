import { useRef, useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router';
import Spacing from '@/components/Spacing/Spacing';
import Styled from './QuestionDetail.styles';
import FeedStyled from '@/pages/Feed/Feed.styles';
import AnswerCard from './components/AnswerCard/AnswerCard';
import { ReactComponent as HeartIcon } from '@/assets/heart.svg';
import { ReactComponent as HeartActiveIcon } from '@/assets/heart_active.svg';
import { ReactComponent as ShareIcon } from '@/assets/share.svg';
import { ReactComponent as MoreIcon } from '@/assets/more.svg';
import { ANSWER_MAX_LENGTH } from '@/constants/feed';
import useInput from '@/hooks/useInput';
import TopBar from '@/components/TopBar/TopBar';
import { palette } from '@/styles/palette';
import Layout from '@/components/Layout/Layout';
import useNativeMessage from '@/hooks/useNativeMessage';
import { useMutation, useQuery } from '@tanstack/react-query';
import { feedApi } from '@/apis/handlers/feed';
import { userApi } from '@/apis/handlers/user';

/* const MOCK_DATA = {
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
}; */

const QuestionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: feedData } = useQuery(['feed-detail', id], () => feedApi.getFeedDetail(Number(id)));
  const { data: replyData } = useQuery(['feed-replies', id], () => feedApi.getFeedRepies(Number(id)));

  const { showShareSheet } = useNativeMessage();

  const answerFormRef = useRef<HTMLFormElement>(null);
  const answerTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const [isAnswerFormOpen, setIsAnswerFormOpen] = useState(false);
  const [answer, onChangeAnswer] = useInput('');

  const calculateAnswerFormHeight = useCallback(() => {
    if (!answerFormRef.current) return;

    if (!answerTextAreaRef.current?.scrollHeight) return;

    answerFormRef.current.style.height = 'auto';
    answerFormRef.current.style.height = `${answerTextAreaRef.current.scrollHeight}px`;
  }, []);

  const handleClickShareButton = () => {
    if (!id) return;

    showShareSheet(`${window.location.origin}/question-detail/${id}`);
  };

  const handleSubmitAnswerForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChangeAnswer = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeAnswer(event);
    calculateAnswerFormHeight();
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const { mutate: testLogin } = useMutation(userApi.testLogin, {
    onSuccess: (data) => {
      window.localStorage.setItem('aT', data.accessToken);
      window.localStorage.setItem('rT', data.refreshToken);
    },
  });

  useEffect(() => {
    calculateAnswerFormHeight();
  }, [calculateAnswerFormHeight, isAnswerFormOpen]);

  return (
    <Layout backgroundColor={palette.background.white2}>
      <Styled.QuestionDetailContainer>
        <Styled.QuestionDetailHeader>
          <TopBar />
          <Styled.QuestionDetailTitle>
            <FeedStyled.FeedCardTitle>{feedData?.content}</FeedStyled.FeedCardTitle>
          </Styled.QuestionDetailTitle>
        </Styled.QuestionDetailHeader>
        <Styled.QuestionDetailBody>
          <Styled.QuestionDetailFooterContainer>
            <FeedStyled.FeedCardLike>좋아요 {feedData?.favoriteCount} 명</FeedStyled.FeedCardLike>
            <FeedStyled.FeedCardFooter>
              {feedData?.isFit && <FeedStyled.FeedCardBadge>맞춤질문</FeedStyled.FeedCardBadge>}
              <FeedStyled.FeedCardOptionButtonList>
                <FeedStyled.FeedCardOptionButton type="button" isActive={feedData?.isFavorite}>
                  {feedData?.isFavorite ? <HeartActiveIcon /> : <HeartIcon />}
                </FeedStyled.FeedCardOptionButton>
                <FeedStyled.FeedCardOptionButton type="button" onClick={handleClickShareButton}>
                  <ShareIcon />
                </FeedStyled.FeedCardOptionButton>
                <FeedStyled.FeedCardOptionButton type="button">
                  <MoreIcon />
                </FeedStyled.FeedCardOptionButton>
              </FeedStyled.FeedCardOptionButtonList>
            </FeedStyled.FeedCardFooter>
          </Styled.QuestionDetailFooterContainer>
          {isAnswerFormOpen && (
            <FeedStyled.AnswerForm ref={answerFormRef} onSubmit={handleSubmitAnswerForm}>
              <FeedStyled.AnswerTextAreaContainer>
                <FeedStyled.AnswerTextArea
                  ref={answerTextAreaRef}
                  value={answer}
                  placeholder="답변하기"
                  autoFocus
                  rows={1}
                  onChange={handleChangeAnswer}
                  maxLength={ANSWER_MAX_LENGTH}
                />
                {answer.length > 0 && <FeedStyled.AnswerSubmit>완료</FeedStyled.AnswerSubmit>}
              </FeedStyled.AnswerTextAreaContainer>
              <FeedStyled.Dimmed
                onClick={() => {
                  setIsAnswerFormOpen(false);
                }}
              />
            </FeedStyled.AnswerForm>
          )}
          <button onClick={() => testLogin()}>토큰 발급</button>
          <Spacing size={24} />
          <FeedStyled.FakeAnswerTextAreaButtonContainer isTransparent={isAnswerFormOpen} css={{ padding: '0 24px' }}>
            <FeedStyled.FakeAnswerTextAreaButton
              type="button"
              onClick={() => {
                setIsAnswerFormOpen(true);
              }}
            >
              답변하기
            </FeedStyled.FakeAnswerTextAreaButton>
          </FeedStyled.FakeAnswerTextAreaButtonContainer>
          <Styled.AnswersContainer>
            {replyData && replyData.replies.map((v) => <AnswerCard replyData={v} key={v.id} />)}
            <AnswerCard
              replyData={{
                content: 'sadffas',
                id: 123,
                status: 'PEEKED',
                writerId: 12,
                writer: { age: 12, gender: 'FEMALE', mbti: 'ENFJ' },
              }}
            />
          </Styled.AnswersContainer>
          <Spacing size={42} />
        </Styled.QuestionDetailBody>
      </Styled.QuestionDetailContainer>
    </Layout>
  );
};

export default QuestionDetail;
