/* Main nav bar (_includes/masthead.html): edge fades, active link kept in view and,
   on the homepage, smooth jumps to sections plus scroll-position highlighting. */
(function () {
  var masthead = document.querySelector('.masthead');
  var row = document.querySelector('.site-nav__links');
  if (!masthead || !row) return;

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var scrollBehavior = reduceMotion ? 'auto' : 'smooth';
  var links = Array.prototype.slice.call(row.querySelectorAll('a'));

  // Sections use this to stop just below the fixed bar; its height changes with the viewport.
  function setOffset() {
    root.style.setProperty('--masthead-h', masthead.offsetHeight + 'px');
  }
  setOffset();
  window.addEventListener('resize', setOffset);

  function updateFades() {
    var max = row.scrollWidth - row.clientWidth;
    row.classList.toggle('fade-left', row.scrollLeft > 1);
    row.classList.toggle('fade-right', row.scrollLeft < max - 1);
  }
  row.addEventListener('scroll', updateFades, { passive: true });
  window.addEventListener('resize', updateFades);

  // On narrow screens the links scroll sideways; keep the active one in view.
  function revealInRow(link, behavior) {
    if (row.scrollWidth > row.clientWidth) {
      row.scrollTo({ left: link.offsetLeft - (row.clientWidth - link.offsetWidth) / 2, behavior: behavior });
    }
  }

  // Links that point at a section on the current page (all of them on the homepage, none elsewhere).
  var sectionLinks = links.filter(function (a) {
    return a.pathname === location.pathname && a.hash && document.getElementById(a.hash.slice(1));
  });

  if (!sectionLinks.length) {
    // Other pages: the active link is chosen server-side from the URL.
    var current = row.querySelector('a.is-active');
    if (current) revealInRow(current, 'auto');
    updateFades();
    return;
  }

  var sections = sectionLinks.map(function (a) { return document.getElementById(a.hash.slice(1)); });
  var active = null;

  function setActive(link) {
    if (!link || link === active) return;
    if (active) {
      active.classList.remove('is-active');
      active.removeAttribute('aria-current');
    }
    active = link;
    link.classList.add('is-active');
    link.setAttribute('aria-current', 'true');
    revealInRow(link, scrollBehavior);
  }

  function jumpTo(target, behavior) {
    if (target === sections[0]) {
      window.scrollTo({ top: 0, behavior: behavior });
    } else {
      target.scrollIntoView({ behavior: behavior, block: 'start' });
    }
  }

  // Capture phase, so the theme's global jQuery smoothScroll (fixed -75px offset)
  // never handles these clicks.
  row.addEventListener('click', function (e) {
    var link = e.target.closest('a');
    var i = sectionLinks.indexOf(link);
    if (i < 0) return;
    e.preventDefault();
    e.stopPropagation();
    jumpTo(sections[i], scrollBehavior);
    history.replaceState(null, '', link.hash);
  }, true);

  // Highlight the last section whose top has passed just below the bar.
  var ticking = false;
  function updateActive() {
    ticking = false;
    var line = masthead.getBoundingClientRect().bottom + 40;
    var current = 0;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= line) current = i;
    }
    // The last section is short and may never reach the line; at the bottom of the page it is the one in view.
    if (window.innerHeight + window.scrollY >= root.scrollHeight - 2) current = sections.length - 1;
    setActive(sectionLinks[current]);
  }
  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateActive);
    }
  }, { passive: true });
  updateActive();
  updateFades();

  // Arriving from another page (e.g. /#publications): images loading above the
  // target shift it after the browser's initial jump, so re-align once they're in,
  // unless the visitor has already started scrolling.
  var target = location.hash && document.getElementById(location.hash.slice(1));
  if (target && sections.indexOf(target) >= 0) {
    var userScrolled = false;
    var markScrolled = function () { userScrolled = true; };
    ['wheel', 'touchstart', 'keydown'].forEach(function (type) {
      window.addEventListener(type, markScrolled, { once: true, passive: true });
    });
    window.addEventListener('load', function () {
      if (!userScrolled) jumpTo(target, 'auto');
    });
  }
})();
