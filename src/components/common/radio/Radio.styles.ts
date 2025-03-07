import styled from 'styled-components';

export const RadioContainer = styled.label<{ checked: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background-color: ${({ checked }) => (checked ? '#888' : '#d3d3d3')};
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: ${({ checked }) => (checked ? '#fff' : '#000')};
`;

export const CustomRadio = styled.div<{ checked: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid ${({ checked }) => (checked ? '#fff' : '#000')};
  background-color: ${({ checked }) => (checked ? '#555' : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ checked }) => (checked ? '#fff' : 'transparent')};
  }
`;
