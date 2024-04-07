
function toggleMobileNav() {
  document.body.classList.toggle('open-mobile-menu');
  document.getElementById('hamburger_main').classList.toggle('is-active');
}

document.getElementById('hamburger_main').addEventListener('click', toggleMobileNav);
document.getElementById('hamburger_mobile').addEventListener('click', toggleMobileNav);
document.getElementById('overlay').addEventListener('click', toggleMobileNav);
