/** @type {import('next').NextConfig} */

// next.config.js
const semi = require('@douyinfe/semi-next').default({
  /* the extension options */
});
module.exports = semi({
  reactStrictMode: true,
  concurrentFeatures:true,
  // your custom Next.js configuration
});

