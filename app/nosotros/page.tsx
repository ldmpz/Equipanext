import React from 'react';
import Link from 'next/link';

export default function Nosotros() {
  return (
    <div className="bg-[#FFFFFF] text-[#1B1F24] min-h-screen selection:bg-[#0057FF]/10 selection:text-[#0057FF]">
      {/* 1. Hero Section — Cinematic Premium Industrial */}
      <section className="relative min-h-[70vh] flex items-center bg-[#1B1F24] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90 filter grayscale-[0.2] scale-105"
          style={{ backgroundImage: "url('/assets/images/instalaciones/embroidery_machine.png')" }}
        ></div>
        
        {/* Cinematic Dark Overlay & Bottom Fade */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent z-10"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent z-10"></div>
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-b from-[#4D8CFF]/20 to-transparent rounded-full blur-[100px] pointer-events-none z-10"></div>

        <div className="relative z-20 w-full px-6 md:px-12 max-w-7xl mx-auto py-[160px] md:py-[200px]">
          <div className="max-w-4xl animate-fade-in-up">
            {/* Tag / Micro-Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium text-[11px] px-5 py-2 rounded-full mb-8 uppercase tracking-[0.15em] shadow-lg">
              <span className="w-2 h-2 bg-[#4D8CFF] rounded-full shadow-[0_0_10px_rgba(77,140,255,1)]"></span>
              Historia & ADN
            </div>
            
            {/* Premium Heading */}
            <h1 className="font-display font-bold mb-6 text-5xl sm:text-6xl md:text-8xl leading-[1.05] tracking-[-0.03em] text-white drop-shadow-2xl">
              Precisión forjada <br className="hidden md:inline" />
              <span className="text-[#4D8CFF]">en México.</span>
            </h1>
            
            {/* Description */}
            <p className="font-body-lg text-white max-w-2xl text-lg md:text-2xl leading-relaxed font-normal tracking-tight drop-shadow-lg opacity-90">
              Décadas de excelencia textil creando el equipo de protección y uniformidad que impulsa a las industrias más exigentes del país.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Nuestra Historia - Clean Split Section */}
      <section className="py-[120px] md:py-[180px] bg-white relative overflow-hidden">
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Content Column */}
            <div className="flex flex-col justify-center">
              <span className="text-[11px] font-semibold text-[#0057FF] uppercase tracking-[0.2em] mb-4 block">
                Origen Industrial
              </span>
              <h2 className="font-display font-semibold text-[#1B1F24] text-4xl md:text-5xl leading-[1.1] tracking-[-0.02em] mb-6">
                Nuestra Historia
              </h2>
              
              <p className="text-[#4b5563] mb-8 text-lg font-light leading-relaxed">
                Nacidos en el corazón industrial de México, EQUIPANEXT surge de la necesidad de fusionar durabilidad extrema con diseño ergonómico. Comprendemos que un uniforme no es solo tela; es equipo de protección personal crítico.
              </p>
              
              <p className="text-[#4b5563] mb-12 text-lg font-light leading-relaxed">
                Décadas de experiencia en la industria textil nos permiten entregar soluciones que resisten los entornos más hostiles sin comprometer la movilidad, elevando la imagen corporativa de nuestros clientes.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-[#EAECEF] pt-8 mt-4">
                <div>
                  <span className="block text-4xl md:text-5xl font-display font-semibold text-[#1B1F24] tracking-tight mb-2">20+</span>
                  <span className="text-[11px] font-semibold text-[#4b5563] tracking-[0.1em] uppercase">Años de experiencia</span>
                </div>
                <div>
                  <span className="block text-4xl md:text-5xl font-display font-semibold text-[#1B1F24] tracking-tight mb-2">100%</span>
                  <span className="text-[11px] font-semibold text-[#4b5563] tracking-[0.1em] uppercase">Hecho en México</span>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden bg-[#F5F7FA] shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-[#EAECEF] aspect-[4/5] sm:aspect-square">
                <img 
                  alt="Maquinaria de precisión" 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" 
                  src="/assets/images/instalaciones/embroidery_machine.png"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)] pointer-events-none rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Misión y Visión (Bento Section) */}
      <section className="py-[120px] md:py-[180px] bg-[#F5F7FA] border-y border-[#EAECEF] relative">
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            
            {/* Misión */}
            <div className="bg-white rounded-3xl p-10 md:p-14 border border-[#EAECEF] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500">
              <div className="w-16 h-16 bg-[#F5F7FA] rounded-2xl flex items-center justify-center mb-10">
                <span className="material-symbols-outlined text-[#1B1F24] text-[32px] font-light">target</span>
              </div>
              <h3 className="font-display font-semibold text-[#1B1F24] text-3xl mb-6 tracking-tight">Misión</h3>
              <p className="text-[#4b5563] text-lg font-light leading-relaxed">
                Equipar a la fuerza laboral de México con indumentaria industrial de máxima calidad, garantizando seguridad, confort y una imagen corporativa impecable mediante procesos de manufactura de precisión y atención personalizada.
              </p>
            </div>
            
            {/* Visión */}
            <div className="bg-white rounded-3xl p-10 md:p-14 border border-[#EAECEF] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500">
              <div className="w-16 h-16 bg-[#F5F7FA] rounded-2xl flex items-center justify-center mb-10">
                <span className="material-symbols-outlined text-[#1B1F24] text-[32px] font-light">visibility</span>
              </div>
              <h3 className="font-display font-semibold text-[#1B1F24] text-3xl mb-6 tracking-tight">Visión</h3>
              <p className="text-[#4b5563] text-lg font-light leading-relaxed">
                Ser el referente indiscutible en proveeduría de uniformes técnicos en América Latina, reconocidos por nuestra innovación textil, durabilidad insuperable y compromiso inquebrantable con la excelencia operativa industrial.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. Valores & Atención */}
      <section className="py-[120px] md:py-[180px] bg-white relative overflow-hidden">
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-semibold text-[#0057FF] uppercase tracking-[0.2em] mb-4 block">
              Nuestro Compromiso
            </span>
            <h2 className="font-display font-semibold text-[#1B1F24] text-4xl md:text-5xl leading-[1.15] tracking-[-0.02em]">
              Atención que forja relaciones.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-[#F5F7FA] border border-[#EAECEF] rounded-2xl p-8 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-14 h-14 bg-white rounded-xl border border-[#EAECEF] flex items-center justify-center mb-8 group-hover:border-[#0057FF]/20 group-hover:bg-[#0057FF]/5 transition-colors duration-300">
                <span className="material-symbols-outlined text-[#1B1F24] text-[26px] font-light group-hover:text-[#0057FF] transition-colors duration-300">handshake</span>
              </div>
              <h4 className="text-[#1B1F24] font-semibold text-xl mb-3 tracking-tight">Servicio Personalizado</h4>
              <p className="text-[#4b5563] text-sm leading-relaxed font-light">
                Asignamos un ingeniero de producto a su cuenta para entender especificaciones precisas. No vendemos catálogo; diseñamos soluciones.
              </p>
            </div>
            
            <div className="bg-[#F5F7FA] border border-[#EAECEF] rounded-2xl p-8 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-14 h-14 bg-white rounded-xl border border-[#EAECEF] flex items-center justify-center mb-8 group-hover:border-[#0057FF]/20 group-hover:bg-[#0057FF]/5 transition-colors duration-300">
                <span className="material-symbols-outlined text-[#1B1F24] text-[26px] font-light group-hover:text-[#0057FF] transition-colors duration-300">precision_manufacturing</span>
              </div>
              <h4 className="text-[#1B1F24] font-semibold text-xl mb-3 tracking-tight">Calidad de Manufactura</h4>
              <p className="text-[#4b5563] text-sm leading-relaxed font-light">
                Costuras de alta tenacidad, remates en puntos de tensión y telas con certificación de resistencia al desgarro industrial.
              </p>
            </div>
            
            <div className="bg-[#F5F7FA] border border-[#EAECEF] rounded-2xl p-8 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-14 h-14 bg-white rounded-xl border border-[#EAECEF] flex items-center justify-center mb-8 group-hover:border-[#0057FF]/20 group-hover:bg-[#0057FF]/5 transition-colors duration-300">
                <span className="material-symbols-outlined text-[#1B1F24] text-[26px] font-light group-hover:text-[#0057FF] transition-colors duration-300">local_shipping</span>
              </div>
              <h4 className="text-[#1B1F24] font-semibold text-xl mb-3 tracking-tight">Logística Precisa</h4>
              <p className="text-[#4b5563] text-sm leading-relaxed font-light">
                Entregas programadas y empaquetado estructurado por cuadrillas, optimizando la distribución interna en su planta.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
