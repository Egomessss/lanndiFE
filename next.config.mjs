/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'assets.lanndi.com',
          port: '',
        },
      ],
    },
    rewrites: () => {
      return [
        {
          source: '/backend/:path*',
          destination: 'https://api.lanndi.com/:path*',
        },
      ];
    },
  }
;

export default nextConfig;
