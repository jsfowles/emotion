import glamorous from 'glamorous';

import {
  TYPE_SCALE,
  DESKTOP,
  DESKTOP_HD,
  MEASURE,
  FONT_COLOR_BASE,
} from '@identity/constants';

import * as s from '@identity/spacing';
import { remCalc } from '@lib/helperMethods';

const typeMapper = scale => (
  // First we need to map over the keys of the scale and reduce them to
  // return a object.
  // typeObject - The previous accumalated object.
  // el - The current element we are working on.
  Object.keys(scale).reduce((typeObject, el) => ({
    // Merge in our base object so the previous elements will be there
    ...typeObject,

    // Take the new element and start building it. Since it will start
    // as a capitalized element, lowercase it and then add the font sizes
    // for DESKTOP and DESKTOP_HD.
    [el]: glamorous[el.toLowerCase()](
      ({ spacing }) => spacing && s.spacing(spacing),
      ({ color }) => ({ color: color || FONT_COLOR_BASE }),
      ({ fontWeight }) => ({ fontWeight: fontWeight || scale[el].FONT_WEIGHT }),
      ({ fontFamily }) => ({ fontFamily: fontFamily || scale[el].FONT_FAMILY }),
      ({ lineHeight }) => ({ lineHeight: lineHeight || scale[el].LINE_HEIGHT }),
      {
        fontSize: scale[el].BASE && remCalc(scale[el].BASE),

        [DESKTOP]: {
          fontSize: scale[el].DESKTOP && remCalc(scale[el].DESKTOP),
        },

        [DESKTOP_HD]: {
          fontSize: scale[el].DESKTOP_HD && remCalc(scale[el].DESKTOP_HD),
        },
      },
      ({ measure }) => ({
        width: '100%',

        [DESKTOP]: {
          maxWidth: MEASURE[`${measure && measure.toUpperCase()}`] || MEASURE.MEDIUM,
        },
      }),
    ),
  }), {})
);

export default typeMapper(TYPE_SCALE);
