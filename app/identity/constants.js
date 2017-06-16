/*
 * Spacing:
 */
export const PAGE_WRAPPER_SPACING_DESKTOP_HD = '7vw';
export const PAGE_WRAPPER_SPACING_DESKTOP = PAGE_WRAPPER_SPACING_DESKTOP_HD;
export const PAGE_WRAPPER_SPACING_MOBILE = PAGE_WRAPPER_SPACING_DESKTOP_HD;

/*
 * Screen sizes:
 *
 * TODO(RB): write a better reason
 *
 * For our screen sizes we go with min width, meaning that we start with
 * mobile styles an go up.
 */
export const DESKTOP_SCREEN_SIZE = '@media (min-width: 641px)';
export const DESKTOP_HD_SCREEN_SIZE = '@media (min-width: 1440px)';

/*
 * Typography styles
 *
 * TODO(RB): Write a description
 * TODO(RB): Lets write a rem calculator that we pass in to components to
 *           convert px values to rem.
 */
export const FONT_FAMILY_SANS_SERIF = 'Graphik, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
export const FONT_FAMILY_SERIF = 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
export const FONT_FAMILY_BASE = FONT_FAMILY_SANS_SERIF;

export const FONT_WEIGHT_LIGHT = 300;
export const FONT_WEIGHT_NORMAL = 400;
export const FONT_WEIGHT_BOLD = 700;

export const LINE_HEIGHT_BASE = 1.75;
export const FONT_WEIGHT_BASE = FONT_WEIGHT_NORMAL;

// export const HEADINGS_MARGIN_BOTTOM = ???;
export const HEADINGS_LINE_HEIGHT = 1.32;
export const HEADINGS_FONT_FAMILY = FONT_FAMILY_BASE;
export const HEADINGS_FONT_WEIGHT = FONT_WEIGHT_NORMAL;
export const HEADINGS_COLOR = '#666e79';

// h1 Hero
export const H1_HERO_DESKTOP_HD_FONT_SIZE = 66;
export const H1_HERO_DESKTOP_FONT_SIZE = 60;
export const H1_HERO_MOBILE_FONT_SIZE = 54;

// h1
export const H1_DESKTOP_HD_FONT_SIZE = 44;
export const H1_DESKTOP_FONT_SIZE = 40;
export const H1_MOBILE_FONT_SIZE = 36;

// h2
export const H2_DESKTOP_HD_FONT_SIZE = 33;
export const H2_DESKTOP_FONT_SIZE = 30;
export const H2_MOBILE_FONT_SIZE = 27;

// h3
export const H3_DESKTOP_HD_FONT_SIZE = 29;
export const H3_DESKTOP_FONT_SIZE = 27;
export const H3_MOBILE_FONT_SIZE = 24;

// h4
export const H4_DESKTOP_HD_FONT_SIZE = 26;
export const H4_DESKTOP_FONT_SIZE = 23;
export const H4_MOBILE_FONT_SIZE = 21;

// h5
export const H5_DESKTOP_HD_FONT_SIZE = 22;
export const H5_DESKTOP_FONT_SIZE = 20;
export const H5_MOBILE_FONT_SIZE = 18;

// p
export const P_DESKTOP_HD_FONT_SIZE = 22;
export const P_DESKTOP_FONT_SIZE = 20;
export const P_MOBILE_FONT_SIZE = 18;

// small
export const SMALL_DESKTOP_HD_FONT_SIZE = 17;
export const SMALL_DESKTOP_FONT_SIZE = 15;
export const SMALL_MOBILE_FONT_SIZE = 15;
