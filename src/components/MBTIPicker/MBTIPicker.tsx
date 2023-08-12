import RadioMBTIPicker from './RadioMBTIPicker';
import CheckboxMBTIPicker from './CheckboxMBTIPicker';
import { MbtiCharType } from '@/apis/types';

export type MBTIPickerProps = {
  onChange?: (value: MBTI) => void;
  checkbox?: boolean;
  defaultValue?: MBTI;
};
export type MBTI = [MbtiCharType | null, MbtiCharType | null, MbtiCharType | null, MbtiCharType | null];

const MBTIPicker = ({ onChange, checkbox = false, defaultValue }: MBTIPickerProps) => {
  return checkbox ? (
    <CheckboxMBTIPicker onChange={onChange as (value: MBTI) => void} defaultValue={defaultValue as MBTI} />
  ) : (
    <RadioMBTIPicker onChange={onChange as (value: MBTI) => void} defaultValue={defaultValue as MBTI} />
  );
};

export default MBTIPicker;
