import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Servicios() {
  return (
    <main className="bg-[#04142B] text-white min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full pt-36 sm:pt-44 md:pt-48 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 bg-[#04142B] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 filter grayscale-[0.2] scale-105"
          style={{ backgroundImage: "url('/assets/images/instalaciones/manufacturing_floor.png')" }}
        ></div>
        
        {/* Cinematic Dark Overlay & Bottom Fade */}
        <div className="absolute inset-0 bg-[#04142B]/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#04142B]/80 via-transparent to-transparent z-10"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#04142B] to-transparent z-10"></div>
        <div className="hidden md:block absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-b from-[#FFC107]/5 to-transparent rounded-full blur-[100px] pointer-events-none z-10"></div>

        <div className="relative z-20 max-w-4xl mx-auto text-center fade-in-up">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white mb-6 sm:mb-8 leading-[1.0] tracking-[-0.03em] drop-shadow-2xl uppercase break-words">
            Ingeniería a <br className="hidden md:block"/>
            <span className="text-[#FFC107]">escala industrial.</span>
          </h1>
          <p className="text-[#D9D9D9] max-w-3xl mx-auto text-base sm:text-lg md:text-2xl font-normal leading-relaxed tracking-tight drop-shadow-lg opacity-90">
            Ofrecemos soluciones integrales en la fabricación y personalización de uniformes industriales, bordado corporativo y serigrafía técnica. Procesos estandarizados y tecnología de punta.
          </p>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-16 sm:py-24 md:py-[180px] px-4 sm:px-6 md:px-12 max-w-7xl mx-auto bg-[#04142B] border-t border-[#FFC107]/10">
        <div className="mb-12 sm:mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <span className="text-[10px] sm:text-[11px] font-bold text-[#FFC107] uppercase tracking-[0.2em] mb-3 sm:mb-4 block">
            Nuestros Servicios
          </span>
          <h2 className="font-display font-extrabold text-white text-2xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.02em] mb-4 sm:mb-6 uppercase">
            Capacidad Operativa B2B
          </h2>
          <p className="text-[#D9D9D9] text-base sm:text-lg font-light leading-relaxed">
            Tenemos la capacidad para sacar adelante tus pedidos grandes. Sabemos que en el taller siempre hay retos, pero contamos con el equipo y la experiencia para adaptarnos y entregarte un trabajo bien hecho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* 1. Fabricación Industrial */}
          <div className="md:col-span-12 lg:col-span-8 bg-[#082041] border border-[#FFC107]/15 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(255,193,7,0.05)] hover:border-[#FFC107]/30 hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col lg:flex-row group">
            <div className="flex-grow p-6 sm:p-10 md:p-14 flex flex-col justify-center relative z-10 w-full lg:w-1/2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#04142B] border border-[#FFC107]/15 rounded-xl flex items-center justify-center mb-6 sm:mb-8 shadow-lg">
                <span className="material-symbols-outlined text-[#FFC107] text-[28px] sm:text-[32px]">precision_manufacturing</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-3 sm:mb-4 tracking-tight uppercase">Fabricación Industrial</h3>
              <p className="text-[#D9D9D9] mb-6 sm:mb-8 text-sm sm:text-base font-light leading-relaxed">
                Líneas de producción optimizadas para altos volúmenes. Utilizamos patronaje digital y corte automatizado para garantizar consistencia milimétrica en cada pieza de su pedido corporativo.
              </p>
              <div className="mt-auto flex flex-wrap gap-2.5 sm:gap-3">
                <span className="bg-[#04142B] border border-[#FFC107]/15 text-[#FFC107] text-[10px] sm:text-[11px] font-bold px-3 sm:px-4 py-2 rounded-md tracking-widest uppercase">CAP: 5K/MES</span>
                <span className="bg-[#04142B] border border-[#FFC107]/15 text-[#FFC107] text-[10px] sm:text-[11px] font-bold px-3 sm:px-4 py-2 rounded-md tracking-widest uppercase">CORTE AUTOMATIZADO</span>
              </div>
            </div>
            {/* Background Image Area for Fabricacion */}
            <div className="relative w-full lg:w-1/2 min-h-[240px] sm:min-h-[300px] lg:min-h-full overflow-hidden bg-[#082041]">
              <Image 
                src="/assets/images/instalaciones/manufacturing_floor.png" 
                alt="Planta de manufactura"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#082041] via-[#082041]/40 to-transparent hidden lg:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#082041] via-[#082041]/40 to-transparent lg:hidden"></div>
            </div>
          </div>

          {/* 2. Diseño y Personalización */}
          <div className="md:col-span-6 lg:col-span-4 bg-[#082041] border border-[#FFC107]/15 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(255,193,7,0.05)] hover:border-[#FFC107]/30 hover:-translate-y-1 transition-all duration-500 p-6 sm:p-10 md:p-14 flex flex-col group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#04142B] border border-[#FFC107]/15 rounded-xl flex items-center justify-center mb-6 sm:mb-8 shadow-lg group-hover:bg-[#FFC107] transition-colors">
              <span className="material-symbols-outlined text-[#FFC107] text-[28px] sm:text-[32px] group-hover:text-[#04142B] transition-colors">tune</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-3 sm:mb-4 tracking-tight uppercase">Diseño Personalizado</h3>
            <p className="text-[#D9D9D9] mb-6 sm:mb-8 text-sm sm:text-base font-light leading-relaxed flex-grow">
              Adaptamos prendas estándar o desarrollamos diseños desde cero según sus requerimientos técnicos y manual de identidad corporativa.
            </p>
            <a className="inline-flex items-center text-xs sm:text-sm font-bold text-[#FFC107] hover:text-[#FFB300] transition-colors gap-2 border-t border-[#FFC107]/15 pt-5 sm:pt-6" href="https://wa.me/525524398773?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20personalizaci%C3%B3n" target="_blank" rel="noopener noreferrer">
              Solicitar asesoría <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_forward</span>
            </a>
          </div>

          {/* 3. Bordado Industrial */}
          <div className="md:col-span-6 lg:col-span-4 bg-[#082041] border border-[#FFC107]/15 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(255,193,7,0.05)] hover:border-[#FFC107]/30 hover:-translate-y-1 transition-all duration-500 p-6 sm:p-10 md:p-14 flex flex-col group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#04142B] border border-[#FFC107]/15 rounded-xl flex items-center justify-center mb-6 sm:mb-8 shadow-lg group-hover:bg-[#FFC107] transition-colors">
              <span className="material-symbols-outlined text-[#FFC107] text-[28px] sm:text-[32px] group-hover:text-[#04142B] transition-colors">styler</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-3 sm:mb-4 tracking-tight uppercase">Bordado Industrial</h3>
            <p className="text-[#D9D9D9] mb-6 sm:mb-8 text-sm sm:text-base font-light leading-relaxed flex-grow">
              Aplicación de insignias mediante maquinaria de cabezal múltiple de alta velocidad. Hilos resistentes al desgaste y lavado agresivo.
            </p>
            <a className="inline-flex items-center text-xs sm:text-sm font-bold text-[#FFC107] hover:text-[#FFB300] transition-colors gap-2 border-t border-[#FFC107]/15 pt-5 sm:pt-6" href="https://wa.me/525524398773?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20bordado" target="_blank" rel="noopener noreferrer">
              Cotizar servicio <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_forward</span>
            </a>
          </div>

          {/* 4. Serigrafía */}
          <div className="md:col-span-6 lg:col-span-4 bg-[#082041] border border-[#FFC107]/15 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(255,193,7,0.05)] hover:border-[#FFC107]/30 hover:-translate-y-1 transition-all duration-500 p-6 sm:p-10 md:p-14 flex flex-col group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#04142B] border border-[#FFC107]/15 rounded-xl flex items-center justify-center mb-6 sm:mb-8 shadow-lg group-hover:bg-[#FFC107] transition-colors">
              <span className="material-symbols-outlined text-[#FFC107] text-[28px] sm:text-[32px] group-hover:text-[#04142B] transition-colors">layers</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-3 sm:mb-4 tracking-tight uppercase">Serigrafía y DTF</h3>
            <p className="text-[#D9D9D9] mb-6 sm:mb-8 text-sm sm:text-base font-light leading-relaxed flex-grow">
              Estampado técnico para señalética de seguridad. Tintas de alta resistencia curadas térmicamente para durabilidad extrema.
            </p>
            <a className="inline-flex items-center text-xs sm:text-sm font-bold text-[#FFC107] hover:text-[#FFB300] transition-colors gap-2 border-t border-[#FFC107]/15 pt-5 sm:pt-6" href="https://wa.me/525524398773?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20serigrafia" target="_blank" rel="noopener noreferrer">
              Cotizar servicio <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_forward</span>
            </a>
          </div>

          {/* 5. Cuentas B2B */}
          <div className="md:col-span-12 lg:col-span-4 bg-[#082041] border border-[#FFC107]/15 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(255,193,7,0.05)] hover:border-[#FFC107]/30 hover:-translate-y-1 transition-all duration-500 p-6 sm:p-10 md:p-14 flex flex-col group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#04142B] border border-[#FFC107]/15 rounded-xl flex items-center justify-center mb-6 sm:mb-8 shadow-lg group-hover:bg-[#FFC107] transition-colors">
              <span className="material-symbols-outlined text-[#FFC107] text-[28px] sm:text-[32px] group-hover:text-[#04142B] transition-colors">headset_mic</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-3 sm:mb-4 tracking-tight uppercase">Cuentas B2B</h3>
            <p className="text-[#D9D9D9] mb-6 sm:mb-8 text-sm sm:text-base font-light leading-relaxed flex-grow">
              Gestión de cuentas corporativas con ejecutivo asignado, control de inventarios y logística de distribución nacional.
            </p>
            
            <ul className="space-y-3 sm:space-y-4 border-t border-[#FFC107]/15 pt-5 sm:pt-6">
              <li className="flex items-center text-[#D9D9D9] font-light text-xs sm:text-sm">
                <span className="material-symbols-outlined text-[#FFC107] mr-2.5 sm:mr-3 text-[16px] sm:text-[18px] flex-shrink-0">check_circle</span>
                Ejecutivo dedicado
              </li>
              <li className="flex items-center text-[#D9D9D9] font-light text-xs sm:text-sm">
                <span className="material-symbols-outlined text-[#FFC107] mr-2.5 sm:mr-3 text-[16px] sm:text-[18px] flex-shrink-0">check_circle</span>
                Portal de compras B2B
              </li>
              <li className="flex items-center text-[#D9D9D9] font-light text-xs sm:text-sm">
                <span className="material-symbols-outlined text-[#FFC107] mr-2.5 sm:mr-3 text-[16px] sm:text-[18px] flex-shrink-0">check_circle</span>
                Distribución logística
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-[160px] bg-[#061A36] border-t border-[#FFC107]/10 relative overflow-hidden text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-4 sm:mb-6 tracking-tight uppercase">¿Requiere producción por volumen?</h2>
          <p className="text-[#D9D9D9]/80 text-base sm:text-lg font-light leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
            Nuestro equipo de ingeniería está listo para analizar sus requerimientos y estructurar una propuesta técnica y comercial a la medida de su empresa.
          </p>
          <a className="inline-flex justify-center items-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-[#04142B] font-extrabold text-[12px] sm:text-[13px] px-8 sm:px-10 py-4 rounded-md hover:shadow-[0_12px_24px_rgba(255,193,7,0.35)] hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-widest shadow-lg w-full sm:w-auto text-center" href="https://wa.me/525524398773?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20pedido%20por%20volumen" target="_blank" rel="noopener noreferrer">
            Contactar Asesor B2B
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </section>
    </main>
  );
}
