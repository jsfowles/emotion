import glamorous from 'glamorous';

import * as c from '../../identity/constants';
import * as t from '../../identity/type';
import * as w from '../../identity/wrappers';

export const HeroText = glamorous(t.H1Hero)({
  color: c.colors.white,
  textAlign: 'center',
  margin: '0 auto',
});

export const Main = glamorous(w.Main)();
