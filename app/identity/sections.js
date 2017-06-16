import glamorous from 'glamorous';

import * as c from './constants';
import { horizontalSpacing } from './spacing';

export const Section = glamorous.section({
  ...horizontalSpacing(c.PAGE_WRAPPER_SPACING_MOBILE),

  [c.DESKTOP_SCREEN_SIZE]: {
    ...horizontalSpacing(c.PAGE_WRAPPER_SPACING_DESKTOP),
  },

  [c.DESKTOP_HD_SCREEN_SIZE]: {
    ...horizontalSpacing(c.PAGE_WRAPPER_SPACING_DESKTOP_HD),
  },
});
