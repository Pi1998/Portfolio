const cardsInfo = [
    {
      id: 1,
      name: 'Multi-Post Stories Gain+Glory',
      name1: 'Keeping Track of Hundred of Components',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
      technologies: {
        tech1: 'Ruby on Rails',
        tech2: 'CSS',
        tech3: 'JavaScript',
      },
      liveLink: '#',
      sourceLink: '#',
    },
    {
      id: 2,
      name: 'Multi-Post Stories Gain+Glory',
      name1: 'Keeping Track of Hundred of Components',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
      technologies: {
        tech1: 'Ruby on Rails',
        tech2: 'CSS',
        tech3: 'JavaScript',
        tech4: 'HTML',
      },
      liveLink: '#',
      sourceLink: '#',
    },
    {
      id: 3,
      name: 'Multi-Post Stories Gain+Glory',
      name1: 'Keeping Track of Hundred of Components',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
      technologies: {
        tech1: 'Ruby on Rails',
        tech2: 'CSS',
        tech3: 'JavaScript',
        tech4: 'HTML',
      },
      liveLink: '#',
      sourceLink: '#',
    },
    {
      id: 4,
      name: 'Multi-Post Stories Gain+Glory',
      name1: 'Keeping Track of Hundred of Components',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
      technologies: {
        tech1: 'Ruby on Rails',
        tech2: 'CSS',
        tech3: 'JavaScript',
        tech4: 'HTML',
      },
      liveLink: '#',
      sourceLink: '#',
    },
    {
      id: 5,
      name: 'Multi-Post Stories Gain+Glory',
      name1: 'Keeping Track of Hundred of Components',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
      technologies: {
        tech1: 'Ruby on Rails',
        tech2: 'CSS',
        tech3: 'JavaScript',
        tech4: 'HTML',
      },
      liveLink: '#',
      sourceLink: '#',
    },
    {
      id: 6,
      name: 'Multi-Post Stories Gain+Glory',
      name1: 'Keeping Track of Hundred of Components',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
      technologies: {
        tech1: 'Ruby on Rails',
        tech2: 'CSS',
        tech3: 'JavaScript',
        tech4: 'HTML',
      },
      liveLink: '#',
      sourceLink: '#',
    },
    // Add more project objects as needed
  ];

  const cards = () => {
    const card = cardsInfo.map(
      (cardsInfo) => ` <div class="card">
                              <div class="text-container">
                                  <h2 class="project-title"> ${cardsInfo.name}</h2>
                                  <ul class="tag">
                                      <li>${cardsInfo.technologies.tech1}</li>
                                      <li>${cardsInfo.technologies.tech2}</li>
                                      <li>${cardsInfo.technologies.tech3}</li>
                                      <li>${cardsInfo.technologies.tech4}</li>
                                  </ul>
                                  <div class="btn-container">
                                      <button onclick= 'popupInfo(${cardsInfo.id})' type= 'submit' class="btn">See Project</button>
                                  </div>
                              </div>
                        </div>
        `,
    );
    return card;
  };

  const popupInfo = (projectId) => {
    if (projectId == null) return;
    let checked = cardsInfo.filter((elem) => elem.id === projectId);
    checked = checked.shift();
    const modalMobile = `<div id='modal' class='modal'>
                              <div class="popup-snapshot">
                                <div class="popup-close-btn-container">
                                    <button class="popup-close-btn"><img src="popup-img/Icon.png" alt="Close Button Image"></button>
                                </div>
                              </div>
                              <div class="popup-primary-text">
                                  <h1 class="ppt-text">${checked.name1}</h1>
                                  <ul class="ppt-tag">
                                      <li>${checked.technologies.tech1}</li>
                                      <li>${checked.technologies.tech2}</li>
                                      <li>${checked.technologies.tech3}</li>
                                  </ul>
                              </div>
                              <div class="popup-left-block">
                                  <p class="plb-text">${checked.description}</p>
                              </div>
                              <div class="popup-action">
                                  <button class="popup-live-btn">
                                      <p class="live-btn-text">See Live</p>
                                      <img class="live-btn-icon" src="popup-img/Icon - Export.png" alt="Image of export icon">
                                  </button>
                                  <button class="popup-source-btn">
                                      <p class="source-btn-text">See Source</p>
                                      <img class="source-btn-icon" src="popup-img/Icon -GitHub.png" alt="Image of Github icon">
                                  </button>
                              </div>
                          </div>
                          <div class= 'overlay'></div>
                          `;
    document.getElementById('popupContainer').innerHTML = modalMobile;
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    modal.classList.add('active');
    overlay.classList.add('active');
  };

  const openfirst = () => {
    document.getElementById('popupContainer').innerHTML = modalMobile;
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    modal.classList.add('active');
    overlay.classList.add('active');
  };
  
  function closeModal() {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.getElementById('popupContainer').removeChild(document.querySelector('.modal'));
  }
  