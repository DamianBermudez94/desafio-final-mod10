const withSvgr = require("next-svgr");

const nextConfig = withSvgr({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true, // Habilita soporte para styled-components
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 300, // Ajusta el tiempo de revisión según tus necesidades
    };
    return config;
  },
});

module.exports = nextConfig;