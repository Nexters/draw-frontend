import React from 'react';
import Styled from './MBTIPickerItem.styles';
import { MbtiCharType } from '@/apis/types/feed';

type MBTIPickerItemOption = {
  value: MbtiCharType;
  title: string;
  description: string;
};

type MBTIPickerItemProps = {
  options: [MBTIPickerItemOption, MBTIPickerItemOption];
  name: string;
  onChange?: (value: MbtiCharType) => void;
  onClick?: (value: MbtiCharType) => void;
  type?: 'radio' | 'checkbox';
  checkedValue?: MbtiCharType | null;
};

const MBTIPickerItem = ({ options, name, onChange, onClick, type = 'radio', checkedValue }: MBTIPickerItemProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value as MbtiCharType);
  };
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    onClick?.(event.currentTarget.value as MbtiCharType);
  };

  return (
    <Styled.MBTIPickerItem>
      {options.map((option, index) => {
        const position = index === 0 ? 'top' : 'bottom';

        return (
          <Styled.MBTIPickerRadioButton key={option.value}>
            <Styled.MBTIPickerRadioInput
              type={type}
              id={option.value}
              name={name}
              value={option.value}
              onChange={handleChange}
              onClick={handleClick}
              checked={checkedValue ? checkedValue === option.value : false}
            />
            <Styled.MBTIPickerRadioLabel htmlFor={option.value} position={position}>
              <Styled.MBTIPickerRadioLabelTitle>{option.title}</Styled.MBTIPickerRadioLabelTitle>
              <Styled.MBTIPickerRadioLabelDescription>{option.description}</Styled.MBTIPickerRadioLabelDescription>
            </Styled.MBTIPickerRadioLabel>
          </Styled.MBTIPickerRadioButton>
        );
      })}
    </Styled.MBTIPickerItem>
  );
};

export default MBTIPickerItem;
