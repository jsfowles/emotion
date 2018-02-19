import glamorous from 'glamorous';

import TypeScale from '@identity/type';
import { remCalc } from '@lib/helperMethods';
import * as wrappers from '@identity/wrappers';
import * as spacingCalculator from '@identity/spacing';
import { COLORS, MEASURE, FONT_WEIGHT_NORMAL } from '@identity/constants';

export const P = glamorous(TypeScale.P)({
  ...spacingCalculator.spacing({ margin: 'bottom-md' }),
  ':last-child': { marginBottom: 0 },
});

export const H1 = glamorous(TypeScale.H1)({
  ...spacingCalculator.spacing({ margin: 'bottom-xs' }),
  ':last-child': { marginBottom: 0 },
});

export const H2 = glamorous(TypeScale.H2)({
  ...spacingCalculator.spacing({ margin: 'bottom-xs' }),
  ':last-child': { marginBottom: 0 },
});

export const H3 = glamorous(TypeScale.H3)({
  ...spacingCalculator.spacing({ margin: 'bottom-xs' }),
  ':last-child': { marginBottom: 0 },
});

export const H4 = glamorous(TypeScale.H4)({
  ...spacingCalculator.spacing({ margin: 'bottom-xs' }),
  ':last-child': { marginBottom: 0 },
});

export const H5 = glamorous(TypeScale.H5)({
  ...spacingCalculator.spacing({ margin: 'bottom-xs' }),
  ':last-child': { marginBottom: 0 },
});

export const H6 = glamorous(TypeScale.H5)({
  ...spacingCalculator.spacing({ margin: 'bottom-xs' }),
  ':last-child': { marginBottom: 0 },
});

export const Ul = glamorous.ul(
  spacingCalculator.spacing({ margin: 'bottom-md' }),
  {
    paddingLeft: remCalc(20),
    maxWidth: `calc(${MEASURE.MEDIUM} - ${remCalc(20)})`,
  },
);

export const Li = glamorous(TypeScale.Li)({
  listStyleType: 'disc',
});

export const Strong = glamorous.strong({
  fontWeight: FONT_WEIGHT_NORMAL,
});

export const Hr = glamorous.hr(
  spacingCalculator.spacing({ margin: 'bottom-md' }),
  {
    border: 0,
    height: 1,
    background: COLORS.black008,
  },
);

export const TextWrapper = glamorous(wrappers.TextWrapper)({});
