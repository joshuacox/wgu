import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// Support basePath for GitHub Pages if repo is user.github.io/wgu
// If custom domain is used, NEXT_PUBLIC_BASE_PATH can be empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isProd ? "/wgu" : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath === "" ? undefined : basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
