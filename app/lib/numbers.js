export const randomKey = outOf => parseInt((Math.random() * outOf), 0);
export const even = i => (i + 1) % 2;
export const percentage = (i1, i2) => `${(i1 / i2) * 100}%`;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const interpolate = (start, end, val) => ((1 - val) * start) + (val * end);

export const round = (value, precision = 0) => {
  const mult = 10 ** precision;
  return Math.round(value * mult) / mult;
};

export const toDollars = (x) => {
  if (x === 0) { return '0.00'; }

  const price = x.toString();
  const dollars = price.slice(0, price.length - 2);
  const cents = price.slice(price.length - 2);

  return `${dollars}.${cents}`;
};

export const position = (range, time, base = 0, offset = 0) => (
  base + (clamp((time - offset), 0, 1) * range)
);
