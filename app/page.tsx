import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      {/* 1. Hero Section — Tesla/Caterpillar Modern Premium Industrial */}
      <section className="relative min-h-[95vh] flex items-center bg-[#08090b] overflow-hidden border-b border-outline-variant/30" id="inicio">
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 grid-pattern opacity-[0.06] z-0"></div>
        <div className="absolute inset-0 hero-blueprint opacity-[0.08] z-0"></div>
        
        {/* Ambient Radial Glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-primary-container/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

        {/* Background Image with subtle gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            alt="Uniformes Industriales Profesionales" 
            className="w-full h-full object-cover opacity-30" 
            src="/assets/images/instalaciones/hero_background.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-[140px] md:py-[180px]">
          <div className="max-w-4xl fade-in-up">
            {/* Tag / Micro-Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary font-mono-label text-[11px] px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              <span className="dot-live"></span>
              Fabricación Mexicana • Ingeniería Textil
            </div>
            
            {/* Premium Heading */}
            <h1 className="font-display font-bold mb-6 text-4xl sm:text-5xl md:text-7xl leading-tight tracking-tight text-white">
              Precisión Mexicana en <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-white">
                Cada Puntada Industrial.
              </span>
            </h1>
            
            {/* Description */}
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-2xl text-lg md:text-xl leading-relaxed">
              Diseñamos y fabricamos soluciones de uniformidad y chalecos reflejantes de alta especificación para las industrias más exigentes de México. Resistencia, visibilidad y durabilidad extrema en el entorno de trabajo.
            </p>
            
            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                className="btn-primary inline-flex justify-center items-center gap-2 bg-primary text-on-primary font-label-caps text-label-caps uppercase px-8 py-4 rounded hover:bg-primary/95 transition-all active:translate-y-px shadow-sm text-sm" 
                href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20uniformes%20con%20Equipanext" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                COTIZAR POR WHATSAPP
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
              <Link 
                className="btn-secondary inline-flex justify-center items-center gap-2 bg-transparent text-on-primary border border-outline-variant hover:border-primary/50 hover:bg-white/5 font-label-caps text-label-caps uppercase px-8 py-4 rounded transition-colors text-sm" 
                href="/productos"
              >
                VER CATÁLOGO B2B
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
          <span className="material-symbols-outlined text-primary/70">south</span>
        </div>
      </section>

      {/* 2. Technical Stats Bar */}
      <section className="bg-surface-container-low border-b border-outline-variant/30 py-8 relative z-10">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
            <div className="flex items-center gap-4 py-2 md:py-0 md:px-6">
              <span className="material-symbols-outlined text-primary text-[36px]">verified</span>
              <div>
                <h4 className="text-white font-bold text-lg leading-tight">100% Certificado</h4>
                <p className="text-on-surface-variant text-sm">Materiales homologados bajo normas de alta visibilidad.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-4 md:py-0 md:px-6">
              <span className="material-symbols-outlined text-primary text-[36px]">precision_manufacturing</span>
              <div>
                <h4 className="text-white font-bold text-lg leading-tight">Manufactura CNC</h4>
                <p className="text-on-surface-variant text-sm">Corte y bordado digital de absoluta precisión.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-2 md:py-0 md:px-6">
              <span className="material-symbols-outlined text-primary text-[36px]">local_shipping</span>
              <div>
                <h4 className="text-white font-bold text-lg leading-tight">Envío Nacional</h4>
                <p className="text-on-surface-variant text-sm">Logística integrada y entregas puntuales en todo México.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ¿Quiénes Somos? */}
      <section className="py-[100px] md:py-[140px] bg-background relative overflow-hidden" id="nosotros">
        {/* Glow behind section */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative fade-in-up">
              {/* Technical glowing border */}
              <div className="absolute -inset-4 border border-primary/20 rounded-lg z-0 translate-x-3 translate-y-3"></div>
              <div className="absolute -inset-4 border border-outline-variant/40 rounded-lg z-0 -translate-x-3 -translate-y-3"></div>
              
              <div className="relative z-10 rounded-lg overflow-hidden img-hover-zoom shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img 
                  alt="Fabricación de uniformes de precisión" 
                  className="w-full h-auto object-cover" 
                  src="/assets/images/instalaciones/stitching_fabric.png"
                />
                <div className="absolute bottom-4 left-4 bg-surface-container/90 backdrop-blur border border-outline-variant/50 p-4 rounded font-mono-label text-[11px] text-primary uppercase tracking-wider">
                  Especificación: Costura Doble Reforzada
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 fade-in-up stagger-2">
              <div className="mb-6 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                <span className="text-xs font-mono-label text-primary uppercase tracking-widest">INGENIERÍA CORPORATIVA</span>
              </div>
              
              <h2 className="font-headline-lg font-bold text-white mb-6 text-3xl md:text-5xl leading-tight">
                Protección visible, ingeniería impecable.
              </h2>
              
              <div className="accent-bar w-20 mb-8"></div>
              
              <p className="font-body-md text-on-surface-variant mb-6 text-lg leading-relaxed">
                En <strong className="text-white">EQUIPANEXT</strong> nos especializamos en el desarrollo y manufactura industrial de chalecos reflejantes y prendas de seguridad de alta gama para corporativos líderes en logística, construcción, seguridad y operaciones críticas en México.
              </p>
              
              <p className="font-body-md text-on-surface-variant mb-8 text-base leading-relaxed">
                Nuestras prendas están confeccionadas bajo un estricto control de calidad, asegurando que cada componente —desde el hilo de alta tenacidad hasta la cinta de microesferas reflejante— cumpla con los estándares de durabilidad y visibilidad necesarios para salvaguardar la vida en el campo de trabajo.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body-md text-white font-medium mb-8">
                <li className="flex items-center gap-3 bg-surface-container-low border border-outline-variant/30 p-3.5 rounded hover:border-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-primary text-[20px]">shield</span>
                  Calidad Textil Certificada
                </li>
                <li className="flex items-center gap-3 bg-surface-container-low border border-outline-variant/30 p-3.5 rounded hover:border-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-primary text-[20px]">group</span>
                  Soporte & Logística B2B
                </li>
                <li className="flex items-center gap-3 bg-surface-container-low border border-outline-variant/30 p-3.5 rounded hover:border-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-primary text-[20px]">bolt</span>
                  Entregas de Alta Velocidad
                </li>
                <li className="flex items-center gap-3 bg-surface-container-low border border-outline-variant/30 p-3.5 rounded hover:border-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-primary text-[20px]">manufacturing</span>
                  100% Manufactura Mexicana
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ¿Por qué elegirnos? (Bento Section) */}
      <section className="py-[100px] bg-surface-container-low border-t border-b border-outline-variant/30 relative" id="ventajas">
        <div className="absolute inset-0 stripe-pattern opacity-[0.03] pointer-events-none"></div>
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <span className="text-xs font-mono-label text-primary uppercase tracking-widest mb-3 block">
              VENTAJAS COMPETITIVAS
            </span>
            <h2 className="font-headline-lg font-bold text-white text-3xl md:text-5xl leading-tight">
              Ingeniería textil diseñada para durar.
            </h2>
            <p className="text-on-surface-variant mt-4 text-base md:text-lg">
              Analizamos los entornos operativos reales para diseñar uniformes industriales que resistan el uso continuo, el lavado constante y las condiciones más severas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface border border-outline-variant/30 rounded-lg p-8 technical-shadow hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(0,102,255,0.1)] transition-all group fade-in-up stagger-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-all">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">fitness_center</span>
              </div>
              <h4 className="text-white font-bold text-xl mb-3">Máxima Resistencia</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Telas antidesgarro con tecnología ripstop y costuras reforzadas de alta densidad para soportar ambientes extremos.
              </p>
            </div>

            <div className="bg-surface border border-outline-variant/30 rounded-lg p-8 technical-shadow hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(0,102,255,0.1)] transition-all group fade-in-up stagger-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-all">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">visibility</span>
              </div>
              <h4 className="text-white font-bold text-xl mb-3 font-display">Visibilidad 360°</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Cintas reflejantes certificadas de alto poder que maximizan la seguridad del operario en condiciones de baja luminosidad.
              </p>
            </div>

            <div className="bg-surface border border-outline-variant/30 rounded-lg p-8 technical-shadow hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(0,102,255,0.1)] transition-all group fade-in-up stagger-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-all">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">airline_seat_recline_extra</span>
              </div>
              <h4 className="text-white font-bold text-xl mb-3">Ergonomía Activa</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Corte anatómico optimizado que permite total libertad de movimiento corporal, aumentando la comodidad y la productividad.
              </p>
            </div>

            <div className="bg-surface border border-outline-variant/30 rounded-lg p-8 technical-shadow hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(0,102,255,0.1)] transition-all group fade-in-up stagger-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-all">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">hub</span>
              </div>
              <h4 className="text-white font-bold text-xl mb-3">Identidad de Marca</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Personalización exacta de logotipos y colores corporativos mediante sistemas automatizados avanzados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bordado Personalizado */}
      <section className="py-[100px] md:py-[140px] bg-background relative overflow-hidden" id="bordado">
        {/* Ambient background glow */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-6 fade-in-up">
              <span className="text-xs font-mono-label text-primary uppercase tracking-widest mb-3 block">
                ALTA TECNOLOGÍA EN PERSONALIZACIÓN
              </span>
              <h2 className="font-headline-lg font-bold text-white text-3xl md:text-5xl leading-tight mb-6">
                Bordado industrial digitalizado de precisión.
              </h2>
              <div className="accent-bar w-20 mb-8"></div>
              
              <p className="font-body-md text-on-surface-variant mb-6 text-lg">
                Utilizamos maquinaria de bordado CNC computarizada de última generación, permitiendo reproducir la identidad visual de tu marca con una nitidez excepcional sobre cualquier tipo de textil industrial grueso.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-surface border border-outline-variant/30 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-[28px] shrink-0">pattern</span>
                  <div>
                    <h5 className="text-white font-bold text-base mb-1">Hilos de Alta Tenacidad</h5>
                    <p className="text-on-surface-variant text-sm">Resistentes al lavado agresivo y a la abrasión química ligera.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-surface border border-outline-variant/30 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-[28px] shrink-0">palette</span>
                  <div>
                    <h5 className="text-white font-bold text-base mb-1">Colorimetría Corporativa Exacta</h5>
                    <p className="text-on-surface-variant text-sm">Alineación perfecta con las guías de identidad corporativa de tu marca.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-surface border border-outline-variant/30 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-[28px] shrink-0">workspace_premium</span>
                  <div>
                    <h5 className="text-white font-bold text-base mb-1">Bordado CNC Computarizado</h5>
                    <p className="text-on-surface-variant text-sm">Precisión pixel-perfect que garantiza consistencia visual en miles de piezas.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6 relative fade-in-up stagger-2">
              <div className="absolute -inset-4 border border-outline-variant/30 rounded-lg z-0 translate-x-3 translate-y-3"></div>
              <div className="relative z-10 rounded-lg overflow-hidden img-hover-zoom shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <img 
                  alt="Maquinaria de bordado industrial CNC" 
                  className="w-full h-auto object-cover" 
                  src="/assets/images/instalaciones/embroidery_machine.png"
                />
                <div className="absolute bottom-4 right-4 bg-[#08090b]/90 backdrop-blur border border-outline-variant/50 p-4 rounded font-mono-label text-[11px] text-primary uppercase tracking-wider">
                  Monitoreo de Aguja CNC Inteligente
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Industrias que atendemos */}
      <section className="py-[100px] bg-surface-container-low border-t border-outline-variant/30 relative" id="industrias">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <span className="text-xs font-mono-label text-primary uppercase tracking-widest mb-3 block">
              COBERTURA SECTORIAL
            </span>
            <h2 className="font-headline-lg font-bold text-white text-3xl md:text-5xl leading-tight">
              Sectores estratégicos que equipamos.
            </h2>
            <p className="text-on-surface-variant mt-4 text-base md:text-lg">
              Nuestras soluciones de uniformidad profesional B2B están diseñadas para mitigar riesgos e impulsar la eficiencia en diversas áreas críticas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group overflow-hidden rounded-lg bg-surface border border-outline-variant/30 p-8 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between min-h-[250px] fade-in-up stagger-1">
              <div>
                <span className="material-symbols-outlined text-primary text-[32px] mb-4 block">construction</span>
                <h4 className="text-white font-bold text-xl mb-3">Construcción</h4>
                <p className="text-on-surface-variant text-sm">Resistencia máxima a la abrasión y cintas de alta visibilidad para obras y proyectos viales.</p>
              </div>
              <div className="w-8 h-1 bg-primary group-hover:w-full transition-all duration-300 mt-4"></div>
            </div>

            <div className="relative group overflow-hidden rounded-lg bg-surface border border-outline-variant/30 p-8 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between min-h-[250px] fade-in-up stagger-2">
              <div>
                <span className="material-symbols-outlined text-primary text-[32px] mb-4 block">local_shipping</span>
                <h4 className="text-white font-bold text-xl mb-3">Logística</h4>
                <p className="text-on-surface-variant text-sm">Diseño ligero y ergonómico optimizado para operarios de centros de distribución y rutas viales.</p>
              </div>
              <div className="w-8 h-1 bg-primary group-hover:w-full transition-all duration-300 mt-4"></div>
            </div>

            <div className="relative group overflow-hidden rounded-lg bg-surface border border-outline-variant/30 p-8 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between min-h-[250px] fade-in-up stagger-3">
              <div>
                <span className="material-symbols-outlined text-primary text-[32px] mb-4 block">precision_manufacturing</span>
                <h4 className="text-white font-bold text-xl mb-3">Manufactura</h4>
                <p className="text-on-surface-variant text-sm">Protección antiestática e ignífuga para personal en líneas de producción y plantas químicas.</p>
              </div>
              <div className="w-8 h-1 bg-primary group-hover:w-full transition-all duration-300 mt-4"></div>
            </div>

            <div className="relative group overflow-hidden rounded-lg bg-surface border border-outline-variant/30 p-8 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between min-h-[250px] fade-in-up stagger-4">
              <div>
                <span className="material-symbols-outlined text-primary text-[32px] mb-4 block">bolt</span>
                <h4 className="text-white font-bold text-xl mb-3">Energía & Minería</h4>
                <p className="text-on-surface-variant text-sm">Visibilidad óptima en minas subterráneas y alta resistencia para plantas generadoras eléctricas.</p>
              </div>
              <div className="w-8 h-1 bg-primary group-hover:w-full transition-all duration-300 mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Social Proof / Industrial Partners */}
      <section className="py-[60px] bg-background border-t border-outline-variant/30">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <p className="text-on-surface-variant font-mono-label text-xs uppercase tracking-widest mb-8">
            PROVEEDOR DE CONFIANZA PARA SECTORES LÍDERES EN MÉXICO
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-60 grayscale hover:opacity-100 transition-opacity">
            <span className="text-white font-bold tracking-widest text-lg font-display uppercase border border-outline-variant/30 p-4 rounded bg-surface">INFRAESTRUCTURA MX</span>
            <span className="text-white font-bold tracking-widest text-lg font-display uppercase border border-outline-variant/30 p-4 rounded bg-surface">LOGÍSTICA FEDERAL</span>
            <span className="text-white font-bold tracking-widest text-lg font-display uppercase border border-outline-variant/30 p-4 rounded bg-surface">MINERÍA PENINSULAR</span>
            <span className="text-white font-bold tracking-widest text-lg font-display uppercase border border-outline-variant/30 p-4 rounded bg-surface">AUTOMOTRIZ CENTRAL</span>
          </div>
        </div>
      </section>
    </div>
  );
}
