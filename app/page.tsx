import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Factory, Truck, Stethoscope, ChefHat, Building2, HardHat } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-[#04142B] text-white min-h-screen">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#04142B]" id="inicio">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#04142B]">
          <Image src="/assets/images/instalaciones/hero_background.png" alt="Hero Background" fill priority sizes="100vw" className="object-cover filter grayscale-[0.3] opacity-30 scale-110"/>
          <div className="absolute inset-0 bg-[#04142B]/80 z-10"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 z-10" style={{background:'radial-gradient(ellipse 55% 80% at 25% 55%, rgba(0,0,0,0.45) 0%, transparent 70%)'}}></div>
        <div className="absolute inset-x-0 bottom-0 h-52 z-10" style={{background:'linear-gradient(to top, #04142B 0%, rgba(4,20,43,0.7) 40%, transparent 100%)'}}></div>
        <div className="absolute right-[5%] lg:right-[8%] top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full z-10 pointer-events-none" style={{background:'radial-gradient(circle, rgba(255,193,7,0.12) 0%, rgba(255,193,7,0.04) 40%, transparent 70%)', filter:'blur(40px)'}}></div>

        <div className="relative z-20 w-full px-6 md:px-12 max-w-7xl mx-auto pt-52 pb-24 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-6 lg:gap-0 items-center">
          <div className="flex flex-col items-start text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-md border border-white/15 text-white font-semibold text-[10px] md:text-[11px] px-5 py-2 rounded-full mb-8 uppercase tracking-[0.22em] shadow-lg">
              <span className="w-1.5 h-1.5 bg-[#FFC107] rounded-full animate-pulse shadow-[0_0_6px_rgba(255,193,7,0.9)]"></span>
              Ingeniería Textil Corporativa
            </div>
            <h1 className="font-display font-black mb-6 text-[42px] sm:text-5xl md:text-6xl lg:text-[70px] leading-[0.95] tracking-[-0.04em] text-white uppercase" style={{textShadow:'0 2px 40px rgba(0,0,0,0.6)'}}>
              UNIFORMES QUE <br/>
              <span className="text-[#FFC107]">PROTEGEN Y</span> <br/>
              <span className="text-[#FFC107]">PROYECTAN</span>
            </h1>
            <div className="w-12 h-[2px] bg-[#FFC107] mb-7 rounded-full opacity-80"></div>
            <p className="text-white/75 mb-8 max-w-[380px] text-[16px] md:text-[18px] leading-[1.65] font-light">
              Equipos de seguridad y uniformes industriales de la más alta calidad.
            </p>

            {/* Value checklist */}
            <ul className="mb-10 flex flex-col gap-2.5">
              {[
                { icon: 'palette', text: 'Personalización de uniformes' },
                { icon: 'hub', text: 'Bordado y serigrafía' },
                { icon: 'inventory_2', text: 'Producción por volumen' },
                { icon: 'local_shipping', text: 'Envíos a toda la República' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-white/80 text-[13px] font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#FFC107]/20 border border-[#FFC107]/40 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#FFC107] text-[12px]">{item.icon}</span>
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link className="btn-hero inline-flex justify-center items-center gap-2.5 bg-[#FFC107] text-[#04142B] font-black text-[12px] tracking-[0.12em] px-10 py-4 uppercase w-full sm:w-auto" href="/productos"
                style={{clipPath:'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))', boxShadow:'0 6px 24px rgba(255,193,7,0.25)'}}>
                VER CATÁLOGO
                <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
              </Link>
              <a href="https://wa.me/525524398773?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20uniformes" target="_blank" rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 border border-white/25 text-white font-bold text-[12px] tracking-[0.1em] px-8 py-4 uppercase w-full sm:w-auto hover:bg-white/10 transition-all rounded-sm">
                <svg fill="white" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z"/></svg>
                WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-2 mt-10">
              <span className="w-6 h-1.5 bg-[#FFC107] rounded-full shadow-[0_0_8px_rgba(255,193,7,0.7)]"></span>
              <span className="w-1.5 h-1.5 bg-white/25 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-white/25 rounded-full"></span>
            </div>
          </div>

          {/* Nex Mascot */}
          <div className="flex justify-center lg:justify-end items-center relative w-full h-full lg:-mr-6">
            <div className="relative flex justify-center items-end" style={{width:'100%', maxWidth:'620px'}}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-8 rounded-full pointer-events-none z-0" style={{background:'radial-gradient(ellipse, rgba(0,0,0,0.55) 0%, transparent 70%)', filter:'blur(12px)'}}></div>
              <div className="absolute inset-0 rounded-full pointer-events-none z-0" style={{background:'radial-gradient(ellipse 60% 90% at 50% 50%, rgba(255,193,7,0.07) 0%, transparent 70%)', filter:'blur(30px)'}}></div>
              <Image src="/assets/images/marca/mascota_widget.png" alt="Nex — Asesor Oficial Equipanext" width={620} height={620} priority className="relative z-10 object-contain w-full h-auto select-none"
                style={{maxHeight:'580px', filter:'drop-shadow(-8px 0px 24px rgba(255,193,7,0.12)) drop-shadow(0px 24px 48px rgba(0,0,0,0.7))', transform:'scale(1.18)', transformOrigin:'bottom center'}}/>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 z-20 bg-gradient-to-r from-transparent via-[#FFC107]/20 to-transparent"></div>
      </section>



      {/* SOLUCIONES PARA EMPRESAS */}
      <section className="py-24 bg-[#061A36] relative overflow-hidden" id="soluciones">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize:'300px'}}></div>
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-[#FFC107] uppercase tracking-[0.25em] mb-4 block">Soluciones Corporativas</span>
            <h2 className="font-display font-black text-white text-4xl md:text-[52px] leading-[1.05] tracking-[-0.02em] uppercase mb-4">
              Equipamos empresas de<br/><span className="text-[#FFC107]">cualquier tamaño.</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-[16px] font-light leading-relaxed">
              Desde PYMES hasta corporativos de nivel nacional. Proveemos uniformes técnicos para cada industria.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Factory, label: 'Manufactura', desc: 'Overoles, camisas y EPP para planta.' },
              { icon: Truck, label: 'Logística', desc: 'Chalecos reflejantes y uniformes de distribución.' },
              { icon: Stethoscope, label: 'Salud', desc: 'Filipinas médicas y batas clínicas.' },
              { icon: ChefHat, label: 'Gastronomía', desc: 'Uniformes premium para cocina y servicio.' },
              { icon: Building2, label: 'Corporativo', desc: 'Uniformes de oficina con identidad de marca.' },
              { icon: HardHat, label: 'Construcción', desc: 'Ropa de trabajo de alta resistencia.' },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <Link key={i} href="/contacto"
                  className="group flex flex-col items-center text-center p-6 rounded-2xl border border-[rgba(255,193,7,0.15)] hover:border-[#FFC107]/40 hover:bg-white/5 transition-all duration-500 cursor-pointer">
                  <Icon className="w-10 h-10 text-[#FFC107]/80 group-hover:text-[#FFC107] group-hover:scale-110 transition-all duration-300 mb-4 flex-shrink-0" strokeWidth={1.5} />
                  <h4 className="text-white font-bold text-[13px] tracking-wider uppercase mb-2">{s.label}</h4>
                  <p className="text-white/40 text-[11px] leading-relaxed font-light">{s.desc}</p>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-[#FFC107] text-[#04142B] font-black text-[12px] tracking-[0.12em] px-10 py-4 uppercase hover:bg-white hover:text-[#04142B] transition-all duration-300">
              Solicitar Cotización Empresarial
              <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* POR QUÉ EQUIPANEXT (REDISEÑO ESTILO TESLA) */}
      <section className="py-28 bg-[#04142B] relative border-t border-white/5 overflow-hidden" id="ventajas">
        {/* Subtle grid and light accents */}
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(ellipse at center, #FFC107 0%, transparent 80%)'}}></div>
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-white/10 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-white/10 via-transparent to-transparent"></div>

        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Brand Story and Tesla-like Stats */}
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold text-[#FFC107] uppercase tracking-[0.3em] mb-4 block">
                Nuestra Trayectoria B2B
              </span>
              <h2 className="font-display font-black text-white text-4xl md:text-[52px] leading-[1.05] tracking-[-0.03em] uppercase mb-6">
                Ingeniería textil<br/>
                <span className="text-white/60">con precisión industrial.</span>
              </h2>
              
              <div className="w-12 h-[2px] bg-[#FFC107] mb-8 rounded-full opacity-80"></div>
              
              <p className="text-white/80 text-[16px] md:text-[18px] font-light leading-[1.75] mb-10 max-w-xl">
                Fundada hace más de <strong className="text-[#FFC107] font-semibold">15 años</strong>, Equipanext se ha consolidado como el socio estratégico definitivo para la indumentaria corporativa en México. Diseñamos y fabricamos uniformes técnicos de alto rendimiento que no solo protegen al personal en entornos exigentes, sino que proyectan la máxima seriedad y solidez de su marca.
              </p>

              {/* Tesla-style Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 mb-10">
                <div>
                  <div className="font-display font-light text-white text-4xl md:text-5xl tracking-tighter mb-1.5 flex items-baseline">
                    15<span className="text-[#FFC107] text-2xl font-bold ml-0.5">+</span>
                  </div>
                  <div className="text-[10px] font-semibold text-white/50 uppercase tracking-widest leading-normal">
                    Años de Experiencia
                  </div>
                </div>
                <div>
                  <div className="font-display font-light text-white text-4xl md:text-5xl tracking-tighter mb-1.5 flex items-baseline">
                    500K<span className="text-[#FFC107] text-2xl font-bold ml-0.5">+</span>
                  </div>
                  <div className="text-[10px] font-semibold text-white/50 uppercase tracking-widest leading-normal">
                    Prendas Entregadas
                  </div>
                </div>
                <div>
                  <div className="font-display font-light text-white text-4xl md:text-5xl tracking-tighter mb-1.5 flex items-baseline">
                    100<span className="text-[#FFC107] text-2xl font-bold ml-0.5">%</span>
                  </div>
                  <div className="text-[10px] font-semibold text-white/50 uppercase tracking-widest leading-normal">
                    Garantía B2B
                  </div>
                </div>
              </div>

              {/* Key pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white/95">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-[#FFC107] mt-0.5">verified</span>
                  <div>
                    <h4 className="text-[14px] font-bold uppercase tracking-wider mb-1">Tecnología Certificada</h4>
                    <p className="text-white/60 text-[12px] font-light leading-relaxed">Tejidos con protección UV, retardantes al fuego y de alta durabilidad mecánica.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-[#FFC107] mt-0.5">local_shipping</span>
                  <div>
                    <h4 className="text-[14px] font-bold uppercase tracking-wider mb-1">Logística Integrada</h4>
                    <p className="text-white/60 text-[12px] font-light leading-relaxed">Surtido programado y entregas consolidadas en todas sus plantas de producción.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Nex Premium CTA Box */}
            <div className="bg-[#082041] rounded-[32px] p-8 md:p-10 relative overflow-hidden border border-[rgba(255,193,7,0.15)] flex flex-col items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Glowing decorative rings */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFC107]/5 rounded-full blur-[90px] pointer-events-none"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#FFC107]/5 rounded-full blur-[80px] pointer-events-none"></div>
              
              {/* Inner container with subtle border */}
              <div className="w-full flex flex-col items-center relative z-10">
                <div className="relative mb-6 w-full h-48 rounded-2xl overflow-hidden border border-white/10 hover:scale-[1.02] transition-transform duration-500 shadow-lg">
                  {/* Premium overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082041] via-transparent to-transparent z-20"></div>
                  <Image src="/assets/images/marca/b2b_cta_impact.png" alt="Uniformes Industriales Premium" fill className="object-cover relative z-10" />
                </div>
                
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/70 uppercase tracking-[0.2em] font-bold mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC107] animate-pulse"></span>
                  Socio Estratégico B2B
                </span>

                <h3 className="text-white font-display font-black text-2xl md:text-3xl mb-4 uppercase tracking-tight leading-none">
                  ¿Listo para equipar <br/><span className="text-[#FFC107]">a tu empresa?</span>
                </h3>
                
                <p className="text-white/60 text-[14px] font-light leading-relaxed mb-8 max-w-sm">
                  Planifiquemos una propuesta personalizada adaptada a las normas técnicas y volumen de tu sector industrial.
                </p>
                
                <div className="w-full flex flex-col gap-3">
                  <a href="https://wa.me/525524398773?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20uniformes%20para%20mi%20empresa"
                    target="_blank" rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-black text-[13px] tracking-wider uppercase text-white hover:opacity-90 transition-opacity"
                    style={{background:'linear-gradient(135deg, #25D366 0%, #1aab52 100%)', boxShadow:'0 4px 20px rgba(37,211,102,0.35)'}}>
                    <svg fill="white" height="18" viewBox="0 0 16 16" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z"/></svg>
                    Contactar Vía WhatsApp
                  </a>
                  
                  <Link href="/disenador" className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-black text-[12px] tracking-wider uppercase bg-[#FFC107] text-[#04142B] hover:bg-white hover:text-[#04142B] transition-all duration-300">
                    <span className="material-symbols-outlined text-[16px]">bolt</span>
                    Diseñador 3D Exclusivo
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="py-24 bg-[#061A36] relative border-t border-[rgba(255,193,7,0.15)]" id="categorias">
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-white text-4xl md:text-[52px] leading-[1.05] tracking-[-0.02em] uppercase">
              CATEGORÍAS <span className="text-[#FFC107]">PRINCIPALES</span>
            </h2>
            <div className="w-16 h-1 bg-[#FFC107] mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'SEGURIDAD INDUSTRIAL', desc: 'Chalecos de alta visibilidad, equipo de protección y arneses.', img: '/assets/images/productos/safety_vest.png' },
              { title: 'GASTRONOMÍA', desc: 'Filipinas, delantales y uniformes premium para cocina.', img: '/assets/images/instalaciones/stitching_fabric.png' },
              { title: 'SALUD', desc: 'Filipinas médicas, batas y uniformes clínicos.', img: '/assets/images/instalaciones/embroidery_machine.png' },
              { title: 'INDUSTRIAL', desc: 'Overoles de alta resistencia, pantalones y camisas.', img: '/assets/images/productos/coveralls.png' }
            ].map((cat, idx) => (
              <Link key={idx} href="/productos"
                className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-[#082041] border border-[rgba(255,193,7,0.15)] shadow-sm hover:shadow-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-end">
                <Image src={cat.img} alt={cat.title} fill sizes="(max-width: 768px) 100vw, 25vw" loading="lazy" className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)]"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#04142B] via-[#04142B]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 right-4 z-20 w-10 h-10 bg-[#FFC107] rounded-full flex items-center justify-center group-hover:bg-[#FFB300] transition-all duration-300 shadow-lg">
                  <span className="material-symbols-outlined text-[#04142B] text-[18px] font-bold">arrow_forward</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-white font-display font-extrabold text-[14px] tracking-widest uppercase">{cat.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRUEBA SOCIAL */}
      <section className="py-24 bg-[#04142B] border-t border-white/5">
        <div className="px-6 md:px-12 max-w-7xl mx-auto text-center">
          <span className="text-[10px] font-bold text-[#FFC107] uppercase tracking-[0.25em] mb-4 block">Confianza Empresarial</span>
          <h2 className="font-display font-black text-white text-3xl md:text-[44px] uppercase tracking-[-0.02em] mb-4">
            Empresas que confían en nosotros.
          </h2>
          <p className="text-white/40 text-[15px] font-light mb-16 max-w-xl mx-auto">
            Proveemos uniformes a empresas líderes en manufactura, logística, salud y construcción.
          </p>
          <div className="flex flex-wrap gap-10 md:gap-20 items-center justify-center mb-16">
            {['Infraestructura MX', 'Logística Federal', 'Automotriz Central', 'Minería Norte', 'Energía y Petróleo'].map((company, i) => (
              <span key={i} className="text-white/20 hover:text-white/70 transition-all duration-500 font-display font-black tracking-tight text-lg md:text-2xl uppercase cursor-default">
                {company}
              </span>
            ))}
          </div>
          {/* CTA final */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-[#FFC107] text-[#04142B] font-black text-[12px] tracking-[0.12em] px-10 py-4 uppercase hover:bg-white hover:text-[#04142B] transition-all">
              Solicitar Cotización
              <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
            </Link>
            <Link href="/disenador" className="inline-flex items-center gap-2 border border-[#FFC107]/40 text-[#FFC107] font-black text-[12px] tracking-[0.12em] px-10 py-4 uppercase hover:bg-[#FFC107] hover:text-[#04142B] transition-all">
              <span className="material-symbols-outlined text-[17px]">bolt</span>
              Diseñar Uniforme
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
