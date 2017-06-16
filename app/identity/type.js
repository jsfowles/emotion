import glamorous from 'glamorous';

import * as c from './constants';
import { verticalSpacing } from './spacing';

export const H1Hero = glamorous.h1({
  ...verticalSpacing(c.H1_HERO_MOBILE_FONT_SIZE * c.HEADINGS_LINE_HEIGHT),
  color: c.HEADINGS_COLOR,
  fontFamily: c.HEADINGS_FONT_FAMILY,
  fontSize: c.H1_HERO_MOBILE_FONT_SIZE,
  fontWeight: c.HEADINGS_FONT_WEIGHT,
  lineHeight: c.HEADINGS_LINE_HEIGHT,

  [c.DESKTOP_SCREEN_SIZE]: {
    ...verticalSpacing(c.H1_HERO_DESKTOP_FONT_SIZE * c.HEADINGS_LINE_HEIGHT),
    fontSize: c.H1_HERO_DESKTOP_FONT_SIZE,
  },

  [c.DESKTOP_HD_SCREEN_SIZE]: {
    ...verticalSpacing(c.H1_HERO_DESKTOP_HD_FONT_SIZE * c.HEADINGS_LINE_HEIGHT),
    fontSize: c.H1_HERO_DESKTOP_HD_FONT_SIZE,
  },
});

export const H1 = glamorous.h1({
  ...verticalSpacing(c.H1_MOBILE_FONT_SIZE * c.HEADINGS_LINE_HEIGHT),
  color: c.HEADINGS_COLOR,
  fontFamily: c.HEADINGS_FONT_FAMILY,
  fontSize: c.H1_MOBILE_FONT_SIZE,
  fontWeight: c.HEADINGS_FONT_WEIGHT,
  lineHeight: c.HEADINGS_LINE_HEIGHT,

  [c.DESKTOP_SCREEN_SIZE]: {
    ...verticalSpacing(c.H1_DESKTOP_FONT_SIZE * c.HEADINGS_LINE_HEIGHT),
    fontSize: c.H1_DESKTOP_FONT_SIZE,
  },

  [c.DESKTOP_HD_SCREEN_SIZE]: {
    ...verticalSpacing(c.H1_DESKTOP_HD_FONT_SIZE * c.HEADINGS_LINE_HEIGHT),
    fontSize: c.H1_DESKTOP_HD_FONT_SIZE,
  },
});

export const H2 = glamorous.h2({
  ...verticalSpacing(c.H2_MOBILE_FONT_SIZE * c.HEADINGS_LINE_HEIGHT),
  color: c.HEADINGS_COLOR,
  fontFamily: c.HEADINGS_FONT_FAMILY,
  fontSize: c.H2_HERO_MOBILE_FONT_SIZE,
  fontWeight: c.HEADINGS_FONT_WEIGHT,
  lineHeight: c.HEADINGS_LINE_HEIGHT,

  [c.DESKTOP_SCREEN_SIZE]: {
    ...verticalSpacing(c.H2_DESKTOP_FONT_SIZE * c.HEADINGS_LINE_HEIGHT),
    fontSize: c.H2_DESKTOP_FONT_SIZE,
  },

  [c.DESKTOP_HD_SCREEN_SIZE]: {
    ...verticalSpacing(c.H2_DESKTOP_HD_FONT_SIZE * c.HEADINGS_LINE_HEIGHT),
    fontSize: c.H2_DESKTOP_HD_FONT_SIZE,
  },
});

export const H3 = glamorous.h3({
  ...verticalSpacing(c.H3_MOBILE_FONT_SIZE * c.HEADINGS_LINE_HEIGHT),
  color: c.HEADINGS_COLOR,
  fontFamily: c.HEADINGS_FONT_FAMILY,
  fontSize: c.H3_HERO_MOBILE_FONT_SIZE,
  fontWeight: c.HEADINGS_FONT_WEIGHT,
  lineHeight: c.HEADINGS_LINE_HEIGHT,

  [c.DESKTOP_SCREEN_SIZE]: {
    ...verticalSpacing(c.H3_DESKTOP_FONT_SIZE * c.HEADINGS_LINE_HEIGHT),
    fontSize: c.H3_DESKTOP_FONT_SIZE,
  },

  [c.DESKTOP_HD_SCREEN_SIZE]: {
    ...verticalSpacing(c.H3_DESKTOP_HD_FONT_SIZE * c.HEADINGS_LINE_HEIGHT),
    fontSize: c.H3_DESKTOP_HD_FONT_SIZE,
  },
});

