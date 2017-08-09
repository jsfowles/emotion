/*
 * Colors:
 */
export const colors = {
  nfBlack: '#221f1f',
  nfRed: '#e50914',
  nfTan: '#f5f5f1',

  black001: '#221F1F',
  black002: '#424040',
  black003: '#696868',
  black004: '#8c8c8c',
  black005: '#a6a6a6',
  black006: '#c7c7c7',
  black007: '#dbdbdb',
  black008: '#ebebeb',
  white: '#ffffff',
};

/*
 * Spacing:
 */
export const PAGE_WRAPPER_SPACING_DESKTOP_HD = '7vw';
export const PAGE_WRAPPER_SPACING_DESKTOP = PAGE_WRAPPER_SPACING_DESKTOP_HD;
export const PAGE_WRAPPER_SPACING_MOBILE = PAGE_WRAPPER_SPACING_DESKTOP_HD;

export const X_LARGE_MOBILE = 144;
export const X_LARGE_DESKTOP = 156;
export const X_LARGE_DESKTOP_HD = 168;

export const LARGE_MOBILE = 54;
export const LARGE_DESKTOP = 60;
export const LARGE_DESKTOP_HD = 66;

export const MEDIUM_MOBILE = 27;
export const MEDIUM_DESKTOP = 30;
export const MEDIUM_DESKTOP_HD = 33;

export const SMALL_MOBILE = 18;
export const SMALL_DESKTOP = 20;
export const SMALL_DESKTOP_HD = 22;

export const X_SMALL_MOBILE = 14;
export const X_SMALL_DESKTOP = 15;
export const X_SMALL_DESKTOP_HD = 17;

/*
 * Screen sizes:
 *
 * For our screen sizes we go with min width, meaning that we start with
 * mobile styles an go up.
 */
export const DESKTOP = '@media (min-width: 768px)';
export const DESKTOP_HD = '@media (min-width: 1440px)';

/*
 * Typography styles
 *
 */
export const FONT_FAMILY_SANS_SERIF = 'Gotham, “Helvetica Neue”, Helvetica, Arial, sans-serif';
export const FONT_FAMILY_SERIF = '"Courier New", monospace, serif';
export const FONT_FAMILY_BASE = FONT_FAMILY_SANS_SERIF;
export const FONT_COLOR_BASE = colors.black001;

export const FONT_COLOR_MUTED = '#666';

export const FONT_WEIGHT_LIGHT = 300;
export const FONT_WEIGHT_NORMAL = 500;
export const FONT_WEIGHT_BOLD = 600;

export const MEASURE_SMALL = '35rem';
export const MEASURE_MEDIUM = '45rem';
export const MEASURE_LARGE = '85rem';

export const LINE_HEIGHT_BASE = 1.75;
export const FONT_WEIGHT_BASE = FONT_WEIGHT_LIGHT;

export const LINE_HEIGHT_HEADINGS = 1.32;
export const FONT_FAMILY_HEADINGS = FONT_FAMILY_BASE;
export const FONT_WEIGHT_HEADINGS = FONT_WEIGHT_BOLD;
export const FONT_COLOR_HEADINGS = FONT_COLOR_BASE;

// h1 Hero
export const H1_HERO_DESKTOP_HD_FONT_SIZE = 66;
export const H1_HERO_DESKTOP_FONT_SIZE = 60;
export const H1_HERO_MOBILE_FONT_SIZE = 54;
export const H1_HERO_FONT_WEIGHT = FONT_WEIGHT_HEADINGS;

// h1
export const H1_DESKTOP_HD_FONT_SIZE = 44;
export const H1_DESKTOP_FONT_SIZE = 40;
export const H1_MOBILE_FONT_SIZE = 36;
export const H1_FONT_WEIGHT = FONT_WEIGHT_HEADINGS;

// h2
export const H2_DESKTOP_HD_FONT_SIZE = 33;
export const H2_DESKTOP_FONT_SIZE = 30;
export const H2_MOBILE_FONT_SIZE = 27;
export const H2_FONT_WEIGHT = FONT_WEIGHT_HEADINGS;

// h3
export const H3_DESKTOP_HD_FONT_SIZE = 29;
export const H3_DESKTOP_FONT_SIZE = 27;
export const H3_MOBILE_FONT_SIZE = 24;
export const H3_FONT_WEIGHT = FONT_WEIGHT_HEADINGS;

// h4
export const H4_DESKTOP_HD_FONT_SIZE = 26;
export const H4_DESKTOP_FONT_SIZE = 23;
export const H4_MOBILE_FONT_SIZE = 21;
export const H4_FONT_WEIGHT = FONT_WEIGHT_HEADINGS;

// h5
export const H5_DESKTOP_HD_FONT_SIZE = 22;
export const H5_DESKTOP_FONT_SIZE = 20;
export const H5_MOBILE_FONT_SIZE = 18;
export const H5_FONT_WEIGHT = FONT_WEIGHT_HEADINGS;

// p
export const P_DESKTOP_HD_FONT_SIZE = 22;
export const P_DESKTOP_FONT_SIZE = 20;
export const P_MOBILE_FONT_SIZE = 18;

// small
export const SMALL_DESKTOP_HD_FONT_SIZE = 17;
export const SMALL_DESKTOP_FONT_SIZE = 15;
export const SMALL_MOBILE_FONT_SIZE = 15;

export const BORDER_COLOR = colors.spindle;

export const ABSOLUTE = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

export const FIXED = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};
