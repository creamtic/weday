import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    autoPrerender: false,
  },
  images: {
    domains: ["drive.google.com", "drive.usercontent.google.com"],
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
