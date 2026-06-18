"use client";

import React, { useState } from 'react';
import Image from 'next/image';

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
    <main className="bg-[#F5F5F5] text-[#111111] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-[160px] pb-[100px] md:pt-[200px] md:pb-[140px] px-6 md:px-12 bg-[#071A33] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFC107]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0F2747]/60 rounded-full blur-[80px] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center fade-in-up">
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-[#FFC107]/30 text-[#FFC107] font-bold text-[11px] px-5 py-2 rounded-md mb-8 uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 bg-[#FFC107] rounded-full animate-pulse"></span>
            Soporte & Ventas B2B
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold text-white mb-8 leading-[1.0] tracking-[-0.03em] uppercase">
            Estamos Aquí Para<br />
            <span className="text-[#FFC107]">Ayudarle.</span>
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Conecte con nuestro equipo de especialistas. Proveemos soluciones en uniformes industriales y personalización diseñadas para la máxima exigencia.
          </p>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <section className="py-[80px] md:py-[120px] px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Contact Form */}
          <div className="md:col-span-12 lg:col-span-8 bg-white border border-[#B0B7C3]/30 rounded-2xl shadow-sm p-8 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#FFC107]"></div>
            <h2 className="text-2xl font-display font-extrabold text-[#071A33] mb-2 tracking-tight uppercase">Envíenos un Mensaje</h2>
            <p className="text-[#B0B7C3] text-sm mb-10 font-light">Responderemos en un máximo de 24 horas hábiles.</p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[11px] font-semibold text-[#4b5563] uppercase tracking-[0.1em]" htmlFor="name">Nombre Completo</label>
                  <input 
                    className="w-full bg-[#F5F5F5] border border-[#B0B7C3]/40 rounded-lg px-5 py-3.5 text-sm text-[#111111] transition-all focus:outline-none focus:ring-2 focus:ring-[#FFC107]/40 focus:border-[#FFC107] placeholder-[#B0B7C3] font-light" 
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
                    className="w-full bg-[#F5F5F5] border border-[#B0B7C3]/40 rounded-lg px-5 py-3.5 text-sm text-[#111111] transition-all focus:outline-none focus:ring-2 focus:ring-[#FFC107]/40 focus:border-[#FFC107] placeholder-[#B0B7C3] font-light" 
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
                    className="w-full bg-[#F5F5F5] border border-[#B0B7C3]/40 rounded-lg px-5 py-3.5 text-sm text-[#111111] transition-all focus:outline-none focus:ring-2 focus:ring-[#FFC107]/40 focus:border-[#FFC107] placeholder-[#B0B7C3] font-light" 
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
                    className="w-full bg-[#F5F5F5] border border-[#B0B7C3]/40 rounded-lg px-5 py-3.5 text-sm text-[#111111] transition-all focus:outline-none focus:ring-2 focus:ring-[#FFC107]/40 focus:border-[#FFC107] placeholder-[#B0B7C3] font-light" 
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
                    className="w-full bg-[#F5F5F5] border border-[#B0B7C3]/40 rounded-lg px-5 py-3.5 text-sm text-[#111111] appearance-none transition-all focus:outline-none focus:ring-2 focus:ring-[#FFC107]/40 focus:border-[#FFC107] font-light" 
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
                  className="w-full bg-[#F5F5F5] border border-[#B0B7C3]/40 rounded-lg px-5 py-3.5 text-sm text-[#111111] transition-all resize-none focus:outline-none focus:ring-2 focus:ring-[#FFC107]/40 focus:border-[#FFC107] placeholder-[#B0B7C3] font-light" 
                  id="message" 
                  name="message" 
                  placeholder="Describa el volumen estimado y requisitos técnicos..." 
                  required 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button className="w-full md:w-auto inline-flex justify-center items-center gap-2 bg-[#FFC107] hover:bg-[#E6B325] text-[#071A33] font-extrabold text-[13px] tracking-[0.1em] px-10 py-4 rounded-md hover:shadow-[0_12px_24px_rgba(255,193,7,0.35)] hover:-translate-y-0.5 transition-all duration-300 uppercase shadow-lg" type="submit">
                Enviar Solicitud
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </form>
          </div>

          {/* Info Sidebar */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-6 lg:gap-8">
            
            {/* Primary Action Card */}
            <div className="bg-[#071A33] rounded-2xl shadow-xl p-10 flex flex-col items-start gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#FFC107]/5 rounded-full blur-[60px] pointer-events-none z-0"></div>
              <div className="w-14 h-14 bg-[#FFC107] rounded-xl flex items-center justify-center mb-2 relative z-10 shadow-lg">
                <span className="material-symbols-outlined text-[#071A33] text-[28px]">support_agent</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-display font-extrabold text-white mb-3 tracking-tight uppercase">Atención Directa</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed mb-8">
                  Para cotizaciones urgentes, licitaciones o requerimientos especializados, nuestro equipo de ingeniería está disponible.
                </p>
                <a className="inline-flex justify-center items-center gap-2 bg-[#FFC107] hover:bg-[#E6B325] text-[#071A33] font-extrabold text-[12px] px-6 py-3.5 rounded-md transition-all duration-300 w-full tracking-widest uppercase" href="https://wa.me/525524398773?text=Hola,%20requiero%20asistencia%20inmediata" target="_blank" rel="noopener noreferrer">
                  Contactar vía WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-white border border-[#B0B7C3]/30 p-8 rounded-2xl flex flex-col gap-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#071A33] flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-[#FFC107] text-[20px]">location_on</span>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-[#FFC107] uppercase tracking-[0.15em] mb-1">Centro de Operaciones</h4>
                  <p className="text-[#111111] font-semibold text-sm">Chimalhuacán, Estado de México</p>
                </div>
              </div>
              <hr className="border-[#B0B7C3]/20"/>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#071A33] flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-[#FFC107] text-[20px]">schedule</span>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-[#FFC107] uppercase tracking-[0.15em] mb-1">Horario de Atención</h4>
                  <p className="text-[#111111] font-semibold text-sm">Lunes a Viernes</p>
                  <p className="text-[#B0B7C3] text-xs font-light mt-0.5">9:00 AM – 6:00 PM (Hora Central)</p>
                </div>
              </div>
              <hr className="border-[#B0B7C3]/20"/>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#071A33] flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-[#FFC107] text-[20px]">mail</span>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-[#FFC107] uppercase tracking-[0.15em] mb-1">Contacto Digital</h4>
                  <a className="text-[#111111] font-semibold text-sm hover:text-[#FFC107] transition-colors" href="mailto:ventasequipanext@gmail.com">ventasequipanext@gmail.com</a>
                  <p className="text-[#B0B7C3] text-xs font-light mt-0.5">Respuesta en máx. 24hrs.</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[200px] rounded-2xl border border-[#B0B7C3]/30 overflow-hidden relative group shadow-sm">
              <Image alt="Ubicación" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="/assets/images/interactivo/map.png"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/80 to-transparent flex items-end p-5">
                <span className="text-white text-sm font-bold flex items-center gap-2 uppercase tracking-widest">
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full animate-pulse"></span>
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
