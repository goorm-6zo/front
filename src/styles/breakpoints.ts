const breakpoints = {
  mobileMin: '320px',
  desktopMin: '769px',
  expandedMin: '1280px',
};

const media = {
  mobile: `@media (min-width: ${breakpoints.mobileMin})`,
  desktop: `@media (min-width: ${breakpoints.desktopMin})`,
  expanded: `@media (min-width: ${breakpoints.expandedMin})`,
};

export { breakpoints, media };
