import React from 'react';

export default function Nosotros() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-[140px] pb-[80px] md:pt-[180px] md:pb-[120px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto hero-pattern border-b border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 flex flex-col justify-center fade-in-up">
            <span className="inline-block px-3 py-1 bg-surface-variant text-on-surface-variant font-mono-label text-mono-label rounded mb-6 w-fit border border-outline-variant">
              HERENCIA INDUSTRIAL
            </span>
            <h1 className="text-headline-lg-mobile md:text-display font-headline-lg-mobile md:font-display text-on-surface mb-6 leading-tight">
              Precisión Mexicana en <br className="hidden md:block"/>Cada Puntada.
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mb-8">
              Forjamos uniformes industriales con la resiliencia de la manufactura nacional y estándares globales. No somos solo proveedores; somos el blindaje de su fuerza laboral.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid: Identidad & Historia */}
      <section className="py-[80px] md:py-[120px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface-container-lowest">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[minmax(300px,auto)]">
          {/* Nuestra Historia */}
          <div className="md:col-span-8 bg-surface border border-outline-variant rounded shadow-[0_2px_4px_rgba(0,0,0,0.1)] p-8 md:p-12 fade-in-up stagger-1 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-surface-variant opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-[24px]">factory</span>
                <h2 className="text-headline-md font-headline-md text-on-surface">Nuestra Historia</h2>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                Nacidos en el corazón industrial de México, EQUIPANEXT surge de la necesidad de fusionar durabilidad extrema con diseño ergonómico. Comprendemos que un uniforme no es solo tela; es equipo de protección personal crítico. Décadas de experiencia en la industria textil nos permiten entregar soluciones que resisten los entornos más hostiles sin comprometer la movilidad.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="border-l-2 border-primary pl-4">
                  <span className="block text-headline-md font-headline-md text-on-surface">20+</span>
                  <span className="text-label-caps font-label-caps text-on-surface-variant">AÑOS DE EXPERIENCIA</span>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <span className="block text-headline-md font-headline-md text-on-surface">100%</span>
                  <span className="text-label-caps font-label-caps text-on-surface-variant">HECHO EN MÉXICO</span>
                </div>
              </div>
            </div>
          </div>
          {/* Imagen Representativa */}
          <div className="md:col-span-4 rounded border border-outline-variant shadow-[0_2px_4px_rgba(0,0,0,0.1)] overflow-hidden fade-in-up stagger-2 relative bg-surface-container-low min-h-[300px]">
            <img 
              alt="Manufactura Industrial" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply" 
              src="/assets/images/instalaciones/embroidery_machine.png"
            />
            <div className="absolute inset-0 border-t-4 border-secondary pointer-events-none"></div>
          </div>
          {/* Misión */}
          <div className="md:col-span-6 bg-surface-bright border border-outline-variant rounded shadow-[0_2px_4px_rgba(0,0,0,0.1)] p-8 fade-in-up stagger-3 border-t-4 border-t-primary">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-[24px]">target</span>
              <h3 className="text-headline-md font-headline-md text-on-surface">Misión</h3>
            </div>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Equipar a la fuerza laboral de México con indumentaria industrial de máxima calidad, garantizando seguridad, confort y una imagen corporativa impecable mediante procesos de manufactura de precisión y atención personalizada.
            </p>
          </div>
          {/* Visión */}
          <div className="md:col-span-6 bg-surface-bright border border-outline-variant rounded shadow-[0_2px_4px_rgba(0,0,0,0.1)] p-8 fade-in-up stagger-3 border-t-4 border-t-secondary">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-secondary text-[24px]">visibility</span>
              <h3 className="text-headline-md font-headline-md text-on-surface">Visión</h3>
            </div>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Ser el referente indiscutible en proveeduría de uniformes técnicos en América Latina, reconocidos por nuestra innovación textil, durabilidad insuperable y compromiso inquebrantable con la excelencia operativa industrial.
            </p>
          </div>
        </div>
      </section>

      {/* Valores & Atención Personalizada */}
      <section className="py-[80px] md:py-[120px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant bg-surface">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-label-caps font-label-caps text-primary tracking-widest uppercase mb-4 block">Nuestro Compromiso</span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface">Atención que Forja Relaciones</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded p-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:border-primary transition-colors group fade-in-up stagger-1">
            <div className="w-12 h-12 bg-surface-variant rounded flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors">
              <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">handshake</span>
            </div>
            <h4 className="text-body-lg font-headline-md font-bold text-on-surface mb-3">Servicio Personalizado</h4>
            <p className="text-body-md font-body-md text-on-surface-variant text-sm">
              Asignamos un ingeniero de producto a su cuenta para entender especificaciones precisas. No vendemos catálogo; diseñamos soluciones.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded p-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:border-primary transition-colors group fade-in-up stagger-2">
            <div className="w-12 h-12 bg-surface-variant rounded flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors">
              <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">precision_manufacturing</span>
            </div>
            <h4 className="text-body-lg font-headline-md font-bold text-on-surface mb-3">Calidad de Manufactura</h4>
            <p className="text-body-md font-body-md text-on-surface-variant text-sm">
              Costuras de alta tenacidad, remates en puntos de tensión y telas con certificación de resistencia al desgarro industrial.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded p-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:border-primary transition-colors group fade-in-up stagger-3">
            <div className="w-12 h-12 bg-surface-variant rounded flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors">
              <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">local_shipping</span>
            </div>
            <h4 className="text-body-lg font-headline-md font-bold text-on-surface mb-3">Logística Precisa</h4>
            <p className="text-body-md font-body-md text-on-surface-variant text-sm">
              Entregas programadas y empaquetado estructurado por cuadrillas, optimizando la distribución interna en su planta.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
