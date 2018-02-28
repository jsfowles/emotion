import { parameterize, capitalize, humanize, getUrlParams } from '../strings';

describe('String Helpers', () => {
  it('can parameterize strings', () => {
    const parameterizedString = parameterize('This is a string');
    expect(parameterizedString).toBe('this-is-a-string');
  });

  it('can capitalize strings', () => {
    const capitalizedString = capitalize('this is a string');
    expect(capitalizedString).toBe('This is a string');
  });

  it('can humanize strings', () => {
    const humanizedString = humanize('this is a string');
    expect(humanizedString).toBe('This Is A String');
  });

  it('can get url parameters', () => {
    const urlParams = getUrlParams('http://example.com?this=is&a=string');
    expect(urlParams).toEqual({ this: 'is', a: 'string' });
  });
});
