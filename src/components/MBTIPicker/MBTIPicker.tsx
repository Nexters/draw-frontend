import SingleMBTIPicker, { SingleMBTI } from './SingleMBTIPicker';
import MultiMBTIPicker, { MultiMBTI } from './MultiMBTIPicker';

type SingleMBTIPickerProps = {
  onChange?: (value: SingleMBTI) => void;
  multiSelect?: false;
  defaultValue?: undefined;
};
type MultiMBTIPickerProps = {
  onChange?: (value: MultiMBTI) => void;
  multiSelect?: true;
  defaultValue?: MultiMBTI;
};

const MBTIPicker = ({ onChange, multiSelect = false, defaultValue }: SingleMBTIPickerProps | MultiMBTIPickerProps) => {
  return multiSelect ? (
    <MultiMBTIPicker onChange={onChange as (value: MultiMBTI) => void} defaultValue={defaultValue} />
  ) : (
    <SingleMBTIPicker onChange={onChange as (value: SingleMBTI) => void} />
  );
};

export default MBTIPicker;
