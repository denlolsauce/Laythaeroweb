import type { NextConfig } from "next";

/**
 * GitHub Pages serves a project site from /<repo>, so the asset prefix must be
 * set at build time. Enabled only when BASE_PATH is passed (the Pages workflow
 * does this) so local dev and previews stay at the root.
 */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  // Pages has no image optimiser; harmless today, required if next/image is added.
  images: { unoptimized: true },
  // Emit /contact/index.html style paths so static hosting resolves them.
  trailingSlash: true,
};

export default nextConfig;
