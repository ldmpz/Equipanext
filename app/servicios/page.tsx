import React from 'react';

export default function Servicios() {
  return (
    <main className="bg-background text-on-background min-h-screen relative overflow-hidden">
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-[0.06] z-0"></div>
      <div className="absolute inset-0 hero-blueprint opacity-[0.08] z-0"></div>
      
      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-primary-container/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Tech terminal details */}
      <div className="absolute top-12 left-12 font-mono-label text-[10px] text-primary/30 uppercase tracking-widest hidden lg:block">
        [SYS-INIT // DEPT-SERVICIOS // VER-4.0]
      </div>

      {/* Hero Section */}
      <section className="relative pt-[140px] pb-[80px] md:pt-[180px] md:pb-[120px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="relative z-10 max-w-3xl fade-in-up">
          <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary font-mono-label text-[11px] px-3.5 py-1.5 rounded-full mb-6 w-fit uppercase tracking-widest">
            <span className="dot-live"></span>
            DIVISIÓN INDUSTRIAL
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
            Ingeniería Textil a <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-white">
              Escala Industrial.
            </span>
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-10 max-w-2xl text-lg leading-relaxed">
            Ofrecemos soluciones integrales en la fabricación y personalización de uniformes industriales, bordado corporativo y serigrafía técnica. Procesos estandarizados, tecnología de punta y capacidad volumétrica para satisfacer las demandas más exigentes del sector B2B.
          </p>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          
          {/* 1. Fabricación Industrial */}
          <div className="md:col-span-12 lg:col-span-8 bg-surface border border-outline-variant/30 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col lg:flex-row group hover:border-primary/40 transition-all duration-300 fade-in-up relative min-h-[380px]">
            <div className="absolute top-4 right-4 font-mono-label text-[9px] text-primary/30 z-20">[SYS_SRV // SEC_01]</div>
            
            <div className="flex-grow p-8 md:p-10 flex flex-col justify-center relative z-10 w-full lg:w-1/2">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg border border-primary/20">
                <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Fabricación Industrial</h2>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 text-sm md:text-base leading-relaxed">
                Líneas de producción optimizadas para altos volúmenes. Utilizamos patronaje digital y corte automatizado para garantizar consistencia milimétrica en cada pieza de su pedido corporativo. Fabricamos chalecos reflejantes, overoles, uniformes y ropa de trabajo a gran escala.
              </p>
              <div className="mt-auto flex gap-4">
                <span className="text-[10px] font-mono-label bg-surface-container-high px-3 py-1.5 rounded-md text-primary border border-outline-variant/50 uppercase tracking-wider font-semibold">CAP: 50K/MES</span>
                <span className="text-[10px] font-mono-label bg-surface-container-high px-3 py-1.5 rounded-md text-primary border border-outline-variant/50 uppercase tracking-wider font-semibold">CORTE LÁSER</span>
              </div>
            </div>
            {/* Background Image Area for Fabricacion */}
            <div 
              className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-surface-container-low border-l border-outline-variant/30" 
              style={{
                backgroundImage: "url('/assets/images/instalaciones/manufacturing_floor.png')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent"></div>
            </div>
          </div>

          {/* 2. Diseño y Personalización */}
          <div className="md:col-span-6 lg:col-span-4 bg-surface border border-outline-variant/30 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 flex flex-col group hover:border-primary/40 transition-all duration-300 fade-in-up stagger-1 relative overflow-hidden">
            <div className="absolute top-4 right-4 font-mono-label text-[9px] text-primary/30">[SYS_SRV // SEC_02]</div>
            
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg border border-primary/20">
              <span className="material-symbols-outlined text-primary">tune</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">Diseño y Personalización</h3>
            <p className="text-body-md font-body-md text-on-surface-variant flex-grow text-sm leading-relaxed">
              Adaptamos prendas estándar o desarrollamos diseños desde cero según sus requerimientos técnicos, normativas de seguridad y manual de identidad corporativa.
            </p>
            <div className="mt-6 border-t border-outline-variant/20 pt-4">
              <a className="text-[11px] font-mono-label text-primary flex items-center group-hover:translate-x-1 transition-transform tracking-wider uppercase font-semibold gap-1" href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20personalizaci%C3%B3n%20de%20uniformes" target="_blank" rel="noopener noreferrer">
                COTIZAR <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* 3. Bordado Industrial */}
          <div className="md:col-span-6 lg:col-span-4 bg-surface border border-outline-variant/30 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 flex flex-col group hover:border-primary/40 transition-all duration-300 fade-in-up relative overflow-hidden">
            <div className="absolute top-4 right-4 font-mono-label text-[9px] text-primary/30">[SYS_SRV // SEC_03]</div>
            
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg border border-primary/20">
              <span className="material-symbols-outlined text-primary">styler</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">Bordado Industrial</h3>
            <p className="text-body-md font-body-md text-on-surface-variant flex-grow text-sm leading-relaxed">
              Aplicación de logotipos e insignias mediante maquinaria de cabezal múltiple de alta velocidad. Hilos de poliéster de máxima resistencia al desgaste y decoloración por lavado industrial.
            </p>
            <div className="mt-6 border-t border-outline-variant/20 pt-4">
              <a className="text-[11px] font-mono-label text-primary flex items-center group-hover:translate-x-1 transition-transform tracking-wider uppercase font-semibold gap-1" href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20bordado%20industrial" target="_blank" rel="noopener noreferrer">
                COTIZAR <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* 4. Serigrafía y Transfer */}
          <div className="md:col-span-6 lg:col-span-4 bg-surface border border-outline-variant/30 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 flex flex-col group hover:border-primary/40 transition-all duration-300 fade-in-up stagger-1 relative overflow-hidden">
            <div className="absolute top-4 right-4 font-mono-label text-[9px] text-primary/30">[SYS_SRV // SEC_04]</div>
            
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg border border-primary/20">
              <span className="material-symbols-outlined text-primary">layers</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">Serigrafía y Transfer</h3>
            <p className="text-body-md font-body-md text-on-surface-variant flex-grow text-sm leading-relaxed">
              Estampado técnico para señalética de seguridad o branding amplio. Utilizamos tintas plastisol y base de agua curadas térmicamente para garantizar durabilidad extrema en condiciones rudas.
            </p>
            <div className="mt-6 border-t border-outline-variant/20 pt-4">
              <a className="text-[11px] font-mono-label text-primary flex items-center group-hover:translate-x-1 transition-transform tracking-wider uppercase font-semibold gap-1" href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20serigrafia%20o%20transfer" target="_blank" rel="noopener noreferrer">
                COTIZAR <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* 5. Atención a Empresas */}
          <div className="md:col-span-12 lg:col-span-4 bg-surface border border-outline-variant/30 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 flex flex-col group hover:border-primary/45 transition-all duration-300 fade-in-up stagger-2 relative overflow-hidden border-t-4 border-t-primary">
            <div className="absolute -right-6 -top-6 text-surface-container-high opacity-[0.15] transform rotate-12 pointer-events-none group-hover:scale-105 transition-all duration-500">
              <span className="material-symbols-outlined" style={{ fontSize: '140px' }}>business</span>
            </div>
            <div className="absolute top-4 right-4 font-mono-label text-[9px] text-primary/30">[SYS_SRV // SEC_05]</div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg border border-primary/20">
                <span className="material-symbols-outlined text-primary">headset_mic</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">Atención a Empresas</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 text-sm leading-relaxed">
                Gestión de cuentas corporativas con ejecutivo asignado. Portal de compras B2B privado, control de inventarios, reportes de consumo por sucursal y logística de distribución nacional.
              </p>
              
              <ul className="space-y-3 mt-auto border-t border-outline-variant/20 pt-4">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-2.5 text-lg">check_circle</span>
                  <span className="text-sm text-on-surface-variant font-medium text-on-surface-variant">Ejecutivo de cuenta dedicado</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-2.5 text-lg">check_circle</span>
                  <span className="text-sm text-on-surface-variant font-medium text-on-surface-variant">Portal B2B personalizado</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-2.5 text-lg">check_circle</span>
                  <span className="text-sm text-on-surface-variant font-medium text-on-surface-variant">Logística y distribución</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-outline-variant/30 bg-[#08090b] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
        <div className="absolute inset-0 grid-pattern opacity-[0.03] z-0"></div>
        
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center fade-in-up relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">¿Requiere una cotización por volumen?</h2>
          <p className="text-body-md font-body-md text-on-surface-variant mb-8 max-w-xl mx-auto text-base">
            Nuestro equipo está listo para analizar sus requerimientos y estructurar una propuesta técnica y comercial a la medida de su empresa.
          </p>
          <a className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-on-primary rounded font-label-caps text-label-caps hover:bg-primary/95 transition-all shadow-sm active:translate-y-px" href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20pedido%20por%20volumen" target="_blank" rel="noopener noreferrer">
            SOLICITAR COTIZACIÓN
          </a>
        </div>
      </section>
    </main>
  );
}
