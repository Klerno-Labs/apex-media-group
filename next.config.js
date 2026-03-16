/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/apex-media-group",
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;