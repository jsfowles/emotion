import glamorous from 'glamorous';

import * as c from './constants';
import { remCalc } from '../lib/styleMethods';

export const Input = glamorous.input({
  border: `1px solid ${c.colors.black007}`,
  boxShadow: 'none',
  lineHeight: remCalc(70),
  fontSize: 16,
  padding: '0 25px',
  margin: '0 auto',
  display: 'inline-block',

  ':focus': {
    outline: 'none',
  },
});
