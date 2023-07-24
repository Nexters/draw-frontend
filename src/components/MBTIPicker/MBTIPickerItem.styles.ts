import styled from '@emotion/styled';

type MBTIPickerRadioLabelProps = {
  position: 'top' | 'bottom';
};

const MBTIPickerItem = styled.fieldset`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MBTIPickerRadioButton = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 75px;
`;

const MBTIPickerRadioInput = styled.input`
  appearance: none;
`;

const MBTIPickerRadioLabel = styled.label<MBTIPickerRadioLabelProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.white2};
  color: ${({ theme }) => theme.palette.text.grey1};

  [type='radio']:checked + & {
    color: ${({ theme }) => theme.palette.btn.green};
    box-shadow: 0 0 0 2px inset ${({ theme }) => theme.palette.btn.green};
  }
  [type='checkbox']:checked + & {
    color: ${({ theme }) => theme.palette.btn.green};
    box-shadow: 0 0 0 2px inset ${({ theme }) => theme.palette.btn.green};
  }

  ${({ position }) => {
    switch (position) {
      case 'top':
        return `
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        `;
      case 'bottom':
        return `
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
        `;
    }
  }}
`;

const MBTIPickerRadioLabelTitle = styled.span`
  ${({ theme }) => theme.typo['body.3']};
`;

const MBTIPickerRadioLabelDescription = styled.span`
  ${({ theme }) => theme.typo['sub.4.m']};
`;

export default {
  MBTIPickerItem,
  MBTIPickerRadioButton,
  MBTIPickerRadioInput,
  MBTIPickerRadioLabel,
  MBTIPickerRadioLabelTitle,
  MBTIPickerRadioLabelDescription,
};
