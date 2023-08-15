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
import { ReactComponent as Blank } from '@/assets/blank.svg';
import { ReactComponent as FireIcon } from '@/assets/fire.svg';
import { ANSWER_MAX_LENGTH } from '@/constants/feed';
import useInput from '@/hooks/useInput';
import TopBar from '@/components/TopBar/TopBar';
import { palette } from '@/styles/palette';
import Layout from '@/components/Layout/Layout';
import useNativeMessage from '@/hooks/useNativeMessage';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { feedApi } from '@/apis/handlers/feed';
import { css } from '@emotion/react';
import { dynamicLink } from '@/utils/dynamicLink';
import useToast from '@/hooks/useToast';
import { replyApi } from '@/apis/handlers/reply';
import { QuestionDetailBottomSheet } from './components/QuestionDetailBottomSheet';
import { DetailBottomSheetProvider, useDetailBottomSheetContext } from './components/useDetailBottomSheetContext';
import { isDrawWebview } from '@/utils/webview';

const isWebview = isDrawWebview();

const QuestionDetailPage = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const { openSheet, setType, setSelectedId } = useDetailBottomSheetContext();
  const { id } = useParams<{ id: string }>();
  const { data: feedData } = useQuery(['feed-detail', id], () => feedApi.getFeedDetail(Number(id)));
  const { data: replyData, status: replyStatus } = useQuery(['feed-replies', id], () =>
    feedApi.getFeedRepies(Number(id))
  );

  const { showShareSheet } = useNativeMessage();

  const answerFormRef = useRef<HTMLFormElement>(null);
  const answerTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const [isAnswerFormOpen, setIsAnswerFormOpen] = useState(false);
  const [answer, onChangeAnswer, setAnswer] = useInput('');

  const calculateAnswerFormHeight = useCallback(() => {
    if (!answerFormRef.current) return;

    if (!answerTextAreaRef.current?.scrollHeight) return;

    answerFormRef.current.style.height = 'auto';
    answerFormRef.current.style.height = `${answerTextAreaRef.current.scrollHeight}px`;
  }, []);

  const feedFavoriteMutation = useMutation(feedApi.postFeedFavorite, {
    onSuccess: async () => await queryClient.invalidateQueries(['feed-detail', id]),
  });
  const feedFavoriteCancelMutation = useMutation(feedApi.deleteFeedFavorite, {
    onSuccess: async () => await queryClient.invalidateQueries(['feed-detail', id]),
  });

  const relpyMutation = useMutation((content: string) => replyApi.postReply(feedData!.id, { content }), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['feed-replies', id]);
      toast.success(
        <>
          답변 작성 완료 <FireIcon />
        </>
      );
    },
  });

  const handleClickShareButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (!isWebview || !feedData) {
      dynamicLink('/feed');

      return;
    }

    showShareSheet(`${window.location.origin}/question-detail/${feedData?.id}`);
  };
  const handleSubmitAnswerForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isWebview) {
      dynamicLink('/feed');

      return;
    }

    relpyMutation.mutate(answer);
    setIsAnswerFormOpen(false);
    setAnswer('');
  };

  const handleChangeAnswer = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeAnswer(event);
    calculateAnswerFormHeight();
  };

  useEffect(() => {
    calculateAnswerFormHeight();
  }, [calculateAnswerFormHeight, isAnswerFormOpen]);

  return (
    <Layout backgroundColor={palette.background.white2} hasTabBar={false}>
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
                {feedData?.isFavorite ? (
                  <FeedStyled.FeedCardOptionButton
                    type="button"
                    isActive
                    onClick={(event) => {
                      event.stopPropagation();

                      if (!isWebview || !feedData) {
                        dynamicLink('/feed');

                        return;
                      }

                      feedFavoriteCancelMutation.mutate({ feedId: feedData.id });
                    }}
                  >
                    <HeartActiveIcon />
                  </FeedStyled.FeedCardOptionButton>
                ) : (
                  <FeedStyled.FeedCardOptionButton
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();

                      if (!isWebview) {
                        dynamicLink('/feed');
                        return;
                      }

                      feedData && feedFavoriteMutation.mutate({ feedId: feedData.id });
                    }}
                  >
                    <HeartIcon />
                  </FeedStyled.FeedCardOptionButton>
                )}
                <FeedStyled.FeedCardOptionButton type="button" onClick={(event) => handleClickShareButton(event)}>
                  <ShareIcon />
                </FeedStyled.FeedCardOptionButton>
                <FeedStyled.FeedCardOptionButton
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();

                    if (!isWebview) {
                      dynamicLink('/feed');
                      return;
                    }

                    openSheet();
                    setType('feed');
                    feedData && setSelectedId(feedData?.id);
                  }}
                >
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
            {replyData &&
              replyData.replies.map((v) => (
                <AnswerCard
                  replyData={v}
                  key={v.id}
                  onSelectAnswer={() => {
                    openSheet();
                    setType('reply');
                    setSelectedId(v.id);
                  }}
                />
              ))}
            {replyData?.replies.length === 0 && (
              <Styled.NoReply>
                <Blank />
                <div css={css({ textAlign: 'center' })}>
                  첫 답변을
                  <br />
                  작성해주세요
                </div>
              </Styled.NoReply>
            )}
            {replyStatus === 'loading' && <Styled.NoReply />}
          </Styled.AnswersContainer>
          <Spacing size={42} />
        </Styled.QuestionDetailBody>
      </Styled.QuestionDetailContainer>

      <QuestionDetailBottomSheet />
    </Layout>
  );
};

const QuestionDetail = () => (
  <DetailBottomSheetProvider>
    <QuestionDetailPage />
  </DetailBottomSheetProvider>
);
export default QuestionDetail;
