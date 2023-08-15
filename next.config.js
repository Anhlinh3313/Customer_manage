/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  // images.unoptimized : true,
  swcMinify: true,
  images: {
    domains: ["vncdn.sabasports.com", "customer-manage-dip.b-cdn.net"],
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  env: {
    NEXT_PUBLIC_API_DOMAIN: "https://api.customer-manage-dip.com",
    // NEXT_PUBLIC_API_DOMAIN: "http://localhost:4444",
    NEXT_PUBLIC_SCHEMA_NAME: "customer-manager-dip",
    NEXT_PUBLIC_SCHEMA_URL: "https://customer-manager-dip.com",
    NEXT_PUBLIC_SCHEMA_LOGO:
      "https://customer-manage-dip.b-cdn.net/logo-customer-manage-dip.png",
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};

module.exports = nextConfig;
