import glamorous from 'glamorous';

import * as c from '../constants';
import { headerBase } from './typeBase';
import { remCalc } from '../../lib/styleMethods';
import * as s from '../spacing';

export default glamorous.h2(
  headerBase,
  {
    fontSize: remCalc(c.H2_MOBILE_FONT_SIZE),
    fontWeight: c.H2_FONT_WEIGHT,

    [c.DESKTOP]: {
      fontSize: remCalc(c.H2_DESKTOP_FONT_SIZE),
    },

    [c.DESKTOP_HD]: {
      fontSize: remCalc(c.H2_DESKTOP_HD_FONT_SIZE),
    },
  },
  ({ spacing }) => spacing && s.spacing(spacing),
);
