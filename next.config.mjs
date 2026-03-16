/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/apex-media-group",
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;