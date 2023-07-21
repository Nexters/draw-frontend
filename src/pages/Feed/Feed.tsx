import { useCallback, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import Styled from './Feed.styles';
import useInput from '@/hooks/useInput';
import { ANSWER_MAX_LENGTH } from '@/constants/feed';
import { ReactComponent as DrawLogoTemp } from '@/assets/draw_logo_temp.svg';
import { ReactComponent as HeartIcon } from '@/assets/heart.svg';
import { ReactComponent as HeartActiveIcon } from '@/assets/heart_active.svg';
import { ReactComponent as ShareIcon } from '@/assets/share.svg';
import { ReactComponent as MoreIcon } from '@/assets/more.svg';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import BottomSheet from '@/components/BottomSheet/BottomSheet';

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
  const answerFormRef = useRef<HTMLFormElement>(null);
  const answerTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const [isAnswerFormOpen, setIsAnswerFormOpen] = useState(false);
  const [isCardOptionBottomSheetOpen, setIsCardOptionBottomSheetOpen] = useState(false);

  const [answer, onChangeAnswer] = useInput('');

  const calculateAnswerFormHeight = useCallback(() => {
    if (!answerFormRef.current) return;

    if (!answerTextAreaRef.current?.scrollHeight) return;

    answerFormRef.current.style.height = 'auto';
    answerFormRef.current.style.height = `${answerTextAreaRef.current.scrollHeight}px`;
  }, []);

  const handleSubmitAnswerForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChangeAnswer = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeAnswer(event);
    calculateAnswerFormHeight();
  };

  useEffect(() => {
    calculateAnswerFormHeight();
  }, [calculateAnswerFormHeight, isAnswerFormOpen]);

  // 질문: 답변하다가 중간에 Dimmed 영역을 눌렀을 때, 답변하기 입력 창은 입력하던 텍스트가 나타나야 하는가?
  // 질문: 안드와 ios가 각각 키보드가 올라왔을 때의 동작 방식이 다른데, 화면 확인해봐줄 것.
  // 질문: FeedCard의 높이가 유동적이도록 구현해놨는데, 크기가 고정되어야 하는지, 유동적이어야 하는지 확인해야 함.

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
