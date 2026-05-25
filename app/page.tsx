import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#FFFFFF] text-[#1B1F24] min-h-screen selection:bg-[#0057FF]/10 selection:text-[#0057FF]">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1B1F24]" id="inicio">
        {/* Background Video with Poster Fallback */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#1B1F24]">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            poster="/assets/images/instalaciones/hero_background.png"
            className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover filter grayscale-[0.2] opacity-90 scale-105"
          >
            <source src="/assets/videos/hero_industrial.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Cinematic Dark Overlay & Bottom Fade */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent z-10"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent z-10"></div>

        <div className="relative z-20 w-full px-6 md:px-12 max-w-6xl mx-auto pt-32 pb-20 text-center flex flex-col items-center animate-fade-in-up">
          {/* Micro-Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-[10px] px-4 py-2 rounded-full mb-8 uppercase tracking-[0.25em] shadow-lg">
            <span className="w-1.5 h-1.5 bg-[#0057FF] rounded-full animate-pulse"></span>
            Ingeniería Textil Corporativa
          </div>
          
          {/* Premium Heading */}
          <h1 className="font-display font-semibold mb-8 text-5xl sm:text-6xl md:text-[92px] leading-[1.02] tracking-[-0.03em] text-white">
            Precisión industrial. <br className="hidden md:inline" />
            <span className="text-[#0057FF]">Rendimiento absoluto.</span>
          </h1>
          
          {/* Description */}
          <p className="font-body-lg text-white/80 mb-12 max-w-2xl text-lg md:text-[22px] leading-[1.6] font-light tracking-[-0.01em]">
            Indumentaria técnica y equipo de alta visibilidad para operaciones críticas. Elevamos el estándar de seguridad de las empresas líderes en México.
          </p>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              className="inline-flex justify-center items-center gap-2 bg-[#0057FF] text-white font-medium text-[13px] px-8 py-4 rounded-full hover:bg-[#0046CC] transition-all duration-500 hover:shadow-[0_12px_24px_rgba(0,87,255,0.25)] hover:-translate-y-1 uppercase tracking-widest" 
              href="https://wa.me/525524398773?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20uniformes" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Cotizar Proyecto
            </a>
            <Link 
              className="inline-flex justify-center items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 font-medium text-[13px] px-8 py-4 rounded-full hover:bg-white hover:text-[#1B1F24] transition-all duration-500 hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)] hover:-translate-y-1 uppercase tracking-widest" 
              href="/productos"
            >
              Explorar Catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Metrics / Marca Grande */}
      <section className="bg-white py-20 relative z-20 border-b border-[#EAECEF]">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 divide-x-0 md:divide-x divide-[#EAECEF] text-center">
            <div className="flex flex-col items-center justify-center group">
              <span className="text-4xl md:text-6xl font-display font-light text-[#1B1F24] mb-3 tracking-tight group-hover:scale-105 transition-transform duration-500">+50<span className="text-[#0057FF]">k</span></span>
              <span className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-[0.2em]">Prendas Anuales</span>
            </div>
            <div className="flex flex-col items-center justify-center group">
              <span className="text-4xl md:text-6xl font-display font-light text-[#1B1F24] mb-3 tracking-tight group-hover:scale-105 transition-transform duration-500">100<span className="text-[#0057FF]">%</span></span>
              <span className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-[0.2em]">Norma Internacional</span>
            </div>
            <div className="flex flex-col items-center justify-center group">
              <span className="text-4xl md:text-6xl font-display font-light text-[#1B1F24] mb-3 tracking-tight group-hover:scale-105 transition-transform duration-500">+50</span>
              <span className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-[0.2em]">Empresas Equipadas</span>
            </div>
            <div className="flex flex-col items-center justify-center group">
              <span className="text-4xl md:text-6xl font-display font-light text-[#1B1F24] mb-3 tracking-tight group-hover:scale-105 transition-transform duration-500">12<span className="text-[#0057FF]">y</span></span>
              <span className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-[0.2em]">Años de Excelencia</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Editorial Overview */}
      <section className="py-[160px] bg-white relative overflow-hidden" id="nosotros">
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="order-2 lg:order-1 relative group">
              <div className="relative rounded-3xl overflow-hidden bg-[#F5F7FA] aspect-[4/5] sm:aspect-square">
                <img 
                  alt="Fabricación de uniformes de precisión" 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 filter contrast-[1.05] grayscale-[0.1]" 
                  src="/assets/images/instalaciones/stitching_fabric.png"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] pointer-events-none rounded-3xl"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <span className="text-[10px] font-semibold text-[#0057FF] uppercase tracking-[0.25em] mb-6 block">
                Filosofía de Producción
              </span>
              
              <h2 className="font-display font-semibold text-[#1B1F24] mb-10 text-4xl md:text-[56px] leading-[1.05] tracking-[-0.03em]">
                Protección visible, <br />ingeniería impecable.
              </h2>
              
              <p className="font-body-md text-[#4b5563] mb-8 text-[20px] leading-[1.6] font-light">
                En <strong className="text-[#1B1F24] font-medium">EQUIPANEXT</strong>, desarrollamos indumentaria técnica para corporativos que exigen lo máximo. No hacemos simples uniformes, forjamos herramientas de trabajo.
              </p>
              
              <p className="font-body-md text-[#9ca3af] mb-16 text-[17px] leading-[1.7] font-light">
                Cada fibra y cada costura pasa por un meticuloso control de calidad automatizado, asegurando la durabilidad necesaria para salvaguardar el rendimiento en campo.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 border-t border-[#EAECEF] pt-12">
                <li className="flex flex-col gap-3 group">
                  <span className="material-symbols-outlined text-[24px] text-[#1B1F24] group-hover:text-[#0057FF] transition-colors">shield</span>
                  <h4 className="text-[#1B1F24] font-medium text-[15px]">Materiales Certificados</h4>
                  <p className="text-[#9ca3af] text-[13px] font-light leading-relaxed">Telas de alta visibilidad bajo normativas globales.</p>
                </li>
                <li className="flex flex-col gap-3 group">
                  <span className="material-symbols-outlined text-[24px] text-[#1B1F24] group-hover:text-[#0057FF] transition-colors">print</span>
                  <h4 className="text-[#1B1F24] font-medium text-[15px]">DTF y Serigrafía</h4>
                  <p className="text-[#9ca3af] text-[13px] font-light leading-relaxed">Estampados técnicos de alta definición y resistencia al lavado industrial.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ventajas Competitivas (Apple Minimal) */}
      <section className="py-[160px] bg-[#F5F7FA] relative" id="ventajas">
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-[10px] font-semibold text-[#0057FF] uppercase tracking-[0.25em] mb-6 block">
              Ventajas Operativas
            </span>
            <h2 className="font-display font-semibold text-[#1B1F24] text-4xl md:text-[56px] leading-[1.05] tracking-[-0.03em]">
              Diseñados para resistir.
            </h2>
            <p className="text-[#4b5563] mt-8 text-[20px] font-light leading-[1.6]">
              Analizamos entornos extremos para confeccionar prendas que soporten la máxima exigencia sin perder confort ni presentación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Minimal floating cards */}
            {[
              { icon: 'fitness_center', title: 'Máxima Resistencia', desc: 'Telas antidesgarro ripstop y costuras de alta densidad.' },
              { icon: 'visibility', title: 'Visibilidad 360°', desc: 'Cintas reflejantes certificadas de alto poder reflectivo.' },
              { icon: 'airline_seat_recline_extra', title: 'Ergonomía Activa', desc: 'Corte anatómico que permite total libertad de movimiento.' },
              { icon: 'hub', title: 'Identidad de Marca', desc: 'Personalización exacta mediante bordado digital automatizado.' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group">
                <div className="w-16 h-16 bg-[#F5F7FA] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#0057FF] transition-colors duration-500">
                  <span className="material-symbols-outlined text-[#1B1F24] text-[28px] font-light group-hover:text-white transition-colors duration-500">{item.icon}</span>
                </div>
                <h4 className="text-[#1B1F24] font-medium text-[19px] mb-4 tracking-tight">{item.title}</h4>
                <p className="text-[#9ca3af] text-[14px] leading-[1.7] font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sectores (Light Theme) */}
      <section className="py-[160px] bg-white relative border-t border-[#EAECEF]" id="industrias">
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-semibold text-[#0057FF] uppercase tracking-[0.25em] mb-6 block">
                Cobertura Industrial
              </span>
              <h2 className="font-display font-semibold text-[#1B1F24] text-4xl md:text-[56px] leading-[1.05] tracking-[-0.03em]">
                Sectores que equipamos.
              </h2>
            </div>
            <p className="text-[#4b5563] text-[18px] font-light leading-[1.6] max-w-md pb-3">
              Proveemos soluciones especializadas a corporaciones que definen el rumbo de la industria nacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cinematic Cards - Light Variant */}
            <div className="group relative rounded-[2rem] overflow-hidden aspect-[16/10] bg-[#F5F7FA] border border-[#EAECEF] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-[1s]">
              <img src="/assets/images/instalaciones/embroidery_machine.png" alt="Construcción" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-[2s] ease-out filter grayscale-[0.5]" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-[#1B1F24] font-display text-3xl mb-3 tracking-tight">Infraestructura y Construcción</h3>
                <p className="text-[#4b5563] font-light text-[15px] max-w-md">Indumentaria de uso rudo para los megaproyectos más exigentes.</p>
              </div>
            </div>
            
            <div className="group relative rounded-[2rem] overflow-hidden aspect-[16/10] bg-[#F5F7FA] border border-[#EAECEF] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-[1s]">
              <img src="/assets/images/instalaciones/stitching_fabric.png" alt="Logística" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-[2s] ease-out filter grayscale-[0.5]" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-[#1B1F24] font-display text-3xl mb-3 tracking-tight">Logística y Distribución</h3>
                <p className="text-[#4b5563] font-light text-[15px] max-w-md">Alta visibilidad para centros operativos y transporte de carga.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Social Proof Banner */}
      <section className="py-[120px] bg-white border-t border-[#EAECEF]">
        <div className="px-6 md:px-12 max-w-7xl mx-auto text-center">
          <p className="text-[#9ca3af] font-medium text-[11px] uppercase tracking-[0.3em] mb-12">
            Respaldados por la industria pesada de México
          </p>
          <div className="flex flex-wrap gap-12 md:gap-24 items-center justify-center">
            {['Infraestructura MX', 'Logística Federal', 'Automotriz Central', 'Minería Norte', 'Energía y Petróleo'].map((company, i) => (
              <span key={i} className="text-[#1B1F24] opacity-30 hover:opacity-100 transition-opacity duration-500 font-display font-semibold tracking-tight text-xl md:text-2xl grayscale cursor-default">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
