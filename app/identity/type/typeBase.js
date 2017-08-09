import * as c from '../constants';

const base = measure => ({
  width: '100%',

  [c.DESKTOP]: {
    maxWidth: c[`MEASURE_${measure && measure.toUpperCase()}`] || c.MEASURE_MEDIUM,
  },
});

export const headerBase = ({ muted, measure }) => ({
  ...base(measure),
  color: muted ? c.FONT_COLOR_MUTED : c.FONT_COLOR_HEADINGS,
  fontFamily: c.FONT_FAMILY_HEADINGS,
  lineHeight: c.LINE_HEIGHT_HEADINGS,
});

export const bodyBase = ({ muted, measure }) => ({
  ...base(measure),
  color: muted ? c.FONT_COLOR_MUTED : c.FONT_COLOR_BASE,
  fontFamily: c.FONT_FAMILY_BASE,
  fontWeight: c.FONT_WEIGHT_BASE,
  lineHeight: c.LINE_HEIGHT_BASE,
});
