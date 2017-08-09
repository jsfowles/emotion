import glamorous from 'glamorous';

import * as c from '../../identity/constants';

export const Img = glamorous.img(
  {
    maxWidth: '100%',
    opacity: 0,
    transition: '600ms opacity ease',
  },
  ({ loaded }) => loaded && ({ opacity: 1 }),
  ({ fill }) => fill && ({ width: '100%' }),
  ({ absolute }) => absolute && ({
    ...c.ABSOLUTE,
    objectFit: 'cover',
  }),
);
