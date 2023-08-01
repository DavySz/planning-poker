const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@presentation': path.resolve(__dirname, 'src/presentation'),
    '@infra': path.resolve(__dirname, 'src/infra'),
    '@main': path.resolve(__dirname, 'src/main'),
    '@data': path.resolve(__dirname, 'src/data'),
  })
);