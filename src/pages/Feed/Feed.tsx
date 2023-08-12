import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { ReactComponent as CoinIcon } from '@/assets/coin.svg';
import { ReactComponent as RightIcon } from '@/assets/right.svg';
import Layout from '@/components/Layout/Layout';
import { palette } from '@/styles/palette';
import useFeeds from '@/hooks/api/useFeeds';
import useNativeMessage from '@/hooks/useNativeMessage';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import usePromotions from '@/hooks/api/usePromotions';
import { PROMOTION_TITLE } from '@/constants/promotion';
import { useMutation } from '@tanstack/react-query';
import { promotionApi } from '@/apis/handlers/promotion';
import { feedApi } from '@/apis/handlers/feed';

const Feed = () => {
  const navigate = useNavigate();

  const toast = useToast();

  const { showShareSheet } = useNativeMessage();

  const answerFormRef = useRef<HTMLFormElement>(null);
  const answerTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const [isAnswerFormOpen, setIsAnswerFormOpen] = useState(false);
  const [isCardOptionBottomSheetOpen, setIsCardOptionBottomSheetOpen] = useState(false);
  const [isPromotionBottomSheetOpen, setIsPromotionBottomSheetOpen] = useState(false);
  const [selectedFeedId, setSelectedFeedId] = useState<number | null>(null);
  const [isTabBarVisible, setIsTabBarVisible] = useState(true);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [promotionIndex, setPromotionIndex] = useState(0);

  const [answer, onChangeAnswer, setAnswer] = useInput('');

  const { data: feedsData, fetchNextPage, refetch: refetchFeeds } = useFeeds();
  const feeds = feedsData?.pages.flatMap((page) => page.feeds);

  const { data: promotions } = usePromotions();
  const currentPromotion = promotions?.[promotionIndex];

  const feedFavoriteMutation = useMutation(feedApi.postFeedFavorite, {
    onSuccess: async () => {
      await refetchFeeds();
    },
  });
  const feedFavoriteCancelMutation = useMutation(feedApi.deleteFeedFavorite, {
    onSuccess: async () => {
      await refetchFeeds();
    },
  });
  const feedClaimMutation = useMutation(feedApi.postFeedClaim, {
    onSuccess: async () => {
      await refetchFeeds();

      setIsCardOptionBottomSheetOpen(false);
      setSelectedFeedId(null);

      toast.success(<>신고했어요</>);
    },
  });
  const feedBlockMutation = useMutation(feedApi.postFeedBlock, {
    onSuccess: async () => {
      await refetchFeeds();

      setIsCardOptionBottomSheetOpen(false);
      setSelectedFeedId(null);

      toast.success(<>차단했어요</>);
    },
  });

  const consumePromotionMutation = useMutation(promotionApi.postConsumePromotion);

  const calculateAnswerFormHeight = useCallback(() => {
    if (!answerFormRef.current) return;

    if (!answerTextAreaRef.current?.scrollHeight) return;

    answerFormRef.current.style.height = 'auto';
    answerFormRef.current.style.height = `${answerTextAreaRef.current.scrollHeight}px`;
  }, []);

  const handleClickShareButton = (id: number) => {
    showShareSheet(`${window.location.origin}/question-detail/${id}`);
  };

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

  const fetchNextFeedsData = useCallback(() => {
    if (feeds?.length !== undefined && swiperIndex === feeds.length - 5) {
      void fetchNextPage();
    }
  }, [feeds, fetchNextPage, swiperIndex]);

  useEffect(() => {
    fetchNextFeedsData();
  }, [fetchNextFeedsData]);

  useEffect(() => {
    calculateAnswerFormHeight();
  }, [calculateAnswerFormHeight, isAnswerFormOpen]);

  useEffect(() => {
    if (!promotions || promotions.length === 0) return;
    consumePromotionMutation.mutate(promotions.map((promotion) => promotion.id));

    setIsPromotionBottomSheetOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promotions]);

  return (
    <Layout backgroundColor={palette.background.white1} hasTabBar={isTabBarVisible}>
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
            onRealIndexChange={(swiper) => {
              setSwiperIndex(swiper.realIndex);
            }}
          >
            {feeds?.map((feed) => (
              <SwiperSlide key={feed.id}>
                <Styled.FeedCard
                  onClick={() => {
                    navigate(`/question-detail/${feed.id}`);
                  }}
                >
                  <Styled.FeedCardTitle>{feed.content}</Styled.FeedCardTitle>
                  <Styled.FeedCardLike>좋아요 {feed.favoriteCount} 명</Styled.FeedCardLike>
                  <Styled.FeedCardFooter>
                    {feed.isFit && <Styled.FeedCardBadge>맞춤질문</Styled.FeedCardBadge>}
                    <Styled.FeedCardOptionButtonList>
                      {feed.isFavorite ? (
                        <Styled.FeedCardOptionButton
                          type="button"
                          isActive
                          onClick={(event) => {
                            event.stopPropagation();

                            feedFavoriteCancelMutation.mutate({ feedId: feed.id });
                          }}
                        >
                          <HeartActiveIcon />
                        </Styled.FeedCardOptionButton>
                      ) : (
                        <Styled.FeedCardOptionButton
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();

                            feedFavoriteMutation.mutate({ feedId: feed.id });
                          }}
                        >
                          <HeartIcon />
                        </Styled.FeedCardOptionButton>
                      )}
                      <Styled.FeedCardOptionButton type="button" onClick={() => handleClickShareButton(feed.id)}>
                        <ShareIcon />
                      </Styled.FeedCardOptionButton>
                      <Styled.FeedCardOptionButton
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();

                          setIsCardOptionBottomSheetOpen(true);
                          setSelectedFeedId(feed.id);
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
                maxLength={ANSWER_MAX_LENGTH}
                onChange={handleChangeAnswer}
                onFocus={() => {
                  setIsTabBarVisible(false);
                }}
                onBlur={() => {
                  setIsAnswerFormOpen(false);
                  setIsTabBarVisible(true);
                }}
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
          setSelectedFeedId(null);
        }}
      >
        <Styled.FeedOptionBottomSheet>
          <Styled.FeedOption
            onClick={() => {
              if (selectedFeedId === null) return;

              feedBlockMutation.mutate({ feedId: selectedFeedId });
            }}
          >
            차단하기
          </Styled.FeedOption>
          <Styled.FeedOption
            onClick={() => {
              if (selectedFeedId === null) return;

              feedClaimMutation.mutate({ feedId: selectedFeedId });
            }}
          >
            신고하기
          </Styled.FeedOption>
        </Styled.FeedOptionBottomSheet>
      </BottomSheet>
      <BottomSheet
        open={isPromotionBottomSheetOpen}
        onClose={() => {
          setIsPromotionBottomSheetOpen(false);
        }}
      >
        {currentPromotion && (
          <Styled.PromotionBottomSheet>
            <Styled.PromotionTitle>{PROMOTION_TITLE[currentPromotion?.promotionType]}</Styled.PromotionTitle>
            <Styled.PromotionPoint>
              <CoinIcon />
              <Styled.PromotionPointText>{currentPromotion?.grantedPoint.value}D</Styled.PromotionPointText>
            </Styled.PromotionPoint>
            <Styled.PromotionPointStatus>
              <Styled.PromotionPointBefore>
                <Styled.PromotionPointBeforeLabel>현재</Styled.PromotionPointBeforeLabel>
                <Styled.PromotionPointBeforeValue>
                  {currentPromotion?.asIsPoint.value}D
                </Styled.PromotionPointBeforeValue>
              </Styled.PromotionPointBefore>
              <Styled.PromotionPointArrow>
                <RightIcon />
              </Styled.PromotionPointArrow>
              <Styled.PromotionPointAfter>
                <Styled.PromotionPointAfterLabel>받은 후</Styled.PromotionPointAfterLabel>
                <Styled.PromotionPointAfterValue>{currentPromotion?.toBePoint.value}D</Styled.PromotionPointAfterValue>
              </Styled.PromotionPointAfter>
            </Styled.PromotionPointStatus>
            <Styled.PromotionButton
              type="button"
              onClick={() => {
                if (!promotions) return;

                if (promotionIndex + 1 >= promotions.length) {
                  setIsPromotionBottomSheetOpen(false);

                  return;
                }

                setPromotionIndex(promotionIndex + 1);
              }}
            >
              좋아요
            </Styled.PromotionButton>
          </Styled.PromotionBottomSheet>
        )}
      </BottomSheet>
    </Layout>
  );
};

export default Feed;
