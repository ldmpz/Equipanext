import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#FFFFFF] text-[#1B1F24] min-h-screen selection:bg-[#0057FF]/10 selection:text-[#0057FF]">
      {/* 1. Hero Section — Cinematic Premium Industrial */}
      <section className="relative min-h-[95vh] flex items-center bg-[#F5F7FA] overflow-hidden" id="inicio">
        
        {/* Clean, Subtle Gradient Background (No aggressive glow) */}
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#FFFFFF] to-[#F5F7FA] z-0"></div>

        {/* Ambient Subtle Depth (No Cyberpunk Glow) */}
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-gradient-to-b from-[#0057FF]/[0.02] to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

        <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto py-[160px] md:py-[200px]">
          <div className="max-w-4xl animate-fade-in-up">
            {/* Tag / Micro-Badge - Minimalist Apple Style */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-[#EAECEF] text-[#4b5563] font-medium text-[11px] px-4 py-1.5 rounded-full mb-8 uppercase tracking-[0.15em] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <span className="w-1.5 h-1.5 bg-[#0057FF] rounded-full animate-pulse"></span>
              Ingeniería Textil • Fabricación Mexicana
            </div>
            
            {/* Premium Heading */}
            <h1 className="font-display font-semibold mb-6 text-5xl sm:text-6xl md:text-8xl leading-[1.05] tracking-[-0.03em] text-[#1B1F24]">
              Precisión industrial en <br className="hidden md:inline" />
              <span className="text-[#0057FF]">cada detalle.</span>
            </h1>
            
            {/* Description */}
            <p className="font-body-lg text-[#4b5563] mb-12 max-w-2xl text-lg md:text-2xl leading-relaxed font-light tracking-tight">
              Diseñamos soluciones de indumentaria y equipo de alta visibilidad para corporaciones de primer nivel. Resistencia extrema y ergonomía superior para la industria moderna.
            </p>
            
            {/* Call to Actions - Refined */}
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                className="inline-flex justify-center items-center gap-2 bg-[#1B1F24] text-white font-medium text-sm px-8 py-4 rounded-full hover:bg-[#2B3138] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(27,31,36,0.15)] hover:-translate-y-0.5" 
                href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20uniformes%20con%20Equipanext" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Cotizar por WhatsApp
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <Link 
                className="inline-flex justify-center items-center gap-2 bg-white text-[#1B1F24] border border-[#EAECEF] font-medium text-sm px-8 py-4 rounded-full hover:border-[#1B1F24] hover:bg-[#F5F7FA] transition-colors duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)]" 
                href="/productos"
              >
                Ver Catálogo B2B
              </Link>
            </div>
          </div>
        </div>

        {/* Cinematic Premium Image at bottom right (Optional for depth) */}
        <div className="absolute bottom-0 right-0 w-[50%] h-[60%] hidden lg:block opacity-60 mix-blend-multiply pointer-events-none fade-in-up stagger-3">
            <img 
              src="/assets/images/instalaciones/hero_background.png" 
              alt="Industrial Background"
              className="w-full h-full object-cover object-left-top mask-image-gradient"
              style={{ maskImage: 'linear-gradient(to top left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to top left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)' }}
            />
        </div>
      </section>

      {/* 2. Technical Stats Bar - Ultra Minimal */}
      <section className="bg-white border-b border-[#EAECEF] py-10 relative z-10">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#EAECEF]">
            <div className="flex items-start gap-5 py-2 md:py-0 md:px-8">
              <span className="material-symbols-outlined text-[#1B1F24] text-[28px] font-light">verified</span>
              <div>
                <h4 className="text-[#1B1F24] font-semibold text-lg leading-tight mb-1">100% Certificado</h4>
                <p className="text-[#4b5563] text-sm leading-relaxed">Materiales técnicos bajo normas internacionales de alta visibilidad.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 py-6 md:py-0 md:px-8">
              <span className="material-symbols-outlined text-[#1B1F24] text-[28px] font-light">precision_manufacturing</span>
              <div>
                <h4 className="text-[#1B1F24] font-semibold text-lg leading-tight mb-1">Manufactura CNC</h4>
                <p className="text-[#4b5563] text-sm leading-relaxed">Corte automatizado y bordado digital de absoluta precisión.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 py-2 md:py-0 md:px-8">
              <span className="material-symbols-outlined text-[#1B1F24] text-[28px] font-light">local_shipping</span>
              <div>
                <h4 className="text-[#1B1F24] font-semibold text-lg leading-tight mb-1">Logística Nacional</h4>
                <p className="text-[#4b5563] text-sm leading-relaxed">Distribución y cadena de suministro integrada en todo México.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ¿Quiénes Somos? - Editorial Approach */}
      <section className="py-[120px] md:py-[180px] bg-white relative overflow-hidden" id="nosotros">
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Visual Column - Refined Image Handling */}
            <div className="order-2 lg:order-1 relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-[#EAECEF] bg-[#F5F7FA] aspect-[4/5] sm:aspect-square">
                <img 
                  alt="Fabricación de uniformes de precisión" 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" 
                  src="/assets/images/instalaciones/stitching_fabric.png"
                />
                {/* Soft inner shadow instead of aggressive overlays */}
                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)] pointer-events-none rounded-2xl"></div>
                
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md border border-[#EAECEF] px-4 py-2.5 rounded-full font-medium text-[11px] text-[#1B1F24] uppercase tracking-widest shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  Precisión Textil
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-[11px] font-semibold text-[#0057FF] uppercase tracking-[0.2em]">Ingeniería Corporativa</span>
              </div>
              
              <h2 className="font-display font-semibold text-[#1B1F24] mb-8 text-4xl md:text-6xl leading-[1.1] tracking-[-0.02em]">
                Protección visible, <br />ingeniería impecable.
              </h2>
              
              <p className="font-body-md text-[#4b5563] mb-6 text-xl leading-relaxed font-light">
                En <strong className="text-[#1B1F24] font-medium">EQUIPANEXT</strong> nos especializamos en el desarrollo industrial de indumentaria de alta visibilidad para corporativos líderes en logística, construcción y operaciones críticas.
              </p>
              
              <p className="font-body-md text-[#4b5563] mb-12 text-lg leading-relaxed font-light">
                Cada prenda es confeccionada bajo un estricto control de calidad, asegurando estándares de durabilidad necesarios para salvaguardar la vida en el campo de trabajo.
              </p>
              
              {/* Premium List */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                <li className="flex items-center gap-4 text-[#1B1F24] font-medium text-sm group">
                  <div className="w-10 h-10 rounded-full bg-[#F5F7FA] border border-[#EAECEF] flex items-center justify-center group-hover:border-[#0057FF]/30 group-hover:bg-[#0057FF]/5 transition-all duration-300">
                    <span className="material-symbols-outlined text-[18px] text-[#1B1F24] group-hover:text-[#0057FF] transition-colors">shield</span>
                  </div>
                  Calidad Textil
                </li>
                <li className="flex items-center gap-4 text-[#1B1F24] font-medium text-sm group">
                  <div className="w-10 h-10 rounded-full bg-[#F5F7FA] border border-[#EAECEF] flex items-center justify-center group-hover:border-[#0057FF]/30 group-hover:bg-[#0057FF]/5 transition-all duration-300">
                    <span className="material-symbols-outlined text-[18px] text-[#1B1F24] group-hover:text-[#0057FF] transition-colors">group</span>
                  </div>
                  Soporte B2B
                </li>
                <li className="flex items-center gap-4 text-[#1B1F24] font-medium text-sm group">
                  <div className="w-10 h-10 rounded-full bg-[#F5F7FA] border border-[#EAECEF] flex items-center justify-center group-hover:border-[#0057FF]/30 group-hover:bg-[#0057FF]/5 transition-all duration-300">
                    <span className="material-symbols-outlined text-[18px] text-[#1B1F24] group-hover:text-[#0057FF] transition-colors">bolt</span>
                  </div>
                  Entregas Precisas
                </li>
                <li className="flex items-center gap-4 text-[#1B1F24] font-medium text-sm group">
                  <div className="w-10 h-10 rounded-full bg-[#F5F7FA] border border-[#EAECEF] flex items-center justify-center group-hover:border-[#0057FF]/30 group-hover:bg-[#0057FF]/5 transition-all duration-300">
                    <span className="material-symbols-outlined text-[18px] text-[#1B1F24] group-hover:text-[#0057FF] transition-colors">manufacturing</span>
                  </div>
                  Manufactura MX
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ¿Por qué elegirnos? (Bento Section) - Stripe/Linear Style */}
      <section className="py-[120px] md:py-[180px] bg-[#F5F7FA] border-y border-[#EAECEF] relative" id="ventajas">
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-semibold text-[#0057FF] uppercase tracking-[0.2em] mb-4 block">
              Ventajas Competitivas
            </span>
            <h2 className="font-display font-semibold text-[#1B1F24] text-4xl md:text-5xl leading-[1.15] tracking-[-0.02em]">
              Ingeniería diseñada para durar.
            </h2>
            <p className="text-[#4b5563] mt-6 text-lg md:text-xl font-light">
              Analizamos los entornos operativos reales para diseñar uniformes que resistan el uso continuo y las condiciones más severas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-[#EAECEF] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-14 h-14 bg-[#F5F7FA] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#0057FF]/5 transition-colors duration-300">
                <span className="material-symbols-outlined text-[#1B1F24] text-[26px] font-light group-hover:text-[#0057FF] transition-colors duration-300">fitness_center</span>
              </div>
              <h4 className="text-[#1B1F24] font-semibold text-xl mb-3 tracking-tight">Máxima Resistencia</h4>
              <p className="text-[#4b5563] text-sm leading-relaxed font-light">
                Telas antidesgarro ripstop y costuras de alta densidad para soportar ambientes extremos.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#EAECEF] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-14 h-14 bg-[#F5F7FA] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#0057FF]/5 transition-colors duration-300">
                <span className="material-symbols-outlined text-[#1B1F24] text-[26px] font-light group-hover:text-[#0057FF] transition-colors duration-300">visibility</span>
              </div>
              <h4 className="text-[#1B1F24] font-semibold text-xl mb-3 tracking-tight">Visibilidad 360°</h4>
              <p className="text-[#4b5563] text-sm leading-relaxed font-light">
                Cintas reflejantes certificadas de alto poder para condiciones de baja luminosidad.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#EAECEF] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-14 h-14 bg-[#F5F7FA] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#0057FF]/5 transition-colors duration-300">
                <span className="material-symbols-outlined text-[#1B1F24] text-[26px] font-light group-hover:text-[#0057FF] transition-colors duration-300">airline_seat_recline_extra</span>
              </div>
              <h4 className="text-[#1B1F24] font-semibold text-xl mb-3 tracking-tight">Ergonomía Activa</h4>
              <p className="text-[#4b5563] text-sm leading-relaxed font-light">
                Corte anatómico optimizado que permite total libertad de movimiento corporal.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#EAECEF] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-14 h-14 bg-[#F5F7FA] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#0057FF]/5 transition-colors duration-300">
                <span className="material-symbols-outlined text-[#1B1F24] text-[26px] font-light group-hover:text-[#0057FF] transition-colors duration-300">hub</span>
              </div>
              <h4 className="text-[#1B1F24] font-semibold text-xl mb-3 tracking-tight">Identidad de Marca</h4>
              <p className="text-[#4b5563] text-sm leading-relaxed font-light">
                Personalización exacta de logotipos y colores mediante sistemas automatizados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bordado Personalizado - Clean Split Section */}
      <section className="py-[120px] md:py-[180px] bg-white relative overflow-hidden" id="bordado">
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Content Column */}
            <div className="flex flex-col justify-center">
              <span className="text-[11px] font-semibold text-[#0057FF] uppercase tracking-[0.2em] mb-4 block">
                Personalización de Precisión
              </span>
              <h2 className="font-display font-semibold text-[#1B1F24] text-4xl md:text-5xl leading-[1.1] tracking-[-0.02em] mb-6">
                Bordado digital CNC.
              </h2>
              
              <p className="text-[#4b5563] mb-12 text-lg font-light leading-relaxed">
                Utilizamos maquinaria de bordado CNC computarizada de última generación, reproduciendo la identidad de tu corporativo con nitidez excepcional sobre cualquier textil industrial.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#F5F7FA] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#1B1F24] text-[24px] font-light">pattern</span>
                  </div>
                  <div className="pt-1.5">
                    <h5 className="text-[#1B1F24] font-semibold text-lg mb-1 tracking-tight">Hilos de Alta Tenacidad</h5>
                    <p className="text-[#4b5563] text-sm leading-relaxed font-light">Materiales certificados resistentes al lavado industrial agresivo y alta fricción.</p>
                  </div>
                </div>

                <div className="w-full h-px bg-[#EAECEF] ml-17"></div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#F5F7FA] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#1B1F24] text-[24px] font-light">palette</span>
                  </div>
                  <div className="pt-1.5">
                    <h5 className="text-[#1B1F24] font-semibold text-lg mb-1 tracking-tight">Colorimetría Exacta</h5>
                    <p className="text-[#4b5563] text-sm leading-relaxed font-light">Alineación perfecta con los códigos Pantone de tu identidad corporativa.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden bg-[#F5F7FA] shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-[#EAECEF] aspect-[4/3]">
                <img 
                  alt="Maquinaria de bordado industrial CNC" 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" 
                  src="/assets/images/instalaciones/embroidery_machine.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Industrias que atendemos - Minimal Grid */}
      <section className="py-[120px] md:py-[180px] bg-[#F5F7FA] border-y border-[#EAECEF] relative" id="industrias">
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-semibold text-[#0057FF] uppercase tracking-[0.2em] mb-4 block">
              Sectores Estratégicos
            </span>
            <h2 className="font-display font-semibold text-[#1B1F24] text-4xl md:text-5xl leading-[1.1] tracking-[-0.02em]">
              Industrias que equipamos.
            </h2>
            <p className="text-[#4b5563] mt-6 text-lg font-light leading-relaxed">
              Soluciones de uniformidad corporativa diseñadas para mitigar riesgos e impulsar el rendimiento en áreas críticas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cards without borders, soft floating shadows */}
            <div className="group rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between min-h-[240px]">
              <div>
                <span className="material-symbols-outlined text-[#1B1F24] text-[32px] font-light mb-6 block group-hover:text-[#0057FF] transition-colors">construction</span>
                <h4 className="text-[#1B1F24] font-semibold text-xl mb-3 tracking-tight">Construcción</h4>
                <p className="text-[#4b5563] text-sm leading-relaxed font-light">Resistencia a la abrasión y alta visibilidad para proyectos de infraestructura pesada.</p>
              </div>
            </div>

            <div className="group rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between min-h-[240px]">
              <div>
                <span className="material-symbols-outlined text-[#1B1F24] text-[32px] font-light mb-6 block group-hover:text-[#0057FF] transition-colors">local_shipping</span>
                <h4 className="text-[#1B1F24] font-semibold text-xl mb-3 tracking-tight">Logística</h4>
                <p className="text-[#4b5563] text-sm leading-relaxed font-light">Diseño ergonómico y reflectante para centros de distribución y rutas de carga.</p>
              </div>
            </div>

            <div className="group rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between min-h-[240px]">
              <div>
                <span className="material-symbols-outlined text-[#1B1F24] text-[32px] font-light mb-6 block group-hover:text-[#0057FF] transition-colors">precision_manufacturing</span>
                <h4 className="text-[#1B1F24] font-semibold text-xl mb-3 tracking-tight">Manufactura</h4>
                <p className="text-[#4b5563] text-sm leading-relaxed font-light">Protección técnica para líneas de ensamblaje, plantas automotrices y químicas.</p>
              </div>
            </div>

            <div className="group rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between min-h-[240px]">
              <div>
                <span className="material-symbols-outlined text-[#1B1F24] text-[32px] font-light mb-6 block group-hover:text-[#0057FF] transition-colors">bolt</span>
                <h4 className="text-[#1B1F24] font-semibold text-xl mb-3 tracking-tight">Energía</h4>
                <p className="text-[#4b5563] text-sm leading-relaxed font-light">Equipamiento especializado de alta visibilidad para entornos de riesgo eléctrico.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Social Proof / Corporate Minimalist */}
      <section className="py-[100px] bg-white">
        <div className="px-6 md:px-12 max-w-7xl mx-auto text-center">
          <p className="text-[#9ca3af] font-medium text-[11px] uppercase tracking-[0.2em] mb-12">
            CON LA CONFIANZA DE SECTORES LÍDERES
          </p>
          <div className="flex flex-wrap gap-12 md:gap-20 items-center justify-center opacity-40 grayscale hover:opacity-80 transition-opacity duration-500">
            <span className="text-[#1B1F24] font-bold tracking-widest text-xl font-display uppercase">INFRAESTRUCTURA MX</span>
            <span className="text-[#1B1F24] font-bold tracking-widest text-xl font-display uppercase">LOGÍSTICA FEDERAL</span>
            <span className="text-[#1B1F24] font-bold tracking-widest text-xl font-display uppercase">AUTOMOTRIZ CENTRAL</span>
          </div>
        </div>
      </section>
    </div>
  );
}
