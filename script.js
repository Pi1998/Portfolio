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

const savedData = localStorage.getItem('formData');
if (savedData) {
  const { fullName, email, message } = JSON.parse(savedData);
  fullNameInput.value = fullName;
  emailInput.value = email;
  messageInput.value = message;
}

// Function to save form data to local storage
function saveFormData() {
  const formData = {
    fullName: fullNameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

form.addEventListener('input', saveFormData);

const btn = document.querySelectorAll('.seeproject');
const data = [{
  name: 'Keeping track of hundreds of components',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum consequatur quae recusandae harum minus illum nisi reprehenderit maxime, modi, quam, nulla cumque! Incidunt, impedit doloribus?  a debitis quidem earum eum quibusdam quia, possimus soluta maiores eveniet quod et officia? Iusto minus provident veniam.',
  img: 'popup-img/Snapshoot Portfolio-desktop.png',
  firstlineTitle: 'Multi-Post Stories',
  secondlineTitle: 'Gain+Glory',
  languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLiveVersion: 'https://pi1998.github.io/Portfolio/',
  linkSource: 'https://github.com/Pi1998/Portfolio',
},
{
  name: 'Project-2',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum consequatur quae recusandae harum minus illum nisi reprehenderit maxime, modi, quam, nulla cumque! Incidunt, impedit doloribus?  a debitis quidem earum eum quibusdam quia, possimus soluta maiores eveniet quod et officia? Iusto minus provident veniam.',
  img: 'popup-img/Snapshoot Portfolio-desktop.png',
  firstlineTitle: 'Multi-Post Stories',
  secondlineTitle: 'Gain+Glory',
  languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLiveVersion: 'https://pi1998.github.io/Portfolio/',
  linkSource: 'https://github.com/Pi1998/Portfolio',
},
{
  name: 'Project-3',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum consequatur quae recusandae harum minus illum nisi reprehenderit maxime, modi, quam, nulla cumque! Incidunt, impedit doloribus?  a debitis quidem earum eum quibusdam quia, possimus soluta maiores eveniet quod et officia? Iusto minus provident veniam.',
  img: 'popup-img/Snapshoot Portfolio-desktop.png',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  firstlineTitle: 'Multi-Post Stories',
  secondlineTitle: 'Gain+Glory',
  languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  linkLiveVersion: 'https://pi1998.github.io/Portfolio/',
  linkSource: 'https://github.com/Pi1998/Portfolio',
},
{
  name: 'Project-4',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum consequatur quae recusandae harum minus illum nisi reprehenderit maxime, modi, quam, nulla cumque! Incidunt, impedit doloribus?  a debitis quidem earum eum quibusdam quia, possimus soluta maiores eveniet quod et officia? Iusto minus provident veniam.',
  firstlineTitle: 'Multi-Post Stories',
  secondlineTitle: 'Gain+Glory',
  languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  img: 'popup-img/Snapshoot Portfolio-desktop.png',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLiveVersion: 'https://pi1998.github.io/Portfolio/',
  linkSource: 'https://github.com/Pi1998/Portfolio',
},
{
  name: 'Project-5',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum consequatur quae recusandae harum minus illum nisi reprehenderit maxime, modi, quam, nulla cumque! Incidunt, impedit doloribus?  a debitis quidem earum eum quibusdam quia, possimus soluta maiores eveniet quod et officia? Iusto minus provident veniam.',
  img: 'popup-img/Snapshoot Portfolio-desktop.png',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  firstlineTitle: 'Multi-Post Stories',
  secondlineTitle: 'Gain+Glory',
  languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  linkLiveVersion: 'https://pi1998.github.io/Portfolio/',
  linkSource: 'https://github.com/Pi1998/Portfolio',
},
{
  name: 'Project-6',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum consequatur quae recusandae harum minus illum nisi reprehenderit maxime, modi, quam, nulla cumque! Incidunt, impedit doloribus?  a debitis quidem earum eum quibusdam quia, possimus soluta maiores eveniet quod et officia? Iusto minus provident veniam.',
  img: 'popup-img/Snapshoot Portfolio-desktop.png',
  firstlineTitle: 'Multi-Post Stories',
  secondlineTitle: 'Gain+Glory',
  languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLiveVersion: 'https://pi1998.github.io/Portfolio/',
  linkSource: 'https://github.com/Pi1998/Portfolio',
},
];
const popUp = (i) => {
  const html = document.createElement('div');
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  if (mediaQuery.matches) {
    data[i].img = 'popup-img/Snapshoot Portfolio-mobile.png';
    data[i].technologies[0] = 'Ruby on Rails';
    data[i].technologies[1] = 'CSS';
    data[i].technologies[2] = 'JavaScript';
  }
  html.innerHTML = `
  <div class="see-project-container active">
        <div class="close-container">
          <button type="button" class="close-button">&times;</button>
        </div>
        <img src="${data[i].img}" id="project-img">
        <div class="project-title-container">
          <h2>${data[i].name}</h2>
          <div class="see-live-container">
            <a href="${data[i].linkLiveVersion}">See live</a>
            <a href="${data[i].linkLiveVersion}"><img src="popup-img/Icon - Export.png" alt="Image of export icon"></a>
          </div>
          <div class="see-source-container">
            <a href="${data[i].linkSource}">See source</a>
            <a href="${data[i].linkSource}"><img src="popup-img/Icon -GitHub.png" alt="Image of Github icon"></a>
          </div>
        </div>
        <ul class="project-tech">
          <li>${data[i].technologies[0]}</li>
          <li>${data[i].technologies[1]}</li>
          <li>${data[i].technologies[2]}</li>
          <li>${data[i].technologies[3]}</li>
          <li>${data[i].technologies[4]}</li>
          <li>${data[i].technologies[5]}</li>
        </ul>
        <p class="project-desc">${data[i].description}</p>
      </div>
      <div class="overlay active"></div>
  `;
  body.appendChild(html);
  const closebtn = document.querySelector('.close-button');
  closebtn.addEventListener('click', () => {
    body.removeChild(html);
  });
};

function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

const div = document.createElement('div');
const parentElement = document.getElementById('portfolio-section');
div.className = 'my-projects';
insertAfter(div, parentElement.lastElementChild);
for (let i = 0; i < 6; i += 1) {
  div.innerHTML += `
  <div id="project${i}" class="work-cards animation-left">
        <div class="img-placeholder">
        </div>
        <div class="work-desc">
          <p>${data[i].firstlineTitle}<br>${data[i].secondlineTitle}</p>
          <div>
            <ul class="languages">
              <li>${data[i].languages[0]}</li>
              <li>${data[i].languages[1]}</li>
              <li>${data[i].languages[2]}</li>
              <li>${data[i].languages[3]}</li>
            </ul>
          </div>
          <div class="button-container">
            <button type="button" onclick='popUp(${i})' class="button seeproject" id="seeproject${i}">See project</button>
          </div>
        </div>
      </div>`;
}
btn.addEventListener('click', popUp());