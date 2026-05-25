"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Base products data
const productsData = [
  {
    id: 'roy',
    name: 'Chaleco ROY',
    tag: 'Uso General',
    image: '/assets/images/productos/safety_vest.png',
    description: 'Chaleco de gabardina ligera y resistente, cómodo para uso prolongado. Cuenta con 6 cintas reflejantes, múltiples bolsillos funcionales, costuras reforzadas en puntos estratégicos y cierre reforzado para mayor practicidad.',
    whatsappText: 'Hola, me gustaría cotizar el Chaleco ROY',
    colors: [
      { name: 'Naranja Seguridad', hex: '#FF6B00' },
      { name: 'Amarillo Alta Visibilidad', hex: '#E8FF00' },
      { name: 'Azul Marino Corporativo', hex: '#1C2938' },
      { name: 'Rojo Industrial', hex: '#D32F2F' }
    ]
  },
  {
    id: 'nova',
    name: 'Chaleco NOVA',
    tag: 'Ergonómico',
    image: '/assets/images/productos/safety_vest.png',
    description: 'Chaleco reflejante de gabardina ligera y resistente, cómodo y durable para uso laboral. Cuenta con 8 bandas reflejantes, 2 bolsillos frontales, cierre reforzado y cubre cuello para mayor seguridad y comodidad.',
    whatsappText: 'Hola, me gustaría cotizar el Chaleco NOVA',
    colors: [
      { name: 'Naranja Seguridad', hex: '#FF6B00' },
      { name: 'Amarillo Alta Visibilidad', hex: '#E8FF00' },
      { name: 'Gris Oxford', hex: '#4B5563' }
    ]
  },
  {
    id: 'brigadista',
    name: 'Chaleco Brigadista',
    tag: 'Multi-Bolsillos',
    image: '/assets/images/productos/safety_vest.png',
    description: 'Chaleco de gabardina ligera y cómoda con 5 cintas reflejantes de alta visibilidad. Incluye múltiples bolsillos funcionales, porta radio, porta lámpara, bolsa trasera para documentos y ajuste lateral.',
    whatsappText: 'Hola, me gustaría cotizar el Chaleco Brigadista',
    colors: [
      { name: 'Rojo Emergencia', hex: '#D32F2F' },
      { name: 'Verde Médico', hex: '#2E7D32' },
      { name: 'Azul Rescate', hex: '#1976D2' },
      { name: 'Naranja Evacuación', hex: '#FF6B00' },
      { name: 'Amarillo Tránsito', hex: '#E8FF00' },
      { name: 'Negro Seguridad', hex: '#1B1F24' }
    ]
  },
  {
    id: 'isa',
    name: 'Chaleco ISA',
    tag: 'Transpirable',
    image: '/assets/images/productos/safety_vest.png',
    description: 'Chaleco de seguridad reflejante, ideal para construcción y personal técnico. Cuenta con 6 bandas reflejantes visibles hasta 300m, múltiples bolsillos funcionales y malla transpirable.',
    whatsappText: 'Hola, me gustaría cotizar el Chaleco ISA',
    colors: [
      { name: 'Naranja / Malla Negra', hex: '#FF6B00', secondaryHex: '#1B1F24' },
      { name: 'Amarillo / Malla Negra', hex: '#E8FF00', secondaryHex: '#1B1F24' },
      { name: 'Verde Limón / Malla', hex: '#AEEA00', secondaryHex: '#AEEA00' }
    ]
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
    
    // Default to 3 same images for demo if 'images' array doesn't exist
    const images = selectedProduct.images || [selectedProduct.image, selectedProduct.image, selectedProduct.image];
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedProduct]);

  return (
    <div className="bg-[#FFFFFF] text-[#1B1F24] min-h-screen selection:bg-[#0057FF]/10 selection:text-[#0057FF]">
      {/* Hero Section */}
      <section className="relative w-full pt-[160px] pb-[100px] md:pt-[200px] md:pb-[140px] px-6 md:px-12 bg-[#F5F7FA] overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#FFFFFF] to-[#F5F7FA] z-0"></div>
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
          {productsData.map((product) => (
            <div key={product.id} className="bg-white border border-[#EAECEF] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group flex flex-col">
              <div className="relative h-[320px] bg-[#F5F7FA] overflow-hidden flex items-center justify-center p-8 group-hover:bg-white transition-colors duration-500">
                <div className="absolute top-6 left-6 bg-white border border-[#EAECEF] px-3 py-1.5 rounded-full font-medium text-[10px] text-[#1B1F24] uppercase tracking-widest shadow-sm z-20">
                  {product.tag}
                </div>
                <img 
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10" 
                  src={product.image}
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow bg-white border-t border-[#EAECEF]">
                <h3 className="font-display font-semibold text-2xl text-[#1B1F24] mb-4 tracking-tight">{product.name}</h3>
                <p className="text-[#4b5563] flex-grow mb-8 text-base font-light leading-relaxed">
                  {product.description}
                </p>
                <button 
                  onClick={() => setSelectedProduct(product)}
                  className="inline-flex justify-center items-center gap-2 bg-[#F5F7FA] text-[#1B1F24] border border-[#EAECEF] font-medium text-sm px-6 py-3.5 rounded-full hover:bg-[#1B1F24] hover:text-white transition-all duration-300 w-full"
                >
                  Ver colores y detalles
                  <span className="material-symbols-outlined text-[18px]">palette</span>
                </button>
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
            <a className="group relative block w-full h-[400px] md:col-span-8 bg-white border border-[#EAECEF] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500" href="https://wa.me/525524398773?text=Hola,%20me%20gustaría%20cotizar%20camisas%20industriales" target="_blank" rel="noopener noreferrer">
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
            <a className="group relative block w-full h-[400px] md:col-span-4 bg-white border border-[#EAECEF] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500" href="https://wa.me/525524398773?text=Hola,%20me%20gustaría%20cotizar%20overoles%20industriales" target="_blank" rel="noopener noreferrer">
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
            <a className="group relative block w-full h-[400px] md:col-span-12 bg-white border border-[#EAECEF] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500" href="https://wa.me/525524398773?text=Hola,%20me%20gustaría%20cotizar%20pantalones%20industriales" target="_blank" rel="noopener noreferrer">
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
                const images = selectedProduct.images || [selectedProduct.image, selectedProduct.image, selectedProduct.image];
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
                  const images = selectedProduct.images || [selectedProduct.image, selectedProduct.image, selectedProduct.image];
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
                  const images = selectedProduct.images || [selectedProduct.image, selectedProduct.image, selectedProduct.image];
                  setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1B1F24] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm hover:shadow-md"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  const images = selectedProduct.images || [selectedProduct.image, selectedProduct.image, selectedProduct.image];
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
                    <div key={index} className="flex items-center gap-3 p-3 rounded-2xl border border-[#EAECEF] bg-[#F5F7FA]/50 hover:bg-[#F5F7FA] transition-colors">
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
                      <span className="text-sm text-[#4b5563] font-medium leading-tight">
                        {color.name}
                      </span>
                    </div>
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
