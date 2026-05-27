"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Base products data
const productsData = [
  {
    id: 'roy',
    name: 'Chaleco ROY',
    tag: 'Uso General',
    image: '/assets/images/chalecos/MODELO ROY - GABARDINA/roy.png',
    description: 'Chaleco de gabardina ligera y resistente, cómodo para uso prolongado. Cuenta con 6 cintas reflejantes, múltiples bolsillos funcionales, costuras reforzadas en puntos estratégicos y cierre reforzado para mayor practicidad.',
    whatsappText: 'Hola, me gustaría cotizar el Chaleco ROY',
    colors: [
      { name: 'Azul Rey', hex: '#1976D2', image: '/assets/images/chalecos/MODELO ROY - GABARDINA/azul rey.png' },
      { name: 'Negro', hex: '#1B1F24', image: '/assets/images/chalecos/MODELO ROY - GABARDINA/negro.png' },
      { name: 'Rojo', hex: '#D32F2F', image: '/assets/images/chalecos/MODELO ROY - GABARDINA/ROJO-REFLE.png' },
      { name: 'Vino', hex: '#800020', image: '/assets/images/chalecos/MODELO ROY - GABARDINA/vino.png' },
      { name: 'Gris / Negro', hex: '#9E9E9E', secondaryHex: '#1B1F24', image: '/assets/images/chalecos/MODELO ROY - GABARDINA/GRISNEGRO.png' },
      { name: 'Negro / Azul Rey', hex: '#1B1F24', secondaryHex: '#1976D2', image: '/assets/images/chalecos/MODELO ROY - GABARDINA/NEGRO-REY.png' },
      { name: 'Azul Rey / Negro', hex: '#1976D2', secondaryHex: '#1B1F24', image: '/assets/images/chalecos/MODELO ROY - GABARDINA/REY-NEGRO.png' },
      { name: 'Amarillo Neón / Negro', hex: '#E8FF00', secondaryHex: '#1B1F24', image: '/assets/images/chalecos/MODELO ROY - GABARDINA/amaraillo neon negro.png' },
      { name: 'Amarillo Neón / Azul Rey', hex: '#E8FF00', secondaryHex: '#1976D2', image: '/assets/images/chalecos/MODELO ROY - GABARDINA/amarillo neon azul rey.png' },
      { name: 'Gris Oxford / Vino', hex: '#4B5563', secondaryHex: '#800020', image: '/assets/images/chalecos/MODELO ROY - GABARDINA/gris oxford vino.png' },
      { name: 'Gris / Rosa', hex: '#9E9E9E', secondaryHex: '#FFC0CB', image: '/assets/images/chalecos/MODELO ROY - GABARDINA/gris rosa.png' },
      { name: 'Morado / Negro', hex: '#800080', secondaryHex: '#1B1F24', image: '/assets/images/chalecos/MODELO ROY - GABARDINA/morado negro.png' },
      { name: 'Negro / Gris Oxford', hex: '#1B1F24', secondaryHex: '#4B5563', image: '/assets/images/chalecos/MODELO ROY - GABARDINA/negro gris oxford.png' },
      { name: 'Negro / Naranja', hex: '#1B1F24', secondaryHex: '#FF6B00', image: '/assets/images/chalecos/MODELO ROY - GABARDINA/negro naranja.png' },
      { name: 'Negro / Rojo', hex: '#1B1F24', secondaryHex: '#D32F2F', image: '/assets/images/chalecos/MODELO ROY - GABARDINA/negro rojo.png' },
      { name: 'Vino / Caqui', hex: '#800020', secondaryHex: '#F0E68C', image: '/assets/images/chalecos/MODELO ROY - GABARDINA/vino caqui.png' }
    ]
  },
  {
    id: 'nova',
    name: 'Chaleco NOVA',
    tag: 'Ergonómico',
    image: '/assets/images/chalecos/MODELO NOVA - GABARDINA/nova.png',
    description: 'Chaleco reflejante de gabardina ligera y resistente, cómodo y durable para uso laboral. Cuenta con 8 bandas reflejantes, 2 bolsillos frontales, cierre reforzado y cubre cuello para mayor seguridad y comodidad.',
    whatsappText: 'Hola, me gustaría cotizar el Chaleco NOVA',
    colors: [
      { name: 'Amarillo Neón', hex: '#E8FF00', image: '/assets/images/chalecos/MODELO NOVA - GABARDINA/amarillo neon.png' },
      { name: 'Naranja', hex: '#FF6B00', image: '/assets/images/chalecos/MODELO NOVA - GABARDINA/naranja.png' },
      { name: 'Azul Rey', hex: '#1976D2', image: '/assets/images/chalecos/MODELO NOVA - GABARDINA/azul rey.png' },
      { name: 'Rojo', hex: '#D32F2F', image: '/assets/images/chalecos/MODELO NOVA - GABARDINA/roja.png' },
      { name: 'Gris Oxford', hex: '#4B5563', image: '/assets/images/chalecos/MODELO NOVA - GABARDINA/GRIS OXFORD.png' },
      { name: 'Caqui', hex: '#F0E68C', image: '/assets/images/chalecos/MODELO NOVA - GABARDINA/CAQUI.png' },
      { name: 'Negro', hex: '#1B1F24', image: '/assets/images/chalecos/MODELO NOVA - GABARDINA/NEGRO.png' },
      { name: 'Marino', hex: '#1C2938', image: '/assets/images/chalecos/MODELO NOVA - GABARDINA/marino.png' },
      { name: 'Rosa', hex: '#FFC0CB', image: '/assets/images/chalecos/MODELO NOVA - GABARDINA/rosa.png' },
      { name: 'Vino', hex: '#800020', image: '/assets/images/chalecos/MODELO NOVA - GABARDINA/vino.png' }
    ]
  },
  {
    id: 'brigadista',
    name: 'Chaleco Brigadista',
    tag: 'Multi-Bolsillos',
    image: '/assets/images/chalecos/CHALECO BRIGADISTA - GABARDINA/brigadista.png',
    description: 'Chaleco de gabardina ligera y cómoda con 5 cintas reflejantes de alta visibilidad. Incluye múltiples bolsillos funcionales, porta radio, porta lámpara, bolsa trasera para documentos y ajuste lateral.',
    whatsappText: 'Hola, me gustaría cotizar el Chaleco Brigadista',
    colors: [
      { name: 'Amarillo', hex: '#FFD600', image: '/assets/images/chalecos/CHALECO BRIGADISTA - GABARDINA/amarillo.png' },
      { name: 'Rojo', hex: '#D32F2F', image: '/assets/images/chalecos/CHALECO BRIGADISTA - GABARDINA/rojo.png' },
      { name: 'Verde', hex: '#4CAF50', image: '/assets/images/chalecos/CHALECO BRIGADISTA - GABARDINA/verde.png' },
      { name: 'Azul Rey', hex: '#1976D2', image: '/assets/images/chalecos/CHALECO BRIGADISTA - GABARDINA/azul rey.png' },
      { name: 'Naranja', hex: '#FF6B00', image: '/assets/images/chalecos/CHALECO BRIGADISTA - GABARDINA/naranja.png' },
      { name: 'Gris Oxford', hex: '#4B5563', image: '/assets/images/chalecos/CHALECO BRIGADISTA - GABARDINA/gris oxford.png' },
      { name: 'Marino', hex: '#1C2938', image: '/assets/images/chalecos/CHALECO BRIGADISTA - GABARDINA/marino.png' },
      { name: 'Negro', hex: '#1B1F24', image: '/assets/images/chalecos/CHALECO BRIGADISTA - GABARDINA/negro.png' },
      { name: 'Rosa', hex: '#FFC0CB', image: '/assets/images/chalecos/CHALECO BRIGADISTA - GABARDINA/rosa.png' },
      { name: 'Verde Bandera', hex: '#2E7D32', image: '/assets/images/chalecos/CHALECO BRIGADISTA - GABARDINA/verde bandera.png' },
      { name: 'Vino', hex: '#800020', image: '/assets/images/chalecos/CHALECO BRIGADISTA - GABARDINA/vino.png' }
    ]
  },
  {
    id: 'isa',
    name: 'Chaleco ISA',
    tag: 'Transpirable',
    image: '/assets/images/chalecos/MODELO ISA/ISA.png',
    description: 'Chaleco de seguridad reflejante, ideal para construcción y personal técnico. Cuenta con 6 bandas reflejantes visibles hasta 300m, múltiples bolsillos funcionales y malla transpirable.',
    whatsappText: 'Hola, me gustaría cotizar el Chaleco ISA',
    colors: [
      { name: 'Negro', hex: '#1B1F24', image: '/assets/images/chalecos/MODELO ISA/NEGRO.png' },
      { name: 'Negro / Amarillo Neón', hex: '#1B1F24', secondaryHex: '#E8FF00', image: '/assets/images/chalecos/MODELO ISA/NEGRO AMARILLO NEON.png' },
      { name: 'Naranja / Azul Marino', hex: '#FF6B00', secondaryHex: '#1C2938', image: '/assets/images/chalecos/MODELO ISA/NARANJA AZUL MARINO.png' },
      { name: 'Azul Rey / Marino', hex: '#1976D2', secondaryHex: '#1C2938', image: '/assets/images/chalecos/MODELO ISA/AZUL REY MARINO.png' },
      { name: 'Verde Neón / Negro', hex: '#AEEA00', secondaryHex: '#1B1F24', image: '/assets/images/chalecos/MODELO ISA/VERDE NEON NEGRO.png' },
      { name: 'Gris Perla / Vino', hex: '#B0BEC5', secondaryHex: '#800020', image: '/assets/images/chalecos/MODELO ISA/GRIS PERLA VINO.png' },
      { name: 'Negro / Caqui', hex: '#1B1F24', secondaryHex: '#F0E68C', image: '/assets/images/chalecos/MODELO ISA/NEGRO CAQUI.png' },
      { name: 'Negro / Naranja', hex: '#1B1F24', secondaryHex: '#FF6B00', image: '/assets/images/chalecos/MODELO ISA/NEGRO NARANJA.png' },
      { name: 'Negro / Verde Bandera', hex: '#1B1F24', secondaryHex: '#2E7D32', image: '/assets/images/chalecos/MODELO ISA/NEGRO VERDE BANDERA.png' }
    ]
  },
  {
    id: 'isa-max',
    name: 'Chaleco ISA MAX',
    tag: 'Premium',
    image: '/assets/images/chalecos/MODELO ISA MAX/ISA MAX.png',
    description: 'Chaleco de seguridad reflejante premium con diseño reforzado. Ideal para entornos exigentes, ofrece alta visibilidad, durabilidad y confort con múltiples bolsillos organizadores.',
    whatsappText: 'Hola, me gustaría cotizar el Chaleco ISA MAX',
    colors: [
      { name: 'Amarillo Neón / Negro', hex: '#E8FF00', secondaryHex: '#1B1F24', image: '/assets/images/chalecos/MODELO ISA MAX/amararillo neon negro.png' },
      { name: 'Gris Perla / Negro', hex: '#B0BEC5', secondaryHex: '#1B1F24', image: '/assets/images/chalecos/MODELO ISA MAX/gris perla negro.png' },
      { name: 'Negro / Naranja', hex: '#1B1F24', secondaryHex: '#FF6B00', image: '/assets/images/chalecos/MODELO ISA MAX/negro naranja.png' },
      { name: 'Negro / Vino', hex: '#1B1F24', secondaryHex: '#800020', image: '/assets/images/chalecos/MODELO ISA MAX/negro vino.png' },
      { name: 'Vino', hex: '#800020', image: '/assets/images/chalecos/MODELO ISA MAX/vino.png' }
    ]
  },
  {
    id: 'nuevo-modelo',
    name: 'Nuevo Modelo',
    tag: 'Próximamente',
    image: '/assets/images/productos/safety_vest.png',
    description: 'Estamos diseñando la próxima generación de chalecos de alta seguridad. Nuevas características, mejor ergonomía y materiales innovadores.',
    whatsappText: '',
    colors: [],
    comingSoon: true
  }
];

