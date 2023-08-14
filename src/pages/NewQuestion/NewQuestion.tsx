import useInput from '@/hooks/useInput';
import Spacing from '@/components/Spacing/Spacing';
import Styled from './NewQuestion.styles';
import { useEffect, useRef, useState } from 'react';
import OptionSelect from './components/OptionSelect/OptionSelect';
import TopBar from '@/components/TopBar/TopBar';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import { MBTI } from '@/components/MBTIPicker/MBTIPicker';
import Layout from '@/components/Layout/Layout';
import { palette } from '@/styles/palette';
import { useMutation } from '@tanstack/react-query';
import { feedApi } from '@/apis/handlers/feed';
import { useNavigate } from 'react-router-dom';
import useToast from '@/hooks/useToast';
import { ReactComponent as FireIcon } from '@/assets/fire.svg';
import { AgeOptionType, GenderType, MbtiCharType } from '@/apis/types';
import useVisualViewportResize from '@/hooks/useVisualViewportResize';

const NewQuestion = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [value, onChange] = useInput('');
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
  const [isOptionSelectOpen, setIsOptionSelectOpen] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [genders, setGenders] = useState<GenderType[]>([]);
  const [ageOption, setAgeOption] = useState<AgeOptionType>('SAME_AGE_GROUP');
  const [mbti, setMBTI] = useState<MBTI>([null, null, null, null]);
  const [selectedOptionText, setSelectedOptionText] = useState<string | null>(null);
  const prevVisualViewport = useVisualViewportResize();

  const handleChangeGender = (value: GenderType) => {
    setGenders([value]);
  };
  const handleChangeAgeOption = (value: AgeOptionType) => {
    setAgeOption(value);
  };
  const handleChangeMBTI = (value: MBTI) => {
    setMBTI(value);
  };

  const toggleOptionSelectOpen = () => setIsOptionSelectOpen(!isOptionSelectOpen);

  useEffect(() => {
    setSelectedOptionText(() => getSelectedOptionText(genders[0], ageOption, mbti));
  }, [genders, ageOption, mbti]);

  const getSelectedOptionText = (gender: string | null, peer: string | null, mbti: MBTI) => {
    const genderTag = gender ? `# ${gender === 'MALE' ? '남자' : '여자'}` : null;
    const peerTag = peer === 'ALL' ? `# 모두` : null;
    const mbtiTag = !mbti.every((v) => v === null) ? `# ${mbti.filter((v) => v !== null).join(',')}` : null;

    if (!genderTag && !peerTag && !mbtiTag) return null;
    return `${genderTag || ''}\u00A0\u00A0${peerTag || ''}\u00A0\u00A0${mbtiTag || ''}`;
  };

  const { mutate: postFeetMutate } = useMutation(feedApi.postFeeds, {
    onSuccess: () => {
      navigate('/feed');
      toast.success(
        <>
          답변 작성 완료 <FireIcon />
        </>
      );
    },
  });

  return (
    <Layout backgroundColor={palette.background.white2}>
      <Styled.PageWrapper height={prevVisualViewport} isTextAreaFocused={isTextAreaFocused}>
        <Styled.PageBody>
          <TopBar
            centerElement={`${value.length}/150`}
            rightElement={'등록'}
            onSubmit={() =>
              postFeetMutate({
                content: value,
                ageOption,
                genders: genders,
                mbtiChars: mbti.filter((v) => v !== null) as MbtiCharType[],
              })
            }
          />
          <Spacing size={28} />
          <Styled.TextArea
            maxLength={150}
            placeholder="자유롭게 질문해 보세요"
            ref={textAreaRef}
            onFocus={() => setIsTextAreaFocused(true)}
            onBlur={() => setIsTextAreaFocused(false)}
            onChange={onChange}
            value={value}
          />
        </Styled.PageBody>
        <Styled.PageFooter height={prevVisualViewport} isTextAreaFocused={isTextAreaFocused}>
          <Styled.AskOption onClick={toggleOptionSelectOpen}>
            <Styled.AskOptionBody>
              <Styled.AskOptionDescription selected={Boolean(selectedOptionText)}>
                {selectedOptionText || '이런 사람에게 질문하고 싶어요!'}
              </Styled.AskOptionDescription>
              <Styled.AddOptionIcon selected={Boolean(selectedOptionText)} />
            </Styled.AskOptionBody>
            {!isTextAreaFocused && <Styled.BottomSpace />}
          </Styled.AskOption>
        </Styled.PageFooter>
        <BottomSheet open={isOptionSelectOpen} onClose={toggleOptionSelectOpen} isBottomBarToggleDisabled>
          <OptionSelect
            closeOptionSelect={toggleOptionSelectOpen}
            onChangeGender={handleChangeGender}
            onChangeAgeOption={handleChangeAgeOption}
            onChangeMBTI={handleChangeMBTI}
            gender={genders[0]}
            ageOption={ageOption}
            mbti={mbti}
          />
        </BottomSheet>
      </Styled.PageWrapper>
    </Layout>
  );
};

export default NewQuestion;
