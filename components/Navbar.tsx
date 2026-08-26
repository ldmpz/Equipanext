'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, Zap } from 'lucide-react';

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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  const navLink = (active: boolean) =>
    `relative font-bold text-xs tracking-widest uppercase transition-colors duration-300 py-2 ${
      active ? 'text-[#FFC107]' : 'text-white hover:text-[#FFC107]'
    }`;

  return (
    <div className="fixed top-0 w-full z-50">

      {/* 0. Yellow Info Bar */}
      <div className="w-full bg-[#FFC107] py-1.5 sm:py-2 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-0.5 sm:gap-0">
          <div className="flex items-center gap-1.5 text-[#04142B] font-bold text-[10px] sm:text-[11px] tracking-wide text-center">
            <span className="material-symbols-outlined text-[14px] sm:text-[16px]">local_shipping</span>
            Envíos a toda la República Mexicana
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[#04142B] font-bold text-[11px] tracking-wide">
            <span className="material-symbols-outlined text-[16px]">verified_user</span>
            Calidad Garantizada
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-[#04142B] font-bold text-[11px] tracking-wide">
            <span className="material-symbols-outlined text-[16px]">headset_mic</span>
            Atención Personalizada
          </div>
        </div>
      </div>

      {/* 1. Main Navigation */}
      <nav className="w-full bg-[#04142B] md:bg-[#04142B]/95 md:backdrop-blur-md border-b border-white/5 py-2.5 sm:py-3 transition-all duration-300">
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">

          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <Image
              alt="EQUIPANEXT Logo"
              width={220}
              height={70}
              className="h-10 sm:h-12 md:h-16 w-auto object-contain transition-all duration-300 opacity-95 group-hover:opacity-100 drop-shadow-md origin-left"
              src="/assets/images/marca/Logo.png"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex gap-5 lg:gap-7 items-center z-50">

            {/* INICIO */}
            <li>
              <Link href="/" className={navLink(isActive('/'))}>
                Inicio
                {isActive('/') && <span className="absolute -bottom-1.5 left-0 w-full h-[2px] rounded-full bg-[#FFC107]"></span>}
              </Link>
            </li>

            {/* PRODUCTOS */}
            <li>
              <Link href="/productos" className={navLink(isActive('/productos'))}>
                Productos
                {isActive('/productos') && <span className="absolute -bottom-1.5 left-0 w-full h-[2px] rounded-full bg-[#FFC107]"></span>}
              </Link>
            </li>

            {/* DISEÑADOR B2B — Primer nivel, diferenciador clave */}
            <li>
              <Link
                href="/disenador"
                className={`inline-flex items-center gap-1.5 font-black text-xs tracking-widest uppercase transition-all duration-300 py-1.5 px-3 rounded-md border ${
                  isActive('/disenador')
                    ? 'text-[#04142B] bg-[#FFC107] border-[#FFC107]'
                    : 'text-[#FFC107] border-[#FFC107]/40 hover:bg-[#FFC107] hover:text-[#04142B] hover:border-[#FFC107]'
                }`}
              >
                <Zap size={11} className="fill-current" />
                Diseñador B2B
              </Link>
            </li>

            {/* NOSOTROS */}
            <li>
              <Link href="/nosotros" className={navLink(isActive('/nosotros'))}>
                Nosotros
                {isActive('/nosotros') && <span className="absolute -bottom-1.5 left-0 w-full h-[2px] rounded-full bg-[#FFC107]"></span>}
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

          {/* Desktop Right: CTA */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/contacto" className="bg-[#FFC107] text-[#04142B] text-[11px] font-extrabold tracking-widest px-5 lg:px-6 py-2.5 rounded-full hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] uppercase whitespace-nowrap">
              Cotizar
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 -mr-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-[#04142B] to-[#020b18] border-b border-white/10 shadow-2xl transition-all duration-500 origin-top overflow-y-auto ${
            mobileMenuOpen ? 'max-h-[calc(100vh-100px)] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col py-4 px-6 gap-1">
            {/* INICIO */}
            <li>
              <Link href="/" className={`block font-bold text-sm py-3 border-b border-white/5 transition-colors uppercase tracking-widest ${isActive('/') ? 'text-[#FFC107]' : 'text-white/80 hover:text-[#FFC107]'}`}>
                Inicio
              </Link>
            </li>

            {/* PRODUCTOS */}
            <li>
              <Link href="/productos" className={`block font-bold text-sm py-3 border-b border-white/5 transition-colors uppercase tracking-widest ${isActive('/productos') ? 'text-[#FFC107]' : 'text-white/80 hover:text-[#FFC107]'}`}>
                Productos
              </Link>
            </li>

            {/* DISEÑADOR B2B */}
            <li>
              <Link
                href="/disenador"
                className={`flex items-center gap-2 font-black text-sm py-3 border-b border-white/5 transition-colors uppercase tracking-widest ${
                  isActive('/disenador') ? 'text-[#FFC107]' : 'text-white/80 hover:text-[#FFC107]'
                }`}
              >
                <Zap size={14} className="fill-current text-[#FFC107]" />
                Diseñador B2B
              </Link>
            </li>

            {/* NOSOTROS */}
            <li>
              <Link href="/nosotros" className={`block font-bold text-sm py-3 border-b border-white/5 transition-colors uppercase tracking-widest ${isActive('/nosotros') ? 'text-[#FFC107]' : 'text-white/80 hover:text-[#FFC107]'}`}>
                Nosotros
              </Link>
            </li>

            {/* CONTACTO */}
            <li>
              <Link href="/contacto" className={`block font-bold text-sm py-3 border-b border-white/5 transition-colors uppercase tracking-widest ${isActive('/contacto') ? 'text-[#FFC107]' : 'text-white/80 hover:text-[#FFC107]'}`}>
                Contacto
              </Link>
            </li>
            
            <li className="pt-6 pb-2">
              <Link href="/contacto" className="flex justify-center items-center bg-[#FFC107] text-[#04142B] font-extrabold tracking-widest py-3.5 rounded-full w-full hover:bg-white transition-colors uppercase text-xs">
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
