import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Lottie from 'lottie-react';
import Styled from './MyPage.styles';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import { ReactComponent as SettingIcon } from '@/assets/setting.svg';
import { ReactComponent as HeartIcon } from '@/assets/heart.svg';
import { ReactComponent as HeartActiveIcon } from '@/assets/heart_active.svg';
import { ReactComponent as ShareIcon } from '@/assets/share.svg';
import { ReactComponent as MoreIcon } from '@/assets/more.svg';
import { ReactComponent as Loading } from '@/assets/loading.svg';
import { palette } from '@/styles/palette';
import Layout from '@/components/Layout/Layout';
import useMyQuestions from '@/hooks/api/useMyQuestions';
import useMyReplies from '@/hooks/api/useMyReplies';
import useMyFavorites from '@/hooks/api/useMyFavorites';
import useMyInfo from '@/hooks/api/useMyInfo';
import { lottieDictionary } from '@/constants/lottie';

const tabList = [
  {
    value: 'question',
    label: '내 질문',
  },
  {
    value: 'answer',
    label: '내 답변',
  },
  {
    value: 'favorite',
    label: '좋아요',
  },
];

const genderDictionary = {
  MALE: '남자',
  FEMALE: '여자',
};

const MyPage = () => {
  const navigate = useNavigate();

  const { ref: fetchTriggerRef, inView: fetchTriggerInView } = useInView({
    threshold: 0,
  });

  const [selectedTab, setSelectedTab] = useState<string>('question');
  const [isQuestionOptionBottomSheetOpen, setIsQuestionOptionBottomSheetOpen] = useState(false);

  const [lottie, setLottie] = useState<unknown | null>(null);
  const [isLottieLoading, setIsLottieLoading] = useState<boolean>(true);

  const { data: myInfo } = useMyInfo();

  const { data: myQuestionsData, fetchNextPage: fetchMyQuestionsDataNextPage } = useMyQuestions();
  const myQuestions = myQuestionsData?.pages.flatMap((page) => page.feeds);

  const { data: myRepliesData, fetchNextPage: fetchMyRepliesDataNextPage } = useMyReplies();
  const myReplies = myRepliesData?.pages.flatMap((page) => page.myReplies);

  const { data: myFavoritesData, fetchNextPage: fetchMyFavoritesDataNextPage } = useMyFavorites();
  const myFavorites = myFavoritesData?.pages.flatMap((page) => page.myFavoriteFeeds);

  const handleClickTabItem = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setSelectedTab(event.currentTarget.id);
  };

  const handleClickQuestionItem = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    navigate('/question-detail/1');
  };

  const handleClickAnswerItem = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    navigate('/question-detail/1');
  };

  const handleClickFavoriteItem = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    navigate('/question-detail/1');
  };

  const fetchNextPage = useCallback(() => {
    if (fetchTriggerInView) {
      switch (selectedTab) {
        case 'question':
          void fetchMyQuestionsDataNextPage();
          break;
        case 'answer':
          void fetchMyRepliesDataNextPage();
          break;
        case 'favorite':
          void fetchMyFavoritesDataNextPage();
          break;
      }
    }
  }, [
    fetchMyFavoritesDataNextPage,
    fetchMyQuestionsDataNextPage,
    fetchMyRepliesDataNextPage,
    fetchTriggerInView,
    selectedTab,
  ]);

  const getLottieJSON = useCallback(async () => {
    if (!myInfo) return;

    const response = await fetch(`/lottie/${lottieDictionary[myInfo.gender][myInfo.mbti]}.json`);
    const lottieJSON: unknown = await response.json();
    setLottie(lottieJSON);
    setIsLottieLoading(false);
  }, [myInfo]);

  useEffect(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  useEffect(() => {
    void getLottieJSON();
  }, [getLottieJSON]);

  return (
    <Layout backgroundColor={palette.background.white1} hasTabBar>
      <Styled.Header>
        <Styled.SettingButton
          type="button"
          onClick={() => {
            navigate('/my-page/setting');
          }}
        >
          <SettingIcon />
        </Styled.SettingButton>
      </Styled.Header>
      <Styled.MemberIdContainer>{myInfo && <Styled.MemberId>@ {myInfo.id}</Styled.MemberId>}</Styled.MemberIdContainer>
      <Styled.GraphicContainer>
        {!isLottieLoading && lottie !== null && (
          <Lottie
            animationData={lottie}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid meet',
            }}
            loop
            autoplay
            style={{ width: '100%', height: '100%' }}
          />
        )}
        {isLottieLoading && <Loading width="80px" />}
      </Styled.GraphicContainer>
      <Styled.PointContainer>
        {myInfo && (
          <Styled.Point>
            <Styled.PointTitle>드로우</Styled.PointTitle>
            <Styled.PointValue>{myInfo?.point}D</Styled.PointValue>
          </Styled.Point>
        )}
      </Styled.PointContainer>
      <Styled.StickyTop id="tab">
        <Styled.TagList>
          {myInfo && <Styled.TagItem># {myInfo.mbti}</Styled.TagItem>}
          {myInfo && <Styled.TagItem># {genderDictionary[myInfo.gender]}</Styled.TagItem>}
          {myInfo && <Styled.TagItem># {myInfo.age}살</Styled.TagItem>}
        </Styled.TagList>
        <Styled.Tab>
          {tabList.map((item) => (
            <Styled.TabItem
              key={item.value}
              href="#tab"
              id={item.value}
              isActive={selectedTab === item.value}
              onClick={handleClickTabItem}
            >
              {item.label}
            </Styled.TabItem>
          ))}
        </Styled.Tab>
      </Styled.StickyTop>
      {selectedTab === 'question' && (
        <Styled.TabPane>
          <Styled.QuestionList>
            {myQuestions?.map((question) => (
              <Styled.QuestionItem key={question.id} onClick={handleClickQuestionItem}>
                <Styled.QuestionItemTitle>{question.content}</Styled.QuestionItemTitle>
                <Styled.QuestionItemLike>좋아요 {question.favoriteCount} 명</Styled.QuestionItemLike>
                <Styled.QuestionItemFooter>
                  <Styled.QuestionItemOptionButtonList>
                    <Styled.QuestionItemOptionButton type="button">
                      <HeartIcon />
                    </Styled.QuestionItemOptionButton>
                    <Styled.QuestionItemOptionButton type="button">
                      <ShareIcon />
                    </Styled.QuestionItemOptionButton>
                    <Styled.QuestionItemOptionButton
                      type="button"
                      onClick={() => {
                        setIsQuestionOptionBottomSheetOpen(true);
                      }}
                    >
                      <MoreIcon />
                    </Styled.QuestionItemOptionButton>
                  </Styled.QuestionItemOptionButtonList>
                </Styled.QuestionItemFooter>
              </Styled.QuestionItem>
            ))}
          </Styled.QuestionList>
          {myQuestions?.length === 0 && (
            <Styled.NoContentContainer>
              아직 보관된 질문이 없어요!
              <br />
              질문을 시작해 보세요
            </Styled.NoContentContainer>
          )}
        </Styled.TabPane>
      )}
      {selectedTab === 'answer' && (
        <Styled.TabPane>
          <Styled.AnswerList>
            {myReplies?.map((reply) => (
              <Styled.AnswerItem key={reply.replyId} onClick={handleClickAnswerItem}>
                <Styled.AnswerItemAnswer>{reply.replyContent}</Styled.AnswerItemAnswer>
                <Styled.AnswerItemQuestion>{reply.feedContent}</Styled.AnswerItemQuestion>
              </Styled.AnswerItem>
            ))}
          </Styled.AnswerList>

          {myReplies?.length === 0 && (
            <Styled.NoContentContainer>
              아직 보관된 답변이 없어요!
              <br />
              질문을 탐색해 보세요
            </Styled.NoContentContainer>
          )}
        </Styled.TabPane>
      )}
      {selectedTab === 'favorite' && (
        <Styled.TabPane>
          <Styled.QuestionList>
            {myFavorites?.map((favorite) => (
              <Styled.QuestionItem key={favorite.id} onClick={handleClickFavoriteItem}>
                <Styled.QuestionItemTitle>{favorite.content}</Styled.QuestionItemTitle>
                <Styled.QuestionItemLike>좋아요 {favorite.favoriteCount} 명</Styled.QuestionItemLike>
                <Styled.QuestionItemFooter>
                  <Styled.QuestionItemOptionButtonList>
                    <Styled.QuestionItemOptionButton type="button" isActive>
                      <HeartActiveIcon />
                    </Styled.QuestionItemOptionButton>
                    <Styled.QuestionItemOptionButton type="button">
                      <ShareIcon />
                    </Styled.QuestionItemOptionButton>
                    <Styled.QuestionItemOptionButton
                      type="button"
                      onClick={() => {
                        setIsQuestionOptionBottomSheetOpen(true);
                      }}
                    >
                      <MoreIcon />
                    </Styled.QuestionItemOptionButton>
                  </Styled.QuestionItemOptionButtonList>
                </Styled.QuestionItemFooter>
              </Styled.QuestionItem>
            ))}
          </Styled.QuestionList>
          {myFavorites?.length === 0 && (
            <Styled.NoContentContainer>
              좋아요가 없어요!
              <br />
              질문을 탐색해 보세요
            </Styled.NoContentContainer>
          )}
        </Styled.TabPane>
      )}

      {myQuestions?.length !== 0 && <Styled.FetchTrigger ref={fetchTriggerRef} />}

      <BottomSheet
        open={isQuestionOptionBottomSheetOpen}
        onClose={() => {
          setIsQuestionOptionBottomSheetOpen(false);
        }}
      >
        <Styled.QuestionOptionBottomSheet>
          <Styled.QuestionOption>차단하기</Styled.QuestionOption>
          <Styled.QuestionOption>신고하기</Styled.QuestionOption>
        </Styled.QuestionOptionBottomSheet>
      </BottomSheet>
    </Layout>
  );
};

export default MyPage;
