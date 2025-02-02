import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    autoPrerender: false,
  },
  images: {
    domains: ["drive.google.com", "drive.usercontent.google.com"],
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
