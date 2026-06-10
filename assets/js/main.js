// Lightweight interactivity for the academic homepage.
// 1. Smooth-scroll for in-page anchors (respects prefers-reduced-motion).
// 2. Mobile nav auto-close on link click.
// 3. Highlight current section in the nav while scrolling.
// 4. Persist the user's chosen language across page loads.

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Auto-close mobile nav on link tap
  var navTrigger = document.getElementById('nav-trigger');
  document.querySelectorAll('.site-nav .page-link, .site-nav .lang-switch').forEach(function (link) {
    link.addEventListener('click', function () {
      if (navTrigger && navTrigger.checked) {
        navTrigger.checked = false;
      }
    });
  });

  // 2. Active-section highlighting using IntersectionObserver
  var sectionIds = ['about', 'research', 'publications', 'patents', 'awards', 'service'];
  var sections = sectionIds
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav .page-link'));

  if ('IntersectionObserver' in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            var hash = link.getAttribute('href').split('#')[1];
            if (hash === id) {
              link.classList.add('page-link--active');
            } else {
              link.classList.remove('page-link--active');
            }
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(function (sec) { observer.observe(sec); });
  }

  // 3. Respect reduced motion
  if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = 'auto';
  }

  // 4. Persist language preference
  var LANG_KEY = 'preferred-lang';
  var langSwitch = document.querySelector('.lang-switch');
  if (langSwitch) {
    langSwitch.addEventListener('click', function () {
      try {
        var target = langSwitch.getAttribute('data-lang');
        if (target) {
          localStorage.setItem(LANG_KEY, target);
        }
      } catch (e) { /* localStorage might be blocked; non-fatal */ }
    });
  }
})();
