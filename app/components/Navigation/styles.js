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
  left: c.PAGE_WRAPPER_SPACING_DESKTOP_HD,
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
  paddingLeft: c.PAGE_WRAPPER_SPACING_DESKTOP_HD,
  paddingRight: c.PAGE_WRAPPER_SPACING_DESKTOP_HD,
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
