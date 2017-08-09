import glamorous from 'glamorous';

import * as s from '../spacing';

export default glamorous.main(
  ({ spacing }) => spacing && s.spacing(spacing),
  { position: 'relative' },
);
