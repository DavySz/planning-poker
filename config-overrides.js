const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@presentation': path.resolve(__dirname, 'src/presentation'),
  })
);