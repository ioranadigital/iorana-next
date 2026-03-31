/** @type {import('next').NextConfig} */
const nextConfig = {
 async redirects() {
  return [
    {
      source: '/pyme/vcard',
      destination: 'https://iorana.digital/pymes/todo-para-tu-negocio',
      permanent: false,   // false = no usa 308
      statusCode: 301,    // fuerza 301 explícito
    },
    {
      source: '/pymes/vcard',
      destination: 'https://iorana.digital/pymes/todo-para-tu-negocio',
      permanent: false,
      statusCode: 301,
    },
  ]
},

module.exports = nextConfig
