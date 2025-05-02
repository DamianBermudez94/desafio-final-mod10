const withSvgr = require("next-svgr");

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  }
};

module.exports = withSvgr(baseConfig);

