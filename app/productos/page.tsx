import React from 'react';
import Link from 'next/link';

export default function Productos() {
  return (
    <div className="bg-[#FFFFFF] text-[#1B1F24] min-h-screen selection:bg-[#0057FF]/10 selection:text-[#0057FF]">
      {/* Hero Section */}
      <section className="relative w-full pt-[160px] pb-[100px] md:pt-[200px] md:pb-[140px] px-6 md:px-12 bg-[#F5F7FA] overflow-hidden">
        {/* Subtle Gradient Background */}
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#FFFFFF] to-[#F5F7FA] z-0"></div>

        {/* Ambient Subtle Depth */}
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-b from-[#0057FF]/[0.02] to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center fade-in-up">
          <div className="inline-flex items-center gap-2.5 bg-white border border-[#EAECEF] text-[#4b5563] font-medium text-[11px] px-4 py-1.5 rounded-full mb-8 uppercase tracking-[0.15em] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <span className="w-1.5 h-1.5 bg-[#0057FF] rounded-full"></span>
            Catálogo Industrial
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-semibold text-[#1B1F24] mb-8 leading-[1.05] tracking-[-0.03em]">
            Equipamiento de <br className="hidden md:block"/>
            <span className="text-[#0057FF]">alto rendimiento.</span>
          </h1>
          <p className="text-[#4b5563] max-w-2xl mx-auto text-lg md:text-2xl font-light leading-relaxed tracking-tight">
            Nuestra línea de productos está diseñada bajo estrictos estándares industriales para garantizar durabilidad, seguridad y presentación profesional en cualquier entorno operativo.
          </p>
        </div>
      </section>

      {/* Nuestros Chalecos Reflejantes */}
      <section className="py-[120px] md:py-[180px] px-6 md:px-12 max-w-7xl mx-auto bg-white">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto fade-in-up">
          <span className="text-[11px] font-semibold text-[#0057FF] uppercase tracking-[0.2em] mb-4 block">
            Línea de Alta Visibilidad
          </span>
          <h2 className="font-display font-semibold text-[#1B1F24] text-4xl md:text-5xl leading-[1.1] tracking-[-0.02em] mb-6">
            Chalecos Reflejantes
          </h2>
          <p className="text-[#4b5563] text-lg font-light leading-relaxed">
            Diseñados para brindar máxima visibilidad, confort térmico y funcionalidad en entornos operativos de alto riesgo.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">

          {/* Producto: Chaleco ROY */}
          <div className="bg-white border border-[#EAECEF] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group flex flex-col">
            <div className="relative h-[320px] bg-[#F5F7FA] overflow-hidden flex items-center justify-center p-8 group-hover:bg-white transition-colors duration-500">
              <div className="absolute top-6 left-6 bg-white border border-[#EAECEF] px-3 py-1.5 rounded-full font-medium text-[10px] text-[#1B1F24] uppercase tracking-widest shadow-sm z-20">
                Uso General
              </div>
              <img 
                alt="Chaleco Reflejante ROY" 
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10" 
                src="/assets/images/productos/safety_vest.png"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow bg-white border-t border-[#EAECEF]">
              <h3 className="font-display font-semibold text-2xl text-[#1B1F24] mb-4 tracking-tight">Chaleco ROY</h3>
              <p className="text-[#4b5563] flex-grow mb-8 text-base font-light leading-relaxed">
                Chaleco de gabardina ligera y resistente, cómodo para uso prolongado. Cuenta con 6 cintas reflejantes, múltiples bolsillos funcionales, costuras reforzadas en puntos estratégicos y cierre reforzado para mayor practicidad.
              </p>
              <a className="inline-flex justify-center items-center gap-2 bg-[#1B1F24] text-white font-medium text-sm px-6 py-3.5 rounded-full hover:bg-[#2B3138] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(27,31,36,0.15)] w-full" href="https://wa.me/521234567890?text=Hola,%20me%20gustaría%20cotizar%20el%20Chaleco%20ROY" target="_blank" rel="noopener noreferrer">
                Cotizar Producto
              </a>
            </div>
          </div>

          {/* Producto: Chaleco NOVA */}
          <div className="bg-white border border-[#EAECEF] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group flex flex-col">
            <div className="relative h-[320px] bg-[#F5F7FA] overflow-hidden flex items-center justify-center p-8 group-hover:bg-white transition-colors duration-500">
              <div className="absolute top-6 left-6 bg-white border border-[#EAECEF] px-3 py-1.5 rounded-full font-medium text-[10px] text-[#1B1F24] uppercase tracking-widest shadow-sm z-20">
                Ergonómico
              </div>
              <img 
                alt="Chaleco Reflejante NOVA" 
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10" 
                src="/assets/images/productos/safety_vest.png"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow bg-white border-t border-[#EAECEF]">
              <h3 className="font-display font-semibold text-2xl text-[#1B1F24] mb-4 tracking-tight">Chaleco NOVA</h3>
              <p className="text-[#4b5563] flex-grow mb-8 text-base font-light leading-relaxed">
                Chaleco reflejante de gabardina ligera y resistente, cómodo y durable para uso laboral. Cuenta con 8 bandas reflejantes, 2 bolsillos frontales, cierre reforzado y cubre cuello para mayor seguridad y comodidad.
              </p>
              <a className="inline-flex justify-center items-center gap-2 bg-[#1B1F24] text-white font-medium text-sm px-6 py-3.5 rounded-full hover:bg-[#2B3138] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(27,31,36,0.15)] w-full" href="https://wa.me/521234567890?text=Hola,%20me%20gustaría%20cotizar%20el%20Chaleco%20NOVA" target="_blank" rel="noopener noreferrer">
                Cotizar Producto
              </a>
            </div>
          </div>

          {/* Producto: Chaleco BRIGADISTA */}
          <div className="bg-white border border-[#EAECEF] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group flex flex-col">
            <div className="relative h-[320px] bg-[#F5F7FA] overflow-hidden flex items-center justify-center p-8 group-hover:bg-white transition-colors duration-500">
              <div className="absolute top-6 left-6 bg-white border border-[#EAECEF] px-3 py-1.5 rounded-full font-medium text-[10px] text-[#1B1F24] uppercase tracking-widest shadow-sm z-20">
                Multi-Bolsillos
              </div>
              <img 
                alt="Chaleco Reflejante Brigadista" 
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10" 
                src="/assets/images/productos/safety_vest.png"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow bg-white border-t border-[#EAECEF]">
              <h3 className="font-display font-semibold text-2xl text-[#1B1F24] mb-4 tracking-tight">Chaleco Brigadista</h3>
              <p className="text-[#4b5563] flex-grow mb-8 text-base font-light leading-relaxed">
                Chaleco de gabardina ligera y cómoda con 5 cintas reflejantes de alta visibilidad. Incluye múltiples bolsillos funcionales, porta radio, porta lámpara, bolsa trasera para documentos y ajuste lateral.
              </p>
              <a className="inline-flex justify-center items-center gap-2 bg-[#1B1F24] text-white font-medium text-sm px-6 py-3.5 rounded-full hover:bg-[#2B3138] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(27,31,36,0.15)] w-full" href="https://wa.me/521234567890?text=Hola,%20me%20gustaría%20cotizar%20el%20Chaleco%20Brigadista" target="_blank" rel="noopener noreferrer">
                Cotizar Producto
              </a>
            </div>
          </div>

          {/* Producto: Chaleco ISA */}
          <div className="bg-white border border-[#EAECEF] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group flex flex-col">
            <div className="relative h-[320px] bg-[#F5F7FA] overflow-hidden flex items-center justify-center p-8 group-hover:bg-white transition-colors duration-500">
              <div className="absolute top-6 left-6 bg-white border border-[#EAECEF] px-3 py-1.5 rounded-full font-medium text-[10px] text-[#1B1F24] uppercase tracking-widest shadow-sm z-20">
                Transpirable
              </div>
              <img 
                alt="Chaleco Reflejante ISA" 
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10" 
                src="/assets/images/productos/safety_vest.png"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow bg-white border-t border-[#EAECEF]">
              <h3 className="font-display font-semibold text-2xl text-[#1B1F24] mb-4 tracking-tight">Chaleco ISA</h3>
              <p className="text-[#4b5563] flex-grow mb-8 text-base font-light leading-relaxed">
                Chaleco de seguridad reflejante, ideal para construcción y personal técnico. Cuenta con 6 bandas reflejantes visibles hasta 300m, múltiples bolsillos funcionales y malla transpirable.
              </p>
              <a className="inline-flex justify-center items-center gap-2 bg-[#1B1F24] text-white font-medium text-sm px-6 py-3.5 rounded-full hover:bg-[#2B3138] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(27,31,36,0.15)] w-full" href="https://wa.me/521234567890?text=Hola,%20me%20gustaría%20cotizar%20el%20Chaleco%20ISA" target="_blank" rel="noopener noreferrer">
                Cotizar Producto
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Otras Categorías (Bento Grid) */}
      <section className="py-[120px] md:py-[180px] bg-[#F5F7FA] border-y border-[#EAECEF] relative">
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-semibold text-[#0057FF] uppercase tracking-[0.2em] mb-4 block">
              Gama Completa
            </span>
            <h2 className="font-display font-semibold text-[#1B1F24] text-4xl md:text-5xl leading-[1.1] tracking-[-0.02em] mb-6">
              Explora todas las categorías
            </h2>
            <p className="text-[#4b5563] text-lg font-light leading-relaxed">
              Soluciones integrales para la vestimenta y protección de su equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
            {/* Camisas Industriales */}
            <a className="group relative block w-full h-[400px] md:col-span-8 bg-white border border-[#EAECEF] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500" href="https://wa.me/521234567890?text=Hola,%20me%20gustaría%20cotizar%20camisas%20industriales" target="_blank" rel="noopener noreferrer">
              <div className="absolute inset-0 bg-[#F5F7FA] z-0 p-12 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                <img alt="Camisas Industriales" className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10" src="/assets/images/productos/work_shirt.png"/>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-[#EAECEF] p-8 z-20 flex justify-between items-center transition-colors">
                <div>
                  <h3 className="font-display font-semibold text-[#1B1F24] text-2xl tracking-tight mb-1">Camisas Industriales</h3>
                  <p className="text-[#4b5563] text-sm font-light">Resistencia y transpirabilidad superior.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F5F7FA] border border-[#EAECEF] flex items-center justify-center group-hover:bg-[#1B1F24] group-hover:border-[#1B1F24] transition-all duration-300">
                  <span className="material-symbols-outlined text-[#1B1F24] group-hover:text-white transition-colors">arrow_forward</span>
                </div>
              </div>
            </a>

            {/* Overoles */}
            <a className="group relative block w-full h-[400px] md:col-span-4 bg-white border border-[#EAECEF] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500" href="https://wa.me/521234567890?text=Hola,%20me%20gustaría%20cotizar%20overoles%20industriales" target="_blank" rel="noopener noreferrer">
              <div className="absolute inset-0 bg-[#F5F7FA] z-0 p-10 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                <img alt="Overoles Industriales" className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10" src="/assets/images/productos/coveralls.png"/>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-[#EAECEF] p-8 z-20 flex justify-between items-center transition-colors">
                <div>
                  <h3 className="font-display font-semibold text-[#1B1F24] text-2xl tracking-tight mb-1">Overoles</h3>
                  <p className="text-[#4b5563] text-sm font-light">Protección integral.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F5F7FA] border border-[#EAECEF] flex items-center justify-center group-hover:bg-[#1B1F24] group-hover:border-[#1B1F24] transition-all duration-300">
                  <span className="material-symbols-outlined text-[#1B1F24] group-hover:text-white transition-colors">arrow_forward</span>
                </div>
              </div>
            </a>

            {/* Pantalones Industriales */}
            <a className="group relative block w-full h-[400px] md:col-span-12 bg-white border border-[#EAECEF] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500" href="https://wa.me/521234567890?text=Hola,%20me%20gustaría%20cotizar%20pantalones%20industriales" target="_blank" rel="noopener noreferrer">
              <div className="absolute inset-0 bg-[#F5F7FA] z-0 p-12 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                <img alt="Pantalones Industriales" className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10" src="/assets/images/productos/work_pants.png"/>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-[#EAECEF] p-8 z-20 flex justify-between items-center transition-colors">
                <div>
                  <h3 className="font-display font-semibold text-[#1B1F24] text-2xl tracking-tight mb-1">Pantalones Industriales</h3>
                  <p className="text-[#4b5563] text-sm font-light">Ergonomía activa y refuerzos estratégicos para el uso diario.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F5F7FA] border border-[#EAECEF] flex items-center justify-center group-hover:bg-[#1B1F24] group-hover:border-[#1B1F24] transition-all duration-300">
                  <span className="material-symbols-outlined text-[#1B1F24] group-hover:text-white transition-colors">arrow_forward</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Servicios Especializados */}
      <section className="py-[120px] md:py-[180px] px-6 md:px-12 max-w-7xl mx-auto bg-white">
        <div className="border border-[#EAECEF] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col lg:flex-row">
          <div className="p-10 md:p-16 lg:w-1/2 flex flex-col justify-center bg-white">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-[#0057FF] text-[28px]">precision_manufacturing</span>
              <span className="font-medium text-[11px] text-[#0057FF] uppercase tracking-[0.2em]">Servicios Especializados</span>
            </div>
            <h3 className="font-display font-semibold text-4xl text-[#1B1F24] mb-6 tracking-tight">Uniformes personalizados</h3>
            <p className="text-[#4b5563] mb-10 text-lg font-light leading-relaxed">
              Integramos la identidad corporativa de su empresa directamente en la manufactura del equipamiento mediante técnicas de alta precisión.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-[#F5F7FA] px-5 py-3 rounded-xl border border-[#EAECEF]">
                <span className="material-symbols-outlined text-[#1B1F24] text-[20px]">styler</span>
                <span className="font-medium text-sm text-[#1B1F24]">Bordado CNC</span>
              </div>
              <div className="flex items-center gap-3 bg-[#F5F7FA] px-5 py-3 rounded-xl border border-[#EAECEF]">
                <span className="material-symbols-outlined text-[#1B1F24] text-[20px]">format_paint</span>
                <span className="font-medium text-sm text-[#1B1F24]">Serigrafía Textil</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden group bg-[#F5F7FA]">
            <img alt="Máquina de Bordado Industrial" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" src="/assets/images/instalaciones/embroidery_machine.png"/>
            {/* Soft inner shadow */}
            <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] pointer-events-none"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
