import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Productos from './pages/Productos.jsx';
import Disenador from './pages/Disenador.jsx';
import Servicios from './pages/Servicios.jsx';
import Contacto from './pages/Contacto.jsx';

function ScrollToTopAndAnimate() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately on route change
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Set home-page class on body if path is root
    if (pathname === '/') {
      document.body.classList.add('home-page');
    } else {
      document.body.classList.remove('home-page');
    }

    // Set up intersection observer for animations
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.05
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe animatable elements
    const animatableElements = document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .reveal-up'
    );
    
    animatableElements.forEach(element => {
      if (!element.classList.contains('visible')) {
        animationObserver.observe(element);
      }
    });

    // Fallback/immediate check for elements in viewport
    const timer = setTimeout(() => {
      animatableElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('visible');
        }
      });
    }, 100);

    return () => {
      animationObserver.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTopAndAnimate />
      <div className="flex flex-col min-h-screen bg-background text-on-background">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/diseñador" element={<Disenador />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
