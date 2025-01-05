import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@react-email/render"],
  },
  images: {
    domains: [
      "download.logo.wine",
      "open-telemetry.github.io",
      "knexjs.org",
      "static-00.iconduck.com",
      "cdn.prod.website-files.com",
      "www.okoone.com",
    ],
  },
};

export default nextConfig;
