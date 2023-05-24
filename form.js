const contactForm = document.getElementById('form');
const email = document.getElementById('email');
// const submit = document.getElementById('btn');
const errorMessage = document.getElementById('error-msg');

contactForm.addEventListener('submit', (event) => {
  if (email.value === email.value.toLowerCase()) {
    return true;
  }
  errorMessage.style.display = 'block';
  event.preventDefault();
  return false;
});

document.getElementById('error-msg').style.color = 'Green';
document.getElementById('error-msg').style.fontSize = '120%';
