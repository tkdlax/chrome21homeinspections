document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');

  // Scroll-aware navigation
  const handleNavScroll = () => {
    if (!nav) return;
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  handleNavScroll();
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // Smooth scrolling for internal anchor links with offset for fixed nav
  const navHeight = () => (nav ? nav.offsetHeight : 0);

  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();

      const rect = target.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const offset = navHeight();
      const targetY = rect.top + scrollTop - offset;

      window.scrollTo({
        top: targetY,
        behavior: 'smooth',
      });
    });
  });

  // Scroll-triggered fade-in animations using IntersectionObserver
  const revealSelectors = [
    '.problem-card',
    '.credential-card',
    '.step',
    '.inspect-item',
    '.stakes-list li',
  ];

  const revealElements = Array.from(
    document.querySelectorAll(revealSelectors.join(','))
  );

  revealElements.forEach((el, index) => {
    el.classList.add('reveal-on-scroll');
    el.style.transitionDelay = `${(index % 4) * 0.06}s`;
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: if IntersectionObserver is not supported, show all elements
    revealElements.forEach(el => {
      el.classList.add('visible');
    });
  }

  // Optional active section tracking (logs for now)
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              // Placeholder for future nav highlighting
              console.debug('Active section:', id);
            }
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach(section => sectionObserver.observe(section));
  }
});

