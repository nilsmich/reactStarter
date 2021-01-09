const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@mo/design-system-lib',
]);

module.exports = withPlugins([
  withTM,
]);
