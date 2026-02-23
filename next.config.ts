import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  // Webpack configuration for proper module resolution
  webpack: (config, { isServer }) => {
    // Ensure node_modules resolution stays within the Frontend directory
    if (config.resolve) {
      // Set the root for module resolution to the current directory
      config.resolve.roots = [path.resolve(__dirname)];
      
      // Ensure modules are resolved from the current directory first
      if (!config.resolve.modules) {
        config.resolve.modules = [];
      }
      // Prepend node_modules from current directory
      config.resolve.modules = [
        path.resolve(__dirname, 'node_modules'),
        ...config.resolve.modules.filter((m: string) => m !== 'node_modules'),
      ];
    }
    return config;
  },
  // Add turbopack config to support both webpack and turbopack
  turbopack: {
    // Empty config - webpack will be used when --webpack flag is passed
  },
};

export default nextConfig;
