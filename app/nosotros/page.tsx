import React from 'react';

export default function Nosotros() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-[140px] pb-[80px] md:pt-[180px] md:pb-[120px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden border-b border-outline-variant/30 bg-[#08090b]">
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 grid-pattern opacity-[0.06] z-0"></div>
        <div className="absolute inset-0 hero-blueprint opacity-[0.08] z-0"></div>
        
        {/* Ambient Radial Glow */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-primary-container/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        {/* Tech terminal details */}
        <div className="absolute top-12 left-12 font-mono-label text-[10px] text-primary/30 uppercase tracking-widest hidden lg:block">
          [SYS-INIT // DEPT-NOSOTROS // VER-4.0]
        </div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 flex flex-col justify-center fade-in-up">
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary font-mono-label text-[11px] px-3.5 py-1.5 rounded-full mb-6 w-fit uppercase tracking-widest">
              <span className="dot-live"></span>
              HERENCIA INDUSTRIAL • FABRICACIÓN MEXICANA
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
              Precisión Mexicana en <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-white">
                Cada Puntada.
              </span>
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mb-8 text-lg leading-relaxed">
              Forjamos uniformes industriales con la resiliencia de la manufactura nacional y estándares globales. No somos solo proveedores; somos el blindaje técnico de su fuerza laboral.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid: Identidad & Historia */}
      <section className="py-[80px] md:py-[120px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-background relative">
        <div className="absolute inset-0 stripe-pattern opacity-[0.01] pointer-events-none"></div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[minmax(300px,auto)] relative z-10">
          
          {/* Nuestra Historia */}
          <div className="md:col-span-8 bg-surface border border-outline-variant/30 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 md:p-12 fade-in-up stagger-1 flex flex-col justify-between relative overflow-hidden group hover:border-primary/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-primary/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-surface-variant/30 opacity-50 z-0"></div>
            
            {/* Tech Corner accents */}
            <div className="absolute top-0 left-0 w-[40px] h-[1px] bg-primary/30"></div>
            <div className="absolute top-0 left-0 w-[1px] h-[40px] bg-primary/30"></div>
            <div className="absolute top-4 right-4 font-mono-label text-[10px] text-primary/30 group-hover:text-primary/60 transition-colors duration-300">
              [SEC_01 // HISTORIA]
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary text-[28px]">factory</span>
                  <h2 className="text-headline-md font-headline-md text-white font-display">Nuestra Historia</h2>
                </div>
                <p className="text-body-md font-body-md text-on-surface-variant mb-8 leading-relaxed text-base md:text-lg">
                  Nacidos en el corazón industrial de México, EQUIPANEXT surge de la necesidad de fusionar durabilidad extrema con diseño ergonómico. Comprendemos que un uniforme no es solo tela; es equipo de protección personal crítico. Décadas de experiencia en la industria textil nos permiten entregar soluciones que resisten los entornos más hostiles sin comprometer la movilidad.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-outline-variant/20">
                <div className="border-l-2 border-primary pl-4">
                  <span className="block text-3xl md:text-4xl font-display font-bold text-white tracking-tight">20+</span>
                  <span className="text-[10px] font-mono-label tracking-widest text-on-surface-variant uppercase">AÑOS DE EXPERIENCIA</span>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <span className="block text-3xl md:text-4xl font-display font-bold text-white tracking-tight">100%</span>
                  <span className="text-[10px] font-mono-label tracking-widest text-on-surface-variant uppercase">HECHO EN MÉXICO</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Imagen Representativa */}
          <div className="md:col-span-4 rounded-lg border border-outline-variant/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden fade-in-up stagger-2 relative bg-surface-container-low min-h-[300px] group hover:border-primary/40 transition-all duration-300">
            <img 
              alt="Manufactura Industrial" 
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out z-0" 
              src="/assets/images/instalaciones/embroidery_machine.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
            
            {/* Tech Corner accents */}
            <div className="absolute top-0 right-0 w-[40px] h-[1px] bg-primary/30"></div>
            <div className="absolute top-0 right-0 w-[1px] h-[40px] bg-primary/30"></div>
            <div className="absolute top-4 left-4 font-mono-label text-[10px] text-primary/30">
              [SEC_02 // EQUIP]
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 z-10">
              <span className="text-xs font-mono-label text-primary uppercase tracking-widest flex items-center gap-2">
                <span className="dot-live"></span>
                Maquinaria de Precisión
              </span>
            </div>
            <div className="absolute inset-0 border-t-4 border-primary/80 pointer-events-none"></div>
          </div>
          
          {/* Misión */}
          <div className="md:col-span-6 bg-surface border border-outline-variant/30 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.3)] p-8 fade-in-up stagger-3 border-t-4 border-t-primary relative overflow-hidden group hover:border-primary/60 transition-all duration-300">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-primary/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-500"></div>
            <div className="absolute inset-0 stripe-pattern opacity-[0.02] pointer-events-none"></div>
            <div className="absolute top-4 right-4 font-mono-label text-[10px] text-primary/30">[SEC_03 // MISSION]</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-[24px]">target</span>
                <h3 className="text-headline-md font-headline-md text-white font-display">Misión</h3>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Equipar a la fuerza laboral de México con indumentaria industrial de máxima calidad, garantizando seguridad, confort y una imagen corporativa impecable mediante procesos de manufactura de precisión y atención personalizada.
              </p>
            </div>
          </div>
          
          {/* Visión */}
          <div className="md:col-span-6 bg-surface border border-outline-variant/30 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.3)] p-8 fade-in-up stagger-3 border-t-4 border-t-primary/50 relative overflow-hidden group hover:border-primary/60 transition-all duration-300">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-primary/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-500"></div>
            <div className="absolute inset-0 stripe-pattern opacity-[0.02] pointer-events-none"></div>
            <div className="absolute top-4 right-4 font-mono-label text-[10px] text-primary/30">[SEC_04 // VISION]</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-[24px]">visibility</span>
                <h3 className="text-headline-md font-headline-md text-white font-display">Visión</h3>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Ser el referente indiscutible en proveeduría de uniformes técnicos en América Latina, reconocidos por nuestra innovación textil, durabilidad insuperable y compromiso inquebrantable con la excelencia operativa industrial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores & Atención Personalizada */}
      <section className="py-[80px] md:py-[120px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/30 bg-background relative overflow-hidden">
        {/* Ambient Radial Glows */}
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
        <div className="absolute top-12 left-10 w-[200px] h-[200px] bg-primary/5 rounded-full blur-[80px] pointer-events-none z-0"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-xs font-mono-label text-primary tracking-widest uppercase mb-4 block">Nuestro Compromiso</span>
            <h2 className="text-3xl md:text-5xl font-headline-lg font-bold text-white font-display">Atención que Forja Relaciones</h2>
            <div className="accent-bar w-24 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-surface border border-outline-variant/30 rounded-lg p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-primary/50 transition-all duration-300 hover:bg-surface-container-low group fade-in-up stagger-1 relative overflow-hidden">
              <div className="absolute top-4 right-4 font-mono-label text-[9px] text-primary/20 group-hover:text-primary/50 transition-colors">[VAL_01]</div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-all border border-primary/20">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">handshake</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 font-display">Servicio Personalizado</h4>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm leading-relaxed">
                Asignamos un ingeniero de producto a su cuenta para entender especificaciones precisas. No vendemos catálogo; diseñamos soluciones.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-surface border border-outline-variant/30 rounded-lg p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-primary/50 transition-all duration-300 hover:bg-surface-container-low group fade-in-up stagger-2 relative overflow-hidden">
              <div className="absolute top-4 right-4 font-mono-label text-[9px] text-primary/20 group-hover:text-primary/50 transition-colors">[VAL_02]</div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-all border border-primary/20">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">precision_manufacturing</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 font-display">Calidad de Manufactura</h4>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm leading-relaxed">
                Costuras de alta tenacidad, remates en puntos de tensión y telas con certificación de resistencia al desgarro industrial.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-surface border border-outline-variant/30 rounded-lg p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-primary/50 transition-all duration-300 hover:bg-surface-container-low group fade-in-up stagger-3 relative overflow-hidden">
              <div className="absolute top-4 right-4 font-mono-label text-[9px] text-primary/20 group-hover:text-primary/50 transition-colors">[VAL_03]</div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-all border border-primary/20">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">local_shipping</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 font-display">Logística Precisa</h4>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm leading-relaxed">
                Entregas programadas y empaquetado estructurado por cuadrillas, optimizando la distribución interna en su planta.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
