document.addEventListener('DOMContentLoaded', () => {
  console.log('EQUIPANEXT Script Initialized.');

  // ==========================================
  // 1. DYNAMIC NAVIGATION HIGHLIGHTING
  // ==========================================
  const highlightActiveLink = () => {
    // Get the current path, fallback to 'index.html' if it ends in '/'
    const path = window.location.pathname;
    let activeFilename = path.split('/').pop() || 'index.html';
    
    // Support different path notations or missing extensions
    if (activeFilename === '') {
      activeFilename = 'index.html';
    }

    // Find all navigation links in desktop & mobile menus
    const navSelectors = [
      'nav a', 
      '#navbar a', 
      '#mobile-menu a',
      'ul.hidden a'
    ];
    
    const navLinks = document.querySelectorAll(navSelectors.join(', '));
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:')) return;
      
      const linkFilename = href.split('/').pop() || 'index.html';
      
      const isHomeActive = (activeFilename === 'index.html' || activeFilename === '') && 
                           (linkFilename === 'index.html' || linkFilename === 'index.html');
      
      const isPageActive = activeFilename === linkFilename;

      // Check if it's the Whatsapp or Callout button; do not apply active text styles to button styles
      if (link.classList.contains('btn-primary') || link.classList.contains('bg-primary') || link.classList.contains('technical-shadow')) {
        return;
      }

      if (isHomeActive || isPageActive) {
        // Active state styles matching tailwind layout
        link.classList.add('text-primary', 'dark:text-inverse-primary', 'nav-link-active');
        link.classList.remove('text-on-surface-variant', 'dark:text-surface-variant', 'text-on-secondary-fixed-variant', 'border-b-2', 'border-primary');
      } else {
        // Reset inactive styles
        link.classList.remove('text-primary', 'dark:text-inverse-primary', 'nav-link-active', 'border-b-2', 'border-primary');
        link.classList.add('text-on-surface-variant', 'dark:text-surface-variant');
      }
    });
  };

  // ==========================================
  // 2. MOBILE MENU CONTROLLER
  // ==========================================
  const initMobileMenu = () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
        
        // Update menu icon (hamburger vs close)
        const iconSpan = mobileMenuBtn.querySelector('.material-symbols-outlined');
        if (iconSpan) {
          if (mobileMenu.classList.contains('hidden')) {
            iconSpan.textContent = 'menu';
          } else {
            iconSpan.textContent = 'close';
          }
        }
      });
      
      // Close mobile menu when clicking any link
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          const iconSpan = mobileMenuBtn.querySelector('.material-symbols-outlined');
          if (iconSpan) iconSpan.textContent = 'menu';
        });
      });

      // Close menu when clicking outside of it
      document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
          mobileMenu.classList.add('hidden');
          const iconSpan = mobileMenuBtn.querySelector('.material-symbols-outlined');
          if (iconSpan) iconSpan.textContent = 'menu';
        }
      });
    }
  };

  // ==========================================
  // 3. NAVBAR SCROLL EFFECT
  // ==========================================
  const initNavbarScroll = () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          navbar.classList.add('navbar-scrolled');
        } else {
          navbar.classList.remove('navbar-scrolled');
        }
      };

      window.addEventListener('scroll', handleScroll);
      // Run once at start to capture initial scroll state
      handleScroll();
    }
  };

  // ==========================================
  // 4. INTERSECTION OBSERVER ANIMATIONS
  // ==========================================
  const initAnimations = () => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px', // Trigger slightly before element is fully visible
      threshold: 0.05
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, observerOptions);

    // Track all animatable classes: fade-in-up, reveal-up, etc.
    const animatableElements = document.querySelectorAll('.fade-in-up, .reveal-up');
    
    animatableElements.forEach(element => {
      animationObserver.observe(element);
    });
    
    // Fallback: Trigger animation immediately for items already in the viewport
    setTimeout(() => {
      animatableElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('visible');
        }
      });
    }, 100);
  };

  // Initialize all features
  highlightActiveLink();
  initMobileMenu();
  initNavbarScroll();
  initAnimations();
});
