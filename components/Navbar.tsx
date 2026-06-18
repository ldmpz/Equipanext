'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Search, User, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHomeActive = pathname === '/';
  const isNosotrosActive = pathname === '/nosotros';
  const isProductosActive = pathname === '/productos';
  const isServiciosActive = pathname === '/servicios';
  const isContactoActive = pathname === '/contacto';

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
      {/* 1. Main Navigation Bar - Always Dark Brand Color */}
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
          <ul className="hidden md:flex gap-8 items-center z-50">
            {/* INICIO */}
            <li>
              <Link 
                href="/"
                className={`relative font-bold text-xs tracking-widest uppercase transition-colors duration-300 py-2 ${
                  isHomeActive ? 'text-[#FFC107]' : 'text-white hover:text-[#FFC107]'
                }`}
              >
                Inicio
                {isHomeActive && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-[2px] rounded-full bg-[#FFC107]"></span>
                )}
              </Link>
            </li>

            {/* NOSOTROS */}
            <li>
              <Link 
                href="/nosotros"
                className={`relative font-bold text-xs tracking-widest uppercase transition-colors duration-300 py-2 ${
                  isNosotrosActive ? 'text-[#FFC107]' : 'text-white hover:text-[#FFC107]'
                }`}
              >
                Nosotros
                {isNosotrosActive && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-[2px] rounded-full bg-[#FFC107]"></span>
                )}
              </Link>
            </li>

            {/* PRODUCTOS Dropdown */}
            <li className="relative group">
              <Link 
                href="/productos"
                className={`inline-flex items-center gap-1 font-bold text-xs tracking-widest uppercase transition-colors duration-300 py-2 ${
                  isProductosActive ? 'text-[#FFC107]' : 'text-white hover:text-[#FFC107]'
                }`}
              >
                Productos
                <ChevronDown size={12} className="opacity-75 group-hover:text-[#FFC107] transition-transform group-hover:rotate-180 duration-300" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl bg-[#071A33] border border-white/10 shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 z-50">
                <Link href="/productos" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/95 hover:bg-white/5 hover:text-[#FFC107] transition-all">Todos los Productos</Link>
                <Link href="/productos" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/95 hover:bg-white/5 hover:text-[#FFC107] transition-all">Chalecos de Seguridad</Link>
                <Link href="/productos" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/95 hover:bg-white/5 hover:text-[#FFC107] transition-all">Overoles Industriales</Link>
                <Link href="/disenador" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FFC107] hover:bg-white/5 transition-all">Diseñador B2B ⚡</Link>
              </div>
            </li>

            {/* CATEGORÍAS Dropdown */}
            <li className="relative group">
              <Link 
                href="/#categorias"
                className="inline-flex items-center gap-1 font-bold text-xs tracking-widest uppercase transition-colors duration-300 py-2 text-white hover:text-[#FFC107]"
              >
                Categorías
                <ChevronDown size={12} className="opacity-75 group-hover:text-[#FFC107] transition-transform group-hover:rotate-180 duration-300" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-xl bg-[#071A33] border border-white/10 shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 z-50">
                <Link href="/productos" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/95 hover:bg-white/5 hover:text-[#FFC107] transition-all">Seguridad Industrial</Link>
                <Link href="/productos" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/95 hover:bg-white/5 hover:text-[#FFC107] transition-all">Gastronomía</Link>
                <Link href="/productos" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/95 hover:bg-white/5 hover:text-[#FFC107] transition-all">Salud</Link>
                <Link href="/productos" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/95 hover:bg-white/5 hover:text-[#FFC107] transition-all">Industrial</Link>
              </div>
            </li>

            {/* CONTACTO */}
            <li>
              <Link 
                href="/contacto"
                className={`relative font-bold text-xs tracking-widest uppercase transition-colors duration-300 py-2 ${
                  isContactoActive ? 'text-[#FFC107]' : 'text-white hover:text-[#FFC107]'
                }`}
              >
                Contacto
                {isContactoActive && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-[2px] rounded-full bg-[#FFC107]"></span>
                )}
              </Link>
            </li>
          </ul>

          {/* Desktop Right Side Commerce Icons & Action */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4 text-white">
              <button aria-label="Buscar" className="hover:text-[#FFC107] transition-colors p-1" title="Buscar">
                <Search className="w-[18px] h-[18px]" />
              </button>
              <Link href="/contacto" aria-label="Mi Perfil" className="hover:text-[#FFC107] transition-colors p-1" title="Mi Cuenta">
                <User className="w-[18px] h-[18px]" />
              </Link>
              <Link href="/productos" aria-label="Carrito" className="hover:text-[#FFC107] transition-colors p-1 relative" title="Carrito">
                <ShoppingCart className="w-[18px] h-[18px]" />
                <span className="absolute -top-1.5 -right-1.5 bg-[#FFC107] text-[#071A33] text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border border-[#071A33]">
                  0
                </span>
              </Link>
            </div>
            <Link href="/contacto" className="bg-[#FFC107] text-[#071A33] text-[11px] font-extrabold tracking-widest px-6 py-2.5 rounded-full hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] uppercase">
              Cotizar
            </Link>
          </div>

          {/* Mobile Menu Toggle & Icons */}
          <div className="flex md:hidden items-center gap-3">
            <Link href="/productos" aria-label="Carrito" className="text-white hover:text-[#FFC107] transition-colors p-1 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#FFC107] text-[#071A33] text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                0
              </span>
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

        {/* Mobile Navigation Dropdown */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-[#071A33]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all duration-500 origin-top overflow-hidden ${
            mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col py-4 px-6 gap-1">
            <li>
              <Link 
                href="/" 
                className={`block font-bold text-sm py-3 border-b border-white/5 transition-colors uppercase tracking-widest ${
                  isHomeActive ? 'text-[#FFC107]' : 'text-white/80 hover:text-[#FFC107]'
                }`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                href="/nosotros" 
                className={`block font-bold text-sm py-3 border-b border-white/5 transition-colors uppercase tracking-widest ${
                  isNosotrosActive ? 'text-[#FFC107]' : 'text-white/80 hover:text-[#FFC107]'
                }`}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link 
                href="/productos" 
                className={`block font-bold text-sm py-3 border-b border-white/5 transition-colors uppercase tracking-widest ${
                  isProductosActive ? 'text-[#FFC107]' : 'text-white/80 hover:text-[#FFC107]'
                }`}
              >
                Productos
              </Link>
            </li>
            <li>
              <Link 
                href="/#categorias" 
                className="block font-bold text-sm py-3 border-b border-white/5 transition-colors uppercase tracking-widest text-white/80 hover:text-[#FFC107]"
              >
                Categorías
              </Link>
            </li>
            <li>
              <Link 
                href="/contacto" 
                className={`block font-bold text-sm py-3 border-b border-white/5 transition-colors uppercase tracking-widest ${
                  isContactoActive ? 'text-[#FFC107]' : 'text-white/80 hover:text-[#FFC107]'
                }`}
              >
                Contacto
              </Link>
            </li>
            <li className="pt-6 pb-2">
              <Link 
                href="/contacto" 
                className="flex justify-center items-center bg-[#FFC107] text-[#071A33] font-extrabold tracking-widest py-3.5 rounded-full w-full hover:bg-white transition-colors uppercase text-xs"
              >
                Cotizar Ahora
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
