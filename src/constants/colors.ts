export const white = '#fff';
export const hoveredWhite = '#e5e5e5';
export const dividerLine = 'rgba(0, 0, 0, 0.06)';
export const primary = '#0f62fe';
export const primaryHovered = '#0353e9';
export const danger = '#da1e28';
export const dangerHovered = '#b81921';

// animations
export const anim = '0, 0, 0.38, 0.9';

export const KIND_COLOURS = {
  primary: {
    main: primary,
    counter: white,
    hovered: primaryHovered,
  },
  secondary: {
    main: '#393939',
    counter: white,
    hovered: '#4c4c4c',
  },
  tertiary: {
    main: white,
    counter: primary,
    hovered: primary,
    hoveredColor: white,
    outline: primary,
  },
  danger: {
    main: danger,
    counter: white,
    hovered: dangerHovered,
  },
  ghost: {
    main: white,
    counter: primary,
    hovered: hoveredWhite,
  },
};
