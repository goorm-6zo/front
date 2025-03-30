import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  margin: 12px 0px;
  user-select: none;
`;

export const Caption = styled.caption`
  text-align: right;
  margin-bottom: 10px;
`;

export const TableHeader = styled.thead`
  display: block;
`;

export const TableBody = styled.tbody`
  background-color: #fff;
`;

//head이거나 마지막 요소에 border-radius적용
export const TableRow = styled.tr<{ type?: 'head' | 'body' | 'last' }>`
  background-color: ${({ theme, type }) =>
    type === 'head' ? theme.colors.background.table : '#fff'};
  ${({ type }) => type !== 'head' && 'border-bottom: 1px solid #d9d9d9;'}
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  width: 100%;
  border-radius: ${({ type }) =>
    type === 'head'
      ? `var(--radius-16) var(--radius-16) 0 0`
      : type === 'last'
        ? `0 0 var(--radius-16) var(--radius-16)`
        : null};
`;

export const TableHeaderData = styled.span`
  padding: var(--spacing-20) var(--spacing-24);
  text-align: center;
  font-size: 18px;
  width: 120px;
`;

export const TableData = styled.span<{ present?: boolean }>`
  padding: var(--spacing-24) var(--spacing-36);
  text-align: center;
  font-size: 18px;
  color: ${({ present, theme }) =>
    present ? theme.colors.typo.true : theme.colors.typo.primary};
  width: 120px;
`;
