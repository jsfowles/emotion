import glamorous from 'glamorous';

import * as c from '../constants';
import { bodyBase } from './typeBase';
import { remCalc } from '../../lib/styleMethods';
import * as s from '../spacing';

export default glamorous.p(
  bodyBase,
  {
    fontSize: remCalc(c.P_MOBILE_FONT_SIZE),

    [c.DESKTOP]: {
      fontSize: remCalc(c.P_DESKTOP_FONT_SIZE),
    },

    [c.DESKTOP_HD]: {
      fontSize: remCalc(c.P_DESKTOP_HD_FONT_SIZE),
    },
  },
  ({ spacing }) => spacing && s.spacing(spacing),
);
