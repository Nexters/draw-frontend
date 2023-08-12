import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Styled from './MyPage.styles';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import { ReactComponent as SettingIcon } from '@/assets/setting.svg';
import { ReactComponent as HeartIcon } from '@/assets/heart.svg';
import { ReactComponent as HeartActiveIcon } from '@/assets/heart_active.svg';
import { ReactComponent as ShareIcon } from '@/assets/share.svg';
import { ReactComponent as MoreIcon } from '@/assets/more.svg';
import { palette } from '@/styles/palette';
import Layout from '@/components/Layout/Layout';
import useMyQuestions from '@/hooks/api/useMyQuestions';
import useMyReplies from '@/hooks/api/useMyReplies';
import useMyFavorites from '@/hooks/api/useMyFavorites';
import { useMutation } from '@tanstack/react-query';
import { userApi } from '@/apis/handlers/user';

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

const MyPage = () => {
  const navigate = useNavigate();

  const { ref: fetchTriggerRef, inView: fetchTriggerInView } = useInView({
    threshold: 0,
  });

  const [selectedTab, setSelectedTab] = useState<string>('question');
  const [isQuestionOptionBottomSheetOpen, setIsQuestionOptionBottomSheetOpen] = useState(false);

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

  useEffect(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  const { mutate: testLogin } = useMutation(userApi.testLogin, {
    onSuccess: (data) => {
      window.localStorage.setItem('aT', data.accessToken);
      window.localStorage.setItem('rT', data.refreshToken);
    },
  });

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
      <button onClick={() => testLogin()}>토큰 발급</button>
      <Styled.MemberIdContainer>
        <Styled.MemberId>@ 12345</Styled.MemberId>
      </Styled.MemberIdContainer>
      <Styled.GraphicContainer>
        <Styled.Graphic />
      </Styled.GraphicContainer>
      <Styled.PointContainer>
        <Styled.Point>
          <Styled.PointTitle>드로우</Styled.PointTitle>
          <Styled.PointValue>100D</Styled.PointValue>
        </Styled.Point>
      </Styled.PointContainer>
      <Styled.StickyTop>
        <Styled.TagList id="tab">
          <Styled.TagItem># INFJ</Styled.TagItem>
          <Styled.TagItem># 여자</Styled.TagItem>
          <Styled.TagItem># 24살</Styled.TagItem>
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
