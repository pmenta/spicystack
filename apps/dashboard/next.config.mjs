import "./src/utils/env.mjs";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default config;
