const contactForm = document.getElementById("form");
const email = document.getElementById("email");
const submit = document.getElementById("btn");
const errorMessage = document.getElementById("error-msg");

form.addEventListener("submit", function(event) {
    if (email.value === email.value.toLowerCase()) {
      return true;
    } else {
      errorMessage.style.display = "block";
      event.preventDefault();
      return false;
    }
  });