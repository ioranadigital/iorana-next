/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...tu configuración existente...
  async redirects() {
    return [
      {
        source: "/r/:path*",
        destination: "https://qr.iorana.dev/slug/iorana.digital/:path*",
        permanent: false, // 302, no 301
      },
    ];
  },
};

module.exports = nextConfig;
