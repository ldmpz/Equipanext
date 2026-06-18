import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-[#F5F5F5] text-[#111111] min-h-screen">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#071A33]" id="inicio">
        
        {/* Background: textured industrial photo */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#071A33]">
          <Image 
            src="/assets/images/instalaciones/hero_background.png" 
            alt="Hero Background"
            fill
            priority
            sizes="100vw"
            className="object-cover filter grayscale-[0.3] opacity-30 scale-110"
          />
          {/* Deep cinematic base overlay */}
          <div className="absolute inset-0 bg-[#071A33]/80 z-10"></div>
        </div>

        {/* Cinematic layers */}
        {/* Vignette top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent z-10"></div>
        {/* Vignette sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10"></div>
        {/* Radial depth mask — darkens center-left where text sits */}
        <div className="absolute inset-0 z-10" style={{background: 'radial-gradient(ellipse 55% 80% at 25% 55%, rgba(0,0,0,0.45) 0%, transparent 70%)'}}></div>
        {/* Bottom natural fade to white — seamless section transition */}
        <div className="absolute inset-x-0 bottom-0 h-52 z-10" style={{background: 'linear-gradient(to top, #F5F5F5 0%, rgba(245,245,245,0.7) 40%, transparent 100%)'}}></div>

        {/* Nex volumetric light source — behind mascot */}
        <div className="absolute right-[5%] lg:right-[8%] top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full z-10 pointer-events-none"
          style={{background: 'radial-gradient(circle, rgba(255,193,7,0.12) 0%, rgba(255,193,7,0.04) 40%, transparent 70%)', filter: 'blur(40px)'}}
        ></div>
        {/* Secondary ambient fill — warm glow floor */}
        <div className="absolute right-[10%] bottom-[15%] w-[300px] h-[200px] rounded-full z-10 pointer-events-none"
          style={{background: 'radial-gradient(circle, rgba(255,193,7,0.08) 0%, transparent 70%)', filter: 'blur(60px)'}}
        ></div>

        {/* Industrial ambient particles — SVG noise layer */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.025]"
          style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: '300px 300px'}}
        ></div>

        {/* Hero Grid Content */}
        <div className="relative z-20 w-full px-6 md:px-12 max-w-7xl mx-auto pt-52 pb-24 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-6 lg:gap-0 items-center">
          
          {/* LEFT: Text & CTA */}
          <div className="flex flex-col items-start text-left animate-fade-in-up">
            
            {/* Micro-Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-md border border-white/15 text-white font-semibold text-[10px] md:text-[11px] px-5 py-2 rounded-full mb-8 uppercase tracking-[0.22em] shadow-lg">
              <span className="w-1.5 h-1.5 bg-[#FFC107] rounded-full animate-pulse shadow-[0_0_6px_rgba(255,193,7,0.9)]"></span>
              Ingeniería Textil Corporativa
            </div>
            
            {/* Giant Title */}
            <h1 className="font-display font-black mb-6 text-[42px] sm:text-5xl md:text-6xl lg:text-[70px] leading-[0.95] tracking-[-0.04em] text-white uppercase"
              style={{textShadow: '0 2px 40px rgba(0,0,0,0.6), 0 1px 0 rgba(0,0,0,0.8)'}}>
              UNIFORMES QUE <br />
              <span className="text-[#FFC107]" style={{textShadow: '0 0 40px rgba(255,193,7,0.25), 0 2px 20px rgba(0,0,0,0.5)'}}>PROTEGEN Y</span> <br />
              <span className="text-[#FFC107]" style={{textShadow: '0 0 40px rgba(255,193,7,0.25), 0 2px 20px rgba(0,0,0,0.5)'}}>PROYECTAN</span>
            </h1>
            
            {/* Divider rule */}
            <div className="w-12 h-[2px] bg-[#FFC107] mb-7 rounded-full opacity-80"></div>

            {/* Secondary descriptive line */}
            <p className="text-white/75 mb-10 max-w-[380px] text-[16px] md:text-[18px] leading-[1.65] font-light tracking-[0.01em]">
              Equipos de seguridad y uniformes industriales de la más alta calidad.
            </p>
            
            {/* Premium CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                className="btn-hero inline-flex justify-center items-center gap-2.5 bg-[#FFC107] text-[#071A33] font-black text-[12px] tracking-[0.12em] px-10 py-4 uppercase w-full sm:w-auto" 
                href="/productos"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                  boxShadow: '0 6px 24px rgba(255,193,7,0.25), 0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.25)'
                }}
              >
                VER PRODUCTOS
                <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
              </Link>
            </div>

            {/* Carousel dots */}
            <div className="flex items-center gap-2 mt-10">
              <span className="w-6 h-1.5 bg-[#FFC107] rounded-full shadow-[0_0_8px_rgba(255,193,7,0.7)]"></span>
              <span className="w-1.5 h-1.5 bg-white/25 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-white/25 rounded-full"></span>
            </div>
          </div>

          {/* RIGHT: Nex Mascot — Cinematically Integrated */}
          <div className="flex justify-center lg:justify-end items-center relative w-full h-full lg:-mr-6">
            <div className="relative flex justify-center items-end" style={{width: '100%', maxWidth: '620px'}}>
              
              {/* Contact shadow on ground */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-8 rounded-full pointer-events-none z-0"
                style={{background: 'radial-gradient(ellipse, rgba(0,0,0,0.55) 0%, transparent 70%)', filter: 'blur(12px)'}}
              ></div>

              {/* Rim light — backlight halo behind Nex */}
              <div className="absolute inset-0 rounded-full pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(ellipse 60% 90% at 50% 50%, rgba(255,193,7,0.07) 0%, rgba(255,193,7,0.02) 50%, transparent 70%)',
                  filter: 'blur(30px)'
                }}
              ></div>

              {/* Nex mascot image */}
              <Image 
                src="/assets/images/marca/mascota_hero.png"
                alt="Nex — Asesor Oficial Equipanext"
                width={620}
                height={620}
                priority
                className="relative z-10 object-contain w-full h-auto select-none"
                style={{
                  maxHeight: '580px',
                  filter: 'drop-shadow(-8px 0px 24px rgba(255,193,7,0.12)) drop-shadow(0px 24px 48px rgba(0,0,0,0.7)) drop-shadow(8px -4px 20px rgba(255,255,255,0.04))',
                  transform: 'scale(1.18)',
                  transformOrigin: 'bottom center'
                }}
              />
            </div>
          </div>
        </div>

        {/* Letterbox — cinematic bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 z-20 bg-gradient-to-r from-transparent via-[#FFC107]/20 to-transparent"></div>
      </section>

      {/* 2. Trust Bar - Dark Industrial */}
      <section className="bg-[#071A33] py-12 relative z-20 border-b border-white/5">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: 'verified_user', title: 'Calidad Garantizada', desc: 'Productos resistentes y de alto rendimiento.' },
              { icon: 'workspace_premium', title: 'Uniformes Certificados', desc: 'Cumplimos con las normas de seguridad industrial.' },
              { icon: 'support_agent', title: 'Atención Personalizada', desc: 'Te asesoramos para encontrar lo que necesitas.' },
              { icon: 'local_shipping', title: 'Envíos a toda la República', desc: 'Entregas rápidas y seguras.' }
            ].map((benefit, idx) => (
              <div key={idx} className={`flex flex-col items-center text-center px-6 py-10 group transition-all duration-300 ${idx < 3 ? 'border-b sm:border-b lg:border-b-0 lg:border-r border-white/10' : ''}`}>
                <div className="w-16 h-16 rounded-full bg-[#FFC107] flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-yellow-500/20">
                  <span className="material-symbols-outlined text-[#071A33] text-[28px]">{benefit.icon}</span>
                </div>
                <h3 className="text-white font-bold text-[13px] tracking-widest mb-2 uppercase">{benefit.title}</h3>
                <p className="text-white/50 text-[12px] leading-relaxed max-w-[190px] font-light">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Editorial Overview */}
      <section className="py-[160px] bg-white relative overflow-hidden" id="nosotros">
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="order-2 lg:order-1 relative group">
              <div className="relative rounded-3xl overflow-hidden bg-[#F5F7FA] aspect-[4/5] sm:aspect-square">
                <Image 
                  alt="Fabricación de uniformes de precisión" 
                  className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 filter contrast-[1.05] grayscale-[0.1]" 
                  src="/assets/images/instalaciones/stitching_fabric.png"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] pointer-events-none rounded-3xl"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <span className="text-[10px] font-bold text-[#FFC107] uppercase tracking-[0.25em] mb-6 block">
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
                  <span className="material-symbols-outlined text-[24px] text-[#071A33] group-hover:text-[#FFC107] transition-colors">shield</span>
                  <h4 className="text-[#1B1F24] font-medium text-[15px]">Materiales Certificados</h4>
                  <p className="text-[#9ca3af] text-[13px] font-light leading-relaxed">Telas de alta visibilidad bajo normativas globales.</p>
                </li>
                <li className="flex flex-col gap-3 group">
                  <span className="material-symbols-outlined text-[24px] text-[#071A33] group-hover:text-[#FFC107] transition-colors">print</span>
                  <h4 className="text-[#1B1F24] font-medium text-[15px]">DTF y Serigrafía</h4>
                  <p className="text-[#9ca3af] text-[13px] font-light leading-relaxed">Estampados técnicos de alta definición y resistencia al lavado industrial.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ventajas Competitivas (Apple Minimal) */}
      <section className="py-[160px] bg-[#F5F5F5] relative overflow-hidden" id="ventajas">
        <div className="hidden md:block absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-b from-[#FFC107]/5 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-[10px] font-bold text-[#FFC107] uppercase tracking-[0.25em] mb-6 block">
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
            {[
              { icon: 'fitness_center', title: 'Máxima Resistencia', desc: 'Telas antidesgarro ripstop y costuras de alta densidad.' },
              { icon: 'visibility', title: 'Visibilidad 360°', desc: 'Cintas reflejantes certificadas de alto poder reflectivo.' },
              { icon: 'airline_seat_recline_extra', title: 'Ergonomía Activa', desc: 'Corte anatómico que permite total libertad de movimiento.' },
              { icon: 'hub', title: 'Identidad de Marca', desc: 'Personalización exacta mediante bordado digital automatizado.' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group">
                <div className="w-16 h-16 bg-[#F5F5F5] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#FFC107] transition-colors duration-500">
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

      {/* 5. Categorías */}
      <section className="py-24 bg-white relative border-t border-[#EAECEF]" id="categorias">
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-[#111111] text-4xl md:text-[52px] leading-[1.05] tracking-[-0.02em] uppercase">
              CATEGORÍAS <span className="text-[#FFC107]">PRINCIPALES</span>
            </h2>
            <div className="w-16 h-1 bg-[#FFC107] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'SEGURIDAD INDUSTRIAL',
                desc: 'Chalecos de alta visibilidad, equipo de protección y arneses.',
                img: '/assets/images/productos/safety_vest.png'
              },
              {
                title: 'GASTRONOMÍA',
                desc: 'Filipinas, delantales y uniformes premium para cocina.',
                img: '/assets/images/instalaciones/stitching_fabric.png'
              },
              {
                title: 'SALUD',
                desc: 'Filipinas médicas, batas y uniformes clínicos confortables.',
                img: '/assets/images/instalaciones/embroidery_machine.png'
              },
              {
                title: 'INDUSTRIAL',
                desc: 'Overoles de alta resistencia, pantalones y camisas de trabajo.',
                img: '/assets/images/productos/coveralls.png'
              }
            ].map((cat, idx) => (
              <Link 
                key={idx} 
                href="/productos"
                className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-[#F5F7FA] border border-[#EAECEF] shadow-sm hover:shadow-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-end"
              >
                <Image 
                  src={cat.img} 
                  alt={cat.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  loading="lazy" 
                  className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-[#071A33]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 right-4 z-20 w-10 h-10 bg-[#FFC107] rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300 shadow-lg">
                  <span className="material-symbols-outlined text-[#071A33] text-[18px] font-bold">arrow_forward</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-white font-display font-extrabold text-[14px] tracking-widest uppercase">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
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