export const H4 = glamorous.h4({
  ...verticalSpacing(c.H4_MOBILE_FONT_SIZE * c.HEADINGS_LINE_HEIGHT),
  color: c.HEADINGS_COLOR,
  fontFamily: c.HEADINGS_FONT_FAMILY,
  fontSize: c.H4_HERO_MOBILE_FONT_SIZE,
  fontWeight: c.HEADINGS_FONT_WEIGHT,
  lineHeight: c.HEADINGS_LINE_HEIGHT,

  [c.DESKTOP_SCREEN_SIZE]: {
    ...verticalSpacing(c.H4_DESKTOP_FONT_SIZE * c.HEADINGS_LINE_HEIGHT),
    fontSize: c.H4_DESKTOP_FONT_SIZE,
  },

  [c.DESKTOP_HD_SCREEN_SIZE]: {
    ...verticalSpacing(c.H4_MOBILE_FONT_SIZE * c.HEADINGS_LINE_HEIGHT),
    fontSize: c.H4_DESKTOP_HD_FONT_SIZE,
  },
});

export const H5 = glamorous.h5({
  ...verticalSpacing(c.H5_MOBILE_FONT_SIZE * c.HEADINGS_LINE_HEIGHT),
  color: c.HEADINGS_COLOR,
  fontFamily: c.HEADINGS_FONT_FAMILY,
  fontSize: c.H5_HERO_MOBILE_FONT_SIZE,
  fontWeight: c.HEADINGS_FONT_WEIGHT,
  lineHeight: c.HEADINGS_LINE_HEIGHT,

  [c.DESKTOP_SCREEN_SIZE]: {
    ...verticalSpacing(c.H5_DESKTOP_FONT_SIZE * c.HEADINGS_LINE_HEIGHT),
    fontSize: c.H5_DESKTOP_FONT_SIZE,
  },

  [c.DESKTOP_HD_SCREEN_SIZE]: {
    ...verticalSpacing(c.H5_DESKTOP_HD_FONT_SIZE * c.HEADINGS_LINE_HEIGHT),
    fontSize: c.H5_DESKTOP_HD_FONT_SIZE,
  },
});

export const P = glamorous.p({
  ...verticalSpacing(c.P_MOBILE_FONT_SIZE * c.LINE_HEIGHT_BASE),
  color: c.HEADINGS_COLOR,
  fontFamily: c.HEADINGS_FONT_FAMILY,
  fontSize: c.P_MOBILE_FONT_SIZE,
  fontWeight: c.HEADINGS_FONT_WEIGHT,
  lineHeight: c.LINE_HEIGHT_BASE,

  [c.DESKTOP_SCREEN_SIZE]: {
    ...verticalSpacing(c.P_DESKTOP_FONT_SIZE * c.LINE_HEIGHT_BASE),
    fontSize: c.P_DESKTOP_FONT_SIZE,
    maxWidth: 600,
  },

  [c.DESKTOP_HD_SCREEN_SIZE]: {
    ...verticalSpacing(c.P_DESKTOP_HD_FONT_SIZE * c.LINE_HEIGHT_BASE),
    fontSize: c.P_DESKTOP_HD_FONT_SIZE,
    maxWidth: 720,
  },
});

export const Small = glamorous.small({
  color: c.HEADINGS_COLOR,
  fontFamily: c.HEADINGS_FONT_FAMILY,
  fontSize: c.SMALL_HERO_MOBILE_FONT_SIZE,
  fontWeight: c.HEADINGS_FONT_WEIGHT,
  lineHeight: c.HEADINGS_LINE_HEIGHT_BASE,

  [c.DESKTOP_SCREEN_SIZE]: {
    fontSize: c.SMALL_DESKTOP_FONT_SIZE,
  },

  [c.DESKTOP_HD_SCREEN_SIZE]: {
    fontSize: c.SMALL_DESKTOP_HD_FONT_SIZE,
  },
});
