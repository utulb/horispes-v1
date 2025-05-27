// next.config.js
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // This tells Next.js to export the app as a static site
  trailingSlash: true, // Optional: Adds trailing slashes to your URLs
};

export default nextConfig;
