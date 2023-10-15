const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(
    getDefaultConfig(__dirname),
    {
      resolver: {
        assetExts: ['db', 'xml', 'png', 'ttf', 'mp3', 'jpg'], // Add 'mp3' to the list
      },
    }
  );
