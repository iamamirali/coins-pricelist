/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "assets.coincap.io",
      "cryptoicons.org",
      "cryptologos.cc",
      "s3.us-east-2.amazonaws.com",
      "nomics-api.s3.us-east-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
