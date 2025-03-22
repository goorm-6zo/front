const breakpoints = {
  mobileMin: '320px',
  desktopMin: '769px',
  expandedMin: '1280px',
};

const media = {
  // 레이아웃에 적용할 쿼리 헬퍼 함수
  mobileLayout: `@media (min-width: ${breakpoints.mobileMin})`,
  desktopLayout: `@media (min-width: ${breakpoints.desktopMin})`,
  expandedLayout: `@media (min-width: ${breakpoints.expandedMin})`,

  // 컴포넌트에 적용할 쿼리 헬퍼 함수
  mobile: `@media (min-width: ${breakpoints.mobileMin})`,
  desktop: `@media (min-width: ${breakpoints.desktopMin})`,
  expanded: `@media (min-width: ${breakpoints.expandedMin})`,
};

export { breakpoints, media };
