import { useEffect, useState } from 'react';
import Styled from './MBTIPicker.styles';
import MBTIPickerItem from './MBTIPickerItem';

export type MultiMBTI = string[];

type MultiMBTIPickerProps = {
  onChange?: (value: MultiMBTI) => void;
  defaultValue?: MultiMBTI;
};

const MultiMBTIPicker = ({ onChange, defaultValue }: MultiMBTIPickerProps) => {
  const [selectedMBTI, setSelectedMBTI] = useState<MultiMBTI>(defaultValue || []);

  const handleToggleSelect = (value: string) => {
    if (selectedMBTI.includes(value)) {
      setSelectedMBTI(selectedMBTI.filter((v) => v !== value));
    } else {
      setSelectedMBTI([...selectedMBTI, value]);
    }
  };

  useEffect(() => {
    onChange?.(selectedMBTI);
  }, [selectedMBTI]);

  return (
    <Styled.MBTIPicker>
      <MBTIPickerItem
        options={[
          {
            value: 'E',
            title: 'E',
            description: '외향',
          },
          {
            value: 'I',
            title: 'I',
            description: '내향',
          },
        ]}
        type="checkbox"
        name="E-I"
        onChange={handleToggleSelect}
        defaultValue={defaultValue}
      />
      <MBTIPickerItem
        options={[
          {
            value: 'S',
            title: 'S',
            description: '감각',
          },
          {
            value: 'N',
            title: 'N',
            description: '직관',
          },
        ]}
        name="S-N"
        type="checkbox"
        onChange={handleToggleSelect}
        defaultValue={defaultValue}
      />
      <MBTIPickerItem
        options={[
          {
            value: 'T',
            title: 'T',
            description: '사고',
          },
          {
            value: 'F',
            title: 'F',
            description: '감정',
          },
        ]}
        name="T-F"
        type="checkbox"
        onChange={handleToggleSelect}
        defaultValue={defaultValue}
      />
      <MBTIPickerItem
        options={[
          {
            value: 'J',
            title: 'J',
            description: '판단',
          },
          {
            value: 'P',
            title: 'P',
            description: '인식',
          },
        ]}
        name="J-P"
        type="checkbox"
        onChange={handleToggleSelect}
        defaultValue={defaultValue}
      />
    </Styled.MBTIPicker>
  );
};

export default MultiMBTIPicker;
