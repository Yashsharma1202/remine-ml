import type { NextConfig } from "next";

let githubRepo = "";
if (process.env.GITHUB_REPOSITORY) {
  githubRepo = "/" + process.env.GITHUB_REPOSITORY.split("/")[1];
}

const nextConfig: any = {
  output: "export",
  basePath: githubRepo,
  assetPrefix: githubRepo,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  // allow the dev server's JS/resources to load when opened over the LAN IP
  allowedDevOrigins: ["10.10.7.70", "localhost", "127.0.0.1"],
};

export default nextConfig;
