"use client";
import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

// Base products data
const productsData = [
  {
    id: 'roy',
    name: 'Chaleco ROY',
    tag: 'Uso General',
    category: 'chalecos',
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
    category: 'chalecos',
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
    category: 'chalecos',
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
      { name: 'Vino', hex: '#800020', image: '/assets/images/chalecos/CHALECO BRIGADISTA - GABARDINA/vino.png' },
      { name: 'Amarillo Neón', hex: '#E8FF00', image: '/assets/images/chalecos/CHALECO BRIGADISTA - GABARDINA/amarillo neon o verde.png' }
    ]
  },
  {
    id: 'isa',
    name: 'Chaleco ISA',
    tag: 'Transpirable',
    category: 'chalecos',
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
      { name: 'Negro / Verde Bandera', hex: '#1B1F24', secondaryHex: '#2E7D32', image: '/assets/images/chalecos/MODELO ISA/NEGRO VERDE BANDERA.png' },
      { name: 'Naranja / Marino', hex: '#FF6B00', secondaryHex: '#1C2938', image: '/assets/images/chalecos/MODELO ISA/naranja marino.png' },
      { name: 'Negro / Marino', hex: '#1B1F24', secondaryHex: '#1C2938', image: '/assets/images/chalecos/MODELO ISA/negro marino.png' },
      { name: 'Negro / Gris Oxford', hex: '#1B1F24', secondaryHex: '#4B5563', image: '/assets/images/chalecos/MODELO ISA/negro oxford.png' },
      { name: 'Negro / Azul Rey', hex: '#1B1F24', secondaryHex: '#1976D2', image: '/assets/images/chalecos/MODELO ISA/negro rey.png' },
      { name: 'Negro / Vino', hex: '#1B1F24', secondaryHex: '#800020', image: '/assets/images/chalecos/MODELO ISA/negro vino.png' },
      { name: 'Azul Rey', hex: '#1976D2', image: '/assets/images/chalecos/MODELO ISA/rey.png' }
    ]
  },
  {
    id: 'isa-max',
    name: 'Chaleco ISA MAX',
    tag: 'Premium',
    category: 'chalecos',
    image: '/assets/images/chalecos/MODELO ISA MAX/ISA MAX.png',
    description: 'Chaleco de seguridad reflejante premium con diseño reforzado. Ideal para entornos exigentes, ofrece alta visibilidad, durabilidad y confort con múltiples bolsillos organizadores.',
    whatsappText: 'Hola, me gustaría cotizar el Chaleco ISA MAX',
    colors: [
      { name: 'Amarillo Neón / Negro', hex: '#E8FF00', secondaryHex: '#1B1F24', image: '/assets/images/chalecos/MODELO ISA MAX/amararillo neon negro.png' },
      { name: 'Gris Perla / Negro', hex: '#B0BEC5', secondaryHex: '#1B1F24', image: '/assets/images/chalecos/MODELO ISA MAX/gris perla negro.png' },
      { name: 'Negro / Naranja', hex: '#1B1F24', secondaryHex: '#FF6B00', image: '/assets/images/chalecos/MODELO ISA MAX/negro naranja.png' },
      { name: 'Negro / Vino', hex: '#1B1F24', secondaryHex: '#800020', image: '/assets/images/chalecos/MODELO ISA MAX/negro vino.png' },
      { name: 'Vino', hex: '#800020', image: '/assets/images/chalecos/MODELO ISA MAX/vino.png' },
      { name: 'Gris Perla / Vino', hex: '#B0BEC5', secondaryHex: '#800020', image: '/assets/images/chalecos/MODELO ISA MAX/grisperla vino.png' },
      { name: 'Marino / Caqui', hex: '#1C2938', secondaryHex: '#F0E68C', image: '/assets/images/chalecos/MODELO ISA MAX/marino caqui.png' },
      { name: 'Marino / Azul Rey', hex: '#1C2938', secondaryHex: '#1976D2', image: '/assets/images/chalecos/MODELO ISA MAX/marino rey.png' },
      { name: 'Marino', hex: '#1C2938', image: '/assets/images/chalecos/MODELO ISA MAX/marino.png' },
      { name: 'Naranja / Negro', hex: '#FF6B00', secondaryHex: '#1B1F24', image: '/assets/images/chalecos/MODELO ISA MAX/naranja negro.png' },
      { name: 'Negro / Amarillo Neón', hex: '#1B1F24', secondaryHex: '#E8FF00', image: '/assets/images/chalecos/MODELO ISA MAX/negro amaneon.png' },
      { name: 'Negro / Gris Oxford', hex: '#1B1F24', secondaryHex: '#4B5563', image: '/assets/images/chalecos/MODELO ISA MAX/negro oxford.png' },
      { name: 'Negro / Rojo', hex: '#1B1F24', secondaryHex: '#D32F2F', image: '/assets/images/chalecos/MODELO ISA MAX/negro rojo.png' },
      { name: 'Negro / Verde Bandera', hex: '#1B1F24', secondaryHex: '#2E7D32', image: '/assets/images/chalecos/MODELO ISA MAX/negro verde bandera.png' },
      { name: 'Negro', hex: '#1B1F24', image: '/assets/images/chalecos/MODELO ISA MAX/negro.png' },
      { name: 'Azul Rey / Negro', hex: '#1976D2', secondaryHex: '#1B1F24', image: '/assets/images/chalecos/MODELO ISA MAX/rey negro.png' },
      { name: 'Azul Rey', hex: '#1976D2', image: '/assets/images/chalecos/MODELO ISA MAX/rey.png' },
      { name: 'Rojo / Negro', hex: '#D32F2F', secondaryHex: '#1B1F24', image: '/assets/images/chalecos/MODELO ISA MAX/rojo negro.png' },
      { name: 'Turquesa / Negro', hex: '#40E0D0', secondaryHex: '#1B1F24', image: '/assets/images/chalecos/MODELO ISA MAX/turquesa negro.png' },
      { name: 'Verde Bandera / Negro', hex: '#2E7D32', secondaryHex: '#1B1F24', image: '/assets/images/chalecos/MODELO ISA MAX/verde bandera negro.png' }
    ]
  },
  {
    id: 'flestvest',
    name: 'Chaleco FLESTVEST',
    tag: 'Deportivo / Bicolor',
    category: 'chalecos',
    image: '/assets/images/chalecos/MODELO FLESTVEST/Negro_Negro.png',
    description: 'Chaleco de seguridad con diseño deportivo y detalles bicolores en contraste. Fabricado en gabardina de alta resistencia, cuenta con cintas reflejantes horizontales y verticales, costuras reforzadas y prácticos bolsillos organizadores frontales.',
    whatsappText: 'Hola, me gustaría cotizar el Chaleco FLESTVEST',
    colors: [
      { name: 'Negro / Amarillo Neón', hex: '#1B1F24', secondaryHex: '#E8FF00', image: '/assets/images/chalecos/MODELO FLESTVEST/Negro_Amarillo Neon.png' },
      { name: 'Negro / Azul Rey', hex: '#1B1F24', secondaryHex: '#1976D2', image: '/assets/images/chalecos/MODELO FLESTVEST/Negro_Azul.png' },
      { name: 'Negro / Naranja', hex: '#1B1F24', secondaryHex: '#FF6B00', image: '/assets/images/chalecos/MODELO FLESTVEST/Negro_Naranja.png' },
      { name: 'Negro', hex: '#1B1F24', image: '/assets/images/chalecos/MODELO FLESTVEST/Negro_Negro.png' },
      { name: 'Negro / Rojo', hex: '#1B1F24', secondaryHex: '#D32F2F', image: '/assets/images/chalecos/MODELO FLESTVEST/Negro_Rojo.png' }
    ]
  },
  {
    id: 'forteck',
    name: 'Chaleco FORTECK',
    tag: 'Uso Rudo',
    category: 'chalecos',
    image: '/assets/images/chalecos/MODELO FORTECK/Negro.png',
    description: 'Chaleco premium de alta resistencia para condiciones de trabajo exigentes. Confeccionado en gabardina gruesa, cuenta con cierres reforzados, múltiples bolsillos multifuncionales de gran capacidad y bandas reflejantes de alta visibilidad.',
    whatsappText: 'Hola, me gustaría cotizar el Chaleco FORTECK',
    colors: [
      { name: 'Azul Marino', hex: '#1C2938', image: '/assets/images/chalecos/MODELO FORTECK/Azul Marino.png' },
      { name: 'Caqui', hex: '#F0E68C', image: '/assets/images/chalecos/MODELO FORTECK/Caqui.png' },
      { name: 'Gris Oxford', hex: '#4B5563', image: '/assets/images/chalecos/MODELO FORTECK/Gris Oxford.png' },
      { name: 'Gris Perla', hex: '#B0BEC5', image: '/assets/images/chalecos/MODELO FORTECK/Gris Perla.png' },
      { name: 'Naranja', hex: '#FF6B00', image: '/assets/images/chalecos/MODELO FORTECK/Naranja.png' },
      { name: 'Negro', hex: '#1B1F24', image: '/assets/images/chalecos/MODELO FORTECK/Negro.png' },
      { name: 'Verde', hex: '#4CAF50', image: '/assets/images/chalecos/MODELO FORTECK/Verde.png' },
      { name: 'Vino', hex: '#800020', image: '/assets/images/chalecos/MODELO FORTECK/Vino.png' }
    ]
  },
  {
    id: 'overol-con-reflejante',
    name: 'Overol Con Reflejante',
    tag: 'Alta Visibilidad',
    category: 'overoles',
    image: '/assets/images/Overoles/Overol Con Reflejante/Azul Rey Con Reflejante.png',
    description: 'Overol industrial de gabardina premium con cintas reflejantes de alta visibilidad de 2 pulgadas. Diseñado para ofrecer protección completa en condiciones de trabajo pesado y entornos de baja iluminación. Cuenta con costuras de alta resistencia y múltiples bolsillos reforzados para herramientas.',
    whatsappText: 'Hola, me gustaría cotizar el Overol Con Reflejante',
    colors: [
      { name: 'Azul Rey', hex: '#1976D2', image: '/assets/images/Overoles/Overol Con Reflejante/Azul Rey Con Reflejante.png' },
      { name: 'Azul Marino', hex: '#1C2938', image: '/assets/images/Overoles/Overol Con Reflejante/Azul marino Con Reflejante.png' },
      { name: 'Caqui', hex: '#F0E68C', image: '/assets/images/Overoles/Overol Con Reflejante/Caqui Con Reflejante.png' },
      { name: 'Gris Oxford', hex: '#4B5563', image: '/assets/images/Overoles/Overol Con Reflejante/Gris Oxford Con Reflejante.png' },
      { name: 'Naranja', hex: '#FF6B00', image: '/assets/images/Overoles/Overol Con Reflejante/Naranja Con Reflejante.png' },
      { name: 'Negro', hex: '#1B1F24', image: '/assets/images/Overoles/Overol Con Reflejante/Negro Con Reflejante.png' },
      { name: 'Rojo', hex: '#D32F2F', image: '/assets/images/Overoles/Overol Con Reflejante/Rojo Con Reflejante.png' }
    ]
  },
  {
    id: 'overol-sin-reflejante',
    name: 'Overol Sin Reflejante',
    tag: 'Protección Clásica',
    category: 'overoles',
    image: '/assets/images/Overoles/Overol Sin Reflejante/Azul Rey Sin Reflejante.png',
    description: 'Overol industrial clásico confeccionado en gabardina de alta durabilidad y confort. Ideal para talleres, mantenimiento general, pintura y manufactura. Cuenta con ajuste ergonómico, cierre de doble vía latón reforzado y costuras dobles de alta resistencia.',
    whatsappText: 'Hola, me gustaría cotizar el Overol Sin Reflejante',
    colors: [
      { name: 'Azul Rey', hex: '#1976D2', image: '/assets/images/Overoles/Overol Sin Reflejante/Azul Rey Sin Reflejante.png' },
      { name: 'Azul Marino', hex: '#1C2938', image: '/assets/images/Overoles/Overol Sin Reflejante/Azul marino Sin Reflejante.png' },
      { name: 'Caqui', hex: '#F0E68C', image: '/assets/images/Overoles/Overol Sin Reflejante/Caqui Sin Reflejante.png' },
      { name: 'Gris Oxford', hex: '#4B5563', image: '/assets/images/Overoles/Overol Sin Reflejante/Gris Oxford Sin Reflejante.png' },
      { name: 'Naranja', hex: '#FF6B00', image: '/assets/images/Overoles/Overol Sin Reflejante/Naranja Sin Reflejante.png' },
      { name: 'Negro', hex: '#1B1F24', image: '/assets/images/Overoles/Overol Sin Reflejante/Negro Sin Reflejante.png' },
      { name: 'Rojo', hex: '#D32F2F', image: '/assets/images/Overoles/Overol Sin Reflejante/Rojo Sin Reflejante.png' }
    ]
  },
  {
    id: 'camisola-con-reflejante',
    name: 'Camisola Con Reflejante',
    tag: 'Alta Visibilidad',
    category: 'camisas',
    image: '/assets/images/Camisola/Con Reflejante/Camisola Con Reflejante Azul Marino.png',
    description: 'Camisola industrial de alta visibilidad fabricada en gabardina resistente y fresca. Equipada con cintas reflejantes de 2 pulgadas, doble bolsa frontal con cartera y botones de alta durabilidad. Diseñada para máxima visibilidad y durabilidad en campo.',
    whatsappText: 'Hola, me gustaría cotizar la Camisola Con Reflejante',
    colors: [
      { name: 'Azul Marino', hex: '#1C2938', image: '/assets/images/Camisola/Con Reflejante/Camisola Con Reflejante Azul Marino.png' },
      { name: 'Caqui', hex: '#C3B091', image: '/assets/images/Camisola/Con Reflejante/Camisola Con Reflejante Caqui.png' },
      { name: 'Naranja', hex: '#FF6B00', image: '/assets/images/Camisola/Con Reflejante/Camisola Con reflejante Naranja.png' }
    ]
  },
  {
    id: 'camisola-sin-reflejante',
    name: 'Camisola Sin Reflejante',
    tag: 'Uso Operativo',
    category: 'camisas',
    image: '/assets/images/Camisola/Sin Reflejante/Camisola Azul Marino.png',
    description: 'Camisola de trabajo tradicional confeccionada en gabardina premium de alto desempeño. Ofrece excelente resistencia al desgaste, transpirabilidad superior, corte amplio y cómodo para jornadas extendidas de trabajo.',
    whatsappText: 'Hola, me gustaría cotizar la Camisola Sin Reflejante',
    colors: [
      { name: 'Azul Marino', hex: '#1C2938', image: '/assets/images/Camisola/Sin Reflejante/Camisola Azul Marino.png' },
      { name: 'Caqui', hex: '#C3B091', image: '/assets/images/Camisola/Sin Reflejante/Camisola Caqui.png' },
      { name: 'Naranja', hex: '#FF6B00', image: '/assets/images/Camisola/Sin Reflejante/Camisola Naranaj.png' }
    ]
  },
  {
    id: 'camisola-mezclilla',
    name: 'Camisola de Mezclilla Industrial',
    tag: '100% Algodón & 80/20',
    category: 'camisas',
    image: '/assets/images/Camisa De  Mezclilla.png',
    description: 'Camisola de mezclilla industrial disponible en composición 100% algodón y en mezcla 80/20 de alto gramaje con costuras reforzadas en triple puntada. Brinda protección contra rebabas, fricción y trabajo rudo con una presentación formal e impecable.',
    whatsappText: 'Hola, me gustaría cotizar la Camisola de Mezclilla Industrial (100% Algodón / 80/20)',
    colors: [
      { name: 'Azul Mezclilla', hex: '#2B4C7E', image: '/assets/images/Camisa De  Mezclilla.png' }
    ]
  },
  {
    id: 'playera-polo',
    name: 'Playera Tipo Polo / Ejecutiva',
    tag: 'Confort & Corporativo',
    category: 'camisas',
    image: '/assets/images/Playera.png',
    description: 'Playera tipo polo corporativa confeccionada en tela piqué fresca, suave y transpirable. Ideal para áreas administrativas, ventas, supervisión y personal de servicio. Lista para bordado fino institucional.',
    whatsappText: 'Hola, me gustaría cotizar la Playera Tipo Polo / Ejecutiva',
    colors: [
      { name: 'Blanco', hex: '#F8FAFC', image: '/assets/images/Playera.png' }
    ]
  },
  {
    id: 'pantalon-ejecutivo',
    name: 'Pantalón Ejecutivo de Gabardina',
    tag: 'Corte Ergonómico',
    category: 'pantalones',
    image: '/assets/images/Pantalon Ejecutivo/Pantalon Azul Marino.png',
    description: 'Pantalón de gabardina de uso rudo con corte ergonómico y elegante. Cuenta con costuras reforzadas en tiro y entrepierna, pretina reforzada y bolsas de alta profundidad. Diseñado para resistir la jornada operativa conservando una imagen pulcra.',
    whatsappText: 'Hola, me gustaría cotizar el Pantalón Ejecutivo de Gabardina',
    colors: [
      { name: 'Azul Marino', hex: '#1C2938', image: '/assets/images/Pantalon Ejecutivo/Pantalon Azul Marino.png' },
      { name: 'Caqui', hex: '#C3B091', image: '/assets/images/Pantalon Ejecutivo/Pantalon Caqui.png' }
    ]
  },
  {
    id: 'nuevo-modelo',
    name: 'Nuevo Modelo',
    tag: 'Próximamente',
    category: 'chalecos',
    image: '/assets/images/productos/safety_vest.png',
    description: 'Estamos diseñando la próxima generación de indumentaria de alta seguridad. Nuevas características, mejor ergonomía y materiales innovadores.',
    whatsappText: '',
    colors: [],
    comingSoon: true
  }
];

