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
      "cdn.jsdelivr.net",
      "cdn.prod.website-files.com",
      "download.logo.wine",
      "static-00.iconduck.com",
      "minikube.sigs.k8s.io",
      "raw.githubusercontent.com",
      "cdn.worldvectorlogo.com",
      "upload.wikimedia.org",
      "cdn.prod.website-files.com",
    ],
  },
};

export default nextConfig;
