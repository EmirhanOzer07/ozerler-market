/* =============================================
   ÖZERLER MARKET — main.js
   Age gate, open/closed, cookie banner,
   nav scroll, back-to-top, scroll reveal.
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  initAgeGate();
  initCookieBanner();
  initNav();
  initOpenStatus();
  initBackToTop();
  initScrollReveal();
  initMobileDrawer();
});

/* ---- Age Gate ---- */
function initAgeGate() {
  const gate = document.getElementById('age-gate');
  if (!gate) return;

  if (sessionStorage.getItem('yas_onaylandi') === '1') {
    gate.style.display = 'none';
    return;
  }

  gate.style.display = 'flex';

  document.getElementById('yas-evet')?.addEventListener('click', () => {
    sessionStorage.setItem('yas_onaylandi', '1');
    gate.classList.add('hiding');
    setTimeout(() => { gate.style.display = 'none'; }, 500);
  });

  document.getElementById('yas-hayir')?.addEventListener('click', () => {
    window.location.href = 'https://www.google.com';
  });
}

/* ---- Cookie Banner ---- */
function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  if (localStorage.getItem('cerez_kabul') === '1') return;

  setTimeout(() => banner.classList.add('visible'), 1500);

  document.getElementById('cerez-kabul')?.addEventListener('click', () => {
    localStorage.setItem('cerez_kabul', '1');
    banner.classList.remove('visible');
  });
}

/* ---- Nav Scroll Effect ---- */
function initNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---- Mobile Drawer ---- */
function initMobileDrawer() {
  const toggle  = document.getElementById('menu-toggle');
  const close   = document.getElementById('drawer-close');
  const drawer  = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');
  if (!toggle || !drawer) return;

  const open  = () => { drawer.classList.add('open'); overlay?.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const closeD = () => { drawer.classList.remove('open'); overlay?.classList.remove('open'); document.body.style.overflow = ''; };

  toggle.addEventListener('click', open);
  close?.addEventListener('click', closeD);
  overlay?.addEventListener('click', closeD);
}

/* ---- Open / Closed Status ---- */
function initOpenStatus() {
  const el = document.getElementById('open-status');
  if (!el) return;

  const lang = document.documentElement.lang === 'en' ? 'en' : 'tr';

  function fmt(mins) {
    const h = Math.floor(mins / 60), m = mins % 60;
    if (lang === 'en') return h > 0 ? `${h}h ${m}m` : `${m} min`;
    return h > 0 ? `${h} sa ${m} dk` : `${m} dk`;
  }

  function update() {
    const now = new Date();
    const total = now.getHours() * 60 + now.getMinutes();
    // Open 07:00–02:00 next day
    const isOpen = total >= 420 || total < 120;

    let text;
    if (isOpen) {
      const minsToClose = total >= 420 ? (26 * 60 - total) : (120 - total);
      text = lang === 'en'
        ? `Open · closes in ${fmt(minsToClose)}`
        : `Açık · ${fmt(minsToClose)} sonra kapanıyor`;
    } else {
      const minsToOpen = total < 420 ? (420 - total) : (24 * 60 - total + 420);
      text = lang === 'en'
        ? `Closed · opens in ${fmt(minsToOpen)}`
        : `Kapalı · ${fmt(minsToOpen)} sonra açılıyor`;
    }

    el.className = `status-badge ${isOpen ? 'open' : 'closed'}`;
    el.innerHTML = `<span class="status-dot ${isOpen ? 'open' : 'closed'}"></span><span>${text}</span>`;
  }

  update();
  setInterval(update, 60000);
}

/* ---- Back to Top ---- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---- Scroll Reveal ---- */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach((el) => observer.observe(el));
}

/* ---- WhatsApp Float ---- */
// Rendered in HTML, no JS needed. Lang-aware message built inline.
