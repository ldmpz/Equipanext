import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollObserver from '../components/ScrollObserver';

export const metadata: Metadata = {
  title: 'EQUIPANEXT - Uniformes Industriales Profesionales',
  description: 'Ingeniería en indumentaria industrial. Proveemos soluciones textiles de alto rendimiento para entornos operativos exigentes.',
  icons: {
    icon: '/assets/images/marca/Favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Fonts and Icon sets */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@200..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-[#04142B] text-[#FFFFFF] font-sans antialiased overflow-x-hidden selection:bg-[#FFC107]/20 selection:text-[#04142B]">
        <ScrollObserver />
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden relative">
          <Navbar />
          <main className="flex-grow w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
