import glamorous from 'glamorous';

import * as spacingCalculator from '@identity/spacing';
import { PAGE_WRAPPER_SPACING_MOBILE, DESKTOP } from '@identity/constants';

export default glamorous.main(
  ({ spacing }) => spacing && spacingCalculator.spacing(spacing),
  {
    paddingLeft: PAGE_WRAPPER_SPACING_MOBILE,
    paddingRight: PAGE_WRAPPER_SPACING_MOBILE,
    position: 'relative',

    [DESKTOP]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
);
