/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["assets.coincap.io", "cryptoicons.org"],
  },
};

module.exports = nextConfig;
