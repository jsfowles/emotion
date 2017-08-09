import glamorous from 'glamorous';

import * as c from '../constants';
import * as s from '../spacing';

const buildGrid = percent => ({
  marginLeft: 0,
  marginRight: 0,

  [c.DESKTOP]: {
    marginBottom: 0,
    flexBasis: percent,
    width: percent,
  },

  [c.DESKTOP_HD]: { marginBottom: 0 },
});

const Grid = glamorous.div(
  ({ spacing }) => spacing && s.spacing(spacing),
  ({ justify }) => ({
    justifyContent: justify || 'flex-start',
  }),
);

export const Container = glamorous.section(
  ({ spacing }) => spacing && s.spacing(spacing),
  { position: 'relative' },
  ({ boxed }) => boxed && ({
    maxWidth: 1290,
    margin: `0 ${c.PAGE_WRAPPER_SPACING_MOBILE}`,

    [c.DESKTOP_HD]: {
      margin: '0 auto',
    },
  }),
);

export const Row = glamorous.div(
  {
    // TODO(RB): What should our max width be?
    maxWidth: 1290,
    margin: `0 ${c.PAGE_WRAPPER_SPACING_MOBILE}`,
    position: 'relative',

    [c.DESKTOP]: {
      display: 'flex',
      justifyContent: 'space-between',
    },

    [c.DESKTOP_HD]: {
      margin: '0 auto',
    },
  },
  ({ spacing }) => spacing && s.spacing(spacing),
  ({ justify }) => ({
    [c.DESKTOP]: {
      justifyContent: justify || 'flex-start',
    },
  }),
);

export const Grid100 = glamorous(Grid)(buildGrid('100%'));
export const Grid50 = glamorous(Grid)(buildGrid('50%'));
export const Grid40 = glamorous(Grid)(buildGrid('40%'));
export const Grid33 = glamorous(Grid)(buildGrid('33%'));
export const Grid25 = glamorous(Grid)(buildGrid('25%'));
export const Grid10 = glamorous(Grid)(buildGrid('10%'));
