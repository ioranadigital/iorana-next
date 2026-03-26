/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... tus otras configuraciones (como ignoreBuildErrors)
  
  async rewrites() {
    return [
      {
        // Esto captura CUALQUIER ruta (excepto archivos estáticos como imágenes)
        // y las redirige internamente a la página principal
        source: '/:path*',
        destination: '/',
      },
    ];
  },
};

export default nextConfig;
