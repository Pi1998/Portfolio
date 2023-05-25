const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.mobile-menu');
const body = document.querySelector('body');

function toggleMenu() {
  hamburger.classList.toggle('active');
  navMobile.classList.toggle('active');

  // Disable scrolling when the menu is active
  body.classList.toggle('disable-scroll');
}
function closeMenu() {
  hamburger.classList.remove('active');
  navMobile.classList.remove('active');
  body.classList.remove('disable-scroll');
}

hamburger.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-link').forEach((n) => {
  n.addEventListener('click', () => {
    closeMenu();
  });
});

const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const form = document.getElementById('form');
