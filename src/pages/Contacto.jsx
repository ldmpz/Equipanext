import React, { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: 'chaleco-roy',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, handle form submission here
    console.log('Contacto enviado:', formData);
    alert('¡Gracias por su mensaje! Nos pondremos en contacto a la brevedad.');
  };

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-[140px] pb-12 md:pt-[180px] md:pb-24">
      {/* Header Section */}
      <header className="mb-16 md:mb-24 text-center fade-in-up">
        {/* Logo EQUIPANEXT */}
        <div className="flex justify-center mb-6">
          <img alt="EQUIPANEXT" className="h-10 w-auto object-contain" src="/assets/images/marca/Logo.png"/>
        </div>
        <span className="inline-block bg-surface-variant text-on-surface-variant px-3 py-1 rounded font-mono-label text-mono-label mb-4 uppercase border border-outline-variant">
          Soporte Técnico &amp; Ventas
        </span>
        <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface mb-6 font-bold">
          Estamos aquí para ayudarte
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Conecte con nuestro equipo de especialistas. Proveemos soluciones en uniformes industriales, chalecos reflejantes y bordado personalizado diseñadas para la máxima exigencia y durabilidad.
        </p>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Contact Form */}
        <section className="md:col-span-7 bg-surface-container-lowest border border-outline-variant rounded shadow-sm p-6 md:p-8 relative overflow-hidden fade-in-up stagger-1">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
          <h2 className="text-headline-md font-headline-md text-on-surface mb-6">Envíenos un mensaje</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-label-caps font-label-caps text-on-surface-variant uppercase text-xs" htmlFor="name">Nombre</label>
                <input 
                  className="form-input w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-body-md font-body-md text-on-surface transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                  id="name" 
                  name="name" 
                  placeholder="Ej. Juan Pérez" 
                  required 
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-label-caps font-label-caps text-on-surface-variant uppercase text-xs" htmlFor="company">Empresa</label>
                <input 
                  className="form-input w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-body-md font-body-md text-on-surface transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                  id="company" 
                  name="company" 
                  placeholder="Ej. Industrias ABC" 
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-label-caps font-label-caps text-on-surface-variant uppercase text-xs" htmlFor="phone">Teléfono</label>
                <input 
                  className="form-input w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-body-md font-body-md text-on-surface transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                  id="phone" 
                  name="phone" 
                  placeholder="Ej. 55 1234 5678" 
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-label-caps font-label-caps text-on-surface-variant uppercase text-xs" htmlFor="email">Correo</label>
                <input 
                  className="form-input w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-body-md font-body-md text-on-surface transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                  id="email" 
                  name="email" 
                  placeholder="correo@empresa.com" 
                  required 
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-label-caps font-label-caps text-on-surface-variant uppercase text-xs" htmlFor="product">Producto de interés</label>
              <div className="relative">
                <select 
                  className="form-input w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-body-md font-body-md text-on-surface appearance-none transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                  id="product" 
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                >
                  <option value="chaleco-roy">Chaleco Reflejante ROY</option>
                  <option value="chaleco-nova">Chaleco Reflejante NOVA</option>
                  <option value="chaleco-brigadista">Chaleco Reflejante Brigadista</option>
                  <option value="chaleco-isa">Chaleco Reflejante ISA</option>
                  <option value="overoles">Overoles Industriales</option>
                  <option value="camisas">Camisas Industriales</option>
                  <option value="pantalones">Pantalones Industriales</option>
                  <option value="bordado">Bordado Personalizado</option>
                  <option value="serigrafia">Serigrafía y Transfer</option>
                  <option value="otro">Otro</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-label-caps font-label-caps text-on-surface-variant uppercase text-xs" htmlFor="message">Mensaje</label>
              <textarea 
                className="form-input w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-body-md font-body-md text-on-surface transition-all resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                id="message" 
                name="message" 
                placeholder="Detalle su requerimiento o consulta..." 
                required 
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button className="w-full md:w-auto bg-primary text-on-primary px-8 py-3 rounded font-label-caps text-label-caps uppercase tracking-wider hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm active:translate-y-px flex justify-center items-center gap-2" type="submit">
              COTIZAR
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </section>

        {/* Info Sidebar */}
        <aside className="md:col-span-5 flex flex-col gap-gutter fade-in-up stagger-2">
          {/* Primary Action Card */}
          <div className="bg-primary text-on-primary p-6 md:p-8 rounded shadow-sm flex flex-col items-start gap-4">
            <div className="bg-on-primary text-primary p-3 rounded-full inline-flex">
              <span className="material-symbols-outlined text-3xl">chat</span>
            </div>
            <h3 className="text-headline-md font-headline-md font-bold">Atención Inmediata</h3>
            <p className="text-body-md font-body-md opacity-90 mb-2">Para cotizaciones urgentes o soporte técnico directo, contáctenos vía WhatsApp.</p>
            <a className="bg-on-primary text-primary px-6 py-3 rounded font-label-caps text-label-caps uppercase tracking-wider hover:bg-surface-variant transition-colors shadow-sm active:translate-y-px inline-flex items-center gap-2 w-full justify-center" href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar" target="_blank" rel="noopener noreferrer">
              COTIZAR
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

          {/* Contact Details Card */}
          <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded shadow-sm flex flex-col gap-6">
            {/* Location */}
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-outline mt-1">location_on</span>
              <div>
                <h4 className="text-label-caps font-label-caps text-on-surface-variant uppercase mb-1 text-xs">Ubicación Central</h4>
                <p className="text-body-md font-body-md text-on-surface">Chimalhuacán, Estado de México</p>
                <p className="text-body-md font-body-md text-on-surface-variant text-sm mt-1">Visitas con cita previa para muestras de materiales.</p>
              </div>
            </div>
            <hr className="border-outline-variant"/>
            {/* Hours */}
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-outline mt-1">schedule</span>
              <div>
                <h4 className="text-label-caps font-label-caps text-on-surface-variant uppercase mb-1 text-xs">Horario Operativo</h4>
                <p className="text-body-md font-body-md text-on-surface">Lunes a Viernes</p>
                <p className="text-body-md font-body-md text-on-surface-variant">9:00 AM - 5:00 PM</p>
              </div>
            </div>
            <hr class="border-outline-variant"/>
            {/* Email */}
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-outline mt-1">mail</span>
              <div>
                <h4 className="text-label-caps font-label-caps text-on-surface-variant uppercase mb-1 text-xs">Correo Electrónico</h4>
                <a className="text-body-md font-body-md text-primary hover:underline block break-all font-medium" href="mailto:ventasequipanext@gmail.com">ventasequipanext@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded shadow-sm">
            <h4 className="text-label-caps font-label-caps text-on-surface-variant uppercase mb-4 text-xs">Redes Sociales</h4>
            <div className="flex gap-4">
              <a aria-label="Facebook" className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" href="#">
                <span className="material-symbols-outlined">thumb_up</span>
              </a>
              <a aria-label="Instagram" className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" href="#">
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
              <a aria-label="TikTok" class="w-10 h-10 rounded border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" href="#">
                <span className="material-symbols-outlined">play_arrow</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* Map Section */}
      <section className="mt-gutter h-64 md:h-96 w-full rounded border border-outline-variant overflow-hidden fade-in-up stagger-3 relative shadow-sm">
        <img alt="Mapa de Ubicación EQUIPANEXT" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" src="/assets/images/interactivo/map.png"/>
        <div className="absolute inset-0 bg-surface-container-lowest bg-opacity-20 flex items-center justify-center pointer-events-none">
          <div className="bg-surface p-4 rounded border border-outline-variant shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <span className="text-label-caps font-label-caps uppercase text-on-surface text-xs">Ubicados en Chimalhuacán, Estado de México</span>
          </div>
        </div>
      </section>
    </main>
  );
}
