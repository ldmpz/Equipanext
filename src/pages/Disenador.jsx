import React, { useState, useEffect } from 'react';

export default function Disenador() {
  const [garment, setGarment] = useState('camisa'); // camisa, chaleco, pantalon
  const [colorName, setColorName] = useState('Azul Navy');
  const [colorHex, setColorHex] = useState('#1B2E3C');
  const [colorDarkHex, setColorDarkHex] = useState('#12202B');
  const [reflectors, setReflectors] = useState(false);
  const [stitching, setStitching] = useState(false);
  const [logoType, setLogoType] = useState('Bordado');
  const [logoLocation, setLogoLocation] = useState('Pecho Izquierdo');
  const [quantity, setQuantity] = useState(100);

  // Pricing config
  const basePrices = {
    camisa: { bronze: 380, silver: 340, gold: 310 },
    chaleco: { bronze: 240, silver: 210, gold: 185 },
    pantalon: { bronze: 410, silver: 375, gold: 345 }
  };

  const colorsList = [
    { hex: '#1B2E3C', name: 'Azul Navy', dark: '#12202B' },
    { hex: '#5A6B7C', name: 'Gris Acero', dark: '#3E4A56' },
    { hex: '#1D3F28', name: 'Verde Foresta', dark: '#102517' },
    { hex: '#FF6F00', name: 'Naranja Vial', dark: '#C85700' },
    { hex: '#FACC15', name: 'Amarillo Vial', dark: '#CA8A04' },
    { hex: '#2D3139', name: 'Negro Carbón', dark: '#1F2228' },
    { hex: '#E2E8F0', name: 'Blanco Industrial', dark: '#94A3B8' }
  ];

  // Pricing calculations
  let tierName = 'TIER BRONCE';
  let tierClass = 'bg-[#CD7F32] text-white';
  let baseKey = 'bronze';

  if (quantity >= 50 && quantity < 150) {
    tierName = 'TIER BRONCE';
    tierClass = 'bg-[#CD7F32] text-white';
    baseKey = 'bronze';
  } else if (quantity >= 150 && quantity < 400) {
    tierName = 'TIER PLATA';
    tierClass = 'bg-[#C0C0C0] text-gray-800';
    baseKey = 'silver';
  } else if (quantity >= 400) {
    tierName = 'TIER ORO CORPORATIVO';
    tierClass = 'bg-[#FFD700] text-gray-900 font-bold';
    baseKey = 'gold';
  }

  let unitPrice = basePrices[garment][baseKey];
  if (reflectors) unitPrice += 35;
  if (stitching) unitPrice += 10;
  if (logoLocation !== 'Ninguno') {
    if (logoType === 'Bordado') {
      unitPrice += (logoLocation === 'Ambos Pechos' ? 40 : 25);
    } else {
      unitPrice += (logoLocation === 'Ambos Pechos' ? 25 : 15);
    }
  }

  const totalCost = unitPrice * quantity;

  const garmentNameMap = {
    camisa: 'Camisa Industrial',
    chaleco: 'Chaleco de Seguridad',
    pantalon: 'Pantalón Técnico'
  };

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const specString = `Prenda: ${capitalize(garment)} • Color: ${colorName} • Reflectores: ${reflectors ? 'Sí' : 'No'} • Costura: ${stitching ? 'Contraste' : 'Normal'} • Logo: ${logoLocation === 'Ninguno' ? 'Sin Logo' : `${logoType} (${logoLocation})`}`;

  const getWhatsAppLink = () => {
    const message = `Hola EQUIPANEXT B2B,\n\nHe utilizado su *Configurador Técnico Online* para diseñar y cotizar una propuesta corporativa con las siguientes especificaciones:\n\n` +
      `• *Prenda:* ${garmentNameMap[garment]}\n` +
      `• *Color Base:* ${colorName} (${colorHex})\n` +
      `• *Cintas Reflectantes:* ${reflectors ? 'Sí (Alta Visibilidad)' : 'No'}\n` +
      `• *Costuras de Contraste:* ${stitching ? 'Sí' : 'No'}\n` +
      `• *Logotipo e Insignia:* ${logoLocation === 'Ninguno' ? 'No requiere' : `${logoType} en ${logoLocation}`}\n\n` +
      `• *Volumen Solicitado:* ${quantity} unidades\n` +
      `• *Rango de Volumen:* ${tierName}\n` +
      `• *Precio Estimado Unitario:* $${unitPrice.toLocaleString('es-MX')} MXN\n` +
      `• *Total Estimado Neto:* $${totalCost.toLocaleString('es-MX')} MXN\n\n` +
      `Me gustaría recibir una cotización formal detallada, muestras físicas de las telas y conocer sus tiempos de entrega aproximados.`;
    return `https://wa.me/521234567890?text=${encodeURIComponent(message)}`;
  };

  return (
    <main>
      {/* Hero Header */}
      <section className="relative pt-[140px] md:pt-[180px] pb-6 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-primary-container px-3 py-1 rounded border border-outline-variant mb-4">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <span className="text-mono-label font-mono-label text-on-primary-container">LABORATORIO DE DISEÑO B2B</span>
        </div>
        <h1 className="text-headline-lg-mobile md:text-headline-lg font-display text-on-surface mb-3">
          Configurador Técnico de Uniformes
        </h1>
        <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl mx-auto">
          Diseñe y personalice en tiempo real la indumentaria de su fuerza laboral. Seleccione prendas, asigne colores corporativos, incorpore cintas de alta visibilidad y estime su cotización corporativa con nuestro cotizador automatizado.
        </p>
      </section>

      {/* Interactive Customizer Section */}
      <section className="pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          
          {/* Left: Interactive Canvas */}
          <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden flex flex-col designer-canvas relative min-h-[550px]">
            {/* Active Garment Name Badge */}
            <div className="absolute top-4 left-4 z-10 bg-surface-container-high/80 backdrop-blur-md px-4 py-2 rounded-lg border border-outline-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">settings_accessibility</span>
              <span className="text-mono-label font-mono-label font-bold text-on-surface uppercase">
                {garmentNameMap[garment]}
              </span>
            </div>

            {/* Color Preview Badge */}
            <div className="absolute top-4 right-4 z-10 bg-surface-container-high/80 backdrop-blur-md px-4 py-2 rounded-lg border border-outline-variant flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full border border-outline-variant transition-colors" style={{ backgroundColor: colorHex }}></span>
              <span className="text-mono-label font-mono-label font-bold text-on-surface uppercase">
                {colorName}
              </span>
            </div>

            {/* The Garment SVG Canvas Wrapper */}
            <div className="flex-grow flex items-center justify-center p-8 min-h-[420px] transition-all duration-300">
              
              {/* CAMISA INDUSTRIAL SVG */}
              {garment === 'camisa' && (
                <svg className="w-full max-w-[360px] h-auto drop-shadow-md transition-all duration-300" viewBox="0 0 300 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="150" cy="330" rx="90" ry="12" fill="#202530" fillOpacity="0.15" />
                  
                  {/* Left Sleeve */}
                  <path d="M90 70 L50 110 L25 150 L55 170 L75 140 L90 120 Z" fill={colorHex} stroke="#12202B" strokeWidth="2" />
                  {/* Right Sleeve */}
                  <path d="M210 70 L250 110 L275 150 L245 170 L225 140 L210 120 Z" fill={colorHex} stroke="#12202B" strokeWidth="2" />
                  
                  {/* Sleeve Cuff details */}
                  <path d="M25 150 L55 170" stroke="#12202B" strokeWidth="3" />
                  <path d="M50 110 L75 140" stroke="#12202B" strokeDasharray="2,3" strokeOpacity="0.4" />
                  <path d="M250 110 L225 140" stroke="#12202B" strokeDasharray="2,3" strokeOpacity="0.4" />
                  
                  {/* Body */}
                  <path d="M90 70 L210 70 L220 120 L225 310 L75 310 L80 120 Z" fill={colorHex} stroke="#12202B" strokeWidth="2" />
                  
                  {/* Shirt Placket */}
                  <path d="M145 70 L145 310 L155 310 L155 70 Z" fill="#12202B" fillOpacity="0.15" stroke="#12202B" strokeWidth="1.5" />
                  
                  {/* Buttons */}
                  <circle cx="150" cy="115" r="3.5" fill="#E8EAED" stroke="#12202B" strokeWidth="1" />
                  <circle cx="150" cy="165" r="3.5" fill="#E8EAED" stroke="#12202B" strokeWidth="1" />
                  <circle cx="150" cy="215" r="3.5" fill="#E8EAED" stroke="#12202B" strokeWidth="1" />
                  <circle cx="150" cy="265" r="3.5" fill="#E8EAED" stroke="#12202B" strokeWidth="1" />

                  {/* Left Pocket */}
                  <path d="M100 130 L130 130 L130 170 L100 170 Z" fill={colorHex} stroke="#12202B" strokeWidth="1.5" />
                  <path d="M98 123 L132 123 L130 132 L100 132 Z" fill="#12202B" fillOpacity="0.25" stroke="#12202B" strokeWidth="1.5" />
                  <circle cx="115" cy="127" r="2" fill="#E8EAED" />

                  {/* Right Pocket */}
                  <path d="M170 130 L200 130 L200 170 L170 170 Z" fill={colorHex} stroke="#12202B" strokeWidth="1.5" />
                  <path d="M168 123 L202 123 L200 132 L170 132 Z" fill="#12202B" fillOpacity="0.25" stroke="#12202B" strokeWidth="1.5" />
                  <circle cx="185" cy="127" r="2" fill="#E8EAED" />

                  {/* Collar Left */}
                  <path d="M95 70 L150 92 L145 62 Z" fill="#12202B" fillOpacity="0.3" stroke="#12202B" strokeWidth="1.5" />
                  {/* Collar Right */}
                  <path d="M205 70 L150 92 L155 62 Z" fill="#12202B" fillOpacity="0.3" stroke="#12202B" strokeWidth="1.5" />
                  
                  {/* Dynamic Stitching Lines */}
                  {stitching && (
                    <>
                      <path d="M85 302 L215 302" stroke="#FFD700" strokeWidth="1" strokeDasharray="3,2" />
                      <path d="M102 168 L128 168" stroke="#FFD700" strokeWidth="1" strokeDasharray="3,2" />
                      <path d="M172 168 L198 168" stroke="#FFD700" strokeWidth="1" strokeDasharray="3,2" />
                    </>
                  )}
                  
                  {/* Reflector Strips */}
                  {reflectors && (
                    <g>
                      {/* Left Sleeve Reflector */}
                      <path d="M40 120 L48 135 M43 117 L51 132" stroke="#E2E8F0" strokeWidth="5" strokeLinecap="round" />
                      <path d="M40 120 L48 135 M43 117 L51 132" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeDasharray="4,1" />
                      {/* Right Sleeve Reflector */}
                      <path d="M260 120 L252 135 M257 117 L249 132" stroke="#E2E8F0" strokeWidth="5" strokeLinecap="round" />
                      <path d="M260 120 L252 135 M257 117 L249 132" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeDasharray="4,1" />
                      {/* Body Chest Reflectors */}
                      <rect x="82" y="195" width="136" height="8" fill="#E2E8F0" rx="1" />
                      <rect x="82" width="136" height="3" fill="#38BDF8" y="197.5" />
                    </g>
                  )}

                  {/* Logo Placeholder Indicators */}
                  {(logoLocation === 'Pecho Izquierdo' || logoLocation === 'Ambos Pechos') && (
                    <g className="opacity-90">
                      <rect x="108" y="142" width="14" height="10" fill="#0066FF" rx="1" />
                      <path d="M111 147 H119 M115 144 V150" stroke="#FFFFFF" strokeWidth="1" />
                    </g>
                  )}
                  {(logoLocation === 'Pecho Derecho' || logoLocation === 'Ambos Pechos') && (
                    <g className="opacity-90">
                      <rect x="178" y="142" width="14" height="10" fill="#0066FF" rx="1" />
                      <path d="M181 147 H189 M185 144 V150" stroke="#FFFFFF" strokeWidth="1" />
                    </g>
                  )}
                </svg>
              )}

              {/* CHALECO DE SEGURIDAD SVG */}
              {garment === 'chaleco' && (
                <svg className="w-full max-w-[360px] h-auto drop-shadow-md transition-all duration-300" viewBox="0 0 300 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="150" cy="330" rx="90" ry="12" fill="#202530" fillOpacity="0.15" />
                  
                  {/* Body of Vest */}
                  <path d="M90 60 L120 60 L140 100 L160 100 L180 60 L210 60 L230 110 L230 300 L70 300 L70 110 Z" fill={colorHex} stroke={colorDarkHex} strokeWidth="2" />
                  
                  {/* Arm Hole Cuts */}
                  <path d="M90 60 L70 110" stroke={colorDarkHex} strokeWidth="2" />
                  <path d="M210 60 L230 110" stroke={colorDarkHex} strokeWidth="2" />

                  {/* Zipper */}
                  <line x1="150" y1="100" x2="150" y2="300" stroke="#5A6B7C" strokeWidth="3" />
                  <path d="M147 95 L153 95 L150 105 Z" fill="#2F343A" />
                  
                  {/* Pockets */}
                  <path d="M85 230 H120 V270 H85 Z" fill="#202530" fillOpacity="0.08" stroke={colorDarkHex} strokeWidth="1.5" />
                  <path d="M180 230 H215 V270 H180 Z" fill="#202530" fillOpacity="0.08" stroke={colorDarkHex} strokeWidth="1.5" />

                  {/* Reflective Tapes */}
                  <g>
                    {/* Left Vertical Tape */}
                    <rect x="105" y="60" width="12" height="240" fill="#E2E8F0" />
                    <rect x="109" y="60" width="4" height="240" fill="#38BDF8" />
                    {/* Right Vertical Tape */}
                    <rect x="183" y="60" width="12" height="240" fill="#E2E8F0" />
                    <rect x="187" y="60" width="4" height="240" fill="#38BDF8" />
                    {/* Upper Horizontal Tape */}
                    <rect x="70" y="160" width="160" height="12" fill="#E2E8F0" />
                    <rect x="70" y="164" width="160" height="4" fill="#38BDF8" />
                    {/* Lower Horizontal Tape */}
                    <rect x="70" y="210" width="160" height="12" fill="#E2E8F0" />
                    <rect x="70" y="214" width="160" height="4" fill="#38BDF8" />
                  </g>

                  {/* Contrast Stitching Details */}
                  {stitching && (
                    <path d="M72 295 L228 295" stroke="#FFD700" strokeWidth="1" strokeDasharray="3,2" />
                  )}

                  {/* Logo Boxes */}
                  {(logoLocation === 'Pecho Izquierdo' || logoLocation === 'Ambos Pechos') && (
                    <g className="opacity-90">
                      <rect x="85" y="125" width="16" height="12" fill="#0066FF" rx="1" />
                      <path d="M88 131 H98 M93 128 V134" stroke="#FFFFFF" strokeWidth="1" />
                    </g>
                  )}
                  {(logoLocation === 'Pecho Derecho' || logoLocation === 'Ambos Pechos') && (
                    <g className="opacity-90">
                      <rect x="199" y="125" width="16" height="12" fill="#0066FF" rx="1" />
                      <path d="M202 131 H212 M207 128 V134" stroke="#FFFFFF" strokeWidth="1" />
                    </g>
                  )}
                </svg>
              )}

              {/* PANTALÓN TÉCNICO SVG */}
              {garment === 'pantalon' && (
                <svg className="w-full max-w-[360px] h-auto drop-shadow-md transition-all duration-300" viewBox="0 0 300 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="150" cy="335" rx="80" ry="10" fill="#202530" fillOpacity="0.15" />

                  {/* Waistband */}
                  <path d="M90 40 L210 40 L208 65 L92 65 Z" fill={colorHex} stroke="#12202B" strokeWidth="2" />
                  
                  {/* Belt loops */}
                  <rect x="100" y="38" width="6" height="29" fill="#12202B" rx="1" />
                  <rect x="147" y="38" width="6" height="29" fill="#12202B" rx="1" />
                  <rect x="194" y="38" width="6" height="29" fill="#12202B" rx="1" />

                  {/* Main Legs */}
                  <path d="M92 65 L150 85 L208 65 L218 310 L160 310 L150 120 L140 310 L82 310 Z" fill={colorHex} stroke="#12202B" strokeWidth="2" />
                  
                  {/* Fly Seam */}
                  <path d="M150 65 V110 C150 115 145 120 140 120" stroke="#12202B" strokeWidth="1.5" />

                  {/* Knee Patches */}
                  <path d="M85 170 H135 V220 H85 Z" fill="#12202B" fillOpacity="0.2" stroke="#12202B" strokeWidth="1" />
                  <path d="M165 170 H215 V220 H165 Z" fill="#12202B" fillOpacity="0.2" stroke="#12202B" strokeWidth="1" />

                  {/* Reflector Strips */}
                  {reflectors && (
                    <g>
                      {/* Left Leg Reflector */}
                      <rect x="83.5" y="260" width="55" height="12" fill="#E2E8F0" rx="1" />
                      <rect x="83.5" y="264" width="55" height="4" fill="#38BDF8" />
                      {/* Right Leg Reflector */}
                      <rect x="161.5" y="260" width="55" height="12" fill="#E2E8F0" rx="1" />
                      <rect x="161.5" y="264" width="55" height="4" fill="#38BDF8" />
                    </g>
                  )}

                  {/* Contrast Stitching Details */}
                  {stitching && (
                    <g>
                      <path d="M92 62 L208 62" stroke="#FFD700" strokeWidth="1" strokeDasharray="3,2" />
                      <path d="M83.5 220 H135 M165 220 H216.5" stroke="#FFD700" strokeWidth="1" strokeDasharray="3,2" />
                    </g>
                  )}

                  {/* Logo Box */}
                  {logoLocation !== 'Ninguno' && (
                    <g className="opacity-90">
                      <rect x="185" y="100" width="16" height="12" fill="#0066FF" rx="1" />
                      <path d="M188 106 H198 M193 103 V109" stroke="#FFFFFF" strokeWidth="1" />
                    </g>
                  )}
                </svg>
              )}

            </div>

            {/* Bottom: Feature Spec List */}
            <div className="bg-surface-container-low border-t border-outline-variant p-4 flex flex-wrap gap-4 items-center justify-between text-sm">
              <span className="text-on-surface-variant font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
                Materiales con Certificación de Protección Industrial
              </span>
              <span className="text-on-surface-variant font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">update</span>
                Listo para Bordado de Alta Densidad
              </span>
            </div>
          </div>

          {/* Right: Glassmorphic Control Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 1: Configuration Form */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm p-6 md:p-8 flex flex-col gap-6">
              
              {/* STEP 1: PRENDA SELECTOR */}
              <div>
                <span className="block text-mono-label font-mono-label text-primary uppercase mb-2 text-xs">Paso 1: Seleccione Prenda</span>
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    className={`flex flex-col items-center gap-2 p-3 bg-surface-container rounded-lg border text-center transition-all hover:bg-surface-container-high group active:scale-95 ${garment === 'camisa' ? 'border-primary bg-primary-container/20 text-primary' : 'border-outline-variant text-on-surface'}`}
                    onClick={() => setGarment('camisa')}
                  >
                    <span className={`material-symbols-outlined group-hover:scale-110 transition-transform ${garment === 'camisa' ? 'text-primary' : 'text-on-surface'}`}>apparel</span>
                    <span className="text-label-caps font-label-caps text-xs">Camisa</span>
                  </button>
                  <button 
                    className={`flex flex-col items-center gap-2 p-3 bg-surface-container rounded-lg border text-center transition-all hover:bg-surface-container-high group active:scale-95 ${garment === 'chaleco' ? 'border-primary bg-primary-container/20 text-primary' : 'border-outline-variant text-on-surface'}`}
                    onClick={() => setGarment('chaleco')}
                  >
                    <span className={`material-symbols-outlined group-hover:scale-110 transition-transform ${garment === 'chaleco' ? 'text-primary' : 'text-on-surface'}`}>safety_divider</span>
                    <span className="text-label-caps font-label-caps text-xs">Chaleco</span>
                  </button>
                  <button 
                    className={`flex flex-col items-center gap-2 p-3 bg-surface-container rounded-lg border text-center transition-all hover:bg-surface-container-high group active:scale-95 ${garment === 'pantalon' ? 'border-primary bg-primary-container/20 text-primary' : 'border-outline-variant text-on-surface'}`}
                    onClick={() => setGarment('pantalon')}
                  >
                    <span className={`material-symbols-outlined group-hover:scale-110 transition-transform ${garment === 'pantalon' ? 'text-primary' : 'text-on-surface'}`}>airline_seat_legroom_extra</span>
                    <span className="text-label-caps font-label-caps text-xs">Pantalón</span>
                  </button>
                </div>
              </div>

              {/* STEP 2: COLOR SELECTOR */}
              <div>
                <span className="block text-mono-label font-mono-label text-primary uppercase mb-2 text-xs">Paso 2: Color Corporativo</span>
                <div className="flex flex-wrap gap-2">
                  {colorsList.map((col) => {
                    const isSelected = colorHex === col.hex;
                    return (
                      <button 
                        key={col.hex}
                        className={`w-8 h-8 rounded-full border active:scale-95 transition-all shadow-sm flex items-center justify-center ${isSelected ? 'border-2 border-primary' : 'border-outline-variant'}`}
                        style={{ backgroundColor: col.hex }}
                        onClick={() => {
                          setColorHex(col.hex);
                          setColorName(col.name);
                          setColorDarkHex(col.dark);
                        }}
                        title={col.name}
                      >
                        {isSelected && (
                          <span className={`material-symbols-outlined text-[16px] font-bold ${col.hex === '#E2E8F0' ? 'text-on-background' : 'text-white'}`}>check</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* STEP 3: DETAILS AND SAFETY */}
              <div>
                <span className="block text-mono-label font-mono-label text-primary uppercase mb-2 text-xs">Paso 3: Detalles y Seguridad</span>
                <div className="flex flex-col gap-3">
                  {/* Reflective Tape Toggle */}
                  <label className="relative flex items-center justify-between p-3 bg-surface-container rounded-lg border border-outline-variant cursor-pointer hover:bg-surface-container-high transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">brightness_high</span>
                      <div>
                        <span className="block text-body-md font-medium text-on-surface">Cintas Reflectantes</span>
                        <span className="block text-xs text-on-surface-variant">Alta Visibilidad de 2 pulgadas</span>
                      </div>
                    </div>
                    <input 
                      type="checkbox" 
                      checked={reflectors} 
                      onChange={(e) => setReflectors(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="relative w-9 h-5 bg-outline rounded-full peer peer-focus:ring-2 peer-focus:ring-primary-container after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full peer-checked:bg-primary"></div>
                  </label>

                  {/* Contrast Stitching Contrast Toggle */}
                  <label className="relative flex items-center justify-between p-3 bg-surface-container rounded-lg border border-outline-variant cursor-pointer hover:bg-surface-container-high transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">schema</span>
                      <div>
                        <span className="block text-body-md font-medium text-on-surface">Costura de Contraste</span>
                        <span className="block text-xs text-on-surface-variant">Hilo de alta tenacidad en color amarillo</span>
                      </div>
                    </div>
                    <input 
                      type="checkbox" 
                      checked={stitching} 
                      onChange={(e) => setStitching(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="relative w-9 h-5 bg-outline rounded-full peer peer-focus:ring-2 peer-focus:ring-primary-container after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>

              {/* STEP 4: LOGO & EMBROIDERY PLACEMENT */}
              <div>
                <span className="block text-mono-label font-mono-label text-primary uppercase mb-2 text-xs">Paso 4: Logotipo e Insignias</span>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <label className="flex items-center gap-2 p-2.5 bg-surface-container rounded-lg border border-outline-variant cursor-pointer hover:bg-surface-container-high">
                    <input 
                      type="radio" 
                      name="logo-type" 
                      value="Bordado" 
                      checked={logoType === 'Bordado'} 
                      onChange={() => setLogoType('Bordado')}
                      className="accent-primary" 
                    />
                    <span className="text-body-md text-on-surface">Bordado Industrial</span>
                  </label>
                  <label className="flex items-center gap-2 p-2.5 bg-surface-container rounded-lg border border-outline-variant cursor-pointer hover:bg-surface-container-high">
                    <input 
                      type="radio" 
                      name="logo-type" 
                      value="Serigrafía" 
                      checked={logoType === 'Serigrafía'} 
                      onChange={() => setLogoType('Serigrafía')}
                      className="accent-primary" 
                    />
                    <span className="text-body-md text-on-surface">Serigrafía</span>
                  </label>
                </div>

                {/* Logo Location Selector */}
                <div>
                  <span className="block text-xs text-on-surface-variant mb-1">Ubicación del Logo:</span>
                  <select 
                    id="logo-location" 
                    value={logoLocation}
                    onChange={(e) => setLogoLocation(e.target.value)}
                    className="w-full bg-surface-container border border-outline-variant p-2.5 rounded-lg text-body-md text-on-surface focus:outline-none focus:border-primary"
                  >
                    <option value="Ninguno">Sin logotipo / Solo liso</option>
                    <option value="Pecho Izquierdo">Pecho Izquierdo (Estándar)</option>
                    <option value="Pecho Derecho">Pecho Derecho</option>
                    <option value="Ambos Pechos">Ambos Costados del Pecho</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Card 2: Smart Cotizador & Sales Tier Pricing */}
            <div className="bg-surface-container-lowest border-t-4 border-t-primary border-x border-b border-outline-variant rounded-xl shadow-sm p-6 md:p-8 flex flex-col gap-6">
              
              <div className="flex items-center gap-2 border-b border-outline-variant pb-4">
                <span className="material-symbols-outlined text-primary">calculate</span>
                <h3 className="text-headline-md font-headline-md font-bold text-on-surface">Cotizador Inteligente</h3>
              </div>

              {/* Quantity Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-body-md font-semibold text-on-surface">Volumen Solicitado:</span>
                  <span className="text-headline-md font-display font-bold text-primary">{quantity} pzas</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="1000" 
                  step="50" 
                  value={quantity} 
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-full h-2 bg-outline rounded-lg appearance-none cursor-pointer" 
                />
                <div className="flex justify-between text-xs text-on-surface-variant mt-1.5 font-mono">
                  <span>Min B2B: 50 pzas</span>
                  <span>500 pzas</span>
                  <span>Max: 1000+ pzas</span>
                </div>
              </div>

              {/* Dynamic Price Summary Grid */}
              <div className="bg-surface-container rounded-lg p-4 grid grid-cols-2 gap-4 border border-outline-variant relative overflow-hidden">
                <div className="absolute right-2 top-2">
                  <span className={`text-mono-label font-mono-label px-2.5 py-1 rounded text-[10px] ${tierClass}`}>{tierName}</span>
                </div>
                <div>
                  <span className="block text-xs text-on-surface-variant uppercase">Precio Unitario Est.</span>
                  <span className="text-headline-lg font-display font-bold text-on-surface">${unitPrice.toLocaleString('es-MX')} MXN</span>
                </div>
                <div>
                  <span className="block text-xs text-on-surface-variant uppercase">Total Estimado Neto</span>
                  <span className="text-headline-lg font-display font-bold text-on-surface">${totalCost.toLocaleString('es-MX')} MXN</span>
                </div>
              </div>

              {/* Order Specs Textfield */}
              <div className="text-xs text-on-surface-variant flex flex-col gap-1.5 bg-surface-container-low p-3 rounded border border-outline-variant border-dashed">
                <span className="font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">description</span>
                  Especificación Técnica Generada:
                </span>
                <p className="font-mono text-[11px]">
                  {specString}
                </p>
              </div>

              {/* Ultimate CTA to WhatsApp */}
              <a 
                className="flex justify-center items-center gap-3 bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container font-label-caps text-label-caps uppercase px-6 py-4 rounded-xl shadow-md transition-all active:translate-y-px text-center w-full font-bold" 
                href={getWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">forum</span>
                COTIZAR POR WHATSAPP
              </a>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
