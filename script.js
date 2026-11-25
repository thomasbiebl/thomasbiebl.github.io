document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('nav');
    const links = document.querySelectorAll('.nav-link');

    // Jahr im Footer
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    // Header-Rahmen beim Scrollen
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Mobiles Menü
    const closeMenu = () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Menü öffnen');
    };
    toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    });
    links.forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

    if (!('IntersectionObserver' in window)) return;

    // Aktiven Navigationspunkt markieren
    const sections = [...links].map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
        });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => navObserver.observe(s));

    // Sanftes Einblenden
    const items = document.querySelectorAll('.section h2, .card, .timeline li, .hobby-list li, .contact-box');
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    items.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
});