export default function Productos() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0); // Reset index when opening
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  // Auto-play slider
  useEffect(() => {
    if (!selectedProduct) return;
    
    const images = selectedProduct.colors.map((c: any) => c.image || selectedProduct.image);
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedProduct]);

  return (
    <div className="bg-[#FFFFFF] text-[#1B1F24] min-h-screen selection:bg-[#0057FF]/10 selection:text-[#0057FF]">
      {/* Hero Section */}
      <section className="relative w-full pt-[160px] pb-[100px] md:pt-[200px] md:pb-[140px] px-6 md:px-12 bg-[#1B1F24] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90 filter grayscale-[0.2] scale-105"
          style={{ backgroundImage: "url('/assets/images/productos/hero_bg.png')" }}
        ></div>
        
        {/* Cinematic Dark Overlay & Bottom Fade (Igual que en Inicio) */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent z-10"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent z-10"></div>
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-b from-[#4D8CFF]/20 to-transparent rounded-full blur-[100px] pointer-events-none z-10"></div>

        <div className="relative z-20 max-w-4xl mx-auto text-center fade-in-up">
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium text-[11px] px-5 py-2 rounded-full mb-8 uppercase tracking-[0.15em] shadow-lg">
            <span className="w-2 h-2 bg-[#4D8CFF] rounded-full shadow-[0_0_10px_rgba(77,140,255,1)]"></span>
            Catálogo Industrial
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-[1.05] tracking-[-0.03em] drop-shadow-2xl">
            Equipamiento de <br className="hidden md:block"/>
            <span className="text-[#4D8CFF]">alto rendimiento.</span>
          </h1>
          <p className="text-white max-w-2xl mx-auto text-lg md:text-2xl font-normal leading-relaxed tracking-tight drop-shadow-lg opacity-90">
            Nuestra línea de productos está diseñada bajo estrictos estándares industriales para garantizar durabilidad, seguridad y presentación profesional en cualquier entorno operativo.
          </p>
        </div>
      </section>

      {/* Nuestros Chalecos Reflejantes */}
      <section className="py-[60px] md:py-[80px] px-6 md:px-12 max-w-7xl mx-auto bg-white">
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto fade-in-up">
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
          {productsData.map((product) => (
            <div key={product.id} className={`bg-white border border-[#EAECEF] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col ${product.comingSoon ? 'cursor-not-allowed' : 'hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group'}`}>
              <div className={`relative h-[320px] overflow-hidden flex items-center justify-center p-8 ${product.comingSoon ? 'bg-[#F5F7FA]' : 'bg-[#F5F7FA] group-hover:bg-white transition-colors duration-500'}`}>
                <div className="absolute top-6 left-6 bg-white border border-[#EAECEF] px-3 py-1.5 rounded-full font-medium text-[10px] text-[#1B1F24] uppercase tracking-widest shadow-sm z-20">
                  {product.tag}
                </div>
                <img 
                  alt={product.name}
                  className={`max-h-full max-w-full object-contain z-10 ${product.comingSoon ? 'filter grayscale-[0.8] opacity-60' : 'group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]'}`} 
                  src={product.image}
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow bg-white border-t border-[#EAECEF]">
                <h3 className={`font-display font-semibold text-2xl text-[#1B1F24] mb-4 tracking-tight ${product.comingSoon ? 'opacity-60' : ''}`}>{product.name}</h3>
                <p className={`text-[#4b5563] flex-grow mb-8 text-base font-light leading-relaxed ${product.comingSoon ? 'opacity-60' : ''}`}>
                  {product.description}
                </p>
                {product.comingSoon ? (
                  <div className="inline-flex justify-center items-center gap-2 bg-[#F5F7FA] text-[#9ca3af] border border-[#EAECEF] font-semibold text-[11px] px-6 py-3.5 rounded-full uppercase tracking-widest w-full cursor-not-allowed">
                    Próximamente
                  </div>
                ) : (
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="inline-flex justify-center items-center gap-2 bg-[#F5F7FA] text-[#1B1F24] border border-[#EAECEF] font-medium text-sm px-6 py-3.5 rounded-full hover:bg-[#1B1F24] hover:text-white transition-all duration-300 w-full"
                  >
                    Ver colores y detalles
                    <span className="material-symbols-outlined text-[18px]">palette</span>
                  </button>
                )}
              </div>
            </div>
          ))}
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
            <div className="relative block w-full h-[400px] md:col-span-8 bg-white border border-[#EAECEF] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] cursor-not-allowed">
              <div className="absolute inset-0 bg-[#F5F7FA] z-0 p-12 flex items-center justify-center">
                <img alt="Camisas Industriales" className="max-w-full max-h-full object-contain filter grayscale-[0.8] opacity-60 z-10" src="/assets/images/productos/work_shirt.png"/>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-[#EAECEF] p-8 z-20 flex justify-between items-center">
                <div>
                  <h3 className="font-display font-semibold text-[#1B1F24] text-2xl tracking-tight mb-1 text-opacity-60">Camisas Industriales</h3>
                  <p className="text-[#4b5563] text-sm font-light text-opacity-60">Resistencia y transpirabilidad superior.</p>
                </div>
                <div className="px-4 py-2 rounded-full bg-[#F5F7FA] border border-[#EAECEF] flex items-center justify-center">
                  <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-widest">Próximamente</span>
                </div>
              </div>
            </div>

            {/* Overoles */}
            <div className="relative block w-full h-[400px] md:col-span-4 bg-white border border-[#EAECEF] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] cursor-not-allowed">
              <div className="absolute inset-0 bg-[#F5F7FA] z-0 p-10 flex items-center justify-center">
                <img alt="Overoles Industriales" className="max-w-full max-h-full object-contain filter grayscale-[0.8] opacity-60 z-10" src="/assets/images/productos/coveralls.png"/>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-[#EAECEF] p-8 z-20 flex justify-between items-center">
                <div>
                  <h3 className="font-display font-semibold text-[#1B1F24] text-2xl tracking-tight mb-1 text-opacity-60">Overoles</h3>
                  <p className="text-[#4b5563] text-sm font-light text-opacity-60">Protección integral.</p>
                </div>
                <div className="px-4 py-2 rounded-full bg-[#F5F7FA] border border-[#EAECEF] flex items-center justify-center">
                  <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-widest">Próximamente</span>
                </div>
              </div>
            </div>

            {/* Pantalones Industriales */}
            <div className="relative block w-full h-[400px] md:col-span-12 bg-white border border-[#EAECEF] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] cursor-not-allowed">
              <div className="absolute inset-0 bg-[#F5F7FA] z-0 p-12 flex items-center justify-center">
                <img alt="Pantalones Industriales" className="max-w-full max-h-full object-contain filter grayscale-[0.8] opacity-60 z-10" src="/assets/images/productos/work_pants.png"/>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-[#EAECEF] p-8 z-20 flex justify-between items-center">
                <div>
                  <h3 className="font-display font-semibold text-[#1B1F24] text-2xl tracking-tight mb-1 text-opacity-60">Pantalones Industriales</h3>
                  <p className="text-[#4b5563] text-sm font-light text-opacity-60">Ergonomía activa y refuerzos estratégicos para el uso diario.</p>
                </div>
                <div className="px-4 py-2 rounded-full bg-[#F5F7FA] border border-[#EAECEF] flex items-center justify-center">
                  <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-widest">Próximamente</span>
                </div>
              </div>
            </div>
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

      {/* MODAL GALERÍA DE COLORES */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProduct(null)}
        >
          {/* Overlay Background */}
          <div className="absolute inset-0 bg-[#1B1F24]/40 backdrop-blur-sm transition-opacity"></div>
          
          {/* Modal Container */}
          <div 
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#1B1F24] hover:bg-[#F5F7FA] transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Product Image Area Slider */}
            <div className="w-full md:w-1/2 bg-[#F5F7FA] flex items-center justify-center relative min-h-[300px] md:min-h-full overflow-hidden group">
              {/* Images */}
              {(() => {
                const images = selectedProduct.colors.map((c: any) => c.image || selectedProduct.image);
                return images.map((img: string, idx: number) => (
                  <div 
                    key={idx}
                    className={`absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-1000 ease-in-out ${currentImageIndex === idx ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <img 
                      src={img} 
                      alt={`${selectedProduct.name} vista ${idx + 1}`}
                      className="max-h-[300px] md:max-h-[400px] object-contain drop-shadow-xl"
                    />
                  </div>
                ));
              })()}
              
              {/* Pagination Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {(() => {
                  const images = selectedProduct.colors.map((c: any) => c.image || selectedProduct.image);
                  return images.map((_, idx: number) => (
                    <button 
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                      className={`h-2 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'bg-[#1B1F24] w-6' : 'bg-[#1B1F24]/20 w-2'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ));
                })()}
              </div>
              
              {/* Arrows */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  const images = selectedProduct.colors.map((c: any) => c.image || selectedProduct.image);
                  setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1B1F24] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm hover:shadow-md"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  const images = selectedProduct.colors.map((c: any) => c.image || selectedProduct.image);
                  setCurrentImageIndex((prev) => (prev + 1) % images.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1B1F24] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm hover:shadow-md"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>

            {/* Product Details & Colors */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
              <span className="text-[10px] font-medium text-[#0057FF] uppercase tracking-widest mb-2 block">
                {selectedProduct.tag}
              </span>
              <h2 className="text-3xl font-display font-semibold text-[#1B1F24] mb-4">
                {selectedProduct.name}
              </h2>
              <p className="text-[#4b5563] text-sm font-light leading-relaxed mb-8">
                {selectedProduct.description}
              </p>

              {/* Colors Section */}
              <div className="mb-10">
                <h4 className="text-sm font-medium text-[#1B1F24] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">palette</span>
                  Colores Disponibles
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {selectedProduct.colors.map((color: any, index: number) => (
                    <button 
                      key={index} 
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex items-center gap-3 p-3 rounded-2xl border transition-all text-left ${currentImageIndex === index ? 'border-[#0057FF] bg-[#0057FF]/5 shadow-sm' : 'border-[#EAECEF] bg-[#F5F7FA]/50 hover:bg-[#F5F7FA]'}`}
                    >
                      <div 
                        className="w-8 h-8 rounded-full border border-black/10 shadow-sm relative overflow-hidden flex-shrink-0"
                        style={{ backgroundColor: color.hex }}
                      >
                        {color.secondaryHex && (
                          <div 
                            className="absolute inset-y-0 right-0 w-1/2" 
                            style={{ backgroundColor: color.secondaryHex }}
                          ></div>
                        )}
                      </div>
                      <span className={`text-sm font-medium leading-tight ${currentImageIndex === index ? 'text-[#0057FF]' : 'text-[#4b5563]'}`}>
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-auto pt-6 border-t border-[#EAECEF]">
                <a 
                  href={`https://wa.me/525524398773?text=${encodeURIComponent(selectedProduct.whatsappText)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex justify-center items-center gap-2 bg-[#1B1F24] text-white font-medium text-sm px-6 py-4 rounded-full hover:bg-[#0057FF] transition-all duration-300 shadow-[0_8px_20px_rgba(27,31,36,0.15)]"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  Cotizar este modelo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
