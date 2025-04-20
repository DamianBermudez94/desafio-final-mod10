const withSvgr = require("next-svgr");

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [

      {
        protocol: "https",
        hostname: "dl.airtable.com",
        pathname: "/**",
        domains: ["dl.airtable.com"],
      },
    ],
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 300,
    };
    return config;
  },
};

module.exports = withSvgr(baseConfig);

