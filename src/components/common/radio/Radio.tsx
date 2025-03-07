import * as S from './Radio.styles.ts';

type RadioButtonProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

export const RadioButton = ({ label, checked, onChange }: RadioButtonProps) => {
  return (
    <S.RadioContainer checked={checked} onClick={onChange}>
      <S.CustomRadio checked={checked} />
      {label}
    </S.RadioContainer>
  );
};
