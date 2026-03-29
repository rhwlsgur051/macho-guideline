import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  allowedDevOrigins: [], // ex) ngrok-free.app, local.dev 등
  output: "export",
  basePath: "/macho-guideline",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
