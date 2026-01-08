const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // example, add allowed hosts used by your project
      { protocol: 'https', hostname: 'example.com' },
    ],
  },
  turbopack: { root: path.resolve(__dirname, '..') },
};