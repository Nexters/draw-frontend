import styled from '@emotion/styled';

const BinaryPicker = styled.fieldset`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const BinaryPickerOption = styled.div`
  position: relative;
  height: 44px;
  flex: 1;
`;

const BinaryPickerInput = styled.input`
  appearance: none;
`;

const BinaryPickerLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.white2};
  color: ${({ theme }) => theme.palette.text.grey1};
  border-radius: 12px;
  ${({ theme }) => theme.typo['sub.3']};

  [type='radio']:checked + & {
    background-color: ${({ theme }) => theme.palette.btn.green};
    color: ${({ theme }) => theme.palette.text.white};
  }
`;

export default {
  BinaryPicker,
  BinaryPickerOption,
  BinaryPickerInput,
  BinaryPickerLabel,
};
