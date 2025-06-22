// eslint-disable-next-line @typescript-eslint/no-require-imports
const { withContentlayer } = require("next-contentlayer");


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // compiler: {
  //   removeConsole: true
  // }
};

module.exports = withContentlayer(nextConfig);
