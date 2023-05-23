const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", toggleMenu);

document.querySelectorAll(".nav-link").forEach((n) => {
  n.addEventListener("click", () => {
    closeMenu();
  });
});
