export const parameterize = string => (
  string.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
);

export const capitalize = ([ first, ...rest ]) => first.toUpperCase() + rest.join('').toLowerCase();

export const humanize = str => (
  str.toString()
    .toLowerCase()
    .replace(/[_-]/g, ' ')
    .replace(/(?:^|\s)\S/g, (a => a.toUpperCase()))
);

export const getUrlParams = (search) => {
  if (search && typeof search === 'string') {
    const hasIndex = search.includes('?');
    const params = {};
    const hashes = hasIndex ?
      search.slice(search.indexOf('?') + 1).split('&') :
      [];

    hashes.map((hash) => {
      const [ key, val ] = hash.split('=');
      params[key] = decodeURIComponent(val);
      return null;
    });

    return params;
  }

  return {};
};
