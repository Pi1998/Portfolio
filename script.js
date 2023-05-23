const hamburgerMenu = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

// Function to toggle 
function toggleMenu() {
  if (mobileMenu.style.display === 'none') {
    mobileMenu.style.display = 'block';
  } else {
    mobileMenu.style.display = 'none';
  }
}

// Add a click event listener 
hamburgerMenu.addEventListener('click', toggleMenu);
