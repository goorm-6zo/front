import styled from 'styled-components';
export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 2px;
  border: 1px solid #333;
  height: 200px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
