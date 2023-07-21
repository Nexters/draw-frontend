import styled from '@emotion/styled';

const ButtonSetContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 8px;
`;

const SheetContentContainer = styled.div`
  padding: 40px 24px 48px 24px;
  display: flex;
  flex-direction: column;
`;

const SheetTitle = styled.div`
  ${({ theme }) => theme.typo['sub.1']}
  color : ${({ theme }) => theme.palette.text.black};
  text-align: center;
`;
const NeededPoint = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  ${({ theme }) => theme.typo['point.1']}
  margin: 4px auto 0 auto;
  height: 45px;
`;

const PointInformation = styled.div`
  width: 100%;
  height: 86px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.palette.sub.grey};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 24px;
`;

const PointBefore = styled.div`
  text-align: center;
  p:first-of-type {
    ${({ theme }) => theme.typo['sub.2']}
    color: ${({ theme }) => theme.palette.text.grey1};
  }
  p:last-of-type {
    padding-top: 2px;
    ${({ theme }) => theme.typo['sub.1']}
    color: ${({ theme }) => theme.palette.text.black};
  }
`;
const PointAfter = styled.div`
  text-align: center;
  p:first-of-type {
    ${({ theme }) => theme.typo['sub.3']}
    color: ${({ theme }) => theme.palette.text.black};
  }
  p:last-of-type {
    padding-top: 2px;
    ${({ theme }) => theme.typo['sub.1']}
    color: ${({ theme }) => theme.palette.text.black};
  }
`;

export default {
  ButtonSetContainer,
  SheetContentContainer,
  SheetTitle,
  NeededPoint,
  PointInformation,
  PointBefore,
  PointAfter,
};
