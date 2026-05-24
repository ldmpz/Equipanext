'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/productos', label: 'Productos' },
    { href: '/diseñador', label: 'Diseñador B2B' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'navbar-scrolled' : ''
      }`}
      id="navbar"
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto navbar-inner-container">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img alt="EQUIPANEXT" className="w-auto object-contain navbar-logo-img" src="/assets/images/marca/Logo.png"/>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-gutter items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={`nav-link font-label-caps text-label-caps uppercase px-3 py-2 transition-all duration-300 ${
                    isActive ? 'nav-link-active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Trailing Primary Action */}
        <div className="hidden md:block">
          <Link href="/contacto" className="btn-primary inline-flex items-center gap-2 bg-primary text-on-primary font-label-caps text-label-caps uppercase px-6 py-3 rounded">
            <span className="material-symbols-outlined text-[18px]">forum</span>
            Cotizar WhatsApp
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-on-surface-variant p-2 hover:bg-surface-container-low rounded-lg transition-colors" 
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-surface-container-lowest border-t border-outline-variant absolute w-full left-0 shadow-lg ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col py-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="block font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-container-low px-margin-mobile py-4 uppercase">
                {link.label}
              </Link>
            </li>
          ))}
          <li className="px-margin-mobile pt-4 pb-2 border-t border-outline-variant/50">
            <Link href="/contacto" className="btn-primary flex justify-center items-center gap-2 bg-primary text-on-primary font-label-caps text-label-caps uppercase px-6 py-3 rounded w-full">
              <span className="material-symbols-outlined text-[18px]">forum</span>
              Cotizar WhatsApp
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
