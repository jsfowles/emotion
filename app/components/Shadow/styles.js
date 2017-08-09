import glamorous from 'glamorous';

import { remCalc } from '../../lib/styleMethods';

export const Shadow = glamorous.div({
  position: 'absolute',
  width: '100%',
  bottom: `-${remCalc(25)}`,
  left: 0,
  backgroundImage: 'radial-gradient(closest-side, rgba(0,0,0,0.6) 0, rgba(0,0,0,0.2) 50%, transparent 100%)',
  backgroundPosition: `0% -${remCalc(15)}`,
  backgroundRepeat: 'no-repeat',
  height: remCalc(25),
  overflow: 'hidden',
  pointerEvents: 'none',
});
