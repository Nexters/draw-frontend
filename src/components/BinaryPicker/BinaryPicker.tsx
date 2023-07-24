import React, { useMemo } from 'react';
import { nanoid } from 'nanoid';
import Styled from './BinaryPicker.styles';

type BinaryPickerOption = {
  value: string;
  label: string;
};

type BinaryPickerProps = {
  options: [BinaryPickerOption, BinaryPickerOption];
  onChange?: (value: string) => void;
  defaultChecked?: string;
};

const BinaryPicker = ({ options, onChange, defaultChecked }: BinaryPickerProps) => {
  const name = useMemo(() => nanoid(10), []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <Styled.BinaryPicker>
      {options.map((option) => {
        const key = `${name}_${option.value}`;

        return (
          <Styled.BinaryPickerOption key={key}>
            <Styled.BinaryPickerInput
              name={name}
              id={key}
              type="radio"
              value={option.value}
              onChange={handleChange}
              defaultChecked={defaultChecked === option.value}
            />
            <Styled.BinaryPickerLabel htmlFor={key}>{option.label}</Styled.BinaryPickerLabel>
          </Styled.BinaryPickerOption>
        );
      })}
    </Styled.BinaryPicker>
  );
};

export default BinaryPicker;
