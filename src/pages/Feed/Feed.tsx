import { useCallback, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import Styled from './Feed.styles';
import useInput from '@/hooks/useInput';
import useToast from '@/hooks/useToast';
import { ANSWER_MAX_LENGTH } from '@/constants/feed';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import { ReactComponent as DrawLogoTemp } from '@/assets/draw_logo_temp.svg';
import { ReactComponent as HeartIcon } from '@/assets/heart.svg';
import { ReactComponent as HeartActiveIcon } from '@/assets/heart_active.svg';
import { ReactComponent as ShareIcon } from '@/assets/share.svg';
import { ReactComponent as MoreIcon } from '@/assets/more.svg';
import { ReactComponent as FireIcon } from '@/assets/fire.svg';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const sampleItems = [
  {
    id: '1',
    question: 'T도 박은빈 시상식 보고 우나요?',
  },
  {
    id: '2',
    question: '가장 최선을 다했던 경험은 무엇인가요?',
  },
  {
    id: '3',
    question: '갈등을 겪고 해결해본 적이 있나요?',
  },
  {
    id: '4',
    question: '이루기 어려운 목표를 달성한 경험이 있나요?',
  },
  {
    id: '5',
    question: '창의성을 발휘해 어려운 상황을 극복한 적이 있나요?',
  },
];

const Feed = () => {
  const toast = useToast();

  const answerFormRef = useRef<HTMLFormElement>(null);
  const answerTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const [isAnswerFormOpen, setIsAnswerFormOpen] = useState(false);
  const [isCardOptionBottomSheetOpen, setIsCardOptionBottomSheetOpen] = useState(false);

  const [answer, onChangeAnswer, setAnswer] = useInput('');

  const calculateAnswerFormHeight = useCallback(() => {
    if (!answerFormRef.current) return;

    if (!answerTextAreaRef.current?.scrollHeight) return;

    answerFormRef.current.style.height = 'auto';
    answerFormRef.current.style.height = `${answerTextAreaRef.current.scrollHeight}px`;
  }, []);

  const handleSubmitAnswerForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsAnswerFormOpen(false);
    setAnswer('');

    toast.success(
      <>
        답변 작성 완료 <FireIcon />
      </>
    );
  };

  const handleChangeAnswer = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeAnswer(event);
    calculateAnswerFormHeight();
  };

  useEffect(() => {
    calculateAnswerFormHeight();
  }, [calculateAnswerFormHeight, isAnswerFormOpen]);

  return (
    <>
      <Styled.Feed>
        <Styled.Header>
          <DrawLogoTemp />
        </Styled.Header>
        <Styled.FeedContent>
          <Swiper
            modules={[EffectCoverflow]}
            centeredSlides
            slidesPerView={1}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 40,
              depth: 100,
              modifier: 1,
              scale: 1,
              slideShadows: false,
            }}
          >
            {sampleItems.map((item) => (
              <SwiperSlide key={item.id}>
                <Styled.FeedCard>
                  <Styled.FeedCardTitle>{item.question}</Styled.FeedCardTitle>
                  <Styled.FeedCardLike>좋아요 0 명</Styled.FeedCardLike>
                  <Styled.FeedCardFooter>
                    <Styled.FeedCardBadge>맞춤질문</Styled.FeedCardBadge>
                    <Styled.FeedCardOptionButtonList>
                      <Styled.FeedCardOptionButton type="button">
                        <HeartIcon />
                      </Styled.FeedCardOptionButton>
                      <Styled.FeedCardOptionButton type="button" isActive>
                        <HeartActiveIcon />
                      </Styled.FeedCardOptionButton>
                      <Styled.FeedCardOptionButton type="button">
                        <ShareIcon />
                      </Styled.FeedCardOptionButton>
                      <Styled.FeedCardOptionButton
                        type="button"
                        onClick={() => {
                          setIsCardOptionBottomSheetOpen(true);
                        }}
                      >
                        <MoreIcon />
                      </Styled.FeedCardOptionButton>
                    </Styled.FeedCardOptionButtonList>
                  </Styled.FeedCardFooter>
                </Styled.FeedCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </Styled.FeedContent>
        {isAnswerFormOpen && (
          <Styled.AnswerForm ref={answerFormRef} onSubmit={handleSubmitAnswerForm}>
            <Styled.AnswerTextAreaContainer>
              <Styled.AnswerTextArea
                ref={answerTextAreaRef}
                value={answer}
                placeholder="답변하기"
                autoFocus
                rows={1}
                onChange={handleChangeAnswer}
                maxLength={ANSWER_MAX_LENGTH}
              />
              {answer.length > 0 && <Styled.AnswerSubmit>완료</Styled.AnswerSubmit>}
            </Styled.AnswerTextAreaContainer>
            <Styled.Dimmed
              onClick={() => {
                setIsAnswerFormOpen(false);
              }}
            />
          </Styled.AnswerForm>
        )}
        <Styled.FakeAnswerTextAreaButtonContainer isTransparent={isAnswerFormOpen}>
          <Styled.FakeAnswerTextAreaButton
            type="button"
            onClick={() => {
              setIsAnswerFormOpen(true);
            }}
          >
            답변하기
          </Styled.FakeAnswerTextAreaButton>
        </Styled.FakeAnswerTextAreaButtonContainer>
      </Styled.Feed>
      <BottomSheet
        open={isCardOptionBottomSheetOpen}
        onClose={() => {
          setIsCardOptionBottomSheetOpen(false);
        }}
      >
        <Styled.FeedOptionBottomSheet>
          <Styled.FeedOption>차단하기</Styled.FeedOption>
          <Styled.FeedOption>신고하기</Styled.FeedOption>
        </Styled.FeedOptionBottomSheet>
      </BottomSheet>
    </>
  );
};

export default Feed;
