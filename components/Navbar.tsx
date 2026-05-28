'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

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

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/productos', label: 'Productos' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/disenador', label: 'Diseñador B2B' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ];

  const isTransparentTop = !scrolled && (pathname === '/' || pathname === '/productos' || pathname === '/servicios' || pathname === '/nosotros');

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isTransparentTop 
          ? 'bg-transparent border-b border-transparent py-6'
          : 'bg-white border-b border-[#EAECEF] shadow-sm py-4' 
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            alt="EQUIPANEXT" 
            width={180}
            height={96}
            className={`w-auto object-contain transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'h-14' : 'h-24'} opacity-90 group-hover:opacity-100 drop-shadow-md origin-left`} 
            src="/assets/images/marca/Logo.png"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={`relative font-medium text-sm tracking-wide transition-colors duration-300 ${
                    isTransparentTop
                      ? (isActive ? 'text-white' : 'text-white/70 hover:text-[#0057FF]')
                      : (isActive ? 'text-on-background' : 'text-on-surface-variant hover:text-[#0057FF]')
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className={`absolute -bottom-1.5 left-0 w-full h-[2px] rounded-full transition-colors duration-300 ${isTransparentTop ? 'bg-white' : 'bg-on-background'}`}></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Trailing Primary Action */}
        <div className="hidden md:block">
          <Link href="/contacto" className={`inline-flex items-center gap-2 text-sm font-semibold tracking-wide px-5 py-2.5 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isTransparentTop 
              ? 'bg-white text-[#1B1F24] hover:bg-white/90' 
              : 'bg-on-background text-surface hover:bg-[#000000]'
          }`}>
            Cotizar
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 -mr-2 rounded-full transition-colors ${
            isTransparentTop && !mobileMenuOpen
              ? 'text-white hover:bg-white/10' 
              : 'text-on-background hover:bg-surface-container-low'
          }`} 
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-2xl border-b border-outline-variant shadow-2xl transition-all duration-500 origin-top overflow-hidden ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col py-4 px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="block font-medium text-on-surface-variant hover:text-on-background py-4 border-b border-outline-variant/30 text-lg">
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-6 pb-2">
            <Link href="/contacto" className="flex justify-center items-center gap-2 bg-on-background text-surface font-semibold tracking-wide px-6 py-4 rounded-xl w-full hover:bg-[#000000] transition-colors">
              Cotizar Ahora
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

