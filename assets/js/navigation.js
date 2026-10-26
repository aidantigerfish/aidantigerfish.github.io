/* Navigation stays visible if JavaScript is unavailable. */
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');
if (toggle && navigation) {
  document.documentElement.classList.add('js');
  toggle.hidden = false;
  const closeMenu = () => {
    navigation.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  navigation.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link || !window.matchMedia('(max-width: 760px)').matches) return;
    closeMenu();
    // Move focus out of the now-hidden menu to the destination heading.
    const target = document.querySelector(link.hash)?.querySelector('h2');
    if (target) { target.tabIndex = -1; target.focus({ preventScroll: true }); }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });
  window.matchMedia('(max-width: 760px)').addEventListener('change', closeMenu);
}
