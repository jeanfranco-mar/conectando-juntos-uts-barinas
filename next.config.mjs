/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "static.tildacdn.info",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
