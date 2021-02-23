const withPlugins = require('next-compose-plugins');

const images = require('next-images');
const pwa = require('next-pwa');

module.exports = withPlugins([
  [images, { esModule: true }],
  [pwa, { pwa: { dest: 'public' } }],
], {
  future: { webpack5: true }
})
