/* Platfourm — Home page interactions */
(function () {
  'use strict';

  /* ---------- Sticky header ---------- */
  var header = document.getElementById('header');

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  var burger = document.getElementById('burger');

  burger.addEventListener('click', function () {
    var open = header.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  document.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      header.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Hero slideshow ---------- */
  var slides = Array.prototype.slice.call(document.querySelectorAll('.hero__slide'));
  var dotsWrap = document.getElementById('heroDots');
  var captionText = document.querySelector('.hero__caption-text');
  var captions = [
    'Genesian Theatre — Grand Staircase',
    'Genesian Theatre — Foyer & Bar',
    'Genesian Theatre — Auditorium'
  ];
  var current = 0;
  var timer = null;
  var INTERVAL = 6000;

  var dots = slides.map(function (_, i) {
    var dot = document.createElement('button');
    dot.className = 'hero__dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', 'Show slide ' + (i + 1));
    dot.addEventListener('click', function () {
      goTo(i);
      restart();
    });
    dotsWrap.appendChild(dot);
    return dot;
  });

  function goTo(index) {
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
    if (captionText) captionText.textContent = captions[current];
  }

  function restart() {
    clearInterval(timer);
    timer = setInterval(function () { goTo(current + 1); }, INTERVAL);
  }
  restart();

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Active nav link on scroll ---------- */
  var sections = ['about', 'services', 'projects', 'contact']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  var navLinks = document.querySelectorAll('.nav__link');

  function highlightNav() {
    var pos = window.scrollY + window.innerHeight * 0.35;
    var activeId = '';
    sections.forEach(function (sec) {
      if (pos >= sec.offsetTop) activeId = sec.id;
    });
    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      var isActive = activeId ? href === '#' + activeId : href === 'index.html';
      link.classList.toggle('is-active', isActive);
    });
  }
  window.addEventListener('scroll', highlightNav, { passive: true });

  /* ---------- Underline hover lock ----------
     Mirrors the reference theme: on mouseenter the link keeps a
     .hovered class for 600ms so the dual-line underline animation
     always completes, even when the pointer only brushes past.
     (Nav and footer menu links use the simple slide-in underline
     instead, so they are not included.) */
  var hoverLinks = document.querySelectorAll(
    '.btn--ghost, .header__phone, .footer__line-link, .footer__arrow-link'
  );

  Array.prototype.forEach.call(hoverLinks, function (el) {
    el.addEventListener('mouseenter', function () {
      if (el.classList.contains('hovered')) return;
      el.classList.add('hovered');
      setTimeout(function () { el.classList.remove('hovered'); }, 600);
    });
  });

  /* ---------- Footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
