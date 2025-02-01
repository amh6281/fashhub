import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  images: {
    domains: ['loremflickr.com', 'avatars.githubusercontent.com'],
  },
};

export default nextConfig;
