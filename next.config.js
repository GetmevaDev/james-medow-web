/** @type {import('next').NextConfig} */

const { default: classnamesMinifier } = require("@nimpl/classnames-minifier");

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

module.exports = (phase) =>
  withBundleAnalyzer(
    classnamesMinifier({
      prefix: "_",
      reservedNames: ["_en", "_de"],
      disabled:
        phase === PHASE_PRODUCTION_SERVER ||
        process.env.NODE_ENV === "development",
    })(nextConfig)
  );
