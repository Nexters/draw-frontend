import React from 'react';
import Styled from './MBTIPickerItem.styles';
import { MultiMBTI } from './MultiMBTIPicker';

type MBTIPickerItemOption = {
  value: string;
  title: string;
  description: string;
};

type MBTIPickerItemProps = {
  options: [MBTIPickerItemOption, MBTIPickerItemOption];
  name: string;
  onChange?: (value: string) => void;
  type?: 'radio' | 'checkbox';
  defaultValue?: MultiMBTI;
};

const MBTIPickerItem = ({ options, name, onChange, type = 'radio', defaultValue }: MBTIPickerItemProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
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
              defaultChecked={defaultValue?.includes(option.value)}
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
