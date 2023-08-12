import { useState } from 'react';
import Styled from './MBTIPicker.styles';
import MBTIPickerItem from './MBTIPickerItem';
import { MBTIPickerProps } from './MBTIPicker';
import { MbtiCharType } from '@/apis/types/feed';

const CheckboxMBTIPicker = ({ onChange, defaultValue }: MBTIPickerProps) => {
  const [eOrI, setEOrI] = useState<MbtiCharType | null>(defaultValue?.[0] || null);
  const [sOrN, setSOrN] = useState<MbtiCharType | null>(defaultValue?.[1] || null);
  const [tOrF, setTOrF] = useState<MbtiCharType | null>(defaultValue?.[2] || null);
  const [jOrP, setJOrP] = useState<MbtiCharType | null>(defaultValue?.[3] || null);

  const handleChangeEOrI = (value: MbtiCharType) => {
    const newValue = eOrI === value ? null : value;
    setEOrI(newValue);
    onChange?.([newValue, sOrN, tOrF, jOrP]);
  };

  const handleChangeSOrN = (value: MbtiCharType) => {
    const newValue = sOrN === value ? null : value;
    setSOrN(newValue);
    onChange?.([eOrI, newValue, tOrF, jOrP]);
  };

  const handleChangeTOrF = (value: MbtiCharType) => {
    const newValue = tOrF === value ? null : value;
    setTOrF(newValue);
    onChange?.([eOrI, sOrN, newValue, jOrP]);
  };

  const handleChangeJOrP = (value: MbtiCharType) => {
    const newValue = jOrP === value ? null : value;
    setJOrP(newValue);
    onChange?.([eOrI, sOrN, tOrF, newValue]);
  };

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
        name="E-I"
        onClick={handleChangeEOrI}
        type="checkbox"
        checkedValue={eOrI}
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
        onClick={handleChangeSOrN}
        type="checkbox"
        checkedValue={sOrN}
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
        onClick={handleChangeTOrF}
        type="checkbox"
        checkedValue={tOrF}
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
        onClick={handleChangeJOrP}
        type="checkbox"
        checkedValue={jOrP}
      />
    </Styled.MBTIPicker>
  );
};

export default CheckboxMBTIPicker;
