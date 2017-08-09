import glamorous from 'glamorous';

import * as c from '../../identity/constants';
import * as s from '../../identity/spacing';
import { HOME_HERO_CONTENT } from '../../identity/zIndex';

export const HeroContent = glamorous.div(
  s.spacing({ padding: 'vertical-xl' }),
  {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: HOME_HERO_CONTENT,
  },
);

export const HeroWrapper = glamorous.section(
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
