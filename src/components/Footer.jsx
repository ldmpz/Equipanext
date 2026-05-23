import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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

  const handleTriggerClick = (e) => {
    e.stopPropagation();
    setChatOpen(!chatOpen);
    setNotifVisible(false);
  };

  const handleCloseClick = (e) => {
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
      <footer className="bg-surface-container-highest dark:bg-surface-container full-width border-t border-outline-variant dark:border-outline">
        <div className="py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="col-span-1 md:col-span-2">
            <NavLink to="/" className="inline-block mb-4">
              <img alt="EQUIPANEXT" className="h-10 w-auto object-contain" src="/assets/images/marca/Logo.png"/>
            </NavLink>
            <p className="text-body-md font-body-md text-on-surface-variant dark:text-surface-variant mb-6 max-w-md">
              Ingeniería en indumentaria industrial. Proveemos soluciones textiles de alto rendimiento para entornos operativos exigentes.
            </p>
            <p className="text-body-md font-body-md text-on-surface-variant dark:text-surface-variant">
              &copy; {new Date().getFullYear()} EQUIPANEXT. Fabricación de Uniformes Industriales. Todos los derechos reservados.
            </p>
          </div>
          <div className="col-span-1 flex flex-col gap-3">
            <span className="text-label-caps font-label-caps text-on-surface dark:text-inverse-on-surface mb-2">LEGAL</span>
            <a className="text-body-md font-body-md text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface underline transition-all active:opacity-80" href="#">Aviso de Privacidad</a>
            <a className="text-body-md font-body-md text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface underline transition-all active:opacity-80" href="#">Términos y Condiciones</a>
          </div>
          <div className="col-span-1 flex flex-col gap-3">
            <span className="text-label-caps font-label-caps text-on-surface dark:text-inverse-on-surface mb-2">SOPORTE</span>
            <a className="text-body-md font-body-md text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface underline transition-all active:opacity-80" href="#">Soporte Técnico</a>
            <a className="text-body-md font-body-md text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface underline transition-all active:opacity-80" href="#">Preguntas Frecuentes</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Chat Widget */}
      <div 
        id="whatsapp-chat-widget" 
        onClick={(e) => e.stopPropagation()}
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
              <span className="text-primary font-bold text-sm tracking-tighter">EQ</span>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] rounded-full border-2 border-white"></span>
            </div>
            <div>
              <h4 className="font-bold text-[15px] leading-tight tracking-wide">EQUIPANEXT</h4>
              <p className="text-[12px] text-white/80 flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
                Te respondemos en 5 minutos
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
          <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-md max-w-[90%] relative self-start mb-2 animate-fade-in-up">
            <div className="absolute top-0 left-[-8px] w-0 h-0 border-t-[8px] border-t-white border-l-[8px] border-l-transparent"></div>
            <p className="text-[11px] font-bold text-[#075E54] mb-1">EQUIPANEXT</p>
            <p className="text-[13px] text-slate-800 leading-normal">
              Bienvenido a EQUIPANEXT, donde te ofrecemos soluciones de Ingeniería Textil y Uniformes Industriales a tu medida.
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
            href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20uniformes" 
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

      {/* Floating WhatsApp Trigger Button */}
      <button 
        id="whatsapp-trigger-btn" 
        onClick={handleTriggerClick}
        aria-label="Abrir chat de WhatsApp" 
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center technical-shadow hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer shadow-lg group"
      >
        {/* Floating Badge */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-[12px] font-bold px-3.5 py-1.5 rounded-full shadow-lg border border-neutral-100 dark:border-neutral-800 whitespace-nowrap opacity-90 group-hover:opacity-100 group-hover:translate-x-[-4px] transition-all duration-300 pointer-events-none tracking-wide hidden md:flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
          ¿Cotizamos en WhatsApp?
        </span>

        {/* Glowing pulse wave */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
        
        <svg fill="currentColor" height="28" viewBox="0 0 16 16" width="28" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
        </svg>

        {/* Red Notification Dot */}
        {notifVisible && (
          <span id="whatsapp-notif-dot" className="absolute top-0 right-0 w-4 h-4 bg-[#FF3B30] rounded-full border-2 border-white flex items-center justify-center shadow-md relative z-20">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          </span>
        )}
      </button>
    </>
  );
}
