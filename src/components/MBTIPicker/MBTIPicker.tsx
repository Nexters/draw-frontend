import { useState } from 'react';
import Styled from './MBTIPicker.styles';
import MBTIPickerItem from './MBTIPickerItem';

export type MBTI = [string | null, string | null, string | null, string | null];

type MBTIPickerProps = {
  onChange?: (value: MBTI) => void;
};

const MBTIPicker = ({ onChange }: MBTIPickerProps) => {
  const [eOrI, setEOrI] = useState<string | null>(null);
  const [sOrN, setSOrN] = useState<string | null>(null);
  const [tOrF, setTOrF] = useState<string | null>(null);
  const [jOrP, setJOrP] = useState<string | null>(null);

  const handleChangeEOrI = (value: string) => {
    setEOrI(value);
    onChange?.([value, sOrN, tOrF, jOrP]);
  };

  const handleChangeSOrN = (value: string) => {
    setSOrN(value);
    onChange?.([eOrI, value, tOrF, jOrP]);
  };

  const handleChangeTOrF = (value: string) => {
    setTOrF(value);
    onChange?.([eOrI, sOrN, value, jOrP]);
  };

  const handleChangeJOrP = (value: string) => {
    setJOrP(value);
    onChange?.([eOrI, sOrN, tOrF, value]);
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
        onChange={handleChangeEOrI}
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
        onChange={handleChangeSOrN}
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
        onChange={handleChangeTOrF}
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
        onChange={handleChangeJOrP}
      />
    </Styled.MBTIPicker>
  );
};

export default MBTIPicker;
