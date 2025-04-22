const withSvgr = require("next-svgr");

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 300,
    };
    return config;
  },
};

module.exports = withSvgr(baseConfig);

