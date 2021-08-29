export const white = '#fff';
export const hoveredWhite = '#e5e5e5';
export const dividerLine = 'rgba(0, 0, 0, 0.06)';
export const primary = '#3B82F6';
export const primaryHovered = '#2563EB';
export const danger = '#EF4444';
export const dangerHovered = '#DC2626';

// animations
export const anim = '0, 0, 0.38, 0.9';

export const KIND_COLOURS = {
  primary: {
    main: primary,
    counter: white,
    hovered: primaryHovered,
  },
  secondary: {
    main: white,
    counter: primary,
    hovered: primary,
    hoveredColor: white,
    outline: primary,
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
