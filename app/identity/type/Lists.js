import glamorous from 'glamorous';

import { bodyBase } from './typeBase';
import { remCalc } from '../../lib/styleMethods';
import * as s from '../spacing';
import * as c from '../constants';

export const Ul = glamorous.ul(
  bodyBase,
  ({ spacing }) => spacing && s.spacing(spacing),
  {
    paddingLeft: remCalc(25),
  },
);

export const Li = glamorous.li(
  bodyBase,
  ({ spacing }) => spacing && s.spacing(spacing),
  {
    fontSize: remCalc(c.P_MOBILE_FONT_SIZE),

    [c.DESKTOP]: {
      fontSize: remCalc(c.P_DESKTOP_FONT_SIZE),
    },

    [c.DESKTOP_HD]: {
      fontSize: remCalc(c.P_DESKTOP_HD_FONT_SIZE),
    },
  },
);
