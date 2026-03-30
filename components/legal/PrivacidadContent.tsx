export function PrivacidadContent() {
  return (
    <>
      <p className="text-[#ff8c00] text-xs uppercase tracking-widest font-bold">Última actualización: enero 2025</p>
      <section>
        <h3 className="text-white font-bold mb-2">1. Responsable del Tratamiento</h3>
        <p>Iorana Digital, con dominio <strong className="text-white">iorana.digital</strong>, es responsable del tratamiento de los datos personales recabados a través de este formulario, conforme al Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).</p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">2. Datos que recabamos</h3>
        <p>Nombre, email, teléfono (opcional) y empresa, con la finalidad de gestionar tu consulta y enviarte información sobre nuestros servicios.</p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">3. Base jurídica</h3>
        <p>Consentimiento explícito del interesado (art. 6.1.a RGPD) marcando la casilla de aceptación.</p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">4. Conservación</h3>
        <p>Los datos se conservan durante el tiempo necesario para atender tu consulta y un máximo de 3 años si existe relación comercial.</p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">5. Tus derechos</h3>
        <p>Puedes ejercer derechos de acceso, rectificación, supresión, portabilidad y oposición escribiendo a <strong className="text-white">hola@iorana.digital</strong> con asunto "RGPD".</p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">6. Cesión de datos</h3>
        <p>No cedemos datos a terceros salvo obligación legal. Usamos proveedores (Supabase, Vercel) con acuerdos DPA bajo RGPD.</p>
      </section>
    </>
  );
}