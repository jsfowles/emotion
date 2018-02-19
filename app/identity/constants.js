/*
 * Colors:
 */
export const colors = {
  // Primary Colors
  pacificBlue: '#0094ca',
  irisBlue: '#00b5e2',
  deepSkyBlue: '#0cc7f5',
  summerSky: '#35CAEF',

  persianGreen2: '#03a39c',
  persianGreen: '#00b2a9',
  mediumTurquoise: '#4ac7c1',

  tahitiGold: '#eb6d27',
  burntOrange: '#ff8038',
  atomicTangerine: '#ff985d',

  cardinal: '#c20431',
  crimson: '#d50032',
  crimson2: '#e80e41',

  // Grey Tones
  blueCharcoal: '#1d252d',
  bigStone: '#333f48',
  shuttleGrey: '#5b6770',
  aluminium: '#7c878e',
  baliHai: '#8d96a0',
  spindle: '#bbc5cf',
  linkWater: '#cdd7e1',
  pattensBlue: '#d9e1e9',
  aliceBlue: '#f3f7fa',
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
export const FONT_COLOR_BASE = colors.bigStone;

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

export const TYPE_SCALE = {
  H1: {
    BASE: 36,
    DESKTOP: 40,
    DESKTO_HD: 44,
  },

  H2: {
    BASE: 27,
    DESKTOP: 30,
    DESKTO_HD: 33,
  },

  H3: {
    BASE: 24,
    DESKTOP: 27,
    DESKTO_HD: 29,
  },

  H4: {
    BASE: 21,
    DESKTOP: 23,
    DESKTO_HD: 26,
  },

  H5: {
    BASE: 18,
    DESKTOP: 20,
    DESKTO_HD: 22,
  },

  P: {
    BASE: 18,
    DESKTOP: 20,
    DESKTO_HD: 22,
  },

  SMALL: {
    BASE: 15,
    DESKTOP: 15,
    DESKTO_HD: 17,
  },
};

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
