/* ==========================================================================
   PLATFOURM — v5 "Blueprint Noir" · interactions
   Vanilla JS · rAF + IntersectionObserver · 60fps target · degrades gracefully
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;
  var prefersReduced = false;
  try {
    prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) {}
  var finePointer = false;
  try {
    finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  } catch (e) {}

  var lerp = function (a, b, n) { return a + (b - a) * n; };
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };

  /* ======================================================================
     Preloader — counting % then curtain lift into the hero
     ====================================================================== */
  (function preloader() {
    var pre = document.getElementById('preloader');
    var num = document.getElementById('preNum');
    var fill = document.getElementById('preFill');

    function reveal() {
      body.classList.add('hero-in');
      // startHero is a var-assigned fn defined later; in the reduced-motion
      // path reveal() runs synchronously before that assignment — the slideshow
      // is intentionally skipped there (static first slide), so guard the call.
      if (typeof startHero === 'function') startHero();
    }

    // failsafe: never leave hero content hidden
    var failsafe = setTimeout(reveal, 4000);

    if (!pre || prefersReduced) {
      clearTimeout(failsafe);
      if (pre) pre.style.display = 'none';
      reveal();
      return;
    }

    var pct = 0;
    var start = null;
    var DURATION = 1700;

    function step(ts) {
      if (start === null) start = ts;
      var t = clamp((ts - start) / DURATION, 0, 1);
      // ease-out
      var eased = 1 - Math.pow(1 - t, 2.2);
      pct = Math.round(eased * 100);
      if (num) num.textContent = pct;
      if (fill) fill.style.width = pct + '%';
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        setTimeout(function () {
          pre.classList.add('is-done');
          clearTimeout(failsafe);
          reveal();
          setTimeout(function () { if (pre) pre.style.display = 'none'; }, 950);
        }, 180);
      }
    }
    requestAnimationFrame(step);
  })();

  /* ======================================================================
     Custom cursor — dot + lagging ring, "View" over project rows
     ====================================================================== */
  (function cursor() {
    var el = document.getElementById('cursor');
    if (!el || !finePointer || prefersReduced) return;

    var dot = el.querySelector('.cursor__dot');
    var ring = el.querySelector('.cursor__ring');
    var label = el.querySelector('.cursor__label');
    var mx = window.innerWidth / 2, my = window.innerHeight / 2;
    var rx = mx, ry = my;
    var visible = false;

    body.classList.add('has-cursor');
    el.classList.add('is-hidden');

    window.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      if (!visible) { visible = true; el.classList.remove('is-hidden'); }
    }, { passive: true });

    document.addEventListener('mouseleave', function () {
      el.classList.add('is-hidden');
      visible = false;
    });

    document.addEventListener('mouseover', function (e) {
      var viewT = e.target.closest('[data-cursor]');
      if (viewT) {
        if (label) label.textContent = viewT.getAttribute('data-cursor') || 'View';
        el.classList.add('is-hover');
        el.classList.remove('is-link');
        return;
      }
      var link = e.target.closest('a, button, .pindex__row');
      if (link) { el.classList.add('is-link'); el.classList.remove('is-hover'); }
    });

    document.addEventListener('mouseout', function (e) {
      var to = e.relatedTarget;
      if (e.target.closest('[data-cursor]') && (!to || !to.closest || !to.closest('[data-cursor]'))) {
        el.classList.remove('is-hover');
      }
      if (e.target.closest('a, button, .pindex__row') && (!to || !to.closest || !to.closest('a, button, .pindex__row'))) {
        el.classList.remove('is-link');
      }
    });

    function raf() {
      rx = lerp(rx, mx, 0.18);
      ry = lerp(ry, my, 0.18);
      if (dot) dot.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
      if (ring) ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)';
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  })();

  /* ======================================================================
     Header — condense on scroll, hide on scroll-down / show on scroll-up
     ====================================================================== */
  (function header() {
    var el = document.getElementById('header');
    if (!el) return;
    var last = 0;

    function onScroll() {
      var y = window.scrollY;
      el.classList.toggle('is-scrolled', y > 40);
      if (y > 400 && y > last + 4 && !body.classList.contains('nav-open') && !body.classList.contains('modal-open')) {
        el.classList.add('is-hidden');
      } else if (y < last - 4 || y < 400) {
        el.classList.remove('is-hidden');
      }
      last = y;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

  /* ======================================================================
     Mobile nav
     ====================================================================== */
  (function nav() {
    var header = document.getElementById('header');
    var burger = document.getElementById('burger');
    if (!header || !burger) return;

    burger.addEventListener('click', function () {
      var open = header.classList.toggle('nav-open');
      body.classList.toggle('nav-open', open);
      // never let the auto-hide transform displace the fixed overlay
      if (open) header.classList.remove('is-hidden');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    document.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-open');
        body.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  })();

  /* ======================================================================
     Hero — living Ken Burns slideshow
     ====================================================================== */
  var startHero = (function () {
    var layers = Array.prototype.slice.call(document.querySelectorAll('.hero__layer'));
    var dotsWrap = document.getElementById('heroDots');
    var captionText = document.querySelector('.hero__caption-text');
    var captions = [
      'Genesian Theatre — Grand Staircase',
      'New Build Duplex — Mudgee, NSW',
      'Kindalin Childcare — Rouse Hill',
      'Sydney Airport — T2 Terminal',
      'Genesian Theatre — Auditorium',
      'Full Home Renovation — Central Coast'
    ];
    var current = 0, timer = null, dots = [];
    var INTERVAL = 5200;

    if (dotsWrap && layers.length > 1) {
      dots = layers.map(function (_, i) {
        var d = document.createElement('button');
        d.className = 'hero__dot' + (i === 0 ? ' is-active' : '');
        d.setAttribute('aria-label', 'Show slide ' + (i + 1));
        d.addEventListener('click', function () { goTo(i); restart(); });
        dotsWrap.appendChild(d);
        return d;
      });
    }

    function goTo(index) {
      if (!layers.length) return;
      layers[current].classList.remove('is-active');
      if (dots[current]) dots[current].classList.remove('is-active');
      current = (index + layers.length) % layers.length;
      layers[current].classList.add('is-active');
      if (dots[current]) dots[current].classList.add('is-active');
      if (captionText && captions[current]) captionText.textContent = captions[current];
    }

    function restart() {
      if (prefersReduced || layers.length < 2) return;
      clearInterval(timer);
      timer = setInterval(function () { goTo(current + 1); }, INTERVAL);
    }

    return function () { restart(); };
  })();

  /* ======================================================================
     Marquee — duplicate the group for a seamless loop
     ====================================================================== */
  (function marquee() {
    var track = document.getElementById('marqueeTrack');
    if (!track) return;
    var group = track.querySelector('.marquee__group');
    if (group) track.appendChild(group.cloneNode(true));
  })();

  /* ======================================================================
     Scroll reveals — line masks, clip images, translate fades
     ====================================================================== */
  (function reveals() {
    var els = document.querySelectorAll('.reveal, .reveal-lines, .reveal-clip');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        // gentle stagger for siblings inside grids / lists
        var parent = el.parentElement;
        if (parent && (parent.classList.contains('services__grid') || parent.classList.contains('pindex'))) {
          var sibs = Array.prototype.slice.call(parent.children);
          var idx = sibs.indexOf(el);
          el.style.transitionDelay = (Math.max(0, idx) * 0.06) + 's';
        }
        el.classList.add('is-visible');
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  })();

  /* ======================================================================
     Stats count-up
     ====================================================================== */
  (function counters() {
    var nodes = document.querySelectorAll('[data-count]');
    if (!nodes.length) return;

    function run(node) {
      var target = parseInt(node.getAttribute('data-count'), 10);
      var from = parseInt(node.getAttribute('data-from') || '0', 10);
      if (isNaN(target)) return;
      if (prefersReduced) { node.textContent = String(target); return; }
      var start = null, DUR = 1500;
      function tick(ts) {
        if (start === null) start = ts;
        var t = clamp((ts - start) / DUR, 0, 1);
        var eased = 1 - Math.pow(1 - t, 3);
        node.textContent = String(Math.round(from + (target - from) * eased));
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    if (!('IntersectionObserver' in window)) {
      nodes.forEach(run);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { run(entry.target); io.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    nodes.forEach(function (n) { io.observe(n); });
  })();

  /* ======================================================================
     Parallax — subtle drift on flagged figures
     ====================================================================== */
  (function parallax() {
    if (prefersReduced) return;
    var items = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
    if (!items.length) return;
    var ticking = false;

    function update() {
      var vh = window.innerHeight;
      items.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0;
        var offset = (r.top + r.height / 2) - vh / 2;
        var y = clamp(offset * speed * -1, -46, 46);
        el.style.transform = 'translate3d(0,' + y.toFixed(2) + 'px,0)';
      });
      ticking = false;
    }
    function onScroll() {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  })();

  /* ======================================================================
     Projects — floating preview follows cursor
     ====================================================================== */
  (function projectPreview() {
    var preview = document.getElementById('projectPreview');
    var rows = Array.prototype.slice.call(document.querySelectorAll('.pindex__row[data-img]'));
    if (!preview || !rows.length || !finePointer || prefersReduced) return;

    var mx = 0, my = 0, px = 0, py = 0, active = false, raf = null;

    rows.forEach(function (row) {
      row.addEventListener('mouseenter', function () {
        preview.style.backgroundImage = 'url("' + row.getAttribute('data-img') + '")';
        preview.classList.add('is-active');
        active = true;
        if (!raf) loop();
      });
      row.addEventListener('mouseleave', function () {
        preview.classList.remove('is-active');
        active = false;
      });
    });

    document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; }, { passive: true });

    function loop() {
      px = lerp(px, mx, 0.14);
      py = lerp(py, my, 0.14);
      preview.style.left = px + 'px';
      preview.style.top = py + 'px';
      if (active || Math.abs(px - mx) > 0.5) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = null;
      }
    }
  })();

  /* ======================================================================
     Magnetic buttons
     ====================================================================== */
  (function magnetic() {
    if (!finePointer || prefersReduced) return;
    var btns = Array.prototype.slice.call(document.querySelectorAll('.magnetic'));
    btns.forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - (r.left + r.width / 2);
        var y = e.clientY - (r.top + r.height / 2);
        btn.style.transform = 'translate(' + (x * 0.28).toFixed(1) + 'px,' + (y * 0.4).toFixed(1) + 'px)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  })();

  /* ======================================================================
     Active nav link on scroll
     ====================================================================== */
  (function activeNav() {
    var sections = ['about', 'services', 'projects', 'contact']
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    var navLinks = document.querySelectorAll('.nav__link');
    if (!sections.length) return;

    function highlight() {
      var pos = window.scrollY + window.innerHeight * 0.35;
      var activeId = '';
      sections.forEach(function (sec) { if (pos >= sec.offsetTop) activeId = sec.id; });
      navLinks.forEach(function (link) {
        var href = link.getAttribute('href');
        var isActive = activeId ? href === '#' + activeId : href === 'index.html';
        link.classList.toggle('is-active', isActive);
      });
    }
    window.addEventListener('scroll', highlight, { passive: true });
    highlight();
  })();

  /* ======================================================================
     Underline hover lock (dual-line completes even on a brush-past)
     ====================================================================== */
  (function underlines() {
    var links = document.querySelectorAll('.btn--ghost, .header__phone, .footer__line-link');
    Array.prototype.forEach.call(links, function (el) {
      el.addEventListener('mouseenter', function () {
        if (el.classList.contains('hovered')) return;
        el.classList.add('hovered');
        setTimeout(function () { el.classList.remove('hovered'); }, 650);
      });
    });
  })();

  /* ======================================================================
     Project detail modal (galleries preserved)
     ====================================================================== */
  (function projectModal() {
    var PROJECTS = {
      'genesian-theatre': {
        title: 'Genesian Theatre',
        location: 'Sydney, NSW',
        tag: 'Commercial Fit-out',
        desc: 'A heritage theatre transformation in the heart of Sydney. Platfourm delivered bespoke timber joinery throughout — the grand staircase, bar and foyer — pairing rich timber panelling and brass detailing with a modern teal palette, all while meeting the compliance demands of a working performance venue.',
        images: 10
      },
      'new-build-duplex': {
        title: 'New Build Duplex',
        location: 'Mudgee, NSW',
        tag: 'Residential · New Build',
        desc: 'Platfourm was entrusted with the management of this project, handling every stage — from the concept phase and design approval through construction and subdivision to its completion — delivering a pair of crisp, contemporary homes in regional NSW.',
        images: 6
      },
      'full-home-renovation': {
        title: 'Full Home Renovation',
        location: 'Central Coast, NSW',
        tag: 'Residential · Renovation',
        desc: 'A full remodel of every internal space — bathroom, kitchen and bedrooms — together with an additional carport. Platfourm took a tired weatherboard cottage back to frame and rebuilt it into a bright, modern family home.',
        images: 4
      },
      'sydney-airport-terminal': {
        title: 'Sydney Airport Terminal',
        location: 'Mascot, NSW',
        tag: 'Commercial · Airport',
        desc: 'A charger upgrade rolled out across the T2 food court at Sydney Airport. Platfourm retrofitted power and USB charging into the communal timber benches and delivered the works live, in a high-traffic terminal, with minimal disruption to travellers and retailers.',
        images: 4
      },
      'redland-grammar-school': {
        title: 'Redland Grammar School',
        location: 'Cremorne, NSW',
        tag: 'Education',
        desc: 'Classroom and corridor upgrades at the Cremorne campus — acoustic wall panelling, joinery, storage and new floor finishes. The works were programmed around the school calendar to keep learning spaces available throughout.',
        images: 4
      },
      'kindalin-childcare': {
        title: 'Kindalin Childcare',
        location: 'Rouse Hill, NSW',
        tag: 'Education · Joinery',
        desc: 'A custom joinery fit-out for a new childcare centre in Rouse Hill. Curved timber batten screens, plywood cabinetry and bespoke kitchen and storage were crafted for a bright, tactile and hard-wearing learning environment.',
        images: 6
      },
      'elanora-aged-care': {
        title: 'Elanora Aged Care',
        location: 'Elanora, NSW',
        tag: 'Aged Care',
        desc: 'A common-area refurbishment for an aged-care facility — banquette seating, custom shelving and warm, accessible finishes designed for resident comfort, easy movement and everyday use.',
        images: 1
      }
    };

    var modal = document.getElementById('projectModal');
    if (!modal) return;

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
        html += '<img src="assets/img/projects/' + slug + '-' + i + '.jpg" alt="' +
          p.title + ' — image ' + i + '" loading="lazy">';
      }
      modalGallery.innerHTML = html;
      modalGallery.classList.toggle('modal__gallery--single', p.images < 2);

      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      body.classList.add('modal-open');
      if (modalScroll) modalScroll.scrollTop = 0;
      var closeBtn = modal.querySelector('.modal__close');
      // The modal fades in via a CSS `visibility` transition, so it isn't
      // focusable the instant `is-open` is added — the browser doesn't
      // recompute the used `visibility` value (and therefore focusability)
      // until a style/layout pass has actually run. Retry across a few
      // animation frames so a focus attempt always lands once that pass
      // completes, even if a frame is delayed under load.
      if (closeBtn) {
        (function focusWhenReady(attempt) {
          closeBtn.focus();
          if (document.activeElement !== closeBtn && attempt < 6) {
            requestAnimationFrame(function () { focusWhenReady(attempt + 1); });
          }
        })(0);
      }
    }

    function closeModal() {
      if (!modal.classList.contains('is-open')) return;
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      body.classList.remove('modal-open');
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    }

    document.querySelectorAll('.pindex__row[data-project]').forEach(function (row) {
      row.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(row.getAttribute('data-project'));
      });
    });

    modal.querySelectorAll('[data-modal-close]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  })();

  /* ======================================================================
     Footer year
     ====================================================================== */
  (function year() {
    var y = document.getElementById('year');
    if (y) y.textContent = String(new Date().getFullYear());
  })();

})();
