import React from 'react';
import Styled from './MBTIPickerItem.styles';

type MBTIPickerItemOption = {
  value: string;
  title: string;
  description: string;
};

type MBTIPickerItemProps = {
  options: [MBTIPickerItemOption, MBTIPickerItemOption];
  name: string;
  onChange?: (value: string) => void;
  onClick?: (value: string) => void;
  type?: 'radio' | 'checkbox';
  checkedValue?: string | null;
};

const MBTIPickerItem = ({ options, name, onChange, onClick, type = 'radio', checkedValue }: MBTIPickerItemProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    onClick?.(event.currentTarget.value);
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
