/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  profiler: true,
  images: {
    domains: ["localhost", "res.cloudinary.com"],
    unoptimized: true,
    disableStaticImages: true,
  },
  swcMinify: false,
  experimental: {
    legacyBrowsers: false,
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
