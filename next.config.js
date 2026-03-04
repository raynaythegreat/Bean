/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'localhost' },
      { hostname: 'pbs.twimg.com' },
      { hostname: 'instagram.com' },
      { hostname: 'scontent.cdninstagram.com' },
      { hostname: 'graph.facebook.com' },
      { hostname: 'tiktok.com' },
      { hostname: 'pinterest.com' },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb',
    },
  },
};

module.exports = nextConfig;