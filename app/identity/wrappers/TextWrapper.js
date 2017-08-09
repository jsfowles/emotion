import glamorous from 'glamorous';

import * as s from '../spacing';

export default glamorous.div(
  ({ spacing }) => spacing && s.spacing(spacing),
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  ({ alignment }) => ({
    textAlign: alignment || 'left',
  }),
);
