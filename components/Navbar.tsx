'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Search, User, ShoppingCart, Menu, X, ChevronDown, Zap } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  const isActive = (path: string) => pathname === path;

  const navLink = (active: boolean) =>
    `relative font-bold text-xs tracking-widest uppercase transition-colors duration-300 py-2 ${
      active ? 'text-[#FFC107]' : 'text-white hover:text-[#FFC107]'
    }`;

  return (
    <div className="fixed top-0 w-full z-50">

      {/* 0. Yellow Info Bar */}
      <div className="w-full bg-[#FFC107] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1 sm:gap-0">
          <div className="flex items-center gap-1.5 text-[#071A33] font-bold text-[11px] tracking-wide">
            <span className="material-symbols-outlined text-[16px]">local_shipping</span>
            Envíos a toda la República Mexicana
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[#071A33] font-bold text-[11px] tracking-wide">
            <span className="material-symbols-outlined text-[16px]">verified_user</span>
            Calidad Garantizada
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[#071A33] font-bold text-[11px] tracking-wide">
            <span className="material-symbols-outlined text-[16px]">headset_mic</span>
            Atención Personalizada
          </div>
        </div>
      </div>

      {/* 1. Main Navigation */}
      <nav className="w-full bg-[#071A33] border-b border-white/5 py-3 transition-all duration-300">
        <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto">

          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              alt="EQUIPANEXT Logo"
              width={160}
              height={50}
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300 opacity-95 group-hover:opacity-100 drop-shadow-md origin-left"
              src="/assets/images/marca/Logo.png"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex gap-7 items-center z-50">

            {/* INICIO */}
            <li>
              <Link href="/" className={navLink(isActive('/'))}>
                Inicio
                {isActive('/') && <span className="absolute -bottom-1.5 left-0 w-full h-[2px] rounded-full bg-[#FFC107]"></span>}
              </Link>
            </li>

            {/* NOSOTROS */}
            <li>
              <Link href="/nosotros" className={navLink(isActive('/nosotros'))}>
                Nosotros
                {isActive('/nosotros') && <span className="absolute -bottom-1.5 left-0 w-full h-[2px] rounded-full bg-[#FFC107]"></span>}
              </Link>
            </li>

            {/* CATÁLOGO — Productos + Categorías fusionados */}
            <li className="relative group">
              <Link
                href="/productos"
                className={`inline-flex items-center gap-1 font-bold text-xs tracking-widest uppercase transition-colors duration-300 py-2 ${
                  isActive('/productos') ? 'text-[#FFC107]' : 'text-white hover:text-[#FFC107]'
                }`}
              >
                Catálogo
                <ChevronDown size={12} className="opacity-75 group-hover:text-[#FFC107] transition-transform group-hover:rotate-180 duration-300" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-xl bg-[#071A33] border border-white/10 shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 z-50">
                {/* Todos los productos */}
                <Link href="/productos" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/95 hover:bg-white/5 hover:text-[#FFC107] transition-all">
                  Todos los Productos
                </Link>
                <div className="mx-4 my-1.5 h-px bg-white/10"></div>
                {/* Categorías header */}
                <p className="px-4 pt-1 pb-0.5 text-[9px] font-extrabold text-white/30 uppercase tracking-[0.2em]">Categorías</p>
                <Link href="/productos" className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/95 hover:bg-white/5 hover:text-[#FFC107] transition-all">
                  <span className="text-sm">🦺</span> Seguridad Industrial
                </Link>
                <Link href="/productos" className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/95 hover:bg-white/5 hover:text-[#FFC107] transition-all">
                  <span className="text-sm">🍳</span> Gastronomía
                </Link>
                <Link href="/productos" className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/95 hover:bg-white/5 hover:text-[#FFC107] transition-all">
                  <span className="text-sm">🏥</span> Salud
                </Link>
                <Link href="/productos" className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/95 hover:bg-white/5 hover:text-[#FFC107] transition-all">
                  <span className="text-sm">🏭</span> Industrial
                </Link>
              </div>
            </li>

            {/* DISEÑADOR B2B — Primer nivel, diferenciador clave */}
            <li>
              <Link
                href="/disenador"
                className={`inline-flex items-center gap-1.5 font-black text-xs tracking-widest uppercase transition-all duration-300 py-1.5 px-3 rounded-md border ${
                  isActive('/disenador')
                    ? 'text-[#071A33] bg-[#FFC107] border-[#FFC107]'
                    : 'text-[#FFC107] border-[#FFC107]/40 hover:bg-[#FFC107] hover:text-[#071A33] hover:border-[#FFC107]'
                }`}
              >
                <Zap size={11} className="fill-current" />
                Diseñador B2B
              </Link>
            </li>

            {/* CONTACTO */}
            <li>
              <Link href="/contacto" className={navLink(isActive('/contacto'))}>
                Contacto
                {isActive('/contacto') && <span className="absolute -bottom-1.5 left-0 w-full h-[2px] rounded-full bg-[#FFC107]"></span>}
              </Link>
            </li>
          </ul>

          {/* Desktop Right: Icons + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4 text-white">
              <button aria-label="Buscar" className="hover:text-[#FFC107] transition-colors p-1">
                <Search className="w-[18px] h-[18px]" />
              </button>
              <Link href="/contacto" aria-label="Mi Perfil" className="hover:text-[#FFC107] transition-colors p-1">
                <User className="w-[18px] h-[18px]" />
              </Link>
              <Link href="/productos" aria-label="Carrito" className="hover:text-[#FFC107] transition-colors p-1 relative">
                <ShoppingCart className="w-[18px] h-[18px]" />
                <span className="absolute -top-1.5 -right-1.5 bg-[#FFC107] text-[#071A33] text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border border-[#071A33] notranslate" translate="no" style={{ color: '#071A33' }}>0</span>
              </Link>
            </div>
            <Link href="/contacto" className="bg-[#FFC107] text-[#071A33] text-[11px] font-extrabold tracking-widest px-6 py-2.5 rounded-full hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] uppercase">
              Cotizar
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <Link href="/productos" aria-label="Carrito" className="text-white hover:text-[#FFC107] transition-colors p-1 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#FFC107] text-[#071A33] text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center notranslate" translate="no" style={{ color: '#071A33' }}>0</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 -mr-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-[#071A33]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all duration-500 origin-top overflow-hidden ${
            mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col py-4 px-6 gap-1">
            <li>
              <Link href="/" className={`block font-bold text-sm py-3 border-b border-white/5 transition-colors uppercase tracking-widest ${isActive('/') ? 'text-[#FFC107]' : 'text-white/80 hover:text-[#FFC107]'}`}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className={`block font-bold text-sm py-3 border-b border-white/5 transition-colors uppercase tracking-widest ${isActive('/nosotros') ? 'text-[#FFC107]' : 'text-white/80 hover:text-[#FFC107]'}`}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/productos" className={`block font-bold text-sm py-3 border-b border-white/5 transition-colors uppercase tracking-widest ${isActive('/productos') ? 'text-[#FFC107]' : 'text-white/80 hover:text-[#FFC107]'}`}>
                Catálogo de Productos
              </Link>
            </li>
            {/* Mobile: Categorías como subgrupo */}
            <li className="border-b border-white/5 pb-2">
              <p className="text-white/30 text-[9px] font-extrabold uppercase tracking-[0.2em] pt-2 pb-1 pl-2">Categorías</p>
              <div className="grid grid-cols-2 gap-1">
                {['🦺 Seguridad Industrial', '🍳 Gastronomía', '🏥 Salud', '🏭 Industrial'].map((cat, i) => (
                  <Link key={i} href="/productos" className="text-white/70 hover:text-[#FFC107] text-[11px] font-bold uppercase tracking-wide py-2 px-2 transition-colors">{cat}</Link>
                ))}
              </div>
            </li>
            {/* Diseñador B2B — destacado en móvil */}
            <li>
              <Link href="/disenador" className="flex items-center gap-2 font-black text-sm py-3 border-b border-[#FFC107]/20 transition-colors uppercase tracking-widest text-[#FFC107]">
                <Zap size={14} className="fill-current" />
                Diseñador B2B
              </Link>
            </li>
            <li>
              <Link href="/contacto" className={`block font-bold text-sm py-3 border-b border-white/5 transition-colors uppercase tracking-widest ${isActive('/contacto') ? 'text-[#FFC107]' : 'text-white/80 hover:text-[#FFC107]'}`}>
                Contacto
              </Link>
            </li>
            <li className="pt-6 pb-2">
              <Link href="/contacto" className="flex justify-center items-center bg-[#FFC107] text-[#071A33] font-extrabold tracking-widest py-3.5 rounded-full w-full hover:bg-white transition-colors uppercase text-xs">
                Solicitar Cotización
              </Link>
            </li>
            <li className="pb-4">
              <a
                href="https://wa.me/525524398773?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20uniformes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 bg-[#25D366] text-white font-bold tracking-widest py-3 rounded-full w-full transition-colors uppercase text-xs"
              >
                <svg fill="white" height="14" viewBox="0 0 16 16" width="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z"/>
                </svg>
                WhatsApp Directo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
