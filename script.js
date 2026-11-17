/* ============================================================
   Baraka Universal — interactions
   ============================================================ */
(function () {
  'use strict';

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Year ---------- */
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header: sticky state + scroll progress ---------- */
  const header   = $('#header');
  const progress = $('#progress');
  const toTop    = $('#toTop');

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('is-stuck', y > 40);
    toTop.classList.toggle('is-on', y > 700);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
  }
  let ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () { onScroll(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  const burger = $('#burger');
  const nav    = $('#nav');
  function closeNav() {
    nav.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  burger.addEventListener('click', function () {
    const open = nav.classList.toggle('is-open');
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  $$('#nav a').forEach(a => a.addEventListener('click', closeNav));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });

  /* ---------- Scroll reveal ---------- */
  const revealEls = $$('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const siblings = Array.from(entry.target.parentElement.children)
          .filter(n => n.classList.contains('reveal'));
        const i = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = Math.min(i, 6) * 80 + 'ms';
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(el => io.observe(el));
  }

  /* ---------- Count-up stats ---------- */
  function countUp(el) {
    const target = parseFloat(el.dataset.target) || 0;
    const suffix = el.dataset.suffix || '';
    if (reduced) { el.textContent = target + suffix; return; }
    const dur = 1600;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const counters = $$('.count');
  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { countUp(e.target); co.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => co.observe(el));
  } else {
    counters.forEach(countUp);
  }

  /* ---------- Skyline silhouette: layered build-in, back to front ---------- */
  const stageGroups = $$('.bp-stage');
  const stageLabels = $$('#stages span');
  if (stageGroups.length) {
    if (reduced) {
      stageGroups.forEach(g => g.classList.add('is-on'));
    } else {
      stageGroups.forEach(function (g, i) {
        setTimeout(function () {
          g.classList.add('is-on');
          stageLabels.forEach((s, j) => s.classList.toggle('is-active', j === i));
        }, 260 + i * 240);
      });
    }
  }

  /* ---------- Marquee: duplicate track for a seamless loop ---------- */
  const track = $('#marqueeTrack');
  if (track) track.innerHTML += track.innerHTML;

  /* ---------- Project filtering ---------- */
  const filterBtns = $$('.filter');
  const cards      = $$('.pjcard');
  const countEl    = $('#filterCount');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const f = btn.dataset.filter;
      filterBtns.forEach(function (b) {
        const on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-selected', String(on));
      });
      let shown = 0;
      cards.forEach(function (card) {
        const match = f === 'all' || (card.dataset.cat || '').split(' ').indexOf(f) > -1;
        card.classList.toggle('is-hidden', !match);
        if (match) {
          shown++;
          card.classList.remove('is-in');
          void card.offsetWidth;
          card.style.transitionDelay = Math.min(shown, 6) * 55 + 'ms';
          card.classList.add('is-in');
        }
      });
      if (countEl) countEl.textContent = shown + ' / ' + cards.length + ' projects';
    });
  });

  /* ---------- Active nav link on scroll ---------- */
  const navLinks = $$('#nav a[href^="#"]');
  const sections = navLinks
    .map(a => document.getElementById(a.getAttribute('href').slice(1)))
    .filter(Boolean);
  if (sections.length && 'IntersectionObserver' in window) {
    const so = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle('is-current', a.getAttribute('href') === '#' + e.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => so.observe(s));
  }

  /* ---------- Contact form ---------- */
  const form   = $('#contactForm');
  const status = $('#formStatus');

  function setError(name, msg) {
    const input = form.elements[name];
    const field = input.closest('.field');
    const err   = $('.err[data-for="' + name + '"]', form);
    field.classList.toggle('has-error', Boolean(msg));
    if (err) err.textContent = msg || '';
    return !msg;
  }

  if (form) {
    ['name', 'email', 'service', 'message'].forEach(function (n) {
      const el = form.elements[n];
      if (el) el.addEventListener('input', () => setError(n, ''));
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent = '';
      status.className = 'formstatus';

      // honeypot
      if (form.elements['company_website'].value) return;

      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      let ok = true;
      ok = setError('name', form.elements['name'].value.trim().length < 2 ? 'Please enter your full name.' : '') && ok;
      ok = setError('email', !emailRe.test(form.elements['email'].value.trim()) ? 'Please enter a valid email address.' : '') && ok;
      ok = setError('service', !form.elements['service'].value ? 'Please select a service.' : '') && ok;
      ok = setError('message', form.elements['message'].value.trim().length < 15 ? 'Please describe your project (15+ characters).' : '') && ok;

      if (!ok) {
        status.textContent = 'Please correct the highlighted fields.';
        status.classList.add('is-bad');
        return;
      }

      const btn = $('button[type="submit"]', form);
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = 'Sending…';

      /* ---------------------------------------------------------
         DEMO SUBMIT — no backend wired up.
         Replace this block with a real POST, e.g.:

         fetch('/api/enquiry', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(Object.fromEntries(new FormData(form)))
         })

         …or point the <form> at Formspree / Web3Forms / EmailJS
         so briefs land in info@baraka-ksa.com.
      --------------------------------------------------------- */
      setTimeout(function () {
        btn.disabled = false;
        btn.innerHTML = original;
        form.reset();
        status.textContent = 'Thank you — your brief has been received. We respond within 24 hours.';
        status.classList.add('is-ok');
      }, 900);
    });
  }
})();
