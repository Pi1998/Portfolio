// const cardsInfo = [
//     {
//       id: 1,
//       name: 'Multi-Post Stories Gain+Glory',
//       name1: 'Keeping Track of Hundred of Components',
//       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
//       technologies: {
//         tech1: 'Ruby on Rails',
//         tech2: 'CSS',
//         tech3: 'JavaScript',
//       },
//       liveLink: '#',
//       sourceLink: '#',
//     },
//     {
//       id: 2,
//       name: 'Multi-Post Stories Gain+Glory',
//       name1: 'Keeping Track of Hundred of Components',
//       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
//       technologies: {
//         tech1: 'Ruby on Rails',
//         tech2: 'CSS',
//         tech3: 'JavaScript',
//         tech4: 'HTML',
//       },
//       liveLink: '#',
//       sourceLink: '#',
//     },
//     {
//       id: 3,
//       name: 'Multi-Post Stories Gain+Glory',
//       name1: 'Keeping Track of Hundred of Components',
//       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
//       technologies: {
//         tech1: 'Ruby on Rails',
//         tech2: 'CSS',
//         tech3: 'JavaScript',
//         tech4: 'HTML',
//       },
//       liveLink: '#',
//       sourceLink: '#',
//     },
//     {
//       id: 4,
//       name: 'Multi-Post Stories Gain+Glory',
//       name1: 'Keeping Track of Hundred of Components',
//       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
//       technologies: {
//         tech1: 'Ruby on Rails',
//         tech2: 'CSS',
//         tech3: 'JavaScript',
//         tech4: 'HTML',
//       },
//       liveLink: '#',
//       sourceLink: '#',
//     },
//     {
//       id: 5,
//       name: 'Multi-Post Stories Gain+Glory',
//       name1: 'Keeping Track of Hundred of Components',
//       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
//       technologies: {
//         tech1: 'Ruby on Rails',
//         tech2: 'CSS',
//         tech3: 'JavaScript',
//         tech4: 'HTML',
//       },
//       liveLink: '#',
//       sourceLink: '#',
//     },
//     {
//       id: 6,
//       name: 'Multi-Post Stories Gain+Glory',
//       name1: 'Keeping Track of Hundred of Components',
//       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
//       technologies: {
//         tech1: 'Ruby on Rails',
//         tech2: 'CSS',
//         tech3: 'JavaScript',
//         tech4: 'HTML',
//       },
//       liveLink: '#',
//       sourceLink: '#',
//     },
//     // Add more project objects as needed
//   ];

//   const cards = () => {
//     const card = cardsInfo.map(
//       (cardsInfo) => ` <div class="card">
//                               <div class="text-container">
//                                   <h2 class="project-title"> ${cardsInfo.name}</h2>
//                                   <ul class="tag">
//                                       <li>${cardsInfo.technologies.tech1}</li>
//                                       <li>${cardsInfo.technologies.tech2}</li>
//                                       <li>${cardsInfo.technologies.tech3}</li>
//                                       <li>${cardsInfo.technologies.tech4}</li>
//                                   </ul>
//                                   <div class="btn-container">
//                                       <button onclick= 'popupInfo(${cardsInfo.id})' type= 'submit' class="btn seeProject">See Project</button>
//                                   </div>
//                               </div>
//                         </div>
//         `,
//     );
//     return card;
//   };

//   const popupInfo = (projectId) => {
//     if (projectId == null) return;
//     let checked = cardsInfo.filter((elem) => elem.id === projectId);
//     checked = checked.shift();
//     const modalMobile = `<div id='modal' class='modal'>
//                               <div class="popup-snapshot">
//                                 <div class="popup-close-btn-container">
//                                     <button class="popup-close-btn"><img src="popup-img/Icon.png" alt="Close Button Image"></button>
//                                 </div>
//                               </div>
//                               <div class="popup-primary-text">
//                                   <h1 class="ppt-text">${checked.name1}</h1>
//                                   <ul class="ppt-tag">
//                                       <li>${checked.technologies.tech1}</li>
//                                       <li>${checked.technologies.tech2}</li>
//                                       <li>${checked.technologies.tech3}</li>
//                                   </ul>
//                               </div>
//                               <div class="popup-left-block">
//                                   <p class="plb-text">${checked.description}</p>
//                               </div>
//                               <div class="popup-action">
//                                   <button class="popup-live-btn">
//                                       <p class="live-btn-text">See Live</p>
//                                       <img class="live-btn-icon" src="popup-img/Icon - Export.png" alt="Image of export icon">
//                                   </button>
//                                   <button class="popup-source-btn">
//                                       <p class="source-btn-text">See Source</p>
//                                       <img class="source-btn-icon" src="popup-img/Icon -GitHub.png" alt="Image of Github icon">
//                                   </button>
//                               </div>
//                           </div>
//                           <div class= 'overlay'></div>
//                           `;
//     document.getElementById('popupContainer').innerHTML = modalMobile;
//     const modal = document.querySelector('.modal');
//     const overlay = document.querySelector('.overlay');
//     modal.classList.add('active');
//     overlay.classList.add('active');
//   };

//   const openfirst = () => {
//     document.getElementById('popupContainer').innerHTML = modalMobile;
//     const modal = document.querySelector('.modal');
//     const overlay = document.querySelector('.overlay');
//     modal.classList.add('active');
//     overlay.classList.add('active');
//   };
  
//   function closeModal() {
//     const modal = document.querySelector('.modal');
//     const overlay = document.querySelector('.overlay');
//     modal.classList.remove('active');
//     overlay.classList.remove('active');
//     document.getElementById('popupContainer').removeChild(document.querySelector('.modal'));
//}

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
  name: 'Project2',
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
  name: 'project3',
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
  name: 'project4',
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
  name: 'project5',
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
  name: 'project6',
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
  