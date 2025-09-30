import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisations pour le développement
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  // Optimisation des images
  images: {
    formats: ["image/webp", "image/avif"],
  },
  // Réduire la taille du bundle
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
