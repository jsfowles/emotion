import glamorous from 'glamorous';

import * as s from '../spacing';
import { remCalc } from '../../lib/styleMethods';

export default glamorous.main(
  ({ spacing }) => spacing && s.spacing(spacing),
  {
    paddingTop: remCalc(80),
    position: 'relative',
  },
);
