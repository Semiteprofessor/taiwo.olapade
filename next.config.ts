/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["@react-email/render"],
  images: {
    domains: [
      "download.logo.wine",
      "open-telemetry.github.io",
      "knexjs.org",
      "static-00.iconduck.com",
      "cdn.prod.website-files.com",
      "www.okoone.com",
      "i.postimg.cc",
    ],
  },
};

export default nextConfig;
