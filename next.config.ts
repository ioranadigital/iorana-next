/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/pyme/vcard',
        destination: '/pymes/todo-para-tu-negocio',
        permanent: true, // 301
      },
      {
        source: '/pyme/vcard/',
        destination: '/pymes/todo-para-tu-negocio',
        permanent: true,
      },
      {
        source: '/pymes/vcard',
        destination: '/pymes/todo-para-tu-negocio',
        permanent: true,
      },
      {
        source: '/pymes/vcard/',
        destination: '/pymes/todo-para-tu-negocio',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
