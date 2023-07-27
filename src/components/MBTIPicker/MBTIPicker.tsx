import RadioMBTIPicker from './RadioMBTIPicker';
import CheckboxMBTIPicker from './CheckboxMBTIPicker';

export type MBTIPickerProps = {
  onChange?: (value: MBTI) => void;
  checkbox?: boolean;
  defaultValue?: MBTI;
};
export type MBTI = [string | null, string | null, string | null, string | null];

const MBTIPicker = ({ onChange, checkbox = false, defaultValue }: MBTIPickerProps) => {
  return checkbox ? (
    <CheckboxMBTIPicker onChange={onChange as (value: MBTI) => void} defaultValue={defaultValue as MBTI} />
  ) : (
    <RadioMBTIPicker onChange={onChange as (value: MBTI) => void} defaultValue={defaultValue as MBTI} />
  );
};

export default MBTIPicker;
