import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      {/* 1. Hero Section — Modern Premium Industrial */}
      <section className="relative min-h-[95vh] flex items-center bg-surface overflow-hidden border-b border-outline-variant" id="inicio">
        {/* Ambient Subtle Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-outline-variant/30 rounded-full blur-[100px] pointer-events-none z-0"></div>

        {/* Background Image with premium light glass overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            alt="Uniformes Industriales Profesionales" 
            className="w-full h-full object-cover opacity-15 grayscale" 
            src="/assets/images/instalaciones/hero_background.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/20"></div>
        </div>

        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-[140px] md:py-[180px]">
          <div className="max-w-4xl fade-in-up">
            {/* Tag / Micro-Badge */}
            <div className="inline-flex items-center gap-2 bg-surface border border-outline-variant text-on-surface-variant font-mono-label text-[11px] px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest shadow-sm">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              Ingeniería Textil • Fabricación Mexicana
            </div>
            
            {/* Premium Heading */}
            <h1 className="font-display font-bold mb-6 text-5xl md:text-7xl leading-[1.1] tracking-tight text-on-background">
              Precisión industrial en <br className="hidden md:inline" />
              <span className="text-primary">cada detalle operativo.</span>
            </h1>
            
            {/* Description */}
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-2xl text-lg md:text-xl leading-relaxed">
              Diseñamos soluciones de indumentaria y equipo de alta visibilidad para las corporaciones más exigentes de México. Resistencia extrema y ergonomía superior.
            </p>
            
            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                className="btn-primary inline-flex justify-center items-center gap-2 bg-on-background text-surface font-label-caps text-label-caps uppercase px-8 py-4 rounded-md hover:bg-on-background/90 transition-all shadow-md text-sm" 
                href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20uniformes%20con%20Equipanext" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                COTIZAR POR WHATSAPP
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <Link 
                className="btn-secondary inline-flex justify-center items-center gap-2 bg-surface text-on-background border border-outline hover:border-on-background hover:bg-surface-container font-label-caps text-label-caps uppercase px-8 py-4 rounded-md transition-colors text-sm" 
                href="/productos"
              >
                VER CATÁLOGO B2B
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Technical Stats Bar */}
      <section className="bg-surface-container border-b border-outline-variant py-8 relative z-10">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-outline-variant">
            <div className="flex items-center gap-4 py-2 md:py-0 md:px-6">
              <span className="material-symbols-outlined text-primary text-[32px]">verified</span>
              <div>
                <h4 className="text-on-background font-bold text-lg leading-tight">100% Certificado</h4>
                <p className="text-on-surface-variant text-sm">Materiales bajo normas de alta visibilidad.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-4 md:py-0 md:px-6">
              <span className="material-symbols-outlined text-primary text-[32px]">precision_manufacturing</span>
              <div>
                <h4 className="text-on-background font-bold text-lg leading-tight">Manufactura CNC</h4>
                <p className="text-on-surface-variant text-sm">Corte y bordado digital de precisión.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-2 md:py-0 md:px-6">
              <span className="material-symbols-outlined text-primary text-[32px]">local_shipping</span>
              <div>
                <h4 className="text-on-background font-bold text-lg leading-tight">Envío Nacional</h4>
                <p className="text-on-surface-variant text-sm">Logística integrada en todo México.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ¿Quiénes Somos? */}
      <section className="py-[120px] md:py-[160px] bg-surface relative overflow-hidden" id="nosotros">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative fade-in-up">
              <div className="relative z-10 rounded-xl overflow-hidden img-hover-zoom shadow-sm border border-outline-variant">
                <img 
                  alt="Fabricación de uniformes de precisión" 
                  className="w-full h-auto object-cover grayscale-[20%]" 
                  src="/assets/images/instalaciones/stitching_fabric.png"
                />
                <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur border border-outline-variant p-3 rounded font-mono-label text-[11px] text-on-background uppercase tracking-wider shadow-sm">
                  Especificación: Costura Reforzada
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 fade-in-up stagger-2">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-mono-label text-on-surface-variant uppercase tracking-widest">Ingeniería Corporativa</span>
              </div>
              
              <h2 className="font-headline-lg font-bold text-on-background mb-8 text-3xl md:text-5xl leading-tight">
                Protección visible, <br />ingeniería impecable.
              </h2>
              
              <p className="font-body-md text-on-surface-variant mb-6 text-lg leading-relaxed">
                En <strong className="text-on-background font-medium">EQUIPANEXT</strong> nos especializamos en el desarrollo y manufactura industrial de chalecos reflejantes y prendas de seguridad de alta gama para corporativos líderes en logística, construcción y operaciones críticas en México.
              </p>
              
              <p className="font-body-md text-on-surface-variant mb-10 text-base leading-relaxed">
                Nuestras prendas están confeccionadas bajo un estricto control de calidad, asegurando que cada componente cumpla con los estándares de durabilidad y visibilidad necesarios para salvaguardar la vida en el campo de trabajo.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body-md text-on-background font-medium mb-8">
                <li className="flex items-center gap-3 bg-surface-container border border-outline-variant px-4 py-3 rounded-md hover:border-outline transition-colors">
                  <span className="material-symbols-outlined text-primary text-[20px]">shield</span>
                  Calidad Textil
                </li>
                <li className="flex items-center gap-3 bg-surface-container border border-outline-variant px-4 py-3 rounded-md hover:border-outline transition-colors">
                  <span className="material-symbols-outlined text-primary text-[20px]">group</span>
                  Soporte B2B
                </li>
                <li className="flex items-center gap-3 bg-surface-container border border-outline-variant px-4 py-3 rounded-md hover:border-outline transition-colors">
                  <span className="material-symbols-outlined text-primary text-[20px]">bolt</span>
                  Entregas Precisas
                </li>
                <li className="flex items-center gap-3 bg-surface-container border border-outline-variant px-4 py-3 rounded-md hover:border-outline transition-colors">
                  <span className="material-symbols-outlined text-primary text-[20px]">manufacturing</span>
                  Manufactura MX
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ¿Por qué elegirnos? (Bento Section) */}
      <section className="py-[120px] bg-surface-container border-t border-b border-outline-variant relative" id="ventajas">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <span className="text-xs font-mono-label text-on-surface-variant uppercase tracking-widest mb-4 block">
              Ventajas Competitivas
            </span>
            <h2 className="font-headline-lg font-bold text-on-background text-3xl md:text-5xl leading-tight">
              Ingeniería diseñada para durar.
            </h2>
            <p className="text-on-surface-variant mt-6 text-base md:text-lg">
              Analizamos los entornos operativos reales para diseñar uniformes industriales que resistan el uso continuo y las condiciones más severas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface border border-outline-variant rounded-xl p-8 card-shadow transition-all group fade-in-up stagger-1">
              <div className="w-12 h-12 bg-surface-container border border-outline flex items-center justify-center rounded-lg mb-6 group-hover:border-primary transition-all">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">fitness_center</span>
              </div>
              <h4 className="text-on-background font-bold text-xl mb-3">Máxima Resistencia</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Telas antidesgarro ripstop y costuras de alta densidad para soportar ambientes extremos.
              </p>
            </div>

            <div className="bg-surface border border-outline-variant rounded-xl p-8 card-shadow transition-all group fade-in-up stagger-2">
              <div className="w-12 h-12 bg-surface-container border border-outline flex items-center justify-center rounded-lg mb-6 group-hover:border-primary transition-all">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">visibility</span>
              </div>
              <h4 className="text-on-background font-bold text-xl mb-3">Visibilidad 360°</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Cintas reflejantes certificadas de alto poder para condiciones de baja luminosidad.
              </p>
            </div>

            <div className="bg-surface border border-outline-variant rounded-xl p-8 card-shadow transition-all group fade-in-up stagger-3">
              <div className="w-12 h-12 bg-surface-container border border-outline flex items-center justify-center rounded-lg mb-6 group-hover:border-primary transition-all">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">airline_seat_recline_extra</span>
              </div>
              <h4 className="text-on-background font-bold text-xl mb-3">Ergonomía Activa</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Corte anatómico optimizado que permite total libertad de movimiento corporal.
              </p>
            </div>

            <div className="bg-surface border border-outline-variant rounded-xl p-8 card-shadow transition-all group fade-in-up stagger-4">
              <div className="w-12 h-12 bg-surface-container border border-outline flex items-center justify-center rounded-lg mb-6 group-hover:border-primary transition-all">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">hub</span>
              </div>
              <h4 className="text-on-background font-bold text-xl mb-3">Identidad de Marca</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Personalización exacta de logotipos y colores corporativos mediante sistemas automatizados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bordado Personalizado */}
      <section className="py-[120px] md:py-[160px] bg-surface relative overflow-hidden" id="bordado">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-6 fade-in-up">
              <span className="text-xs font-mono-label text-on-surface-variant uppercase tracking-widest mb-4 block">
                Personalización de Precisión
              </span>
              <h2 className="font-headline-lg font-bold text-on-background text-3xl md:text-5xl leading-tight mb-8">
                Bordado digital CNC.
              </h2>
              
              <p className="font-body-md text-on-surface-variant mb-10 text-lg">
                Utilizamos maquinaria de bordado CNC computarizada de última generación, reproduciendo la identidad de tu marca con una nitidez excepcional sobre cualquier textil industrial.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 p-5 bg-surface-container border border-outline-variant rounded-xl hover:border-outline transition-colors">
                  <span className="material-symbols-outlined text-primary text-[24px] shrink-0">pattern</span>
                  <div>
                    <h5 className="text-on-background font-bold text-base mb-1">Hilos de Alta Tenacidad</h5>
                    <p className="text-on-surface-variant text-sm">Resistentes al lavado agresivo y a la abrasión.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-surface-container border border-outline-variant rounded-xl hover:border-outline transition-colors">
                  <span className="material-symbols-outlined text-primary text-[24px] shrink-0">palette</span>
                  <div>
                    <h5 className="text-on-background font-bold text-base mb-1">Colorimetría Exacta</h5>
                    <p className="text-on-surface-variant text-sm">Alineación perfecta con tu identidad corporativa.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6 relative fade-in-up stagger-2">
              <div className="relative z-10 rounded-xl overflow-hidden img-hover-zoom shadow-sm border border-outline-variant">
                <img 
                  alt="Maquinaria de bordado industrial CNC" 
                  className="w-full h-auto object-cover grayscale-[20%]" 
                  src="/assets/images/instalaciones/embroidery_machine.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Industrias que atendemos */}
      <section className="py-[120px] bg-surface-container border-t border-b border-outline-variant relative" id="industrias">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <span className="text-xs font-mono-label text-on-surface-variant uppercase tracking-widest mb-4 block">
              Sectores Estratégicos
            </span>
            <h2 className="font-headline-lg font-bold text-on-background text-3xl md:text-5xl leading-tight">
              Industrias que equipamos.
            </h2>
            <p className="text-on-surface-variant mt-6 text-base md:text-lg">
              Soluciones de uniformidad B2B diseñadas para mitigar riesgos e impulsar la eficiencia en áreas críticas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group rounded-xl bg-surface border border-outline-variant p-8 hover:border-outline transition-colors flex flex-col justify-between min-h-[220px] fade-in-up stagger-1">
              <div>
                <span className="material-symbols-outlined text-primary text-[28px] mb-4 block">construction</span>
                <h4 className="text-on-background font-bold text-xl mb-2">Construcción</h4>
                <p className="text-on-surface-variant text-sm">Resistencia a la abrasión y alta visibilidad para proyectos viales.</p>
              </div>
            </div>

            <div className="group rounded-xl bg-surface border border-outline-variant p-8 hover:border-outline transition-colors flex flex-col justify-between min-h-[220px] fade-in-up stagger-2">
              <div>
                <span className="material-symbols-outlined text-primary text-[28px] mb-4 block">local_shipping</span>
                <h4 className="text-on-background font-bold text-xl mb-2">Logística</h4>
                <p className="text-on-surface-variant text-sm">Diseño ergonómico para centros de distribución y rutas viales.</p>
              </div>
            </div>

            <div className="group rounded-xl bg-surface border border-outline-variant p-8 hover:border-outline transition-colors flex flex-col justify-between min-h-[220px] fade-in-up stagger-3">
              <div>
                <span className="material-symbols-outlined text-primary text-[28px] mb-4 block">precision_manufacturing</span>
                <h4 className="text-on-background font-bold text-xl mb-2">Manufactura</h4>
                <p className="text-on-surface-variant text-sm">Protección técnica para líneas de producción y plantas químicas.</p>
              </div>
            </div>

            <div className="group rounded-xl bg-surface border border-outline-variant p-8 hover:border-outline transition-colors flex flex-col justify-between min-h-[220px] fade-in-up stagger-4">
              <div>
                <span className="material-symbols-outlined text-primary text-[28px] mb-4 block">bolt</span>
                <h4 className="text-on-background font-bold text-xl mb-2">Energía</h4>
                <p className="text-on-surface-variant text-sm">Visibilidad óptima y resistencia en ambientes extremos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Social Proof / Industrial Partners */}
      <section className="py-[80px] bg-surface">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <p className="text-on-surface-variant font-mono-label text-xs uppercase tracking-widest mb-10">
            PROVEEDOR ESTRATÉGICO PARA SECTORES LÍDERES
          </p>
          <div className="flex flex-wrap gap-8 items-center justify-center opacity-40 grayscale hover:opacity-80 transition-opacity">
            <span className="text-on-background font-bold tracking-widest text-lg font-display uppercase px-4">INFRAESTRUCTURA MX</span>
            <span className="text-on-background font-bold tracking-widest text-lg font-display uppercase px-4">LOGÍSTICA FEDERAL</span>
            <span className="text-on-background font-bold tracking-widest text-lg font-display uppercase px-4">AUTOMOTRIZ CENTRAL</span>
          </div>
        </div>
      </section>
    </div>
  );
}
