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

  return (
    <main className="bg-[#04142B] text-white min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full pt-36 sm:pt-44 md:pt-48 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 bg-[#061A36] overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#FFC107]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#082041]/60 rounded-full blur-[80px] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center fade-in-up">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold text-white mb-6 sm:mb-8 leading-[1.0] tracking-[-0.03em] uppercase break-words">
            Estamos Aquí Para<br />
            <span className="text-[#FFC107]">Ayudarle.</span>
          </h1>
          <p className="text-white/85 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light leading-relaxed">
            Conecte con nuestro equipo de especialistas. Proveemos soluciones en uniformes industriales y personalización diseñadas para la máxima exigencia.
          </p>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <section className="py-12 sm:py-16 md:py-[120px] px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
           {/* Contact Form */}
          <div className="md:col-span-12 lg:col-span-8 bg-[#082041] border border-[rgba(255,193,7,0.15)] rounded-2xl shadow-sm p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#FFC107]"></div>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-2 tracking-tight uppercase">Envíenos un Mensaje</h2>
            <p className="text-[#D9D9D9]/70 text-xs sm:text-sm mb-6 sm:mb-10 font-light">Responderemos en un máximo de 24 horas hábiles.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                <div className="flex flex-col gap-2.5 sm:gap-3">
                  <label className="text-[10px] sm:text-[11px] font-semibold text-[#D9D9D9]/80 uppercase tracking-[0.1em]" htmlFor="name">Nombre Completo</label>
                  <input 
                    className="w-full bg-[#04142B] border border-[rgba(255,193,7,0.15)] rounded-lg px-4 sm:px-5 py-3 sm:py-3.5 text-sm text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#FFC107]/40 focus:border-[#FFC107] placeholder-[#D9D9D9]/40 font-light" 
                    id="name" 
                    name="name" 
                    placeholder="Ej. Juan Pérez" 
                    required 
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2.5 sm:gap-3">
                  <label className="text-[10px] sm:text-[11px] font-semibold text-[#D9D9D9]/80 uppercase tracking-[0.1em]" htmlFor="company">Empresa</label>
                  <input 
                    className="w-full bg-[#04142B] border border-[rgba(255,193,7,0.15)] rounded-lg px-4 sm:px-5 py-3 sm:py-3.5 text-sm text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#FFC107]/40 focus:border-[#FFC107] placeholder-[#D9D9D9]/40 font-light" 
                    id="company" 
                    name="company" 
                    placeholder="Ej. Industrias ABC" 
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                <div className="flex flex-col gap-2.5 sm:gap-3">
                  <label className="text-[10px] sm:text-[11px] font-semibold text-[#D9D9D9]/80 uppercase tracking-[0.1em]" htmlFor="phone">Teléfono</label>
                  <input 
                    className="w-full bg-[#04142B] border border-[rgba(255,193,7,0.15)] rounded-lg px-4 sm:px-5 py-3 sm:py-3.5 text-sm text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#FFC107]/40 focus:border-[#FFC107] placeholder-[#D9D9D9]/40 font-light" 
                    id="phone" 
                    name="phone" 
                    placeholder="Ej. 55 1234 5678" 
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2.5 sm:gap-3">
                  <label className="text-[10px] sm:text-[11px] font-semibold text-[#D9D9D9]/80 uppercase tracking-[0.1em]" htmlFor="email">Correo Electrónico</label>
                  <input 
                    className="w-full bg-[#04142B] border border-[rgba(255,193,7,0.15)] rounded-lg px-4 sm:px-5 py-3 sm:py-3.5 text-sm text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#FFC107]/40 focus:border-[#FFC107] placeholder-[#D9D9D9]/40 font-light" 
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

              <div className="flex flex-col gap-2.5 sm:gap-3">
                <label className="text-[10px] sm:text-[11px] font-semibold text-[#D9D9D9]/80 uppercase tracking-[0.1em]" htmlFor="product">Producto o Servicio de Interés</label>
                <div className="relative">
                  <select 
                    className="w-full bg-[#04142B] border border-[rgba(255,193,7,0.15)] rounded-lg px-4 sm:px-5 py-3 sm:py-3.5 text-sm text-white appearance-none transition-all focus:outline-none focus:ring-2 focus:ring-[#FFC107]/40 focus:border-[#FFC107] font-light pr-10" 
                    id="product" 
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                  >
                    <option value="chaleco-roy">Chaleco Reflejante ROY</option>
                    <option value="chaleco-nova">Chaleco Reflejante NOVA</option>
                    <option value="chaleco-brigadista">Chaleco Reflejante Brigadista</option>
                    <option value="chaleco-isa">Chaleco Reflejante ISA / ISA MAX</option>
                    <option value="chaleco-flestvest">Chaleco Reflejante FLESTVEST</option>
                    <option value="chaleco-forteck">Chaleco Reflejante FORTECK</option>
                    <option value="overol-con-reflejante">Overol Con Reflejante</option>
                    <option value="overol-sin-reflejante">Overol Sin Reflejante</option>
                    <option value="camisola-con-reflejante">Camisola Con Reflejante</option>
                    <option value="camisola-sin-reflejante">Camisola Sin Reflejante</option>
                    <option value="camisola-mezclilla">Camisola de Mezclilla Industrial</option>
                    <option value="playera-polo">Playera Tipo Polo / Ejecutiva</option>
                    <option value="pantalon-ejecutivo">Pantalón Ejecutivo de Gabardina</option>
                    <option value="bordado">Bordado Personalizado</option>
                    <option value="serigrafia">Serigrafía y DTF</option>
                    <option value="otro">Otro</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#D9D9D9]">
                    <span className="material-symbols-outlined text-[20px]">unfold_more</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 sm:gap-3">
                <label className="text-[10px] sm:text-[11px] font-semibold text-[#D9D9D9]/80 uppercase tracking-[0.1em]" htmlFor="message">Detalle de Solicitud</label>
                <textarea 
                  className="w-full bg-[#04142B] border border-[rgba(255,193,7,0.15)] rounded-lg px-4 sm:px-5 py-3 sm:py-3.5 text-sm text-white transition-all resize-none focus:outline-none focus:ring-2 focus:ring-[#FFC107]/40 focus:border-[#FFC107] placeholder-[#D9D9D9]/40 font-light" 
                  id="message" 
                  name="message" 
                  placeholder="Describa el volumen estimado y requisitos técnicos..." 
                  required 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-[#04142B] font-extrabold text-[12px] sm:text-[13px] tracking-[0.1em] px-8 sm:px-10 py-3.5 sm:py-4 rounded-md hover:shadow-[0_12px_24px_rgba(255,193,7,0.35)] hover:-translate-y-0.5 transition-all duration-300 uppercase shadow-lg text-center" type="submit">
                Enviar Solicitud
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </form>
          </div>

          {/* Info Sidebar */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-6 lg:gap-8">
            
            {/* Primary Action Card */}
            <div className="bg-[#082041] border border-[rgba(255,193,7,0.15)] rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col items-start gap-4 sm:gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#FFC107]/5 rounded-full blur-[60px] pointer-events-none z-0"></div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFC107] rounded-xl flex items-center justify-center mb-1 sm:mb-2 relative z-10 shadow-lg">
                <span className="material-symbols-outlined text-[#04142B] text-[24px] sm:text-[28px]">support_agent</span>
              </div>
              <div className="relative z-10 w-full">
                <h3 className="text-lg sm:text-xl font-display font-extrabold text-white mb-2 sm:mb-3 tracking-tight uppercase">Atención Directa</h3>
                <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed mb-6 sm:mb-8">
                  Para cotizaciones urgentes, licitaciones o requerimientos especializados, nuestro equipo de ingeniería está disponible.
                </p>
                <a className="inline-flex justify-center items-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-[#04142B] font-extrabold text-[11px] sm:text-[12px] px-6 py-3.5 rounded-md transition-all duration-300 w-full tracking-widest uppercase text-center" href="https://wa.me/525524398773?text=Hola,%20requiero%20asistencia%20inmediata" target="_blank" rel="noopener noreferrer">
                  Contactar vía WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-[#082041] border border-[rgba(255,193,7,0.15)] p-6 sm:p-8 rounded-2xl flex flex-col gap-4 sm:gap-6 shadow-sm">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#04142B] flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-[#FFC107] text-[18px] sm:text-[20px]">location_on</span>
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-[11px] font-bold text-[#FFC107] uppercase tracking-[0.15em] mb-0.5 sm:mb-1">Centro de Operaciones</h4>
                  <p className="text-white font-semibold text-xs sm:text-sm">Chimalhuacán, Estado de México</p>
                </div>
              </div>
              <hr className="border-[rgba(255,193,7,0.15)]"/>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#04142B] flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-[#FFC107] text-[18px] sm:text-[20px]">schedule</span>
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-[11px] font-bold text-[#FFC107] uppercase tracking-[0.15em] mb-0.5 sm:mb-1">Horario de Atención</h4>
                  <p className="text-white font-semibold text-xs sm:text-sm">Lunes a Viernes</p>
                  <p className="text-[#D9D9D9] text-xs font-light mt-0.5">9:00 AM – 6:00 PM (Hora Central)</p>
                </div>
              </div>
              <hr className="border-[rgba(255,193,7,0.15)]"/>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#04142B] flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-[#FFC107] text-[18px] sm:text-[20px]">mail</span>
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-[11px] font-bold text-[#FFC107] uppercase tracking-[0.15em] mb-0.5 sm:mb-1">Contacto Digital</h4>
                  <a className="text-white font-semibold text-xs sm:text-sm hover:text-[#FFC107] transition-colors break-all" href="mailto:ventasequipanext@gmail.com">ventasequipanext@gmail.com</a>
                  <p className="text-[#D9D9D9]/70 text-xs font-light mt-0.5">Respuesta en máx. 24hrs.</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[180px] sm:h-[200px] rounded-2xl border border-[rgba(255,193,7,0.15)] overflow-hidden relative group shadow-sm">
              <Image alt="Ubicación" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="/assets/images/interactivo/map.png"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#04142B]/90 to-transparent flex items-end p-4 sm:p-5">
                <span className="text-white text-xs sm:text-sm font-bold flex items-center gap-2 uppercase tracking-widest">
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
