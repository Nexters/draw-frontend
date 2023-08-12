import styled from '@emotion/styled';

type FeedCardOptionButtonProps = {
  isActive?: boolean;
};

type FakeAnswerTextAreaButtonContainerProps = {
  isTransparent: boolean;
};

const Feed = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.white1};
  padding: 8px 0 30px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px;
  height: 48px;
  margin-bottom: 9px;
`;

const FeedContent = styled.div`
  flex: 1;
  display: flex;
  margin-bottom: 16px;
`;

const FeedCard = styled.div`
  background-color: ${({ theme }) => theme.palette.background.white2};
  border-radius: 20px;
  box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.05);
  padding: 28px 24px 22px;
  margin: 0 34px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FeedCardTitle = styled.p`
  ${({ theme }) => theme.typo['body.3']};
  color: ${({ theme }) => theme.palette.text.black};
  flex: 1;
`;

const FeedCardLike = styled.span`
  align-self: flex-end;
  ${({ theme }) => theme.typo['sub.4.m']};
  color: ${({ theme }) => theme.palette.text.grey1};
  margin-bottom: 12px;
`;

const FeedCardFooter = styled.div`
  display: flex;
`;

const FeedCardBadge = styled.div`
  ${({ theme }) => theme.typo['sub.4.sb']};
  color: ${({ theme }) => theme.palette.tag.text};
  background-color: ${({ theme }) => theme.palette.tag.bg};
  padding: 9px 16px 10px;
  border-radius: 8px;
`;

const FeedCardOptionButtonList = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const FeedCardOptionButton = styled.button<FeedCardOptionButtonProps>`
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

const AnswerForm = styled.form`
  position: fixed;
  bottom: 20px;
  left: 0;
  width: 100%;
  min-height: 48px;
  height: 48px;
  z-index: 100;
`;

const AnswerTextAreaContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  border: 1px solid ${({ theme }) => theme.palette.sub.grey};
  border-radius: 16px;
  margin: 0 34px;
  height: 100%;
  z-index: 100;
`;

const AnswerTextArea = styled.textarea`
  flex: 1;
  height: 100%;
  resize: none;
  ${({ theme }) => theme.typo['sub.2']}
  padding: 12px 0 12px 20px;
  outline: none;
  color: ${({ theme }) => theme.palette.text.white};
  white-space: pre-wrap;
  word-break: break-all;
  overflow: hidden;

  &::placeholder {
    color: ${({ theme }) => theme.palette.text.white};
    ${({ theme }) => theme.typo['sub.2']}
  }
`;

const AnswerSubmit = styled.button`
  ${({ theme }) => theme.typo['sub.1']};
  color: ${({ theme }) => theme.palette.text.white};
  flex-wrap: wrap;
  padding: 12px 20px;
`;

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: 100svh;
  background-color: ${({ theme }) => theme.palette.text.black};
  opacity: 0.7;
  z-index: 99;
`;

const FakeAnswerTextAreaButtonContainer = styled.div<FakeAnswerTextAreaButtonContainerProps>`
  ${({ isTransparent }) => isTransparent && 'visibility: hidden'};
  padding: 0 34px;
`;

const FakeAnswerTextAreaButton = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.palette.sub.grey};
  border-radius: 16px;
  padding: 20px;
  color: ${({ theme }) => theme.palette.text.grey1};
  ${({ theme }) => theme.typo['sub.2']};
`;

const FeedOptionBottomSheet = styled.div`
  padding: 22px 0 62px;
  display: flex;
  flex-direction: column;
`;

const FeedOption = styled.button`
  display: flex;
  align-items: center;
  padding: 14px 28px;
  color: ${({ theme }) => theme.palette.text.black};
  background-color: ${({ theme }) => theme.palette.background.white2};
  ${({ theme }) => theme.typo['sub.3']};
`;

const PromotionBottomSheet = styled.div`
  padding: 40px 24px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PromotionTitle = styled.p`
  ${({ theme }) => theme.typo['sub.1']};
  margin-bottom: 4px;
`;

const PromotionPoint = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

const PromotionPointText = styled.div`
  color: ${({ theme }) => theme.palette.text.black};
  ${({ theme }) => theme.typo['point.1']};
  margin-left: 4px;
`;

const PromotionPointStatus = styled.div`
  // TODO: opacity: 0.5 추가
  border: 1px solid ${({ theme }) => theme.palette.sub.grey};
  border-radius: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  margin-bottom: 16px;
`;

const PromotionPointBefore = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PromotionPointBeforeLabel = styled.span`
  color: ${({ theme }) => theme.palette.text.grey1};
  ${({ theme }) => theme.typo['sub.2']};
  margin-bottom: 6px;
`;

const PromotionPointBeforeValue = styled.span`
  color: ${({ theme }) => theme.palette.text.black};
  ${({ theme }) => theme.typo['sub.1']};
`;

const PromotionPointArrow = styled.div``;

const PromotionPointAfter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PromotionPointAfterLabel = styled.span`
  color: ${({ theme }) => theme.palette.text.black};
  ${({ theme }) => theme.typo['sub.3']};
  margin-bottom: 6px;
`;

const PromotionPointAfterValue = styled.span`
  color: ${({ theme }) => theme.palette.text.black};
  ${({ theme }) => theme.typo['sub.1']};
`;

const PromotionButton = styled.button`
  width: 100%;
  padding: 15px 0;
  border-radius: 12px;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.btn.black};
  color: ${({ theme }) => theme.palette.text.white};
  ${({ theme }) => theme.typo['body.4']};
`;

export default {
  Feed,
  Header,
  FeedContent,
  FeedCard,
  FeedCardTitle,
  FeedCardLike,
  FeedCardFooter,
  FeedCardBadge,
  FeedCardOptionButtonList,
  FeedCardOptionButton,
  AnswerForm,
  AnswerTextAreaContainer,
  AnswerTextArea,
  AnswerSubmit,
  Dimmed,
  FakeAnswerTextAreaButtonContainer,
  FakeAnswerTextAreaButton,
  FeedOptionBottomSheet,
  FeedOption,
  PromotionBottomSheet,
  PromotionTitle,
  PromotionPoint,
  PromotionPointText,
  PromotionPointStatus,
  PromotionPointBefore,
  PromotionPointBeforeLabel,
  PromotionPointBeforeValue,
  PromotionPointArrow,
  PromotionPointAfter,
  PromotionPointAfterLabel,
  PromotionPointAfterValue,
  PromotionButton,
};
