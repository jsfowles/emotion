import glamorous from 'glamorous';
import { TYPE_SCALE, DESKTOP, DESKTOP_HD } from '@identity/constants';

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
    [el]: glamorous[el.toLowerCase()]({
      fontSize: scale[el].BASE,

      [DESKTOP]: {
        fontSize: scale[el].DESKTOP,
      },

      [DESKTOP_HD]: {
        fontSize: scale[el].DESKTOP_HD,
      },
    }),
  }), {})
);

export default typeMapper(TYPE_SCALE);
