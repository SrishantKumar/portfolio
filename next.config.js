/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/portfolio/',
  basePath: '/portfolio',
  trailingSlash: true,
};

module.exports = nextConfig;
