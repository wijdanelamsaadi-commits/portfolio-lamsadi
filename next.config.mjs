/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/portfolio-lamsadi',
  assetPrefix: '/portfolio-lamsadi/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
