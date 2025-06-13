/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/join',
        destination: '/login',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
