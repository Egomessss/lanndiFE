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
  // rewrites: () => {
  //   return [
  //     {
  //       source: '/backend/:path*',
  //       destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/:path*`,
  //     },
  //   ];
  // },

  // compiler: {
  //   removeConsole: process.env.NODE_ENV === 'production',
  // },
};

if (process.env.NODE_ENV === 'production') nextConfig.compiler = { removeConsole: true };

export default nextConfig;
