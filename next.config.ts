import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  transpilePackages: ["framer-motion"],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Additional headers for SEO
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
