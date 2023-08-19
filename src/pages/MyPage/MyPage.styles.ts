import styled from '@emotion/styled';

type TabItemProps = {
  isActive?: boolean;
};

type QuestionItemOptionButtonProps = {
  isActive?: boolean;
};

const MyPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 4px 22px;
  height: 32px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
`;

const SettingButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const MemberIdContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 22px;
`;

const MemberId = styled.div`
  display: inline-flex;
  align-items: center;
  ${({ theme }) => theme.typo['sub.4.sb']};
  color: ${({ theme }) => theme.palette.text.white};
  background-color: ${({ theme }) => theme.palette.sub.grey};
  padding: 5px 13px;
  border-radius: 999px;
`;

const GraphicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 389px);
  height: calc(100svh - 389px);
`;

const Graphic = styled.div`
  width: 140px;
  height: 180px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.sub.grey};
`;

const PointContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding: 0 24px;
`;

const Point = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.background.white2};
  border-radius: 12px;
  padding: 10px 16px 7px;
  min-width: 130px;
`;

const PointTitle = styled.span`
  ${({ theme }) => theme.typo['body.5']};
  color: ${({ theme }) => theme.palette.text.grey2};
`;

const PointValue = styled.span`
  ${({ theme }) => theme.typo['point.2']};
  color: ${({ theme }) => theme.palette.text.black};
`;

const TabScrollPoint = styled.div`
  height: 0;
  position: relative;
  top: 0;
`;

const StickyTop = styled.div`
  position: sticky;
  background-color: ${({ theme }) => theme.palette.background.white1};
  z-index: 1;
  top: -48px;
  padding-top: 80px;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  gap: 12px;
  margin-bottom: 36px;
  padding: 2px 24px;
`;

const TagItem = styled.div`
  ${({ theme }) => theme.typo['sub.4.sb']};
  color: ${({ theme }) => theme.palette.text.white};
  background-color: ${({ theme }) => theme.palette.sub.grey};
  padding: 5px 12px;
  border-radius: 8px;
`;

const Tab = styled.div`
  ${({ theme }) => theme.typo['sub.3']};
  color: ${({ theme }) => theme.palette.text.grey2};
  display: flex;
  padding: 0 24px;
`;

const TabItem = styled.a<TabItemProps>`
  flex: 1;
  padding: 12px 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.palette.text.grey2};

  ${({ isActive, theme }) =>
    isActive &&
    `
      color: ${theme.palette.text.black};
      box-shadow: inset 0 -1px 0 0 ${theme.palette.text.black};
    `};
`;

const TabPane = styled.div`
  overflow-y: auto;
`;

const QuestionList = styled.div`
  padding: 10px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: calc(100vh - 79px);
  min-height: calc(100svh - 79px);
`;

const QuestionItem = styled.div`
  background-color: ${({ theme }) => theme.palette.background.white2};
  border-radius: 20px;
  padding: 24px 20px 22px;
  display: flex;
  flex-direction: column;
`;

const QuestionItemTitle = styled.p`
  ${({ theme }) => theme.typo['heading.1']};
  color: ${({ theme }) => theme.palette.text.black};
  margin-bottom: 16px;
`;

const QuestionItemLike = styled.span`
  align-self: flex-end;
  ${({ theme }) => theme.typo['sub.4.m']};
  color: ${({ theme }) => theme.palette.text.grey1};
  margin-bottom: 12px;
`;

const QuestionItemFooter = styled.div`
  display: flex;
`;

const QuestionItemOptionButtonList = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const QuestionItemOptionButton = styled.button<QuestionItemOptionButtonProps>`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.sub.white};
  color: ${({ theme }) => theme.palette.text.grey2};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ${({ isActive, theme }) => isActive && `background-color: ${theme.palette.tag.bg}`};
`;

const NoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.grey2};
  ${({ theme }) => theme.typo['sub.3']};
  height: calc(100vh - 79px);
  height: calc(100svh - 79px);
  padding-bottom: 90px;
`;

const QuestionOptionBottomSheet = styled.div`
  padding: 22px 0 62px;
  display: flex;
  flex-direction: column;
`;

const QuestionOption = styled.button`
  display: flex;
  align-items: center;
  padding: 14px 28px;
  color: ${({ theme }) => theme.palette.text.black};
  background-color: ${({ theme }) => theme.palette.background.white2};
  ${({ theme }) => theme.typo['sub.3']};
`;

const AnswerList = styled.div`
  padding: 10px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: calc(100vh - 79px);
  min-height: calc(100svh - 79px); // 113px
`;

const AnswerItem = styled.div`
  background-color: ${({ theme }) => theme.palette.background.white2};
  border-radius: 20px;
  padding: 24px 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const AnswerItemAnswer = styled.p`
  ${({ theme }) => theme.typo['body.3']};
  color: ${({ theme }) => theme.palette.text.black};
`;

const AnswerItemQuestion = styled.p`
  ${({ theme }) => theme.typo['sub.1']};
  color: ${({ theme }) => theme.palette.text.grey1};
`;

const FetchTrigger = styled.div`
  width: 1px;
  height: 1px;
  background-color: transparent;
`;

export default {
  MyPage,
  Header,
  SettingButton,
  MemberIdContainer,
  MemberId,
  GraphicContainer,
  Graphic,
  PointContainer,
  Point,
  PointTitle,
  PointValue,
  TabScrollPoint,
  StickyTop,
  TagList,
  TagItem,
  Tab,
  TabItem,
  TabPane,
  QuestionList,
  QuestionItem,
  QuestionItemTitle,
  QuestionItemLike,
  QuestionItemFooter,
  QuestionItemOptionButtonList,
  QuestionItemOptionButton,
  NoContentContainer,
  QuestionOptionBottomSheet,
  QuestionOption,
  AnswerList,
  AnswerItem,
  AnswerItemAnswer,
  AnswerItemQuestion,
  FetchTrigger,
};
