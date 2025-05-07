const withSvgr = require("next-svgr");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'dl.airtable.com', // anterior
      'v5.airtableusercontent.com', // nuevo dominio
    ],
  },
};

module.exports = withSvgr(nextConfig);




