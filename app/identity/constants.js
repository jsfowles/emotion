/*
 * Colors:
 */
export const COLORS = {
  black001: '#1d252d',
  black002: '#333f48',
  black003: '#5b6770',
  black004: '#7c878e',
  black005: '#8d96a0',
  black006: '#bbc5cf',
  black007: '#cdd7e1',
  black008: '#d9e1e9',
  black009: '#f3f7fa',

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
export const FONT_COLOR_BASE = COLORS.black002;

export const FONT_COLOR_MUTED = '#666';

export const FONT_WEIGHT_LIGHT = 300;
export const FONT_WEIGHT_NORMAL = 500;
export const FONT_WEIGHT_BOLD = 600;

// TODO: Write documentation arond this
export const MEASURE = {
  SMALL: '35rem',
  MEDIUM: '45rem',
  LARGE: '85rem',
};

export const LINE_HEIGHT_BASE = 1.75;
export const FONT_WEIGHT_BASE = FONT_WEIGHT_LIGHT;

export const LINE_HEIGHT_HEADINGS = 1.32;
export const FONT_FAMILY_HEADINGS = FONT_FAMILY_BASE;
export const FONT_WEIGHT_HEADINGS = FONT_WEIGHT_NORMAL;
export const FONT_COLOR_HEADINGS = FONT_COLOR_BASE;

// TODO: Write documentation arond this
export const TYPE_SCALE = {
  H1: {
    BASE: 36,
    DESKTOP: 40,
    DESKTOP_HD: 44,
    LINE_HEIGHT: LINE_HEIGHT_HEADINGS,
    FONT_FAMILY: FONT_FAMILY_HEADINGS,
    FONT_WEIGHT: FONT_WEIGHT_HEADINGS,
  },

  H2: {
    BASE: 27,
    DESKTOP: 30,
    DESKTOP_HD: 33,
    LINE_HEIGHT: LINE_HEIGHT_HEADINGS,
    FONT_FAMILY: FONT_FAMILY_HEADINGS,
    FONT_WEIGHT: FONT_WEIGHT_HEADINGS,
  },

  H3: {
    BASE: 24,
    DESKTOP: 27,
    DESKTOP_HD: 29,
    LINE_HEIGHT: LINE_HEIGHT_HEADINGS,
    FONT_FAMILY: FONT_FAMILY_HEADINGS,
    FONT_WEIGHT: FONT_WEIGHT_HEADINGS,
  },

  H4: {
    BASE: 21,
    DESKTOP: 23,
    DESKTOP_HD: 26,
    LINE_HEIGHT: LINE_HEIGHT_HEADINGS,
    FONT_FAMILY: FONT_FAMILY_HEADINGS,
    FONT_WEIGHT: FONT_WEIGHT_HEADINGS,
  },

  H5: {
    BASE: 18,
    DESKTOP: 20,
    DESKTOP_HD: 22,
    LINE_HEIGHT: LINE_HEIGHT_HEADINGS,
    FONT_FAMILY: FONT_FAMILY_HEADINGS,
    FONT_WEIGHT: FONT_WEIGHT_HEADINGS,
  },

  H6: {
    BASE: 18,
    DESKTOP: 20,
    DESKTOP_HD: 22,
    LINE_HEIGHT: LINE_HEIGHT_HEADINGS,
    FONT_FAMILY: FONT_FAMILY_HEADINGS,
    FONT_WEIGHT: FONT_WEIGHT_HEADINGS,
  },

  P: {
    BASE: 18,
    DESKTOP: 20,
    DESKTOP_HD: 22,
    LINE_HEIGHT: LINE_HEIGHT_BASE,
    FONT_FAMILY: FONT_FAMILY_BASE,
    FONT_WEIGHT: FONT_WEIGHT_BASE,
  },

  Li: {
    BASE: 18,
    DESKTOP: 20,
    DESKTOP_HD: 22,
    LINE_HEIGHT: LINE_HEIGHT_BASE,
    FONT_FAMILY: FONT_FAMILY_BASE,
    FONT_WEIGHT: FONT_WEIGHT_BASE,
  },

  SMALL: {
    BASE: 15,
    DESKTOP: 15,
    DESKTOP_HD: 17,
    LINE_HEIGHT: LINE_HEIGHT_BASE,
    FONT_FAMILY: FONT_FAMILY_BASE,
    FONT_WEIGHT: FONT_WEIGHT_BASE,
  },
};

export const BORDER_COLOR = COLORS.spindle;

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
