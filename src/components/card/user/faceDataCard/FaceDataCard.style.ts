import styled from 'styled-components';

type FaceDataCardProps = {
  $hasFace?: boolean;
};

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-0);
  padding: var(--spacing-16) var(--spacing-16);

  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: var(--radius-12);
  background-color: ${({ theme }) => theme.colors.background.white};
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-16) var(--spacing-2);
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider.primary};
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font: var(--font-title-m);
  color: ${({ theme }) => theme.colors.typo.secondary};
`;

export const ContentsContainer = styled.div<FaceDataCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $hasFace }) => ($hasFace ? 'flex-end' : 'center')};
  align-items: center;
  gap: var(--spacing-20);
  height: 168px;
`;

export const MainContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-12);
`;

export const ContentsTextWrapper = styled.div<FaceDataCardProps>`
  display: flex;
  font: var(--font-body-l);
  color: ${({ $hasFace, theme }) =>
    $hasFace ? theme.colors.typo.primary : theme.colors.typo.tertiary};
`;

export const TxtBtnWrapper = styled.div`
  display: flex;
  font: var(--font-body-l);
  color: ${({ theme }) => theme.colors.typo.tertiary};
`;
