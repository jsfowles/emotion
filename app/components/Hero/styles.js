import glamorous from 'glamorous';

import * as c from '../../identity/constants';
import * as t from '../../identity/type';
import * as s from '../../identity/spacing';
import { HOME_HERO_CONTENT } from '../../identity/zIndex';

export const Title = glamorous(t.H1Hero)({
  color: c.colors.white,
  textAlign: 'center',
  margin: '0 auto',
});

export const HeroContent = glamorous.div({
  position: 'relative',
  zIndex: HOME_HERO_CONTENT,
});

export const Hero = glamorous.section(
  s.horizontal(c.PAGE_WRAPPER_SPACING_MOBILE, 'padding'),
  {
    background: c.colors.black001,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '75vh',
    position: 'relative',
  },
);