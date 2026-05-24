"use client";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Contacto enviado:', formData);
    alert('¡Gracias por su mensaje! Nos pondremos en contacto a la brevedad.');
  };

  return (
    <main className="bg-background text-on-background min-h-screen relative overflow-hidden">
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-[0.06] z-0"></div>
      <div className="absolute inset-0 hero-blueprint opacity-[0.08] z-0"></div>
      
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-primary-container/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Tech terminal details */}
      <div className="absolute top-12 left-12 font-mono-label text-[10px] text-primary/30 uppercase tracking-widest hidden lg:block">
        [SYS-INIT // DEPT-CONTACTO // VER-4.0]
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-[140px] pb-12 md:pt-[180px] md:pb-24 relative z-10">
        {/* Header Section */}
        <header className="mb-16 md:mb-24 text-center fade-in-up">
          <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary font-mono-label text-[11px] px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            <span className="dot-live"></span>
            SOPORTE TÉCNICO &amp; VENTAS
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline-lg-mobile md:font-headline-lg text-white mb-6 font-bold tracking-tight font-display">
            Estamos Aquí para <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-white">Ayudarle.</span>
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Conecte con nuestro equipo de especialistas. Proveemos soluciones en uniformes industriales, chalecos reflejantes y bordado personalizado diseñadas para la máxima exigencia y durabilidad.
          </p>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Contact Form */}
          <section className="md:col-span-7 bg-surface border border-outline-variant/30 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 md:p-8 relative overflow-hidden fade-in-up stagger-1 group hover:border-primary/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <div className="absolute top-4 right-4 font-mono-label text-[9px] text-primary/30">[SYS_FORM // SEC_01]</div>
            
            <h2 className="text-headline-md font-headline-md text-white mb-6 font-display">Envíenos un Mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-label-caps font-label-caps text-on-surface-variant uppercase text-xs" htmlFor="name">Nombre</label>
                  <input 
                    className="form-input w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-4 py-3 text-body-md font-body-md text-on-surface transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/30" 
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
                    className="form-input w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-4 py-3 text-body-md font-body-md text-on-surface transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/30" 
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
                    className="form-input w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-4 py-3 text-body-md font-body-md text-on-surface transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/30" 
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
                    className="form-input w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-4 py-3 text-body-md font-body-md text-on-surface transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/30" 
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
                    className="form-input w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-4 py-3 text-body-md font-body-md text-on-surface appearance-none transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
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
                  className="form-input w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-4 py-3 text-body-md font-body-md text-on-surface transition-all resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/30" 
                  id="message" 
                  name="message" 
                  placeholder="Detalle su requerimiento o consulta..." 
                  required 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className="w-full md:w-auto bg-primary text-on-primary px-8 py-3 rounded font-label-caps text-label-caps uppercase tracking-wider hover:bg-primary/95 transition-all shadow-sm active:translate-y-px flex justify-center items-center gap-2" type="submit">
                COTIZAR
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </section>

          {/* Info Sidebar */}
          <aside className="md:col-span-5 flex flex-col gap-gutter fade-in-up stagger-2">
            {/* Primary Action Card */}
            <div className="bg-primary text-on-primary p-6 md:p-8 rounded-lg shadow-sm flex flex-col items-start gap-4 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-[150px] h-[150px] bg-white/5 rounded-full blur-[40px] pointer-events-none"></div>
              <div className="bg-white text-primary p-3 rounded-lg inline-flex shadow-sm">
                <span className="material-symbols-outlined text-3xl">chat</span>
              </div>
              <h3 className="text-headline-md font-headline-md font-bold font-display">Atención Inmediata</h3>
              <p className="text-body-md font-body-md opacity-90 mb-2">Para cotizaciones urgentes o soporte técnico directo, contáctenos vía WhatsApp.</p>
              <a className="bg-white text-primary px-6 py-3 rounded-lg font-label-caps text-label-caps uppercase tracking-wider hover:bg-neutral-100 hover:scale-[1.01] transition-all shadow-sm active:translate-y-px inline-flex items-center gap-2 w-full justify-center" href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar" target="_blank" rel="noopener noreferrer">
                COTIZAR
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>

            {/* Contact Details Card */}
            <div className="bg-surface border border-outline-variant/30 p-6 rounded-lg shadow-sm flex flex-col gap-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
              <div className="absolute top-4 right-4 font-mono-label text-[9px] text-primary/30">[SYS_INFO // SEC_02]</div>
              
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="text-label-caps font-label-caps text-on-surface-variant uppercase mb-1 text-xs">Ubicación Central</h4>
                  <p className="text-body-md font-body-md text-white font-medium">Chimalhuacán, Estado de México</p>
                  <p className="text-body-md font-body-md text-on-surface-variant text-sm mt-1">Visitas con cita previa para muestras de materiales.</p>
                </div>
              </div>
              <hr className="border-outline-variant/20"/>
              
              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h4 className="text-label-caps font-label-caps text-on-surface-variant uppercase mb-1 text-xs">Horario Operativo</h4>
                  <p className="text-body-md font-body-md text-white font-medium">Lunes a Viernes</p>
                  <p className="text-body-md font-body-md text-on-surface-variant text-sm">9:00 AM - 5:00 PM</p>
                </div>
              </div>
              <hr className="border-outline-variant/20"/>
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="text-label-caps font-label-caps text-on-surface-variant uppercase mb-1 text-xs">Correo Electrónico</h4>
                  <a className="text-body-md font-body-md text-primary hover:underline block break-all font-medium" href="mailto:ventasequipanext@gmail.com">ventasequipanext@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-surface border border-outline-variant/30 p-6 rounded-lg shadow-sm relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
              <div className="absolute top-4 right-4 font-mono-label text-[9px] text-primary/30">[SYS_SOCIAL]</div>
              <h4 className="text-label-caps font-label-caps text-on-surface-variant uppercase mb-4 text-xs">Redes Sociales</h4>
              <div className="flex gap-4">
                <a aria-label="Facebook" className="w-10 h-10 rounded-lg border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all duration-300 hover:bg-surface-container-high" href="#">
                  <span className="material-symbols-outlined">thumb_up</span>
                </a>
                <a aria-label="Instagram" className="w-10 h-10 rounded-lg border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all duration-300 hover:bg-surface-container-high" href="#">
                  <span className="material-symbols-outlined">photo_camera</span>
                </a>
                <a aria-label="TikTok" className="w-10 h-10 rounded-lg border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all duration-300 hover:bg-surface-container-high" href="#">
                  <span className="material-symbols-outlined">play_arrow</span>
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Map Section */}
        <section className="mt-gutter h-64 md:h-96 w-full rounded-lg border border-outline-variant/30 overflow-hidden fade-in-up stagger-3 relative shadow-sm group hover:border-primary/40 transition-all duration-300">
          <img alt="Mapa de Ubicación EQUIPANEXT" className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-all duration-700 ease-out" src="/assets/images/interactivo/map.png"/>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-surface/90 backdrop-blur-md p-4 rounded-lg border border-outline-variant/50 shadow-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span className="text-label-caps font-label-caps uppercase text-white text-xs font-semibold tracking-wider">Ubicados en Chimalhuacán, Estado de México</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
