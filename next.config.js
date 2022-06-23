/** @type {import('next').NextConfig} */
require('dotenv').config({ path: '.env.development.local' });

// next.config.js
const semi = require('@douyinfe/semi-next').default({
  /* the extension options */
});
module.exports = semi({
  reactStrictMode: true,
  concurrentFeatures:true,
  // your custom Next.js configuration
  typescript: {
    ignoreBuildErrors: true,
  }
});

