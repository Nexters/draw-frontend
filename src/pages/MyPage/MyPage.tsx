import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Styled from './MyPage.styles';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import { ReactComponent as SettingIcon } from '@/assets/setting.svg';
import { ReactComponent as HeartIcon } from '@/assets/heart.svg';
import { ReactComponent as HeartActiveIcon } from '@/assets/heart_active.svg';
import { ReactComponent as ShareIcon } from '@/assets/share.svg';
import { ReactComponent as MoreIcon } from '@/assets/more.svg';
import { palette } from '@/styles/palette';
import Layout from '@/components/Layout/Layout';

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

const questionList = [
  {
    id: 1,
    title: '내 질문 ㅋㅋㅋ 배고픈 사람~?',
    likes: 10,
  },
  {
    id: 2,
    title:
      '내 질문 ㅋㅋㅋ 배고픈 사람~? 내 질문 ㅋㅋㅋ 배고픈 사람~? 내 질문 ㅋㅋㅋ 배고픈 사람~? 내 질문 ㅋㅋㅋ 배고픈 사람~? 내 질문 ㅋㅋㅋ 배고픈 사람~? 내 질문 ㅋㅋㅋ 배고픈 사람~?',
    likes: 10,
  },
  {
    id: 3,
    title: '내 질문 ㅋㅋㅋ',
    likes: 10,
  },
];

const answerList = [
  {
    id: 1,
    answer: '내 답변입니둥내 답변입니둥내 답변입니둥내 답변입니둥내 답변입니둥내 답변입니둥내 답변입니둥내',
    question: 'T도 박은빈 시상식 보고 우나요? 우나요?',
  },
  {
    id: 2,
    answer: '내 답변입니둥내 답변입니둥내 답변입니둥내 답변입니둥내 답변입니둥내 답변입니둥내 답변입니둥내',
    question: 'T도 박은빈 시상식 보고 우나요? 우나요?',
  },
  {
    id: 3,
    answer: '내 답변입니둥내 답변입니둥내 답변입니둥내 답변입니둥내 답',
    question: 'T도 박은빈 시상식 보고 우나요? 우나요?',
  },
];

const MyPage = () => {
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState<string>('question');
  const [isQuestionOptionBottomSheetOpen, setIsQuestionOptionBottomSheetOpen] = useState(false);

  const handleClickTabItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedTab(event.currentTarget.name);
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
        <Styled.TagList>
          <Styled.TagItem># INFJ</Styled.TagItem>
          <Styled.TagItem># 여자</Styled.TagItem>
          <Styled.TagItem># 24살</Styled.TagItem>
        </Styled.TagList>
        <Styled.Tab>
          {tabList.map((item) => (
            <Styled.TabItem
              key={item.value}
              type="button"
              name={item.value}
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
            {questionList.map((item) => (
              <Styled.QuestionItem key={item.id} onClick={handleClickQuestionItem}>
                <Styled.QuestionItemTitle>{item.title}</Styled.QuestionItemTitle>
                <Styled.QuestionItemLike>좋아요 {item.likes} 명</Styled.QuestionItemLike>
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
          {questionList.length === 0 && (
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
            {answerList.map((item) => (
              <Styled.AnswerItem key={item.id} onClick={handleClickAnswerItem}>
                <Styled.AnswerItemAnswer>{item.answer}</Styled.AnswerItemAnswer>
                <Styled.AnswerItemQuestion>{item.question}</Styled.AnswerItemQuestion>
              </Styled.AnswerItem>
            ))}
            {answerList.length === 0 && (
              <Styled.NoContentContainer>
                아직 보관된 답변이 없어요!
                <br />
                질문을 탐색해 보세요
              </Styled.NoContentContainer>
            )}
          </Styled.AnswerList>
        </Styled.TabPane>
      )}
      {selectedTab === 'favorite' && (
        <Styled.TabPane>
          <Styled.QuestionList>
            {questionList.map((item) => (
              <Styled.QuestionItem key={item.id} onClick={handleClickFavoriteItem}>
                <Styled.QuestionItemTitle>{item.title}</Styled.QuestionItemTitle>
                <Styled.QuestionItemLike>좋아요 {item.likes} 명</Styled.QuestionItemLike>
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
          {questionList.length === 0 && (
            <Styled.NoContentContainer>
              좋아요가 없어요!
              <br />
              질문을 탐색해 보세요
            </Styled.NoContentContainer>
          )}
        </Styled.TabPane>
      )}

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
