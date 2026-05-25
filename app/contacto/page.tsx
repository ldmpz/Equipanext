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
    
    // Construir el mensaje para WhatsApp
    const mensaje = `*Nuevo Prospecto desde la Web* 🌐
    
*Nombre:* ${formData.name}
*Empresa:* ${formData.company || 'N/A'}
*Teléfono:* ${formData.phone || 'N/A'}
*Correo:* ${formData.email}
*Producto de Interés:* ${formData.product}

*Detalles:*
${formData.message}`;

    const url = `https://wa.me/525524398773?text=${encodeURIComponent(mensaje)}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(url, '_blank');
  };

  // Usamos el envío mediante WhatsApp

  return (
    <main className="bg-[#FFFFFF] text-[#1B1F24] min-h-screen selection:bg-[#0057FF]/10 selection:text-[#0057FF]">
      {/* Hero Section */}
      <section className="relative w-full pt-[160px] pb-[100px] md:pt-[200px] md:pb-[140px] px-6 md:px-12 bg-[#F5F7FA] overflow-hidden">
        {/* Subtle Gradient Background */}
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#FFFFFF] to-[#F5F7FA] z-0"></div>

        {/* Ambient Subtle Depth */}
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-gradient-to-b from-[#0057FF]/[0.02] to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center fade-in-up">
          <div className="inline-flex items-center gap-2.5 bg-white border border-[#EAECEF] text-[#4b5563] font-medium text-[11px] px-4 py-1.5 rounded-full mb-8 uppercase tracking-[0.15em] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <span className="w-1.5 h-1.5 bg-[#0057FF] rounded-full"></span>
            Soporte & Ventas B2B
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-semibold text-[#1B1F24] mb-8 leading-[1.05] tracking-[-0.03em]">
            Estamos Aquí para <br className="hidden md:block"/>
            <span className="text-[#0057FF]">Ayudarle.</span>
          </h1>
          <p className="text-[#4b5563] max-w-3xl mx-auto text-lg md:text-2xl font-light leading-relaxed tracking-tight">
            Conecte con nuestro equipo de especialistas. Proveemos soluciones en uniformes industriales y personalización diseñadas para la máxima exigencia.
          </p>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <section className="py-[120px] md:py-[160px] px-6 md:px-12 max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Contact Form */}
          <div className="md:col-span-12 lg:col-span-8 bg-white border border-[#EAECEF] rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-8 md:p-14 relative overflow-hidden group">
            
            <h2 className="text-3xl font-display font-semibold text-[#1B1F24] mb-8 tracking-tight">Envíenos un Mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[11px] font-semibold text-[#4b5563] uppercase tracking-[0.1em]" htmlFor="name">Nombre Completo</label>
                  <input 
                    className="w-full bg-[#F5F7FA] border-none rounded-xl px-5 py-4 text-base text-[#1B1F24] transition-all focus:outline-none focus:ring-2 focus:ring-[#0057FF]/20 placeholder-[#9ca3af] font-light" 
                    id="name" 
                    name="name" 
                    placeholder="Ej. Juan Pérez" 
                    required 
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[11px] font-semibold text-[#4b5563] uppercase tracking-[0.1em]" htmlFor="company">Empresa</label>
                  <input 
                    className="w-full bg-[#F5F7FA] border-none rounded-xl px-5 py-4 text-base text-[#1B1F24] transition-all focus:outline-none focus:ring-2 focus:ring-[#0057FF]/20 placeholder-[#9ca3af] font-light" 
                    id="company" 
                    name="company" 
                    placeholder="Ej. Industrias ABC" 
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[11px] font-semibold text-[#4b5563] uppercase tracking-[0.1em]" htmlFor="phone">Teléfono</label>
                  <input 
                    className="w-full bg-[#F5F7FA] border-none rounded-xl px-5 py-4 text-base text-[#1B1F24] transition-all focus:outline-none focus:ring-2 focus:ring-[#0057FF]/20 placeholder-[#9ca3af] font-light" 
                    id="phone" 
                    name="phone" 
                    placeholder="Ej. 55 1234 5678" 
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[11px] font-semibold text-[#4b5563] uppercase tracking-[0.1em]" htmlFor="email">Correo Electrónico</label>
                  <input 
                    className="w-full bg-[#F5F7FA] border-none rounded-xl px-5 py-4 text-base text-[#1B1F24] transition-all focus:outline-none focus:ring-2 focus:ring-[#0057FF]/20 placeholder-[#9ca3af] font-light" 
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

              <div className="flex flex-col gap-3">
                <label className="text-[11px] font-semibold text-[#4b5563] uppercase tracking-[0.1em]" htmlFor="product">Producto o Servicio de Interés</label>
                <div className="relative">
                  <select 
                    className="w-full bg-[#F5F7FA] border-none rounded-xl px-5 py-4 text-base text-[#1B1F24] appearance-none transition-all focus:outline-none focus:ring-2 focus:ring-[#0057FF]/20 font-light" 
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
                    <option value="serigrafia">Serigrafía y DTF</option>
                    <option value="otro">Otro</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-[#4b5563]">
                    <span className="material-symbols-outlined text-[20px]">unfold_more</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[11px] font-semibold text-[#4b5563] uppercase tracking-[0.1em]" htmlFor="message">Detalle de Solicitud</label>
                <textarea 
                  className="w-full bg-[#F5F7FA] border-none rounded-xl px-5 py-4 text-base text-[#1B1F24] transition-all resize-none focus:outline-none focus:ring-2 focus:ring-[#0057FF]/20 placeholder-[#9ca3af] font-light" 
                  id="message" 
                  name="message" 
                  placeholder="Describa el volumen estimado y requisitos técnicos..." 
                  required 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button className="w-full md:w-auto bg-[#1B1F24] text-white px-10 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-[#2B3138] transition-all shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 flex justify-center items-center gap-2" type="submit">
                Enviar Solicitud
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </form>
          </div>

          {/* Info Sidebar */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-6 lg:gap-8">
            
            {/* Primary Action Card */}
            <div className="bg-[#1B1F24] rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] p-10 flex flex-col items-start gap-6 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-[60px] pointer-events-none z-0"></div>
              
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-2 border border-white/10 relative z-10">
                <span className="material-symbols-outlined text-white text-[32px] font-light">support_agent</span>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-semibold text-white mb-3 tracking-tight">Atención Directa</h3>
                <p className="text-[#9ca3af] text-base font-light leading-relaxed mb-8">
                  Para cotizaciones urgentes, licitaciones o requerimientos especializados, nuestro equipo de ingeniería está disponible.
                </p>
                <a className="inline-flex justify-center items-center gap-2 bg-white text-[#1B1F24] font-medium text-sm px-8 py-4 rounded-full hover:bg-neutral-100 transition-all duration-300 w-full" href="https://wa.me/525524398773?text=Hola,%20requiero%20asistencia%20inmediata" target="_blank" rel="noopener noreferrer">
                  Contactar vía WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-[#F5F7FA] border border-[#EAECEF] p-10 rounded-3xl flex flex-col gap-8 relative overflow-hidden group hover:shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500">
              
              {/* Location */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#EAECEF] shadow-sm flex items-center justify-center text-[#1B1F24] flex-shrink-0">
                  <span className="material-symbols-outlined font-light">location_on</span>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold text-[#0057FF] uppercase tracking-[0.1em] mb-2">Centro de Operaciones</h4>
                  <p className="text-[#1B1F24] font-medium text-base">Chimalhuacán, Estado de México</p>
                </div>
              </div>
              
              <hr className="border-[#EAECEF]"/>
              
              {/* Hours */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#EAECEF] shadow-sm flex items-center justify-center text-[#1B1F24] flex-shrink-0">
                  <span className="material-symbols-outlined font-light">schedule</span>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold text-[#0057FF] uppercase tracking-[0.1em] mb-2">Horario de Atención</h4>
                  <p className="text-[#1B1F24] font-medium text-base">Lunes a Viernes</p>
                  <p className="text-[#4b5563] text-sm font-light mt-1">9:00 AM - 6:00 PM (Hora Central)</p>
                </div>
              </div>
              
              <hr className="border-[#EAECEF]"/>
              
              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#EAECEF] shadow-sm flex items-center justify-center text-[#1B1F24] flex-shrink-0">
                  <span className="material-symbols-outlined font-light">mail</span>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold text-[#0057FF] uppercase tracking-[0.1em] mb-2">Contacto Digital</h4>
                  <a className="text-[#1B1F24] font-medium text-base hover:text-[#0057FF] transition-colors" href="mailto:ventasequipanext@gmail.com">ventasequipanext@gmail.com</a>
                  <p className="text-[#4b5563] text-sm font-light mt-1">Respuesta en max. 24hrs.</p>
                </div>
              </div>
              
            </div>

            {/* Map Placeholder or Visual Element */}
            <div className="h-[200px] rounded-3xl border border-[#EAECEF] overflow-hidden relative group">
              <img alt="Ubicación" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" src="/assets/images/interactivo/map.png"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F24]/80 to-transparent flex items-end p-6">
                 <span className="text-white text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#0057FF] rounded-full"></span>
                    Estado de México
                 </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
