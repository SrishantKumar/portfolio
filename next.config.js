/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Comment out these lines
  // assetPrefix: '/portfolio/',
  // basePath: '/portfolio',
  // trailingSlash: true,
};

module.exports = nextConfig;
