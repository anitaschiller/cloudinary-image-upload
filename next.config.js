/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    CLOUDINARY_PRESET: process.env.CLOUDINARY_PRESET,
    CLOUDINARY_CLOUD: process.env.CLOUDINARY_CLOUD,
  },
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
