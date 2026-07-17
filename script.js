    (function () {
      'use strict';

      const nav = document.getElementById('nav');
      const onScroll = () =>
        nav.classList.toggle('is-scrolled', window.scrollY > 48);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      const reveals = document.querySelectorAll('[data-reveal]');
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add('is-revealed');
                io.unobserve(e.target);
              }
            });
          },
          { threshold: 0.12 }
        );
        reveals.forEach((el) => io.observe(el));
      } else {
        reveals.forEach((el) => el.classList.add('is-revealed'));
      }

      const toggle = document.getElementById('navToggle');
      const navLinks = document.querySelector('.nav__links');
      const navCta   = document.querySelector('.nav__cta');
      if (toggle) {
        toggle.addEventListener('click', () => {
          const open = toggle.getAttribute('aria-expanded') === 'true';
          toggle.setAttribute('aria-expanded', String(!open));

          if (navLinks) navLinks.style.display = open ? '' : 'flex';
          if (navCta)   navCta.style.display   = open ? '' : 'flex';
        });
      }

    })();