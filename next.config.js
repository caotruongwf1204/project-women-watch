/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
      domains: ['api-product-watch.vercel.app'],
      unoptimized: true,
  },
  }

module.exports = nextConfig
