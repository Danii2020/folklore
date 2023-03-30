/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['i.etsystatic.com'],
  },
};

module.exports = nextConfig;
