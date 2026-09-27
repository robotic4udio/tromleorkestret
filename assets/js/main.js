(function () {
  'use strict';

  var root = document.documentElement;

  /* Header: solid background once the page is scrolled */
  var header = document.querySelector('[data-header]');
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  var toggle = document.querySelector('[data-nav-toggle]');
  if (toggle) {
    var setOpen = function (open) {
      root.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () {
      setOpen(!root.classList.contains('nav-open'));
    });
    document.querySelectorAll('.site-nav a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  /* Reveal elements as they scroll into view */
  var revealables = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Lightweight YouTube: swap the thumbnail for the real player on click */
  document.querySelectorAll('[data-yt]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + btn.dataset.yt + '?autoplay=1&rel=0' + (btn.dataset.start ? '&start=' + btn.dataset.start : '');
      iframe.title = btn.getAttribute('aria-label') || 'YouTube video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.className = 'yt-frame';
      var wrap = document.createElement('div');
      wrap.className = 'yt yt--playing';
      wrap.appendChild(iframe);
      btn.replaceWith(wrap);
    });
  });

  /* Embers: sparks rising from the glowing line (only animates while on screen) */
  var embers = document.querySelector('.embers canvas');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (embers && embers.getContext && !reduceMotion) {
    var ctx = embers.getContext('2d');
    var sparks = [];
    var w = 0, h = 0, running = false, last = 0;

    var resize = function () {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = embers.clientWidth; h = embers.clientHeight;
      embers.width = w * dpr; embers.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    var spawn = function () {
      // Denser towards the middle, like the glow
      var x = w / 2 + (Math.random() + Math.random() + Math.random() - 1.5) * w * 0.55;
      sparks.push({
        x: x, y: h - 1,
        vx: (Math.random() - 0.5) * 12,
        vy: -(30 + Math.random() * 70),
        r: 0.6 + Math.random() * 1.8,
        life: 0, max: 1.6 + Math.random() * 2.2,
        wobble: Math.random() * Math.PI * 2,
        hue: 18 + Math.random() * 26
      });
    };

    var frame = function (t) {
      if (!running) return;
      var dt = Math.min((t - last) / 1000 || 0, 0.05);
      last = t;
      var rate = w / 14; // sparks per second, scaled to width
      for (var n = rate * dt + Math.random() * 0.5; n >= 1; n--) spawn();
      if (Math.random() < (rate * dt) % 1) spawn();

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      for (var i = sparks.length - 1; i >= 0; i--) {
        var s = sparks[i];
        s.life += dt;
        if (s.life > s.max || s.y < -10) { sparks.splice(i, 1); continue; }
        s.wobble += dt * 3;
        s.x += (s.vx + Math.sin(s.wobble) * 10) * dt;
        s.y += s.vy * dt;
        var fade = 1 - s.life / s.max;
        var glow = s.r * 4;
        var g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glow);
        g.addColorStop(0, 'hsla(' + (s.hue + 20) + ',100%,75%,' + fade + ')');
        g.addColorStop(0.3, 'hsla(' + s.hue + ',100%,55%,' + fade * 0.6 + ')');
        g.addColorStop(1, 'hsla(' + s.hue + ',100%,50%,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(s.x, s.y, glow, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener('resize', resize);
    new IntersectionObserver(function (entries) {
      var visible = entries[0].isIntersecting;
      if (visible && !running) { running = true; last = performance.now(); requestAnimationFrame(frame); }
      if (!visible) running = false;
    }).observe(embers);
  }

  /* Lightbox for gallery and content images */
  var selector = '.gallery img, .prose p > img, .mosaic img';
  var images = Array.prototype.slice.call(document.querySelectorAll(selector));
  if (!images.length || typeof HTMLDialogElement !== 'function') return;

  var dialog = document.createElement('dialog');
  dialog.className = 'lightbox';
  dialog.setAttribute('aria-label', 'Image viewer');
  dialog.innerHTML =
    '<img alt="">' +
    '<button class="lightbox__close" type="button" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>' +
    '<button class="lightbox__prev" type="button" aria-label="Previous image"><i class="fa-solid fa-arrow-left"></i></button>' +
    '<button class="lightbox__next" type="button" aria-label="Next image"><i class="fa-solid fa-arrow-right"></i></button>' +
    '<span class="lightbox__count"></span>';
  document.body.appendChild(dialog);

  var big = dialog.querySelector('img');
  var count = dialog.querySelector('.lightbox__count');
  var group = [];
  var index = 0;

  // Galleries use small "-sm" thumbnails; show the larger version in the viewer.
  function fullSrc(img) {
    return (img.currentSrc || img.src).replace(/-sm\.jpg$/, '.jpg').replace(/#.*$/, '');
  }

  function show(i) {
    index = (i + group.length) % group.length;
    big.src = fullSrc(group[index]);
    big.alt = group[index].alt || '';
    count.textContent = group.length > 1 ? (index + 1) + ' / ' + group.length : '';
    dialog.querySelector('.lightbox__prev').hidden = group.length < 2;
    dialog.querySelector('.lightbox__next').hidden = group.length < 2;
  }

  images.forEach(function (img) {
    img.addEventListener('click', function () {
      var container = img.closest('.gallery, .mosaic');
      group = container ? Array.prototype.slice.call(container.querySelectorAll('img')) : [img];
      show(group.indexOf(img));
      dialog.showModal();
    });
  });

  dialog.querySelector('.lightbox__close').addEventListener('click', function () { dialog.close(); });
  dialog.querySelector('.lightbox__prev').addEventListener('click', function () { show(index - 1); });
  dialog.querySelector('.lightbox__next').addEventListener('click', function () { show(index + 1); });
  dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
})();
