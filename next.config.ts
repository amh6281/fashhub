import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  async rewrites() {
    return [
      {
        source: '/upload/:slug',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/upload/:slug`,
      },
    ];
  },
  images: {
    domains: ['loremflickr.com', 'avatars.githubusercontent.com'],
  },
};

export default nextConfig;
