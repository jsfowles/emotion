import glamorous from 'glamorous';

import { COLORS, ANIMATION } from '@identity/constants';

export const A = glamorous.a({
  color: COLORS.brandPrimary,
  textDecoration: 'none',
  transition: `color ${ANIMATION.durationShort} ${ANIMATION.timing}`,

  '&:hover': {
    color: COLORS.brandSecondary,
  },
});
