import glamorous from 'glamorous';

import { remCalc } from '../../lib/styleMethods';
import { HEADER } from '../../identity/zIndex';
import * as c from '../../identity/constants';
import * as t from '../../identity/type';

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
    lineHeight: remCalc(80),
    paddingLeft: remCalc(15),
    paddingRight: remCalc(15),
  },
  ({ active }) => ({
    color: active && c.colors.nfRed,
  }),
);

export const SearchJobsBtn = glamorous.button({
  background: c.colors.black001,
  border: 'none',
  borderLeft: `${remCalc(10)} solid ${c.colors.nfRed}`,
  color: c.colors.white,
  fontSize: 16,
  paddingLeft: 62,
  paddingRight: 62,
  outline: 'none',
  marginLeft: 45,
});
