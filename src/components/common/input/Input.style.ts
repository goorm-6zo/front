import styled from 'styled-components';

export const StyledInput = styled.input<{ variant: 'solid' | 'outlined' }>`
  width: 100%;
  padding: 10px;
  border-radius: ${({ variant }) => (variant === 'outlined' ? '6px' : '0px')};
  font-size: 16px;
  outline: none;
  background-color: ${({ variant }) => (variant === 'solid' ? '#d9d9d9' : 'transparent')};
  border: ${({ variant }) => (variant === 'outlined' ? '2px solid #ccc' : 'none')};
  &:focus {
    background-color: ${({ variant }) => (variant === 'solid' ? '#e0e0e0' : 'transparent')};
    border-color: ${({ variant }) => (variant === 'outlined' ? '#007bff' : 'none')};
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #d9d9d9;
  font-size: 16px;
  resize: none;
  min-height: 100px;
  outline: none;
  &:focus {
    background-color: #e0e0e0;
    border-color: #007bff;
  }
`;
