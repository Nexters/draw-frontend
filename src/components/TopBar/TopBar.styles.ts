import styled from '@emotion/styled';

const TopBarContainer = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  ${({ theme }) => theme.typo['sub.3']}
  color : ${({ theme }) => theme.palette.text.grey2};
`;
const RightSubmit = styled.button`
  ${({ theme }) => theme.typo['sub.1']}
  color : ${({ theme }) => theme.palette.tag.text};
`;

export default { BackButton, TopBarContainer, Center, RightSubmit };
