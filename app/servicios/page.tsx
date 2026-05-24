import React from 'react';
import Link from 'next/link';

export default function Servicios() {
  return (
    <main className="bg-[#FFFFFF] text-[#1B1F24] min-h-screen selection:bg-[#0057FF]/10 selection:text-[#0057FF]">
      {/* Hero Section */}
      <section className="relative w-full pt-[160px] pb-[100px] md:pt-[200px] md:pb-[140px] px-6 md:px-12 bg-[#F5F7FA] overflow-hidden">
        {/* Subtle Gradient Background */}
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#FFFFFF] to-[#F5F7FA] z-0"></div>

        {/* Ambient Subtle Depth */}
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-gradient-to-b from-[#0057FF]/[0.02] to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center fade-in-up">
          <div className="inline-flex items-center gap-2.5 bg-white border border-[#EAECEF] text-[#4b5563] font-medium text-[11px] px-4 py-1.5 rounded-full mb-8 uppercase tracking-[0.15em] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <span className="w-1.5 h-1.5 bg-[#0057FF] rounded-full"></span>
            División Industrial
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-semibold text-[#1B1F24] mb-8 leading-[1.05] tracking-[-0.03em]">
            Ingeniería a <br className="hidden md:block"/>
            <span className="text-[#0057FF]">escala industrial.</span>
          </h1>
          <p className="text-[#4b5563] max-w-3xl mx-auto text-lg md:text-2xl font-light leading-relaxed tracking-tight">
            Ofrecemos soluciones integrales en la fabricación y personalización de uniformes industriales, bordado corporativo y serigrafía técnica. Procesos estandarizados y tecnología de punta.
          </p>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-[120px] md:py-[180px] px-6 md:px-12 max-w-7xl mx-auto bg-white">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-semibold text-[#0057FF] uppercase tracking-[0.2em] mb-4 block">
            Nuestros Servicios
          </span>
          <h2 className="font-display font-semibold text-[#1B1F24] text-4xl md:text-5xl leading-[1.1] tracking-[-0.02em] mb-6">
            Capacidad Operativa B2B
          </h2>
          <p className="text-[#4b5563] text-lg font-light leading-relaxed">
            Estructura diseñada para soportar los volúmenes más exigentes sin comprometer la calidad y precisión de cada pieza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* 1. Fabricación Industrial */}
          <div className="md:col-span-12 lg:col-span-8 bg-white border border-[#EAECEF] rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col lg:flex-row group">
            <div className="flex-grow p-10 md:p-14 flex flex-col justify-center relative z-10 w-full lg:w-1/2">
              <div className="w-16 h-16 bg-[#F5F7FA] rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-[#1B1F24] text-[32px] font-light">precision_manufacturing</span>
              </div>
              <h3 className="text-3xl font-display font-semibold text-[#1B1F24] mb-4 tracking-tight">Fabricación Industrial</h3>
              <p className="text-[#4b5563] mb-8 text-base font-light leading-relaxed">
                Líneas de producción optimizadas para altos volúmenes. Utilizamos patronaje digital y corte automatizado para garantizar consistencia milimétrica en cada pieza de su pedido corporativo.
              </p>
              <div className="mt-auto flex flex-wrap gap-3">
                <span className="bg-[#F5F7FA] border border-[#EAECEF] text-[#1B1F24] text-[11px] font-medium px-4 py-2 rounded-full tracking-wide">CAP: 5K/MES</span>
                <span className="bg-[#F5F7FA] border border-[#EAECEF] text-[#1B1F24] text-[11px] font-medium px-4 py-2 rounded-full tracking-wide">CORTE AUTOMATIZADO</span>
              </div>
            </div>
            {/* Background Image Area for Fabricacion */}
            <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-full overflow-hidden bg-[#F5F7FA]">
              <img 
                src="/assets/images/instalaciones/manufacturing_floor.png" 
                alt="Planta de manufactura"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent hidden lg:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent lg:hidden"></div>
            </div>
          </div>

          {/* 2. Diseño y Personalización */}
          <div className="md:col-span-6 lg:col-span-4 bg-white border border-[#EAECEF] rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 p-10 md:p-14 flex flex-col group">
            <div className="w-16 h-16 bg-[#F5F7FA] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0057FF]/5 transition-colors">
              <span className="material-symbols-outlined text-[#1B1F24] text-[32px] font-light group-hover:text-[#0057FF] transition-colors">tune</span>
            </div>
            <h3 className="text-2xl font-display font-semibold text-[#1B1F24] mb-4 tracking-tight">Diseño Personalizado</h3>
            <p className="text-[#4b5563] mb-8 text-base font-light leading-relaxed flex-grow">
              Adaptamos prendas estándar o desarrollamos diseños desde cero según sus requerimientos técnicos y manual de identidad corporativa.
            </p>
            <a className="inline-flex items-center text-sm font-medium text-[#1B1F24] group-hover:text-[#0057FF] transition-colors gap-2 border-t border-[#EAECEF] pt-6" href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20personalizaci%C3%B3n" target="_blank" rel="noopener noreferrer">
              Solicitar asesoría <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

          {/* 3. Bordado Industrial */}
          <div className="md:col-span-6 lg:col-span-4 bg-white border border-[#EAECEF] rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 p-10 md:p-14 flex flex-col group">
            <div className="w-16 h-16 bg-[#F5F7FA] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0057FF]/5 transition-colors">
              <span className="material-symbols-outlined text-[#1B1F24] text-[32px] font-light group-hover:text-[#0057FF] transition-colors">styler</span>
            </div>
            <h3 className="text-2xl font-display font-semibold text-[#1B1F24] mb-4 tracking-tight">Bordado Industrial</h3>
            <p className="text-[#4b5563] mb-8 text-base font-light leading-relaxed flex-grow">
              Aplicación de insignias mediante maquinaria de cabezal múltiple de alta velocidad. Hilos resistentes al desgaste y lavado agresivo.
            </p>
            <a className="inline-flex items-center text-sm font-medium text-[#1B1F24] group-hover:text-[#0057FF] transition-colors gap-2 border-t border-[#EAECEF] pt-6" href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20bordado" target="_blank" rel="noopener noreferrer">
              Cotizar servicio <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

          {/* 4. Serigrafía */}
          <div className="md:col-span-6 lg:col-span-4 bg-white border border-[#EAECEF] rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 p-10 md:p-14 flex flex-col group">
            <div className="w-16 h-16 bg-[#F5F7FA] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0057FF]/5 transition-colors">
              <span className="material-symbols-outlined text-[#1B1F24] text-[32px] font-light group-hover:text-[#0057FF] transition-colors">layers</span>
            </div>
            <h3 className="text-2xl font-display font-semibold text-[#1B1F24] mb-4 tracking-tight">Serigrafía y DTF</h3>
            <p className="text-[#4b5563] mb-8 text-base font-light leading-relaxed flex-grow">
              Estampado técnico para señalética de seguridad. Tintas de alta resistencia curadas térmicamente para durabilidad extrema.
            </p>
            <a className="inline-flex items-center text-sm font-medium text-[#1B1F24] group-hover:text-[#0057FF] transition-colors gap-2 border-t border-[#EAECEF] pt-6" href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20serigrafia" target="_blank" rel="noopener noreferrer">
              Cotizar servicio <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

          {/* 5. Atención a Empresas */}
          <div className="md:col-span-12 lg:col-span-4 bg-white border border-[#EAECEF] rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 p-10 md:p-14 flex flex-col group">
            <div className="w-16 h-16 bg-[#F5F7FA] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0057FF]/5 transition-colors">
              <span className="material-symbols-outlined text-[#1B1F24] text-[32px] font-light group-hover:text-[#0057FF] transition-colors">headset_mic</span>
            </div>
            <h3 className="text-2xl font-display font-semibold text-[#1B1F24] mb-4 tracking-tight">Cuentas B2B</h3>
            <p className="text-[#4b5563] mb-8 text-base font-light leading-relaxed flex-grow">
              Gestión de cuentas corporativas con ejecutivo asignado, control de inventarios y logística de distribución nacional.
            </p>
            
            <ul className="space-y-4 border-t border-[#EAECEF] pt-6">
              <li className="flex items-center text-[#4b5563] font-light text-sm">
                <span className="material-symbols-outlined text-[#0057FF] mr-3 text-[18px]">check_circle</span>
                Ejecutivo dedicado
              </li>
              <li className="flex items-center text-[#4b5563] font-light text-sm">
                <span className="material-symbols-outlined text-[#0057FF] mr-3 text-[18px]">check_circle</span>
                Portal de compras B2B
              </li>
              <li className="flex items-center text-[#4b5563] font-light text-sm">
                <span className="material-symbols-outlined text-[#0057FF] mr-3 text-[18px]">check_circle</span>
                Distribución logística
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[120px] md:py-[160px] bg-[#F5F7FA] border-t border-[#EAECEF] relative overflow-hidden text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#1B1F24] mb-6 tracking-tight">¿Requiere producción por volumen?</h2>
          <p className="text-[#4b5563] text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Nuestro equipo de ingeniería está listo para analizar sus requerimientos y estructurar una propuesta técnica y comercial a la medida de su empresa.
          </p>
          <a className="inline-flex justify-center items-center gap-2 bg-[#1B1F24] text-white font-medium text-sm px-8 py-4 rounded-full hover:bg-[#2B3138] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(27,31,36,0.15)] hover:-translate-y-0.5" href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20pedido%20por%20volumen" target="_blank" rel="noopener noreferrer">
            Contactar Asesor B2B
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </section>
    </main>
  );
}
