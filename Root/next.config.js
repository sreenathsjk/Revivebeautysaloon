/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
};

module.exports = nextConfig;
