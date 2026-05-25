'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [chatOpen, setChatOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('12:00');

  useEffect(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    setTimeStr(`${hours}:${minutes}`);
  }, []);

  const handleTriggerClick = () => {
    setChatOpen(!chatOpen);
  };

  const handleCloseClick = () => {
    setChatOpen(false);
  };

  const widgetRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (
        chatOpen &&
        widgetRef.current &&
        !widgetRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setChatOpen(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [chatOpen]);

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
                <img alt="EQUIPANEXT" className="h-20 w-auto object-contain grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="/assets/images/marca/Logo.png"/>
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
        ref={widgetRef}
        id="whatsapp-chat-widget" 
        className={`fixed bottom-24 right-6 md:right-8 z-50 w-[330px] md:w-[360px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ease-out transform bg-white ${
          chatOpen 
            ? 'scale-100 opacity-100 pointer-events-auto' 
            : 'scale-90 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-[#075E54] text-white px-5 py-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden border border-white/20 shadow-inner">
              <img src="/assets/images/marca/Logo.png" alt="EQUIPANEXT" className="w-full h-full object-contain p-1" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] rounded-full border-2 border-white z-10"></span>
            </div>
            <div>
              <h4 className="font-bold text-[15px] leading-tight tracking-wide">EQUIPANEXT</h4>
              <p className="text-[12px] text-white/80 flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block"></span>
                En línea
              </p>
            </div>
          </div>
          <button 
            onClick={handleCloseClick}
            className="text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 flex items-center justify-center cursor-pointer" 
            aria-label="Cerrar chat"
          >
            <span className="material-symbols-outlined text-[20px] font-bold">close</span>
          </button>
        </div>

        {/* Chat Body */}
        <div 
          className="p-4 bg-[#E5DDD5] relative min-h-[160px] flex flex-col justify-end" 
          style={{
            backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')", 
            backgroundBlendMode: 'overlay', 
            backgroundColor: 'rgba(229, 221, 213, 0.95)'
          }}
        >
          {/* Chat Bubble */}
          <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-md max-w-[90%] relative self-start mb-2">
            <div className="absolute top-0 left-[-8px] w-0 h-0 border-t-[8px] border-t-white border-l-[8px] border-l-transparent"></div>
            <p className="text-[11px] font-bold text-[#075E54] mb-1">EQUIPANEXT</p>
            <p className="text-[13px] text-slate-800 leading-normal">
              Bienvenido a EQUIPANEXT, donde te ofrecemos soluciones de Ingeniería en Uniformes Industriales a tu medida.
            </p>
            <p className="text-[13px] text-slate-800 leading-normal mt-2 font-semibold">
              ¿En qué podemos ayudarte hoy?
            </p>
            <div className="text-right mt-1.5">
              <span className="text-[10px] text-slate-400">{timeStr}</span>
            </div>
          </div>
        </div>

        {/* Footer with CTA */}
        <div className="p-4 bg-white border-t border-slate-100 flex justify-center">
          <a 
            href="https://wa.me/525524398773?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20uniformes" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-6 rounded-full w-full flex items-center justify-center gap-2.5 shadow-md transform hover:scale-[1.02] active:scale-[0.98] transition-all text-[15px]"
          >
            <svg fill="currentColor" height="20" viewBox="0 0 16 16" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
            </svg>
            Ir a WhatsApp
          </a>
        </div>
      </div>

      {/* Floating Social Media Sidebar */}
      <div className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        <a href="#" aria-label="Facebook" className="w-[42px] h-[42px] rounded-full bg-[#1B1F24] border border-[#333] text-white flex items-center justify-center hover:bg-[#1877F2] hover:border-transparent hover:scale-110 transition-all duration-300 shadow-lg group">
          <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20" className="group-hover:animate-pulse drop-shadow-md"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
        </a>
        <a href="#" aria-label="Instagram" className="w-[42px] h-[42px] rounded-full bg-[#1B1F24] border border-[#333] text-white flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent hover:scale-110 transition-all duration-300 shadow-lg group">
          <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20" className="group-hover:animate-pulse drop-shadow-md"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
        </a>
        <a href="#" aria-label="TikTok" className="w-[42px] h-[42px] rounded-full bg-[#1B1F24] border border-[#333] text-white flex items-center justify-center hover:bg-black hover:border-transparent hover:scale-110 transition-all duration-300 shadow-lg group">
          <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20" className="group-hover:animate-pulse drop-shadow-md"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.95v7.4c-.01 1.94-.65 3.86-1.83 5.33-1.18 1.48-2.83 2.45-4.7 2.81-1.87.35-3.84.14-5.55-.61-1.71-.74-3.11-2.02-3.97-3.64-.86-1.61-1.11-3.51-.71-5.32.4-1.81 1.43-3.41 2.92-4.52 1.49-1.12 3.33-1.63 5.18-1.43V12.1c-1.36-.15-2.75.14-3.92.83-1.17.69-2.07 1.81-2.51 3.12-.44 1.3-.35 2.74.24 3.97.59 1.23 1.63 2.18 2.91 2.66 1.28.48 2.74.41 3.97-.21 1.23-.62 2.18-1.66 2.65-2.94.47-1.28.49-2.7-.01-3.98-.36-.93-.97-1.74-1.74-2.33v-13.2h4.01z"/></svg>
        </a>
      </div>

      {/* Floating WhatsApp Trigger Button */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center">
        {/* Pulsing ring behind the button */}
        {!chatOpen && (
          <div className="absolute w-[60px] h-[60px] rounded-full bg-[#25D366] animate-ping opacity-75"></div>
        )}
        
        <button 
          ref={buttonRef}
          id="whatsapp-trigger-btn" 
          onClick={handleTriggerClick}
          aria-label="Abrir chat de WhatsApp" 
          className="relative bg-[#25D366] text-white w-[60px] h-[60px] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg cursor-pointer"
        >
          <svg fill="currentColor" height="35" viewBox="0 0 16 16" width="35" xmlns="http://www.w3.org/2000/svg" className="relative z-10 text-white">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
          </svg>
          
          {/* Red Notification Badge */}
          {!chatOpen && (
            <span className="absolute top-0 right-0 flex h-[14px] w-[14px] transform translate-x-1 -translate-y-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-[14px] w-[14px] bg-red-500 border-2 border-white"></span>
            </span>
          )}
        </button>
      </div>
    </>
  );
}
