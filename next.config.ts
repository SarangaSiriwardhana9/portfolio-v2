import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  transpilePackages: ["framer-motion"],
  webpack: (config, { isServer }) => {
    // Fix for framer-motion in static export
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
  // Additional configuration for static export compatibility
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
