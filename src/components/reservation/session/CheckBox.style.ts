import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  background-color: #bbbbbb;
  padding: 5px;
  min-height: 60px;
  cursor: pointer;
`;

export const HiddenCheckBox = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const CustomCheckBox = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ checked }) => (checked ? '#333' : 'transparent')};

  &:after {
    content: '${({ checked }) => (checked ? '✔' : '')}';
    color: white;
    font-size: 14px;
  }
`;
