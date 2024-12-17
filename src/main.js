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

// const btn = document.querySelectorAll('.seeproject');
const data = [
  {
    name: 'To Do List',
    description: 'A simple and intuitive to-do list application to help users manage their daily tasks. Users can add, delete, and mark tasks as complete. It is built using JavaScript and styled with CSS to ensure responsiveness across devices.',
    img: 'src/project-img/toDoList.png',
    firstlineTitle: 'To Do List',
    secondlineTitle: 'Task Management',
    languages: ['JavaScript', 'HTML', 'CSS'],
    technologies: ['JavaScript', 'HTML', 'CSS', 'GitHub', 'Bootstrap'],
    linkLiveVersion: 'https://pi1998.github.io/to-do-list/dist/',
    linkSource: 'https://github.com/Pi1998/to-do-list',
  },
  {
    name: 'AwesomeBooks',
    description: 'AwesomeBooks is an app that allows users to add, remove, and store books in their personal collection. Built using ES6 JavaScript, the app provides a simple and elegant way to manage reading lists, store book details, and supports local storage for persistent data.',
    img: 'src/project-img/awesomeBook.png',
    firstlineTitle: 'AwesomeBooks',
    secondlineTitle: 'Manage Book Collection',
    languages: ['JavaScript', 'HTML', 'CSS'],
    technologies: ['JavaScript', 'HTML', 'CSS', 'GitHub', 'ES6', 'LocalStorage'],
    linkLiveVersion: 'https://pi1998.github.io/AwesomeBooks-ES6/#books-container',
    linkSource: 'https://github.com/Pi1998/AwesomeBooks-ES6',
  },
  {
    name: 'MarvelFolio',
    description: 'MarvelFolio is an app that allows you to find comic books based on a Marvel character\'s name. Using an API, the app fetches information on the character and displays the list of related comic books.',
    img: 'src/project-img/marvelFolio.png',
    firstlineTitle: 'MarvelFolio',
    secondlineTitle: 'Marvel Comic Finder',
    languages: ['React', 'Redux', 'HTML', 'CSS'],
    technologies: ['Marvel API', 'React', 'Redux', 'Jest', 'CSS', 'HTML', 'API Integration'],
    linkLiveVersion: 'https://bejewelled-kringle-516d5f.netlify.app/',
    linkSource: 'https://github.com/Pi1998/marvelFolio',
  },
  {
    name: 'StreamHub',
    description: 'StreamHub is a web app that allows users to search for movies and TV shows by integrating an API for fetching movie data. It offers information about various media, including their ratings, release dates, and more.',
    img: 'src/project-img/streamHub.png',
    firstlineTitle: 'StreamHub',
    secondlineTitle: 'Find Movies Easily',
    languages: ['JavaScript', 'HTML', 'CSS'],
    technologies: ['OMDb API', 'JavaScript', 'CSS', 'HTML', 'API Integration'],
    linkLiveVersion: 'https://goldinium.me/StreamHub/dist/index.html',
    linkSource: 'https://github.com/Pi1998/StreamHub',
  },
  {
    name: 'InterArtction',
    description: 'The Interdisciplinary Exhibition, titled InterArtction, is an innovative and transformative event that brings together professionals, experts, and enthusiasts from various fields to explore the intersection of art and technology. This event will be held in different cities every two years, inviting organizations and individuals who are engaged in the world of open content, free software, open knowledge, and other related areas. We hope to foster collaboration on shared projects that advance the cause of the Commons, free culture, and open knowledge.',
    img: 'src/project-img/interArtction.png',
    firstlineTitle: 'InterArtction',
    secondlineTitle: 'Exploring Art & Technology',
    languages: ['HTML', 'CSS', 'JavaScript'],
    technologies: ['Responsive Web Design', 'JavaScript', 'CSS', 'HTML'],
    linkLiveVersion: 'https://pi1998.github.io/first-capstone/index.html',
    linkSource: 'https://github.com/Pi1998/first-capstone',
  },
  {
    name: 'Project-6',
    description: 'Coming Soon.....',
    img: 'src/popup-img/Snapshoot-Portfolio-desktop.png',
    firstlineTitle: 'Coming Soon...',
    secondlineTitle: '........',
    languages: ['PHP', 'CSS', 'JavaScript', 'HTML'],
    technologies: ['GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkLiveVersion: 'https://pi1998.github.io/Portfolio/',
    linkSource: 'https://github.com/Pi1998/Portfolio',
  },
];
const popUp = (i) => {
  const html = document.createElement('div');
  // const mediaQuery = window.matchMedia('(max-width: 768px)');
  // if (mediaQuery.matches) {
  //   data[i].img = 'src/popup-img/Snapshoot-Portfolio-mobile.png';
  //   data[i].technologies[0] = 'Ruby on Rails';
  //   data[i].technologies[1] = 'CSS';
  //   data[i].technologies[2] = 'JavaScript';
  // }
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
            <a href="${data[i].linkLiveVersion}"><img src="src/popup-img/Icon-Export.png" alt="Image of export icon"></a>
          </div>
          <div class="see-source-container">
            <a href="${data[i].linkSource}">See source</a>
            <a href="${data[i].linkSource}"><img src="src/popup-img/Icon-GitHub.png" alt="Image of Github icon"></a>
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

  // Disable scrolling
  //  body.classList.add('disable-scroll');

  const closebtn = document.querySelector('.close-button');
  closebtn.addEventListener('click', () => {
    body.removeChild(html);

    // Enable scrolling
    // body.classList.remove('disable-scroll');
  });
};

function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

const div = document.createElement('div');
const parentElement = document.getElementById('portfolio-section');
div.className = 'my-projects';
insertAfter(div, parentElement.lastElementChild);

data.forEach((project, i) => {
  div.innerHTML += `
    <div id="project${i}" class="work-cards animation-left">
      <div class="img-placeholder"></div>
      <div class="work-desc">
        <p>${project.firstlineTitle}<br>${project.secondlineTitle}</p>
        <ul class="languages">
          ${project.languages.map((lang) => `<li>${lang}</li>`).join('')}
        </ul>
        <div class="button-container">
          <button type="button" class="button seeproject" id="seeproject${i}">See project</button>
        </div>
      </div>
    </div>`;
});

const btns = document.querySelectorAll('.seeproject');

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => popUp(index));
});
