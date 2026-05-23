import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-inverse-surface overflow-hidden" id="inicio">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            alt="Uniformes Industriales Profesionales" 
            className="w-full h-full object-cover opacity-40" 
            src="/assets/images/instalaciones/hero_background.png"
          />
        </div>
        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-[120px]">
          <div className="max-w-3xl fade-in-up">
            <span className="inline-block bg-primary-container text-on-primary-container font-mono-label text-mono-label px-3 py-1 rounded mb-6 uppercase tracking-wider">
              Fabricación Mexicana
            </span>
            <h1 className="font-display text-display text-on-primary font-bold mb-6 text-headline-lg-mobile md:text-display leading-tight tracking-tight">
              Precisión Mexicana en <span className="text-primary-fixed-dim">Cada Puntada.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-surface-container-high mb-10 max-w-2xl">
              Fabricamos soluciones industriales con precisión en la manufactura nacional y estándares exigentes. Nos enfocamos en calidad, resistencia y seguridad para el entorno laboral moderno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                className="btn-primary inline-flex justify-center items-center gap-2 bg-primary text-on-primary font-label-caps text-label-caps uppercase px-8 py-4 rounded hover:bg-primary-container hover:text-on-primary-container transition-all active:translate-y-px shadow-sm" 
                href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20uniformes%20con%20Equipanext" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                COTIZAR POR WHATSAPP
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <Link 
                className="btn-secondary inline-flex justify-center items-center gap-2 bg-transparent text-on-primary border border-surface-container-high font-label-caps text-label-caps uppercase px-8 py-4 rounded hover:bg-surface-container-lowest/10 transition-colors" 
                to="/productos"
              >
                VER CATÁLOGO
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <span className="material-symbols-outlined text-surface-container-high opacity-70">south</span>
        </div>
      </section>

      {/* 2. ¿Quiénes Somos? */}
      <section className="py-[80px] md:py-[120px] bg-background" id="nosotros">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
            <div className="order-2 md:order-1 relative fade-in-up">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-outline-variant rounded z-0 translate-x-4 translate-y-4"></div>
              <img 
                alt="Fabricación de uniformes" 
                className="relative z-10 w-full h-auto object-cover rounded shadow-sm" 
                src="/assets/images/instalaciones/stitching_fabric.png"
              />
            </div>
            <div className="order-1 md:order-2 fade-in-up stagger-2">
              {/* Logo EQUIPANEXT en la sección */}
              <div className="mb-6">
                <img alt="EQUIPANEXT" className="h-10 w-auto object-contain" src="/assets/images/marca/Logo.png"/>
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-background mb-6 text-headline-lg-mobile md:text-headline-lg">
                ¿Quiénes Somos?
              </h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                En EQUIPANEXT nos especializamos en la fabricación y venta de chalecos reflejantes de alta calidad para empresas, industrias, constructoras, logística, seguridad vial y uso operativo en toda la República Mexicana.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Somos una empresa <strong className="text-on-background">100% mexicana</strong>.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                Nuestro compromiso es ofrecer productos resistentes, funcionales y visibles que ayuden a proteger a los trabajadores y mejorar la seguridad en cualquier entorno laboral. Fabricamos chalecos reflejantes con materiales de calidad, diseños cómodos y acabados duraderos, adaptándonos a las necesidades de cada cliente.
              </p>
              <ul className="space-y-4 font-body-md text-body-md text-on-background font-medium">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Calidad Superior Garantizada
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Atención Personalizada B2B
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Orgullosa Fabricación Mexicana
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bordado Personalizado */}
      <section className="py-[80px] md:py-[120px] bg-surface-container-low border-t border-outline-variant" id="bordado">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 fade-in-up">
            {/* Logo EQUIPANEXT */}
            <div className="flex justify-center mb-6">
              <img alt="EQUIPANEXT" className="h-10 w-auto object-contain" src="/assets/images/marca/Logo.png"/>
            </div>
            <span className="text-label-caps font-label-caps text-primary tracking-widest uppercase mb-4 block">
              Personalización
            </span>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-background text-headline-lg-mobile md:text-headline-lg">
              Personalizado Bordado
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded p-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:border-primary transition-colors group fade-in-up stagger-1">
              <div className="w-12 h-12 bg-surface-variant rounded flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors">
                <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">styler</span>
              </div>
              <h4 className="text-body-lg font-headline-md font-bold text-on-surface mb-3">Bordado Preciso</h4>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                Personalizamos tus uniformes con bordados detallados que reflejan tu identidad.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded p-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:border-primary transition-colors group fade-in-up stagger-2">
              <div className="w-12 h-12 bg-surface-variant rounded flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors">
                <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">palette</span>
              </div>
              <h4 className="text-body-lg font-headline-md font-bold text-on-surface mb-3">Diseños Únicos</h4>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                Cada bordado es hecho a la medida, ideal para destacar en cualquier industria.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded p-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:border-primary transition-colors group fade-in-up stagger-3">
              <div className="w-12 h-12 bg-surface-variant rounded flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors">
                <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">verified</span>
              </div>
              <h4 className="text-body-lg font-headline-md font-bold text-on-surface mb-3">Calidad Duradera</h4>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                Usamos hilos resistentes que soportan lavados frecuentes y uso diario.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
