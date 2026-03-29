import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  allowedDevOrigins: [], // ex) ngrok-free.app, local.dev 등
    assetPrefix: process.env.NODE_ENV === "production"
    ? "https://rhwlsgur051.github.io/macho-guideline"
    : "",
};

export default nextConfig;
