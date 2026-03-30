export function CookiesContent() {
  return (
    <>
      <p className="text-[#ff8c00] text-xs uppercase tracking-widest font-bold">Última actualización: enero 2025</p>
      <section>
        <h3 className="text-white font-bold mb-2">¿Qué son las cookies?</h3>
        <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo para recordar preferencias y analizar el uso.</p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">Cookies que utilizamos</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="text-[#ebf2f7]/40 uppercase tracking-wider">
                <th className="text-left pb-2 pr-4">Nombre</th>
                <th className="text-left pb-2 pr-4">Tipo</th>
                <th className="text-left pb-2">Finalidad</th>
              </tr>
            </thead>
            <tbody className="text-[#ebf2f7]/70 space-y-1">
              {[
                ["_session", "Técnica", "Gestión de sesión de usuario"],
                ["_ga", "Analítica", "Google Analytics — tráfico anónimo"],
                ["consent", "Preferencia", "Recordar tu elección de cookies"],
              ].map(([name, type, purpose]) => (
                <tr key={name} className="border-t border-white/5">
                  <td className="py-2 pr-4 font-mono text-[#ff8c00]">{name}</td>
                  <td className="py-2 pr-4">{type}</td>
                  <td className="py-2">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">Control de cookies</h3>
        <p>Puedes configurar o deshabilitar las cookies desde la configuración de tu navegador. Ten en cuenta que deshabilitar cookies técnicas puede afectar la funcionalidad del sitio.</p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">Consentimiento</h3>
        <p>Al continuar navegando en <strong className="text-white">iorana.digital</strong> sin modificar la configuración, aceptas el uso de cookies conforme a esta política.</p>
      </section>
    </>
  );
}