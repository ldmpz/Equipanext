'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [chatOpen, setChatOpen] = useState(false);
  const [notifVisible, setNotifVisible] = useState(true);
  const [timeStr, setTimeStr] = useState('12:00');

  useEffect(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    setTimeStr(`${hours}:${minutes}`);

    // Auto bounce widget after 4 seconds to catch user attention
    const timer = setTimeout(() => {
      const btn = document.getElementById('whatsapp-trigger-btn');
      if (btn) {
        btn.classList.add('animate-bounce');
        setTimeout(() => btn.classList.remove('animate-bounce'), 1000);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleTriggerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setChatOpen(!chatOpen);
    setNotifVisible(false);
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setChatOpen(false);
  };

  useEffect(() => {
    const handleDocumentClick = () => {
      setChatOpen(false);
    };
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  return (
    <>
      {/* Footer */}
      <footer className="bg-white border-t border-[#EAECEF] pt-24 pb-12 relative overflow-hidden">
        {/* Subtle Ambient Background */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0057FF]/[0.015] rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
            
            {/* Brand Column */}
            <div className="md:col-span-12 lg:col-span-5 flex flex-col items-start">
              <Link href="/" className="inline-block mb-6">
                <img alt="EQUIPANEXT" className="h-10 w-auto object-contain grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="/assets/images/marca/Logo.png"/>
              </Link>
              <p className="text-[#4b5563] text-sm leading-relaxed max-w-sm mb-8 font-light">
                Ingeniería en indumentaria industrial. Proveemos soluciones textiles de alto rendimiento para entornos operativos exigentes, con procesos de manufactura 4.0.
              </p>
              
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-[#EAECEF] flex items-center justify-center text-[#4b5563] hover:text-[#0057FF] hover:border-[#0057FF]/30 hover:bg-[#F5F7FA] transition-all duration-300">
                  <span className="material-symbols-outlined text-[18px]">share</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-[#EAECEF] flex items-center justify-center text-[#4b5563] hover:text-[#0057FF] hover:border-[#0057FF]/30 hover:bg-[#F5F7FA] transition-all duration-300">
                  <span className="material-symbols-outlined text-[18px]">public</span>
                </a>
              </div>
            </div>

            {/* Divisiones Column */}
            <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-4">
              <h4 className="text-[#1B1F24] font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">Divisiones</h4>
              <Link href="/productos" className="text-[#4b5563] hover:text-[#0057FF] text-sm font-light transition-colors">Chalecos Reflejantes</Link>
              <Link href="/productos" className="text-[#4b5563] hover:text-[#0057FF] text-sm font-light transition-colors">Uniformes Industriales</Link>
              <Link href="/servicios" className="text-[#4b5563] hover:text-[#0057FF] text-sm font-light transition-colors">Bordado Corporativo</Link>
              <Link href="/servicios" className="text-[#4b5563] hover:text-[#0057FF] text-sm font-light transition-colors">Serigrafía Técnica</Link>
            </div>

            {/* Empresa Column */}
            <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-4">
              <h4 className="text-[#1B1F24] font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">Empresa</h4>
              <Link href="/nosotros" className="text-[#4b5563] hover:text-[#0057FF] text-sm font-light transition-colors">Sobre Nosotros</Link>
              <Link href="/nosotros" className="text-[#4b5563] hover:text-[#0057FF] text-sm font-light transition-colors">Infraestructura</Link>
              <Link href="/contacto" className="text-[#4b5563] hover:text-[#0057FF] text-sm font-light transition-colors">Contacto B2B</Link>
            </div>

            {/* Soporte Column */}
            <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-4">
              <h4 className="text-[#1B1F24] font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">Atención a Clientes</h4>
              <a href="mailto:ventasequipanext@gmail.com" className="text-[#4b5563] hover:text-[#0057FF] text-sm font-light transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">mail</span>
                ventasequipanext@gmail.com
              </a>
              <p className="text-[#4b5563] text-sm font-light flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                Chimalhuacán, Estado de México
              </p>
              
              <div className="mt-4 p-4 bg-[#F5F7FA] border border-[#EAECEF] rounded-2xl flex items-start gap-3">
                 <span className="w-1.5 h-1.5 bg-[#0057FF] rounded-full mt-1.5 flex-shrink-0"></span>
                 <p className="text-[#4b5563] text-[11px] font-medium leading-relaxed">
                   Atendemos licitaciones y proyectos por volumen a nivel nacional.
                 </p>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-[#EAECEF] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#9ca3af] text-[11px] font-light">
              &copy; {new Date().getFullYear()} EQUIPANEXT. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-[#9ca3af] hover:text-[#4b5563] text-[11px] font-light transition-colors">Aviso de Privacidad</Link>
              <Link href="#" className="text-[#9ca3af] hover:text-[#4b5563] text-[11px] font-light transition-colors">Términos y Condiciones</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Chat Widget */}
      <div 
        id="whatsapp-chat-widget" 
        onClick={(e) => e.stopPropagation()}
        className={`fixed bottom-24 right-6 md:right-8 z-50 w-[330px] md:w-[360px] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform bg-white border border-[#EAECEF] ${
          chatOpen 
            ? 'scale-100 opacity-100 pointer-events-auto translate-y-0' 
            : 'scale-95 opacity-0 pointer-events-none translate-y-4'
        }`}
      >
        {/* Header */}
        <div className="bg-[#1B1F24] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden border border-[#EAECEF]">
              <span className="text-[#1B1F24] font-bold text-sm tracking-tighter">EQ</span>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] rounded-full border-2 border-white"></span>
            </div>
            <div>
              <h4 className="font-semibold text-[13px] leading-tight tracking-wide">EQUIPANEXT B2B</h4>
              <p className="text-[11px] text-white/70 flex items-center gap-1 mt-0.5 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
                Atención Corporativa
              </p>
            </div>
          </div>
          <button 
            onClick={handleCloseClick}
            className="text-white/50 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 flex items-center justify-center cursor-pointer" 
            aria-label="Cerrar chat"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Chat Body */}
        <div 
          className="p-5 bg-[#F5F7FA] relative min-h-[160px] flex flex-col justify-end" 
        >
          {/* Chat Bubble */}
          <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm border border-[#EAECEF] max-w-[90%] relative self-start mb-2">
            <p className="text-[10px] font-semibold text-[#0057FF] mb-1.5 uppercase tracking-wider">Asesor Equipanext</p>
            <p className="text-[13px] text-[#4b5563] leading-relaxed font-light">
              Bienvenido a EQUIPANEXT. ¿Desea cotizar algún requerimiento por volumen o necesita asesoría en diseño de uniformes?
            </p>
            <div className="text-right mt-2">
              <span className="text-[9px] text-[#9ca3af]">{timeStr}</span>
            </div>
          </div>
        </div>

        {/* Footer with CTA */}
        <div className="p-4 bg-white border-t border-[#EAECEF] flex justify-center">
          <a 
            href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20uniformes" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#25D366] hover:bg-[#1DA851] text-white font-medium py-3.5 px-6 rounded-full w-full flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(37,211,102,0.2)] transform hover:-translate-y-0.5 transition-all text-[13px] tracking-wide"
          >
            <svg fill="currentColor" height="18" viewBox="0 0 16 16" width="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
            </svg>
            Abrir chat
          </a>
        </div>
      </div>

      {/* Floating WhatsApp Trigger Button */}
      <button 
        id="whatsapp-trigger-btn" 
        onClick={handleTriggerClick}
        aria-label="Abrir chat de WhatsApp" 
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#1B1F24] text-white w-14 h-14 rounded-full flex items-center justify-center hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(27,31,36,0.2)] active:scale-95 transition-all duration-300 cursor-pointer shadow-[0_4px_14px_rgba(0,0,0,0.1)] group border border-white/10"
      >
        {/* Floating Badge */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-[#1B1F24] text-[11px] font-medium px-4 py-2 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.08)] border border-[#EAECEF] whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-x-[-4px] transition-all duration-300 pointer-events-none tracking-wide hidden md:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0057FF] inline-block animate-pulse"></span>
          Asesoría B2B Directa
        </span>

        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#1B1F24] animate-ping opacity-20"></span>
        
        <svg fill="currentColor" height="24" viewBox="0 0 16 16" width="24" xmlns="http://www.w3.org/2000/svg" className="relative z-10 text-white">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
        </svg>

        {/* Red Notification Dot */}
        {notifVisible && (
          <span id="whatsapp-notif-dot" className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#0057FF] rounded-full border-2 border-white flex items-center justify-center shadow-sm z-20">
          </span>
        )}
      </button>
    </>
  );
}
