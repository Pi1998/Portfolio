const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.mobile-menu');

function toggleMenu() {
  hamburger.classList.toggle('active');
  navMobile.classList.toggle('active');
}
function closeMenu() {
  hamburger.classList.remove('active');
  navMobile.classList.remove('active');
}

hamburger.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-link').forEach((n) => {
  n.addEventListener('click', () => {
    closeMenu();
  });
});
