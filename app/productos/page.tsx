import React from 'react';

export default function Productos() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-[140px] pb-[80px] md:pt-[180px] md:pb-[120px] px-margin-mobile md:px-margin-desktop bg-surface-bright grid-pattern border-b border-outline-variant flex flex-col justify-center overflow-hidden">
        <div className="relative z-10 max-w-3xl fade-in-up">
          <span className="inline-block px-3 py-1 bg-surface-container text-on-surface-variant font-mono-label text-mono-label rounded mb-6 border border-outline-variant">
            CATÁLOGO TÉCNICO V.24
          </span>
          <h1 className="text-headline-lg-mobile font-headline-lg-mobile md:text-display md:font-display text-on-surface mb-6 text-white">
            Equipamiento de alto rendimiento.
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl text-lg md:text-xl">
            Nuestra línea de productos está diseñada bajo estrictos estándares industriales para garantizar durabilidad, seguridad y presentación profesional en cualquier entorno operativo.
          </p>
        </div>
      </section>

      {/* Nuestros Chalecos Reflejantes */}
      <section className="py-[80px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 fade-in-up stagger-1">
          <div>
            <h2 className="text-headline-md font-headline-md text-white mb-2">Nuestros Chalecos Reflejantes</h2>
            <p className="text-body-md font-body-md text-on-surface-variant">Alta visibilidad, resistencia y comodidad para entornos operativos exigentes.</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-[64px]">

          {/* Producto: Chaleco ROY */}
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-lg overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] fade-in-up stagger-1 flex flex-col group hover:border-primary/45 transition-all duration-300">
            <div className="relative h-[280px] bg-[#0c0d12] overflow-hidden flex items-center justify-center border-b border-outline-variant/30">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-60 z-0"></div>
              <div className="absolute inset-0 grid-pattern opacity-[0.03] z-0"></div>
              <div className="absolute top-3 left-3 bg-surface/85 backdrop-blur-sm border border-outline-variant/50 px-2.5 py-1 rounded font-mono-label text-[10px] text-primary uppercase tracking-widest z-20">
                [HIGH_VIS // GABARDINA]
              </div>
              <img 
                alt="Chaleco Reflejante ROY" 
                className="max-h-[85%] max-w-[85%] object-contain drop-shadow-[0_12px_24px_rgba(0,102,255,0.2)] group-hover:scale-105 transition-transform duration-500 z-10" 
                src="/assets/images/productos/safety_vest.png"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow relative">
              <span className="font-mono-label text-[11px] text-primary bg-primary/10 px-2.5 py-1 rounded border border-primary/20 w-fit mb-3 uppercase tracking-wider">CHALECO REFLEJANTE ROY</span>
              <p className="text-body-md font-body-md text-on-surface-variant flex-grow mb-6 text-sm leading-relaxed">
                Chaleco de gabardina ligera y resistente, cómodo para uso prolongado. Cuenta con 6 cintas reflejantes, múltiples bolsillos funcionales, costuras reforzadas en puntos estratégicos y cierre reforzado para mayor practicidad y seguridad.
              </p>
              <a className="inline-flex justify-center items-center gap-2 bg-primary text-on-primary font-mono-label text-[12px] uppercase px-6 py-3 rounded hover:bg-primary-container hover:text-on-primary-container transition-all active:translate-y-px shadow-[0_4px_12px_rgba(0,102,255,0.2)] w-full text-center" href="https://wa.me/521234567890?text=Hola,%20me%20gustaría%20cotizar%20el%20Chaleco%20ROY" target="_blank" rel="noopener noreferrer">
                COTIZAR
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Producto: Chaleco NOVA */}
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-lg overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] fade-in-up stagger-2 flex flex-col group hover:border-primary/45 transition-all duration-300">
            <div className="relative h-[280px] bg-[#0c0d12] overflow-hidden flex items-center justify-center border-b border-outline-variant/30">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-60 z-0"></div>
              <div className="absolute inset-0 grid-pattern opacity-[0.03] z-0"></div>
              <div className="absolute top-3 left-3 bg-surface/85 backdrop-blur-sm border border-outline-variant/50 px-2.5 py-1 rounded font-mono-label text-[10px] text-primary uppercase tracking-widest z-20">
                [PRO-VIS // ERGONÓMICO]
              </div>
              <img 
                alt="Chaleco Reflejante NOVA" 
                className="max-h-[85%] max-w-[85%] object-contain drop-shadow-[0_12px_24px_rgba(0,102,255,0.2)] group-hover:scale-105 transition-transform duration-500 z-10" 
                src="/assets/images/productos/safety_vest.png"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow relative">
              <span className="font-mono-label text-[11px] text-primary bg-primary/10 px-2.5 py-1 rounded border border-primary/20 w-fit mb-3 uppercase tracking-wider">CHALECO REFLEJANTE NOVA</span>
              <p className="text-body-md font-body-md text-on-surface-variant flex-grow mb-6 text-sm leading-relaxed">
                Chaleco reflejante de gabardina ligera y resistente, cómodo y durable para uso laboral. Cuenta con 8 bandas reflejantes, 2 bolsillos frontales, cierre reforzado y cubre cuello para mayor seguridad y comodidad.
              </p>
              <a className="inline-flex justify-center items-center gap-2 bg-primary text-on-primary font-mono-label text-[12px] uppercase px-6 py-3 rounded hover:bg-primary-container hover:text-on-primary-container transition-all active:translate-y-px shadow-[0_4px_12px_rgba(0,102,255,0.2)] w-full text-center" href="https://wa.me/521234567890?text=Hola,%20me%20gustaría%20cotizar%20el%20Chaleco%20NOVA" target="_blank" rel="noopener noreferrer">
                COTIZAR
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Producto: Chaleco BRIGADISTA */}
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-lg overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] fade-in-up stagger-3 flex flex-col group hover:border-primary/45 transition-all duration-300">
            <div className="relative h-[280px] bg-[#0c0d12] overflow-hidden flex items-center justify-center border-b border-outline-variant/30">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-60 z-0"></div>
              <div className="absolute inset-0 grid-pattern opacity-[0.03] z-0"></div>
              <div className="absolute top-3 left-3 bg-surface/85 backdrop-blur-sm border border-outline-variant/50 px-2.5 py-1 rounded font-mono-label text-[10px] text-primary uppercase tracking-widest z-20">
                [BRIGADE // MULTI-POCKET]
              </div>
              <img 
                alt="Chaleco Reflejante Brigadista" 
                className="max-h-[85%] max-w-[85%] object-contain drop-shadow-[0_12px_24px_rgba(0,102,255,0.2)] group-hover:scale-105 transition-transform duration-500 z-10" 
                src="/assets/images/productos/safety_vest.png"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow relative">
              <span className="font-mono-label text-[11px] text-primary bg-primary/10 px-2.5 py-1 rounded border border-primary/20 w-fit mb-3 uppercase tracking-wider">CHALECO REFLEJANTE BRIGADISTA</span>
              <p className="text-body-md font-body-md text-on-surface-variant flex-grow mb-6 text-sm leading-relaxed">
                Chaleco de gabardina ligera y cómoda con 5 cintas reflejantes de alta visibilidad. Incluye múltiples bolsillos funcionales, porta radio, porta lámpara, bolsa trasera para documentos, ajuste lateral y cierre reforzado para mayor comodidad y seguridad.
              </p>
              <a className="inline-flex justify-center items-center gap-2 bg-primary text-on-primary font-mono-label text-[12px] uppercase px-6 py-3 rounded hover:bg-primary-container hover:text-on-primary-container transition-all active:translate-y-px shadow-[0_4px_12px_rgba(0,102,255,0.2)] w-full text-center" href="https://wa.me/521234567890?text=Hola,%20me%20gustaría%20cotizar%20el%20Chaleco%20Brigadista" target="_blank" rel="noopener noreferrer">
                COTIZAR
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Producto: Chaleco ISA */}
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-lg overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] fade-in-up stagger-4 flex flex-col group hover:border-primary/45 transition-all duration-300">
            <div className="relative h-[280px] bg-[#0c0d12] overflow-hidden flex items-center justify-center border-b border-outline-variant/30">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-60 z-0"></div>
              <div className="absolute inset-0 grid-pattern opacity-[0.03] z-0"></div>
              <div className="absolute top-3 left-3 bg-surface/85 backdrop-blur-sm border border-outline-variant/50 px-2.5 py-1 rounded font-mono-label text-[10px] text-primary uppercase tracking-widest z-20">
                [SAFETY-FIRST // BREATHABLE]
              </div>
              <img 
                alt="Chaleco Reflejante ISA" 
                className="max-h-[85%] max-w-[85%] object-contain drop-shadow-[0_12px_24px_rgba(0,102,255,0.2)] group-hover:scale-105 transition-transform duration-500 z-10" 
                src="/assets/images/productos/safety_vest.png"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow relative">
              <span className="font-mono-label text-[11px] text-primary bg-primary/10 px-2.5 py-1 rounded border border-primary/20 w-fit mb-3 uppercase tracking-wider">CHALECO REFLEJANTE ISA</span>
              <p className="text-body-md font-body-md text-on-surface-variant flex-grow mb-6 text-sm leading-relaxed">
                Chaleco de seguridad reflejante, ligero y cómodo, ideal para construcción, brigadistas y personal técnico. Cuenta con 6 bandas reflejantes visibles hasta 300 m, múltiples bolsillos funcionales, malla transpirable y cierre reforzado para mayor comodidad y seguridad.
              </p>
              <a className="inline-flex justify-center items-center gap-2 bg-primary text-on-primary font-mono-label text-[12px] uppercase px-6 py-3 rounded hover:bg-primary-container hover:text-on-primary-container transition-all active:translate-y-px shadow-[0_4px_12px_rgba(0,102,255,0.2)] w-full text-center" href="https://wa.me/521234567890?text=Hola,%20me%20gustaría%20cotizar%20el%20Chaleco%20ISA" target="_blank" rel="noopener noreferrer">
                COTIZAR
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>

        </div>

        {/* Nuestros Uniformes Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 fade-in-up stagger-1">
          <div>
            <h2 className="text-headline-md font-headline-md text-white mb-2">Nuestros Uniformes</h2>
            <p className="text-body-md font-body-md text-on-surface-variant">Seleccione una categoría para explorar especificaciones técnicas.</p>
          </div>
        </div>

        {/* Bento Grid Catalog */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[minmax(300px,auto)]">
          {/* Chalecos (Large Card) */}
          <a className="group relative block w-full h-full md:col-span-8 bg-surface-container-low border border-outline-variant/30 rounded-lg overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all hover:border-primary/50 fade-in-up stagger-2" href="https://wa.me/521234567890?text=Hola,%20me%20gustaría%20cotizar%20chalecos%20industriales" target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 bg-[#0c0d12] z-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/15 to-transparent opacity-75 z-10"></div>
              <div className="absolute inset-0 grid-pattern opacity-[0.03] z-10"></div>
              <img alt="Chalecos de Seguridad Industrial" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out z-0" src="/assets/images/productos/safety_vest.png"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-transparent opacity-90 z-10"></div>
            <div className="absolute bottom-0 left-0 p-6 z-20 w-full flex justify-between items-end">
              <div>
                <span className="text-[10px] font-mono-label text-primary/80 tracking-widest block mb-2 font-semibold">// LINEA DE SEGURIDAD NORMADA</span>
                <h3 className="text-headline-md font-headline-md text-on-surface bg-[#08090b]/80 inline-block px-3 py-1 backdrop-blur-sm border border-outline-variant/30 rounded-sm">Chalecos</h3>
                <p className="text-body-md font-body-md text-on-surface-variant mt-2 bg-[#08090b]/80 inline-block px-3 py-1 backdrop-blur-sm border border-outline-variant/30 rounded-sm">Seguridad y visibilidad normativa.</p>
              </div>
              <div className="bg-primary text-on-primary w-10 h-10 flex items-center justify-center rounded transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.4)]">
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </a>

          {/* Overoles (Vertical Card) */}
          <a className="group relative block w-full h-full md:col-span-4 md:row-span-2 bg-surface-container-low border border-outline-variant/30 rounded-lg overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all hover:border-primary/50 fade-in-up stagger-3" href="https://wa.me/521234567890?text=Hola,%20me%20gustaría%20cotizar%20overoles%20industriales" target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 bg-[#0c0d12] z-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/15 to-transparent opacity-75 z-10"></div>
              <div className="absolute inset-0 grid-pattern opacity-[0.03] z-10"></div>
              <img alt="Overoles Industriales de Alta Resistencia" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out z-0" src="/assets/images/productos/coveralls.png"/>
            </div>
            <div className="absolute top-0 right-0 p-4 z-20">
              <span className="bg-[#08090b]/90 text-primary font-mono-label text-mono-label px-2.5 py-1 rounded border border-primary/30 uppercase tracking-wider text-[10px]">RESISTENCIA EXTREMA</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-transparent opacity-90 z-10"></div>
            <div className="absolute bottom-0 left-0 p-6 z-20 w-full flex justify-between items-end">
              <div className="w-full">
                <span className="text-[10px] font-mono-label text-primary/80 tracking-widest block mb-2 font-semibold">// ALTO DESEMPEÑO</span>
                <h3 className="text-headline-md font-headline-md text-on-surface bg-[#08090b]/80 inline-block px-3 py-1 backdrop-blur-sm border border-outline-variant/30 rounded-sm mb-2 w-full">Overoles</h3>
                <div className="flex items-center justify-between bg-[#08090b]/80 px-3 py-2 backdrop-blur-sm border border-outline-variant/30 rounded-sm w-full">
                  <span className="text-body-md font-body-md text-on-surface-variant">Protección integral.</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>
          </a>

          {/* Camisas Industriales */}
          <a className="group relative block w-full h-[300px] md:col-span-4 bg-surface-container-low border border-outline-variant/30 rounded-lg overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all hover:border-primary/50 fade-in-up stagger-4" href="https://wa.me/521234567890?text=Hola,%20me%20gustaría%20cotizar%20camisas%20industriales" target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 bg-[#0c0d12] z-0 p-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-60 z-10"></div>
              <div className="absolute inset-0 grid-pattern opacity-[0.03] z-10"></div>
              <img alt="Camisas Industriales" className="max-w-full max-h-[85%] object-contain drop-shadow-[0_8px_16px_rgba(0,102,255,0.15)] group-hover:scale-110 transition-transform duration-500 z-20" src="/assets/images/productos/work_shirt.png"/>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-[#08090b]/90 border-t border-outline-variant/30 p-4 z-20 flex justify-between items-center group-hover:bg-[#0c0d12] transition-colors">
              <div>
                <span className="text-[9px] font-mono-label text-primary/80 block mb-0.5 tracking-wider font-semibold">// TRABAJO PESADO</span>
                <h3 className="font-label-caps text-label-caps text-on-surface uppercase">Camisas industriales</h3>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">open_in_new</span>
            </div>
          </a>

          {/* Pantalones Industriales */}
          <a className="group relative block w-full h-[300px] md:col-span-4 bg-surface-container-low border border-outline-variant/30 rounded-lg overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all hover:border-primary/50 fade-in-up stagger-5" href="https://wa.me/521234567890?text=Hola,%20me%20gustaría%20cotizar%20pantalones%20industriales" target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 bg-[#0c0d12] z-0 p-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-60 z-10"></div>
              <div className="absolute inset-0 grid-pattern opacity-[0.03] z-10"></div>
              <img alt="Pantalones Industriales" className="max-w-full max-h-[85%] object-contain drop-shadow-[0_8px_16px_rgba(0,102,255,0.15)] group-hover:scale-110 transition-transform duration-500 z-20" src="/assets/images/productos/work_pants.png"/>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-[#08090b]/90 border-t border-outline-variant/30 p-4 z-20 flex justify-between items-center group-hover:bg-[#0c0d12] transition-colors">
              <div>
                <span className="text-[9px] font-mono-label text-primary/80 block mb-0.5 tracking-wider font-semibold">// ERGONOMÍA & DURABILIDAD</span>
                <h3 className="font-label-caps text-label-caps text-on-surface uppercase">Pantalones industriales</h3>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">open_in_new</span>
            </div>
          </a>
        </div>

        {/* Customization Section (Horizontal Banner) */}
        <div className="mt-gutter border border-outline-variant/30 rounded-lg bg-surface-container-low overflow-hidden flex flex-col md:flex-row shadow-[0_20px_40px_rgba(0,0,0,0.4)] fade-in-up stagger-4">
          <div className="p-8 md:w-1/2 flex flex-col justify-center border-b md:border-b-0 md:border-r border-outline-variant/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary shadow-[0_0_10px_rgba(0,102,255,0.3)]">precision_manufacturing</span>
              <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest text-[11px] font-semibold">// Servicios Especializados</span>
            </div>
            <h3 className="text-headline-md font-headline-md text-white mb-4">Uniformes personalizados</h3>
            <p className="text-body-md font-body-md text-on-surface-variant mb-6">Integramos la identidad corporativa de su empresa directamente en la manufactura del equipamiento mediante técnicas de alta precisión.</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-[#0c0d12] px-3.5 py-2 rounded border border-outline-variant/30 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                <span className="material-symbols-outlined text-primary text-[18px]">styler</span>
                <span className="font-mono-label text-mono-label text-on-surface">Bordados</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0c0d12] px-3.5 py-2 rounded border border-outline-variant/30 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                <span className="material-symbols-outlined text-primary text-[18px]">format_paint</span>
                <span className="font-mono-label text-mono-label text-on-surface">Serigrafía</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-[#0c0d12] relative min-h-[300px] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-transparent opacity-60 z-10"></div>
            <img alt="Máquina de Bordado Industrial" className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700 ease-out z-0" src="/assets/images/instalaciones/embroidery_machine.png"/>
          </div>
        </div>

        {/* Galería de Bordados */}
        <div className="mt-gutter fade-in-up">
          <div className="mb-8">
            <h2 className="text-headline-md font-headline-md text-white mb-2">Galería de Bordados</h2>
            <p className="text-body-md font-body-md text-on-surface-variant">Uniformes personalizados con bordados industriales de alta precisión.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            <div className="relative rounded-lg overflow-hidden border border-outline-variant/30 aspect-square bg-[#0c0d12] group shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/90 via-transparent to-transparent opacity-90 z-10"></div>
              <img alt="Bordado industrial en chaleco" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700 ease-out z-0" src="/assets/images/instalaciones/embroidery_machine.png"/>
              <div className="absolute inset-0 flex items-end p-4 z-20">
                <span className="text-[10px] font-mono-label text-primary bg-[#08090b]/80 border border-primary/20 px-2.5 py-1 rounded uppercase tracking-wider">Bordado en Chaleco</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden border border-outline-variant/30 aspect-square bg-[#0c0d12] group shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/90 via-transparent to-transparent opacity-90 z-10"></div>
              <img alt="Uniformes personalizados corporativos" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700 ease-out z-0" src="/assets/images/instalaciones/manufacturing_floor.png"/>
              <div className="absolute inset-0 flex items-end p-4 z-20">
                <span className="text-[10px] font-mono-label text-primary bg-[#08090b]/80 border border-primary/20 px-2.5 py-1 rounded uppercase tracking-wider">Uniformes Corporativos</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden border border-outline-variant/30 aspect-square bg-[#0c0d12] group shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/90 via-transparent to-transparent opacity-90 z-10"></div>
              <img alt="Bordado corporativo en tela" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700 ease-out z-0" src="/assets/images/instalaciones/stitching_fabric.png"/>
              <div className="absolute inset-0 flex items-end p-4 z-20">
                <span className="text-[10px] font-mono-label text-primary bg-[#08090b]/80 border border-primary/20 px-2.5 py-1 rounded uppercase tracking-wider">Costura Industrial</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden border border-outline-variant/30 aspect-square bg-[#0c0d12] group shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/90 via-transparent to-transparent opacity-90 z-10"></div>
              <img alt="Personalización de uniformes industriales" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700 ease-out z-0" src="/assets/images/productos/safety_vest.png"/>
              <div className="absolute inset-0 flex items-end p-4 z-20">
                <span className="text-[10px] font-mono-label text-primary bg-[#08090b]/80 border border-primary/20 px-2.5 py-1 rounded uppercase tracking-wider">Personalización</span>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
