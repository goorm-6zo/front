import * as S from './CheckBox.style';

type CheckBoxProps = {
  checked: boolean;
  onChange?: () => void;
};

const CheckBox = ({ checked, onChange }: CheckBoxProps) => {
  return (
    <S.CheckBoxContainer onClick={onChange}>
      <S.HiddenCheckBox type="checkbox" checked={checked} readOnly />
      <S.CustomCheckBox checked={checked} />
    </S.CheckBoxContainer>
  );
};

export default CheckBox;
