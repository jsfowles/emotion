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
