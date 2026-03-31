/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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
       {
        source: '/vcard',
        destination: '/pymes/todo-para-tu-negocio',
        permanent: false,
        statusCode: 301,
      },
      {
        source: '/vcard',
        destination: '/',
        permanent: false,
        statusCode: 301,
      },
    ]
  },
  
  // ← aquí va el resto de tu config original si tenías algo
}

module.exports = nextConfig
