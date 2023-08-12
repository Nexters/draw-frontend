import React, { useMemo } from 'react';
import { nanoid } from 'nanoid';
import Styled from './BinaryPicker.styles';

type BinaryPickerOption<T> = {
  value: T;
  label: string;
};

type BinaryPickerProps<T> = {
  options: [BinaryPickerOption<T>, BinaryPickerOption<T>];
  onChange?: (value: T) => void;
  defaultChecked?: string | null;
};

const BinaryPicker = <T extends string>({ options, onChange, defaultChecked }: BinaryPickerProps<T>) => {
  const name = useMemo(() => nanoid(10), []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value as T);
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
