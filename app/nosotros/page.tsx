import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nosotros() {
  return (
    <div className="bg-[#04142B] text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-[#04142B] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 filter grayscale-[0.2] scale-105"
          style={{ backgroundImage: "url('/assets/images/instalaciones/embroidery_machine.png')" }}
        ></div>
        
        {/* Cinematic Dark Overlay & Bottom Fade */}
        <div className="absolute inset-0 bg-[#04142B]/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#04142B]/80 via-transparent to-transparent z-10"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#04142B] to-transparent z-10"></div>
        <div className="hidden md:block absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-b from-[#FFC107]/5 to-transparent rounded-full blur-[100px] pointer-events-none z-10"></div>

        <div className="relative z-20 w-full px-6 md:px-12 max-w-7xl mx-auto py-[160px] md:py-[200px]">
          <div className="max-w-4xl animate-fade-in-up">
            {/* Tag / Micro-Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-md border border-[#FFC107]/30 text-[#FFC107] font-bold text-[11px] px-5 py-2 rounded-md mb-8 uppercase tracking-[0.2em]">
              <span className="w-2 h-2 bg-[#FFC107] rounded-full animate-pulse"></span>
              Historia & ADN
            </div>
            
            {/* Premium Heading */}
            <h1 className="font-display font-extrabold mb-6 text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.0] tracking-[-0.03em] text-white drop-shadow-2xl uppercase">
              Precisión forjada <br className="hidden md:inline" />
              <span className="text-[#FFC107]">en México.</span>
            </h1>
            
            {/* Description */}
            <p className="font-body-lg text-[#D9D9D9] max-w-2xl text-lg md:text-2xl leading-relaxed font-normal tracking-tight drop-shadow-lg opacity-90">
              Décadas de excelencia textil creando el equipo de protección y uniformidad que impulsa a las industrias más exigentes del país.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Nuestra Historia - Clean Split Section */}
      <section className="py-[120px] md:py-[180px] bg-[#061A36] relative overflow-hidden border-t border-[#FFC107]/10">
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Content Column */}
            <div className="flex flex-col justify-center">
              <span className="text-[11px] font-bold text-[#FFC107] uppercase tracking-[0.2em] mb-4 block">
                Origen Industrial
              </span>
              <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.02em] mb-6 uppercase">
                Nuestra Historia
              </h2>
              
              <p className="text-[#D9D9D9] mb-8 text-base font-light leading-relaxed">
                Nacidos en el corazón industrial de México, EQUIPANEXT surge de la necesidad de fusionar durabilidad extrema con diseño ergonómico. Comprendemos que un uniforme no es solo tela; es equipo de protección personal crítico.
              </p>
              
              <p className="text-[#D9D9D9]/80 mb-12 text-lg font-light leading-relaxed">
                Décadas de experiencia en la industria textil nos permiten entregar soluciones que resisten los entornos más hostiles sin comprometer la movilidad, elevando la imagen corporativa de nuestros clientes.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-[#FFC107]/15 pt-8 mt-4">
                <div>
                  <span className="block text-4xl md:text-5xl font-display font-extrabold text-[#FFC107] tracking-tight mb-2">15+</span>
                  <span className="text-[11px] font-bold text-[#D9D9D9] tracking-[0.1em] uppercase">Años de trayectoria</span>
                </div>
                <div>
                  <span className="block text-4xl md:text-5xl font-display font-extrabold text-[#FFC107] tracking-tight mb-2">100%</span>
                  <span className="text-[11px] font-bold text-[#D9D9D9] tracking-[0.1em] uppercase">Hecho en México</span>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden bg-[#082041] shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-[#FFC107]/15 aspect-[4/5] sm:aspect-square">
                <Image 
                  alt="Maquinaria de precisión" 
                  className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-80 group-hover:opacity-100 group-hover:scale-105" 
                  src="/assets/images/instalaciones/embroidery_machine.png"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,193,7,0.15)] pointer-events-none rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Misión y Visión (Bento Section) */}
      <section className="py-[120px] md:py-[180px] bg-[#04142B] border-y border-[#FFC107]/15 relative">
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            
            {/* Misión */}
            <div className="bg-[#082041] rounded-3xl p-10 md:p-14 border border-[#FFC107]/15 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(255,193,7,0.05)] hover:border-[#FFC107]/30 hover:-translate-y-1 transition-all duration-500">
              <div className="w-16 h-16 bg-[#04142B] rounded-xl flex items-center justify-center mb-10 border border-[#FFC107]/15 shadow-lg">
                <span className="material-symbols-outlined text-[#FFC107] text-[32px]">target</span>
              </div>
              <h3 className="font-display font-extrabold text-white text-2xl mb-6 tracking-tight uppercase">Misión</h3>
              <p className="text-[#D9D9D9] text-base font-light leading-relaxed">
                Equipar a la fuerza laboral de México con indumentaria industrial de máxima calidad, garantizando seguridad, confort y una imagen corporativa impecable mediante procesos de manufactura de precisión y atención personalizada.
              </p>
            </div>
            
            {/* Visión */}
            <div className="bg-[#082041] rounded-3xl p-10 md:p-14 border border-[#FFC107]/15 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(255,193,7,0.05)] hover:border-[#FFC107]/30 hover:-translate-y-1 transition-all duration-500">
              <div className="w-16 h-16 bg-[#04142B] rounded-xl flex items-center justify-center mb-10 border border-[#FFC107]/15 shadow-lg">
                <span className="material-symbols-outlined text-[#FFC107] text-[32px]">visibility</span>
              </div>
              <h3 className="font-display font-extrabold text-white text-2xl mb-6 tracking-tight uppercase">Visión</h3>
              <p className="text-[#D9D9D9] text-base font-light leading-relaxed">
                Ser el referente indiscutible en proveeduría de uniformes técnicos en América Latina, reconocidos por nuestra innovación textil, durabilidad insuperable y compromiso inquebrantable con la excelencia operativa industrial.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. Valores & Atención */}
      <section className="py-[120px] md:py-[180px] bg-[#061A36] relative overflow-hidden">
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-bold text-[#FFC107] uppercase tracking-[0.2em] mb-4 block">
              Nuestro Compromiso
            </span>
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-[-0.02em] uppercase">
              Atención que forja relaciones.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-[#082041] border border-[#FFC107]/15 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(255,193,7,0.05)] hover:border-[#FFC107]/30 hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-14 h-14 bg-[#04142B] border border-[#FFC107]/15 rounded-lg flex items-center justify-center mb-8 shadow-md group-hover:bg-[#FFC107] transition-colors duration-300">
                <span className="material-symbols-outlined text-white text-[24px] group-hover:text-[#04142B] transition-colors duration-300">handshake</span>
              </div>
              <h4 className="text-white font-extrabold text-lg mb-3 tracking-tight uppercase">Servicio Personalizado</h4>
              <p className="text-[#D9D9D9] text-sm leading-relaxed font-light">
                Asignamos un ingeniero de producto a su cuenta para entender especificaciones precisas. No vendemos catálogo; diseñamos soluciones.
              </p>
            </div>
            
            <div className="bg-[#082041] border border-[#FFC107]/15 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(255,193,7,0.05)] hover:border-[#FFC107]/30 hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-14 h-14 bg-[#04142B] border border-[#FFC107]/15 rounded-lg flex items-center justify-center mb-8 shadow-md group-hover:bg-[#FFC107] transition-colors duration-300">
                <span className="material-symbols-outlined text-white text-[24px] group-hover:text-[#04142B] transition-colors duration-300">precision_manufacturing</span>
              </div>
              <h4 className="text-white font-extrabold text-lg mb-3 tracking-tight uppercase">Calidad de Manufactura</h4>
              <p className="text-[#D9D9D9] text-sm leading-relaxed font-light">
                Costuras de alta tenacidad, remates en puntos de tensión y telas con certificación de resistencia al desgarro industrial.
              </p>
            </div>
            
            <div className="bg-[#082041] border border-[#FFC107]/15 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(255,193,7,0.05)] hover:border-[#FFC107]/30 hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-14 h-14 bg-[#04142B] border border-[#FFC107]/15 rounded-lg flex items-center justify-center mb-8 shadow-md group-hover:bg-[#FFC107] transition-colors duration-300">
                <span className="material-symbols-outlined text-white text-[24px] group-hover:text-[#04142B] transition-colors duration-300">local_shipping</span>
              </div>
              <h4 className="text-white font-extrabold text-lg mb-3 tracking-tight uppercase">Logística Práctica</h4>
              <p className="text-[#D9D9D9] text-sm leading-relaxed font-light">
                Entregas programadas y empaquetado estructurado por cuadrillas, optimizando la distribución interna en su planta.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
