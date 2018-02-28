import { remCalc } from '../helperMethods';

describe('remCalc', () => {
  it('converts pixel value to rems', () => {
    const rems = remCalc(10);
    expect(rems).toBe('0.63rem');
  });

  it('can take a second parameter to alter baseValue', () => {
    const rems = remCalc(10, 18);
    expect(rems).toBe('0.56rem');
  });
});
