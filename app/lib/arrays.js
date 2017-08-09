export const buildRows = (arr, length) => arr.reduce((rows, val, i) => (
  i % length === 0 ? rows.push([ val ]) : rows[rows.length - 1].push(val)
) && rows, []);
