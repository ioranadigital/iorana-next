/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirección 1: /pyme/vcard y /pymes/vcard → página de pymes
      {
        source: '/pyme/vcard',
        destination: '/pymes/todo-para-tu-negocio',
        permanent: false,
        statusCode: 301,
      },
      {
        source: '/pymes/vcard',
        destination: '/pymes/todo-para-tu-negocio',
        permanent: false,
        statusCode: 301,
      },
      // Redirección 2: /vcard → página de inicio
      {
        source: '/vcard',
        destination: '/',
        permanent: false,
        statusCode: 301,
      },
      {
        source: '/vcard/',
        destination: '/',
        permanent: false,
        statusCode: 301,
      },
    ]
  },
}

module.exports = nextConfig
