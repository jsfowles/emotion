/* eslint-disable */
module.exports = {
  plugins: [
    require('postcss-cssnext')(),
    require('postcss-modules')({
      generateScopedName: '[local]',
    }),
    require('cssnano')(),
  ],
};
