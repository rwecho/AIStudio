import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'os.alipayobjects.com',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'gzvyrqvfenspzkvaqfsk.supabase.co',
        port: '',
        pathname: '',
        search: '',
      },
    ],
  },
}

export default nextConfig
