/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  modularizeImports: {
    "@iconify/react": {
      transform: "@iconify/react/dist/iconify.js",
    },
  },
  experimental: {
    optimizePackageImports: [
      "@iconify/react",
      "framer-motion",
      "@solana/wallet-adapter-react",
    ],
  },
};

module.exports = nextConfig;
