import glamorous from 'glamorous';

import { remCalc } from '../../lib/styleMethods';
import { HEADER } from '../../identity/zIndex';
import * as c from '../../identity/constants';
import * as t from '../../identity/type';
import * as s from '../../identity/spacing';

export const LogoLink = glamorous.a({
  display: 'block',
  width: remCalc(140),
  position: 'absolute',
  top: '50%',
  left: remCalc(30),
  transform: 'translateY(-50%)',
});

export const Header = glamorous.header({
  background: c.colors.white,
  position: 'fixed',
  width: '100%',
  zIndex: HEADER,
});

export const Nav = glamorous.nav({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const NavLink = glamorous(t.A)(
  {
    color: c.colors.black001,
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: remCalc(80),
    paddingLeft: remCalc(15),
    paddingRight: remCalc(15),
    position: 'relative',
  },
  ({ active }) => (active && ({
    color: c.colors.nfRed,

    ':before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 4,
      background: c.colors.nfRed,
    },
  })),
);

export const SearchJobsBtn = glamorous.button(
  s.spacing({ padding: 'horizontal-lg' }),
  {
    background: c.colors.black001,
    border: 'none',
    borderLeft: `${remCalc(10)} solid ${c.colors.nfRed}`,
    color: c.colors.white,
    cursor: 'pointer',
    fontSize: 16,
    outline: 'none',
    marginLeft: 45,
  },
  ({ searchOpen }) => ({
    width: searchOpen && '100%',
  }),
);
