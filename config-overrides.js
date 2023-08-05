const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@presentation': path.resolve(__dirname, 'src/presentation'),
    '@domain': path.resolve(__dirname, 'src/domain'),
    '@infra': path.resolve(__dirname, 'src/infra'),
    '@main': path.resolve(__dirname, 'src/main'),
    '@data': path.resolve(__dirname, 'src/data'),
  })
);