function ProductosContent() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('todos');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && ['chalecos', 'overoles', 'camisas', 'pantalones'].includes(cat)) {
      setActiveCategory(cat);
      setTimeout(() => {
        const element = document.getElementById('catalogo-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [searchParams]);

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

  const filteredProducts = productsData.filter(p => activeCategory === 'todos' || p.category === activeCategory);

  const categoryHeaders: Record<string, { tag: string, title: string, desc: string }> = {
    todos: {
      tag: 'Gama Completa',
      title: 'Todos los productos',
      desc: 'Explora nuestra línea de equipamiento industrial diseñado para brindar máxima seguridad y comodidad.'
    },
    chalecos: {
      tag: 'Línea de Alta Visibilidad',
      title: 'Chalecos Reflejantes',
      desc: 'Diseñados para brindar máxima visibilidad, confort térmico y funcionalidad en entornos operativos de alto riesgo.'
    },
    overoles: {
      tag: 'Protección Corporal Integral',
      title: 'Overoles Industriales',
      desc: 'Máxima protección corporal y durabilidad excepcional en telas de gabardina premium para trabajo rudo.'
    },
    camisas: {
      tag: 'Presentación y Resistencia',
      title: 'Camisas y Camisolas Industriales',
      desc: 'Camisolas técnicas con y sin reflejante, camisolas de mezclilla (100% algodón y mezcla 80/20) y playeras polo corporativas.'
    },
    pantalones: {
      tag: 'Ergonomía y Durabilidad',
      title: 'Pantalones Industriales y Ejecutivos',
      desc: 'Confeccionados en gabardina de alta resistencia con refuerzos estratégicos para la máxima libertad de movimiento y presencia.'
    }
  };

  const currentHeader = categoryHeaders[activeCategory] || categoryHeaders.todos;

  return (
    <div className="bg-[#04142B] text-white min-h-screen">
      <section className="relative w-full pt-36 sm:pt-44 md:pt-48 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 bg-[#04142B] overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 filter grayscale-[0.2] scale-105"
          style={{ backgroundImage: "url('/assets/images/instalaciones/manufacturing_floor.png')" }}
        ></div>
        
        <div className="absolute inset-0 bg-[#04142B]/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#04142B]/80 via-transparent to-transparent z-10"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#04142B] to-transparent z-10"></div>
        <div className="hidden md:block absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-b from-[#FFC107]/5 to-transparent rounded-full blur-[100px] pointer-events-none z-10"></div>

        <div className="relative z-20 max-w-4xl mx-auto text-center fade-in-up">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white mb-6 sm:mb-8 leading-[1.0] tracking-[-0.03em] drop-shadow-2xl uppercase break-words">
            Equipamiento de <br className="hidden md:block"/>
            <span className="text-[#FFC107]">alto rendimiento.</span>
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto text-base sm:text-lg md:text-2xl font-normal leading-relaxed tracking-tight drop-shadow-lg opacity-90">
            Nuestra línea de productos está diseñada bajo estrictos estándares industriales para garantizar durabilidad, seguridad y presentación profesional en cualquier entorno operativo.
          </p>
        </div>
      </section>

      <section id="catalogo-section" className="py-12 sm:py-16 md:py-[80px] px-4 sm:px-6 md:px-12 max-w-7xl mx-auto bg-[#04142B] scroll-mt-28">
        <div className="mb-10 sm:mb-12 text-center max-w-3xl mx-auto fade-in-up">
          <span className="text-[10px] sm:text-[11px] font-bold text-[#FFC107] uppercase tracking-[0.2em] mb-3 sm:mb-4 block">
            {currentHeader.tag}
          </span>
          <h2 className="font-display font-extrabold text-white text-2xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.02em] mb-4 sm:mb-6 uppercase">
            {currentHeader.title}
          </h2>
          <p className="text-[#D9D9D9] text-sm sm:text-lg font-light leading-relaxed">
            {currentHeader.desc}
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12 sm:mb-16 max-w-4xl mx-auto">
          {[
            { id: 'todos', name: 'Todos los Productos', count: productsData.filter(p => !p.comingSoon).length },
            { id: 'chalecos', name: 'Chalecos Reflejantes', count: productsData.filter(p => p.category === 'chalecos' && !p.comingSoon).length },
            { id: 'overoles', name: 'Overoles Industriales', count: productsData.filter(p => p.category === 'overoles' && !p.comingSoon).length },
            { id: 'camisas', name: 'Camisas y Camisolas', count: productsData.filter(p => p.category === 'camisas' && !p.comingSoon).length },
            { id: 'pantalones', name: 'Pantalones', count: productsData.filter(p => p.category === 'pantalones' && !p.comingSoon).length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                activeCategory === tab.id
                  ? 'bg-[#FFC107] text-[#04142B] shadow-[0_4px_15px_rgba(255,193,7,0.25)]'
                  : 'bg-[#082041] text-white border border-[rgba(255,193,7,0.15)] hover:border-[#FFC107]/40 hover:-translate-y-0.5'
              }`}
            >
              {tab.name}
              <span className={`text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold ${
                activeCategory === tab.id ? 'bg-[#04142B]/10 text-[#04142B]' : 'bg-white/10 text-[#D9D9D9]/60'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {filteredProducts.map((product) => (
            <div key={product.id} className={`bg-[#082041] border border-[rgba(255,193,7,0.15)] rounded-3xl overflow-hidden flex flex-col ${product.comingSoon ? 'cursor-not-allowed' : 'hover:border-[#FFC107]/40 hover:-translate-y-1 transition-all duration-500 group'}`}>
              <div className={`relative h-[260px] sm:h-[320px] overflow-hidden flex items-center justify-center p-6 sm:p-8 ${product.comingSoon ? 'bg-[#061A36]' : 'bg-[#061A36] group-hover:bg-[#082041]/40 transition-colors duration-500'}`}>
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-[#04142B]/80 backdrop-blur-md border border-[rgba(255,193,7,0.15)] px-3 py-1.5 rounded-full font-medium text-[10px] text-[#FFC107] uppercase tracking-widest shadow-sm z-20">
                  {product.tag}
                </div>
                <Image 
                  alt={product.name}
                  width={400}
                  height={400}
                  className={`max-h-full max-w-full object-contain z-10 ${product.comingSoon ? 'filter grayscale-[0.8] opacity-60' : 'group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]'}`} 
                  src={product.image}
                />
              </div>
              <div className="p-6 sm:p-8 md:p-10 flex flex-col flex-grow bg-[#082041] border-t border-[rgba(255,193,7,0.15)]">
                <h3 className={`font-display font-semibold text-xl sm:text-2xl text-white mb-3 sm:mb-4 tracking-tight ${product.comingSoon ? 'opacity-60' : ''}`}>{product.name}</h3>
                <p className={`text-[#D9D9D9] flex-grow mb-6 sm:mb-8 text-sm sm:text-base font-light leading-relaxed ${product.comingSoon ? 'opacity-60' : ''}`}>
                  {product.description}
                </p>
                {product.comingSoon ? (
                  <div className="inline-flex justify-center items-center gap-2 bg-[#04142B] text-[#D9D9D9]/40 border border-[rgba(255,193,7,0.15)] font-semibold text-[11px] px-6 py-3.5 rounded-full uppercase tracking-widest w-full cursor-not-allowed">
                    Próximamente
                  </div>
                ) : (
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="inline-flex justify-center items-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-[#04142B] font-extrabold text-[12px] px-6 py-3.5 rounded-md hover:shadow-[0_8px_20px_rgba(255,193,7,0.25)] hover:-translate-y-0.5 transition-all duration-300 w-full tracking-widest uppercase"
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

      <section className="py-16 sm:py-24 md:py-[180px] bg-[#061A36] border-y border-[rgba(255,193,7,0.15)] relative">
        <div className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="mb-12 sm:mb-16 md:mb-24 text-center max-w-3xl mx-auto">
            <span className="text-[10px] sm:text-[11px] font-bold text-[#FFC107] uppercase tracking-[0.2em] mb-3 sm:mb-4 block">
              Gama Completa
            </span>
            <h2 className="font-display font-extrabold text-white text-2xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.02em] mb-4 sm:mb-6 uppercase">
              Explora todas las categorías
            </h2>
            <p className="text-[#D9D9D9] text-base sm:text-lg font-light leading-relaxed">
              Soluciones integrales para la vestimenta y protección de su equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div 
              onClick={() => {
                setActiveCategory('camisas');
                const element = document.getElementById('catalogo-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative block w-full min-h-[320px] md:h-[400px] md:col-span-8 bg-[#082041] border border-[rgba(255,193,7,0.15)] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] cursor-pointer hover:border-[#FFC107]/40 hover:-translate-y-1 transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-[#04142B] z-0 p-6 sm:p-12 flex items-center justify-center group-hover:bg-[#082041]/40 transition-colors duration-500">
                <Image width={400} height={400} alt="Camisas Industriales" className="max-w-full max-h-[220px] sm:max-h-full object-contain opacity-90 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10" src="/assets/images/productos/work_shirt.png"/>
              </div>
              <div className="relative mt-auto w-full bg-[#082041]/95 backdrop-blur-md border-t border-[rgba(255,193,7,0.15)] p-5 sm:p-8 z-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                <div>
                  <h3 className="font-display font-semibold text-white text-xl sm:text-2xl tracking-tight mb-1">Camisas y Camisolas</h3>
                  <p className="text-[#D9D9D9] text-xs sm:text-sm font-light">Resistencia y transpirabilidad superior para planta y campo.</p>
                </div>
                <div className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-[#FFC107] text-[#04142B] flex items-center justify-center font-bold text-[11px] sm:text-xs uppercase tracking-wider group-hover:shadow-[0_4px_12px_rgba(255,193,7,0.25)] transition-all flex-shrink-0">
                  Ver Productos
                </div>
              </div>
            </div>

            <div 
              onClick={() => {
                setActiveCategory('overoles');
                const element = document.getElementById('catalogo-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative block w-full min-h-[320px] md:h-[400px] md:col-span-4 bg-[#082041] border border-[rgba(255,193,7,0.15)] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] cursor-pointer hover:border-[#FFC107]/40 hover:-translate-y-1 transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-[#04142B] z-0 p-6 sm:p-10 flex items-center justify-center group-hover:bg-[#082041]/40 transition-colors duration-500">
                <Image width={400} height={400} alt="Overoles Industriales" className="max-w-full max-h-[220px] sm:max-h-full object-contain opacity-90 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10" src="/assets/images/productos/coveralls.png"/>
              </div>
              <div className="relative mt-auto w-full bg-[#082041]/95 backdrop-blur-md border-t border-[rgba(255,193,7,0.15)] p-5 sm:p-8 z-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                <div>
                  <h3 className="font-display font-semibold text-white text-xl sm:text-2xl tracking-tight mb-1">Overoles</h3>
                  <p className="text-[#D9D9D9] text-xs sm:text-sm font-light">Protección integral para trabajo pesado.</p>
                </div>
                <div className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-[#FFC107] text-[#04142B] flex items-center justify-center font-bold text-[11px] sm:text-xs uppercase tracking-wider group-hover:shadow-[0_4px_12px_rgba(255,193,7,0.25)] transition-all flex-shrink-0">
                  Ver Productos
                </div>
              </div>
            </div>

            <div 
              onClick={() => {
                setActiveCategory('pantalones');
                const element = document.getElementById('catalogo-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative block w-full min-h-[320px] md:h-[400px] md:col-span-12 bg-[#082041] border border-[rgba(255,193,7,0.15)] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] cursor-pointer hover:border-[#FFC107]/40 hover:-translate-y-1 transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-[#04142B] z-0 p-6 sm:p-12 flex items-center justify-center group-hover:bg-[#082041]/40 transition-colors duration-500">
                <Image width={400} height={400} alt="Pantalones Industriales" className="max-w-full max-h-[220px] sm:max-h-full object-contain opacity-90 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10" src="/assets/images/productos/work_pants.png"/>
              </div>
              <div className="relative mt-auto w-full bg-[#082041]/95 backdrop-blur-md border-t border-[rgba(255,193,7,0.15)] p-5 sm:p-8 z-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                <div>
                  <h3 className="font-display font-semibold text-white text-xl sm:text-2xl tracking-tight mb-1">Pantalones Industriales y Ejecutivos</h3>
                  <p className="text-[#D9D9D9] text-xs sm:text-sm font-light">Ergonomía activa, durabilidad y refuerzos estratégicos para el uso diario.</p>
                </div>
                <div className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-[#FFC107] text-[#04142B] flex items-center justify-center font-bold text-[11px] sm:text-xs uppercase tracking-wider group-hover:shadow-[0_4px_12px_rgba(255,193,7,0.25)] transition-all flex-shrink-0">
                  Ver Productos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-[180px] px-4 sm:px-6 md:px-12 max-w-7xl mx-auto bg-[#04142B]">
        <div className="border border-[rgba(255,193,7,0.15)] rounded-3xl overflow-hidden flex flex-col lg:flex-row">
          <div className="p-6 sm:p-10 md:p-16 lg:w-1/2 flex flex-col justify-center bg-[#082041]">
            <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
              <span className="material-symbols-outlined text-[#FFC107] text-[24px] sm:text-[28px]">precision_manufacturing</span>
              <span className="font-bold text-[10px] sm:text-[11px] text-[#FFC107] uppercase tracking-[0.2em]">Servicios Especializados</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4 sm:mb-6 tracking-tight uppercase">Uniformes personalizados</h3>
            <p className="text-[#D9D9D9] mb-8 sm:mb-10 text-base sm:text-lg font-light leading-relaxed">
              Integramos la identidad corporativa de su empresa directamente en la manufactura del equipamiento mediante técnicas de alta precisión.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="flex items-center gap-3 bg-[#04142B] px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-[rgba(255,193,7,0.15)]">
                <span className="material-symbols-outlined text-white text-[18px] sm:text-[20px]">styler</span>
                <span className="font-medium text-xs sm:text-sm text-white">Bordado CNC</span>
              </div>
              <div className="flex items-center gap-3 bg-[#04142B] px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-[rgba(255,193,7,0.15)]">
                <span className="material-symbols-outlined text-white text-[18px] sm:text-[20px]">format_paint</span>
                <span className="font-medium text-xs sm:text-sm text-white">Serigrafía Textil</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[260px] sm:min-h-[350px] md:min-h-[400px] overflow-hidden group bg-[#04142B]">
            <Image width={800} height={800} alt="Máquina de Bordado Industrial" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" src="/assets/images/instalaciones/embroidery_machine.png"/>
            <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] pointer-events-none"></div>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"></div>
          
          <div 
            className="relative bg-[#082041] border border-[rgba(255,193,7,0.15)] rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto md:overflow-hidden flex flex-col md:flex-row transform transition-all z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 bg-[#04142B]/85 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#061A36] transition-colors shadow-sm"
              aria-label="Cerrar modal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            <div className="w-full md:w-1/2 bg-[#061A36] flex items-center justify-center relative min-h-[260px] sm:min-h-[300px] md:min-h-[460px] overflow-hidden group flex-shrink-0">
              {(() => {
                const images = selectedProduct.colors.map((c: any) => c.image || selectedProduct.image);
                return images.map((img: string, idx: number) => (
                  <div 
                    key={idx}
                    className={`absolute inset-0 flex items-center justify-center p-6 sm:p-8 transition-opacity duration-1000 ease-in-out ${currentImageIndex === idx ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <Image 
                      src={img} 
                      alt={`${selectedProduct.name} vista ${idx + 1}`}
                      width={600}
                      height={600}
                      className="max-h-[220px] sm:max-h-[280px] md:max-h-[360px] w-auto object-contain drop-shadow-xl"
                    />
                  </div>
                ));
              })()}
              
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
                {(() => {
                  const images = selectedProduct.colors.map((c: any) => c.image || selectedProduct.image);
                  return images.map((_, idx: number) => (
                    <button 
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                      className={`h-2 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'bg-[#FFC107] w-6' : 'bg-white/20 w-2'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ));
                })()}
              </div>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  const images = selectedProduct.colors.map((c: any) => c.image || selectedProduct.image);
                  setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-[#04142B]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#061A36] shadow-sm hover:shadow-md"
              >
                <span className="material-symbols-outlined text-[18px] sm:text-[24px]">chevron_left</span>
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  const images = selectedProduct.colors.map((c: any) => c.image || selectedProduct.image);
                  setCurrentImageIndex((prev) => (prev + 1) % images.length);
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-[#04142B]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#061A36] shadow-sm hover:shadow-md"
              >
                <span className="material-symbols-outlined text-[18px] sm:text-[24px]">chevron_right</span>
              </button>
            </div>

            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 overflow-y-auto flex flex-col">
              <span className="text-[10px] font-bold text-[#FFC107] uppercase tracking-widest mb-1.5 block">
                {selectedProduct.tag}
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-3 sm:mb-4 uppercase">
                {selectedProduct.name}
              </h2>
              <p className="text-[#D9D9D9] text-xs sm:text-sm font-light leading-relaxed mb-6 sm:mb-8">
                {selectedProduct.description}
              </p>

              <div className="mb-6 sm:mb-8">
                <h4 className="text-xs sm:text-sm font-medium text-white uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">palette</span>
                  Colores Disponibles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {selectedProduct.colors.map((color: any, index: number) => (
                    <button 
                      key={index} 
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl border transition-all text-left ${currentImageIndex === index ? 'border-[#FFC107] bg-[#FFC107]/10 shadow-sm' : 'border-[rgba(255,193,7,0.15)] bg-[#04142B]/50 hover:bg-[#04142B]'}`}
                    >
                      <div 
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-black/10 shadow-sm relative overflow-hidden flex-shrink-0"
                        style={{ backgroundColor: color.hex }}
                      >
                        {color.secondaryHex && (
                          <div 
                            className="absolute inset-y-0 right-0 w-1/2" 
                            style={{ backgroundColor: color.secondaryHex }}
                          ></div>
                        )}
                      </div>
                      <span className={`text-xs sm:text-sm font-semibold leading-tight ${currentImageIndex === index ? 'text-[#FFC107]' : 'text-[#D9D9D9]'}`}>
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-4 sm:pt-6 border-t border-[rgba(255,193,7,0.15)]">
                <a 
                  href={`https://wa.me/525524398773?text=${encodeURIComponent(selectedProduct.whatsappText)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex justify-center items-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-[#04142B] font-extrabold text-xs sm:text-sm px-6 py-3.5 sm:py-4 rounded-md hover:shadow-[0_8px_20px_rgba(255,193,7,0.3)] transition-all duration-300 tracking-widest uppercase text-center"
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

export default function Productos() {
  return (
    <Suspense fallback={
      <div className="bg-[#04142B] text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-[#FFC107] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm uppercase tracking-widest font-bold">Cargando Catálogo...</p>
        </div>
      </div>
    }>
      <ProductosContent />
    </Suspense>
  );
}
