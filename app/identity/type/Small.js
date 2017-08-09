import glamorous from 'glamorous';

import * as c from '../constants';
import * as s from '../spacing';
import { remCalc } from '../../lib/styleMethods';
import { bodyBase } from './typeBase';

export default glamorous.small(
  bodyBase,
  ({ spacing }) => spacing && s.spacing(spacing),
  {
    fontSize: remCalc(c.SMALL_MOBILE_FONT_SIZE),

    [c.DESKTOP]: {
      fontSize: remCalc(c.SMALL_DESKTOP_FONT_SIZE),
    },

    [c.DESKTOP_HD]: {
      fontSize: remCalc(c.SMALL_DESKTOP_HD_FONT_SIZE),
    },
  },
);
