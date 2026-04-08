import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/**',
      },
      {
        protocol: 'http', // ضيفنا ده كمان احتياطي
        hostname: 'ecommerce.routemisr.com',
        pathname: '/**',
      },
    ],
  },
};
