/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
