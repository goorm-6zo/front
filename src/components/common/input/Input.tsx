import * as S from './Input.style.ts';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: 'solid' | 'outlined';
};

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Input = ({ variant = 'solid', ...props }: InputProps) => {
  return <S.StyledInput variant={variant} {...props} />;
};

export const Textarea = (props: TextareaProps) => {
  return <S.StyledTextarea {...props} />;
};
