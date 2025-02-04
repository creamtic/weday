import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    autoPrerender: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  // TODO: REMOVE this ignore code
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/invite",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
