import { useState } from 'react';
import Styled from './MBTIPicker.styles';
import MBTIPickerItem from './MBTIPickerItem';
import { MBTIPickerProps } from './MBTIPicker';

const SingleMBTIPicker = ({ onChange, defaultValue }: MBTIPickerProps) => {
  const [eOrI, setEOrI] = useState<string | null>(defaultValue?.[0] || null);
  const [sOrN, setSOrN] = useState<string | null>(defaultValue?.[1] || null);
  const [tOrF, setTOrF] = useState<string | null>(defaultValue?.[2] || null);
  const [jOrP, setJOrP] = useState<string | null>(defaultValue?.[3] || null);

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
        onChange={handleChangeSOrN}
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
        onChange={handleChangeTOrF}
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
        onChange={handleChangeJOrP}
        checkedValue={jOrP}
      />
    </Styled.MBTIPicker>
  );
};

export default SingleMBTIPicker;
