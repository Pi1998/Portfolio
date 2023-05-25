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
  