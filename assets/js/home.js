/* Homepage: collapse the recent-updates list to the newest few, with a toggle for the rest. */
(function () {
  var updates = document.querySelector('.updates-block');
  var toggle = updates && updates.querySelector('.updates-toggle');
  var total = updates ? updates.querySelectorAll('li').length : 0;
  if (!toggle || total <= 5) return;

  var label = 'Show all ' + total + ' updates';
  updates.classList.add('is-collapsed');
  toggle.textContent = label;
  toggle.hidden = false;
  toggle.addEventListener('click', function () {
    var collapsed = updates.classList.toggle('is-collapsed');
    toggle.setAttribute('aria-expanded', String(!collapsed));
    toggle.textContent = collapsed ? label : 'Show fewer';
    if (collapsed && toggle.getBoundingClientRect().top < 0) {
      document.getElementById('updates').scrollIntoView({ block: 'start' });
    }
  });
})();
