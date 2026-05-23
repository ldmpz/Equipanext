import React from 'react';

export default function Servicios() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-[140px] pb-[80px] md:pt-[180px] md:pb-[120px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-pattern opacity-30 pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl fade-in-up">
          {/* Logo EQUIPANEXT */}
          <div className="mb-6">
            <img alt="EQUIPANEXT" className="h-10 w-auto object-contain" src="/assets/images/marca/Logo.png"/>
          </div>
          <div className="inline-flex items-center space-x-2 bg-surface-container-high px-3 py-1 rounded border border-outline-variant mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-mono-label font-mono-label text-on-surface-variant">DIVISIÓN INDUSTRIAL</span>
          </div>
          <h1 className="text-headline-lg-mobile md:text-display font-display text-on-surface mb-6">
            Ingeniería Textil a Escala Industrial.
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-10 max-w-2xl">
            Ofrecemos soluciones integrales en la fabricación y personalización de uniformes industriales, bordado corporativo y serigrafía técnica. Procesos estandarizados, tecnología de punta y capacidad volumétrica para satisfacer las demandas más exigentes del sector B2B.
          </p>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* 1. Fabricación Industrial (Spans 8 cols on desktop) */}
          <div className="md:col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm overflow-hidden flex flex-col group hover:border-outline transition-colors fade-in-up relative">
            <div className="flex-grow p-8 flex flex-col justify-center relative z-10 bg-surface-container-lowest w-full lg:w-1/2">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-surface-container rounded border border-outline-variant">
                <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
              </div>
              <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">Fabricación Industrial</h2>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                Líneas de producción optimizadas para altos volúmenes. Utilizamos patronaje digital y corte automatizado para garantizar consistencia milimétrica en cada pieza de su pedido corporativo. Fabricamos chalecos reflejantes, overoles, uniformes y ropa de trabajo a gran escala.
              </p>
              <div className="mt-auto flex gap-4">
                <span className="text-mono-label font-mono-label bg-surface-container px-2 py-1 rounded text-on-surface-variant border border-outline-variant">CAP: 50K/MES</span>
                <span className="text-mono-label font-mono-label bg-surface-container px-2 py-1 rounded text-on-surface-variant border border-outline-variant">CORTE LÁSER</span>
              </div>
            </div>
            {/* Background Image Area for Fabricacion */}
            <div 
              className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-surface-container-low border-l border-outline-variant" 
              style={{
                backgroundImage: "url('/assets/images/instalaciones/manufacturing_floor.png')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest to-transparent"></div>
            </div>
          </div>

          {/* 2. Diseño y Personalización */}
          <div className="md:col-span-6 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm p-8 flex flex-col group hover:border-outline transition-colors fade-in-up stagger-1">
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-surface-container rounded border border-outline-variant">
              <span className="material-symbols-outlined text-primary">tune</span>
            </div>
            <h3 className="text-headline-md font-headline-md text-on-surface mb-3">Diseño y Personalización</h3>
            <p className="text-body-md font-body-md text-on-surface-variant flex-grow">
              Adaptamos prendas estándar o desarrollamos diseños desde cero según sus requerimientos técnicos, normativas de seguridad y manual de identidad corporativa.
            </p>
            <div className="mt-6 border-t border-outline-variant pt-4">
              <a className="text-label-caps font-label-caps text-primary flex items-center group-hover:translate-x-1 transition-transform" href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20personalizaci%C3%B3n%20de%20uniformes" target="_blank" rel="noopener noreferrer">
                COTIZAR <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* 3. Bordado Industrial */}
          <div className="md:col-span-6 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm p-8 flex flex-col group hover:border-outline transition-colors fade-in-up">
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-surface-container rounded border border-outline-variant">
              <span className="material-symbols-outlined text-primary">styler</span>
            </div>
            <h3 className="text-headline-md font-headline-md text-on-surface mb-3">Bordado Industrial</h3>
            <p className="text-body-md font-body-md text-on-surface-variant flex-grow">
              Aplicación de logotipos e insignias mediante maquinaria multicabeza de alta velocidad. Hilos de poliéster de máxima resistencia al desgaste y decoloración por lavado industrial.
            </p>
            <div className="mt-6 border-t border-outline-variant pt-4">
              <a className="text-label-caps font-label-caps text-primary flex items-center group-hover:translate-x-1 transition-transform" href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20bordado%20industrial" target="_blank" rel="noopener noreferrer">
                COTIZAR <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* 4. Serigrafía y Transfer */}
          <div className="md:col-span-6 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm p-8 flex flex-col group hover:border-outline transition-colors fade-in-up stagger-1">
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-surface-container rounded border border-outline-variant">
              <span className="material-symbols-outlined text-primary">layers</span>
            </div>
            <h3 className="text-headline-md font-headline-md text-on-surface mb-3">Serigrafía y Transfer</h3>
            <p className="text-body-md font-body-md text-on-surface-variant flex-grow">
              Estampado técnico para señalética de seguridad o branding amplio. Utilizamos tintas plastisol y base agua curadas térmicamente para garantizar durabilidad extrema en condiciones rudas.
            </p>
            <div className="mt-6 border-t border-outline-variant pt-4">
              <a className="text-label-caps font-label-caps text-primary flex items-center group-hover:translate-x-1 transition-transform" href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20serigrafia%20o%20transfer" target="_blank" rel="noopener noreferrer">
                COTIZAR <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* 5. Atención a Empresas */}
          <div className="md:col-span-12 lg:col-span-4 bg-surface-container-lowest border-t-4 border-t-primary border-x border-b border-outline-variant rounded-lg shadow-sm p-8 flex flex-col group hover:shadow-md transition-shadow fade-in-up stagger-2 relative overflow-hidden">
            <div className="absolute -right-6 -top-6 text-surface-container opacity-50 transform rotate-12 pointer-events-none">
              <span className="material-symbols-outlined" style={{ fontSize: '140px' }}>business</span>
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-surface-container rounded border border-outline-variant">
                <span className="material-symbols-outlined text-primary">headset_mic</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-3">Atención a Empresas</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">
                Gestión de cuentas corporativas con ejecutivo asignado. Portal de compras B2B privado, control de inventarios, reportes de consumo por sucursal y logística de distribución nacional.
              </p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-2 text-sm mt-1">check_circle</span>
                  <span className="text-body-md font-body-md text-on-surface-variant">Ejecutivo de cuenta dedicado</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-2 text-sm mt-1">check_circle</span>
                  <span className="text-body-md font-body-md text-on-surface-variant">Portal B2B personalizado</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-2 text-sm mt-1">check_circle</span>
                  <span className="text-body-md font-body-md text-on-surface-variant">Logística y distribución</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-outline-variant bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center fade-in-up">
          <div className="flex justify-center mb-6">
            <img alt="EQUIPANEXT" className="h-10 w-auto object-contain" src="/assets/images/marca/Logo.png"/>
          </div>
          <h2 className="text-headline-md font-headline-md text-on-surface mb-4">¿Requiere una cotización por volumen?</h2>
          <p className="text-body-md font-body-md text-on-surface-variant mb-8 max-w-xl mx-auto">
            Nuestro equipo está listo para analizar sus requerimientos y estructurar una propuesta técnica y comercial a la medida de su empresa.
          </p>
          <a className="inline-flex items-center justify-center px-8 py-3 bg-primary text-on-primary rounded text-label-caps font-label-caps hover:bg-primary-container hover:text-on-primary-container transition-all duration-200 active:translate-y-px shadow-sm" href="https://wa.me/521234567890?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20pedido%20por%20volumen" target="_blank" rel="noopener noreferrer">
            COTIZAR
          </a>
        </div>
      </section>
    </main>
  );
}
