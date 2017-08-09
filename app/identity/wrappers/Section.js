import glamorous from 'glamorous';

import * as c from '../constants';
import * as s from '../spacing';

export default glamorous.section(
  ({ spacing }) => spacing && s.spacing(spacing),
  s.horizontal(c.PAGE_WRAPPER_SPACING_MOBILE),
  { position: 'relative' },
);
