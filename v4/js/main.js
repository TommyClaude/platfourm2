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

  /* ---------- Project detail modal ---------- */
  var PROJECTS = {
    'genesian-theatre': {
      title: 'Genesian Theatre',
      location: 'Sydney, NSW',
      tag: 'Commercial Fit-out',
      desc: 'A heritage theatre transformation in the heart of Sydney. Platfourm delivered bespoke timber joinery throughout — the grand staircase, bar and foyer — pairing rich timber panelling and brass detailing with a modern teal palette, all while meeting the compliance demands of a working performance venue.',
      images: 10,
    },
    'new-build-duplex': {
      title: 'New Build Duplex',
      location: 'Mudgee, NSW',
      tag: 'Residential · New Build',
      desc: 'Platfourm was entrusted with the management of this project, handling every stage — from the concept phase and design approval through construction and subdivision to its completion — delivering a pair of crisp, contemporary homes in regional NSW.',
      images: 6,
    },
    'full-home-renovation': {
      title: 'Full Home Renovation',
      location: 'Central Coast, NSW',
      tag: 'Residential · Renovation',
      desc: 'A full remodel of every internal space — bathroom, kitchen and bedrooms — together with an additional carport. Platfourm took a tired weatherboard cottage back to frame and rebuilt it into a bright, modern family home.',
      images: 4,
    },
    'sydney-airport-terminal': {
      title: 'Sydney Airport Terminal',
      location: 'Mascot, NSW',
      tag: 'Commercial · Airport',
      desc: 'A charger upgrade rolled out across the T2 food court at Sydney Airport. Platfourm retrofitted power and USB charging into the communal timber benches and delivered the works live, in a high-traffic terminal, with minimal disruption to travellers and retailers.',
      images: 4,
    },
    'redland-grammar-school': {
      title: 'Redland Grammar School',
      location: 'Cremorne, NSW',
      tag: 'Education',
      desc: 'Classroom and corridor upgrades at the Cremorne campus — acoustic wall panelling, joinery, storage and new floor finishes. The works were programmed around the school calendar to keep learning spaces available throughout.',
      images: 4,
    },
    'kindalin-childcare': {
      title: 'Kindalin Childcare',
      location: 'Rouse Hill, NSW',
      tag: 'Education · Joinery',
      desc: 'A custom joinery fit-out for a new childcare centre in Rouse Hill. Curved timber batten screens, plywood cabinetry and bespoke kitchen and storage were crafted for a bright, tactile and hard-wearing learning environment.',
      images: 6,
    },
    'elanora-aged-care': {
      title: 'Elanora Aged Care',
      location: 'Elanora, NSW',
      tag: 'Aged Care',
      desc: 'A common-area refurbishment for an aged-care facility — banquette seating, custom shelving and warm, accessible finishes designed for resident comfort, easy movement and everyday use.',
      images: 1,
    },
  };

  var modal = document.getElementById('projectModal');

  if (modal) {
    var modalTag = document.getElementById('modalTag');
    var modalTitle = document.getElementById('modalTitle');
    var modalLocation = document.getElementById('modalLocation');
    var modalDesc = document.getElementById('modalDesc');
    var modalGallery = document.getElementById('modalGallery');
    var modalScroll = modal.querySelector('.modal__scroll');
    var lastFocused = null;

    function openModal(slug) {
      var p = PROJECTS[slug];
      if (!p) return;
      lastFocused = document.activeElement;

      modalTag.textContent = p.tag;
      modalTitle.textContent = p.title;
      modalLocation.textContent = p.location;
      modalDesc.textContent = p.desc;

      var html = '';
      for (var i = 1; i <= p.images; i++) {
        html +=
          '<img src="assets/img/projects/' + slug + '-' + i + '.jpg" alt="' +
          p.title + ' — image ' + i + '" loading="lazy">';
      }
      modalGallery.innerHTML = html;
      modalGallery.classList.toggle('modal__gallery--single', p.images < 2);

      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      if (modalScroll) modalScroll.scrollTop = 0;
      var closeBtn = modal.querySelector('.modal__close');
      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      if (!modal.classList.contains('is-open')) return;
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    }

    document.querySelectorAll('.project-card[data-project]').forEach(function (card) {
      card.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(card.getAttribute('data-project'));
      });
    });

    modal.querySelectorAll('[data-modal-close]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
