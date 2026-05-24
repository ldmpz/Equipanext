'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top immediately on route change
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Set home-page class on body if path is root
    if (pathname === '/') {
      document.body.classList.add('home-page');
    } else {
      document.body.classList.remove('home-page');
    }

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

    const animatableElements = document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .reveal-up'
    );
    
    animatableElements.forEach(element => {
      if (!element.classList.contains('visible')) {
        animationObserver.observe(element);
      }
    });

    const timer = setTimeout(() => {
      animatableElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('visible');
        }
      });
    }, 150);

    return () => {
      animationObserver.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
