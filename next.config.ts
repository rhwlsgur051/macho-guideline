import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  allowedDevOrigins: ['4e45-112-147-117-52.ngrok-free.app'],
  assetPrefix: process.env.NODE_ENV === "production"
    ? "https://rhwlsgur051.github.io/macho-guideline"
    : "",
};

export default nextConfig;
