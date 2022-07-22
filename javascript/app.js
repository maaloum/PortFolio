import projects from '/javascript/data.js';

const section = document.querySelector('.works');

// generate section
projects.forEach((project, id) => {
  const cards = document.createElement('div');
  cards.classList.add('job');
  cards.innerHTML = (`
    <img class="projetc-image" src= "${project.img}">
    <div class="content project${id}">
      <h3>${project.tilte}</h3>
      <ul>
          <li>${project.jobDescription.company}</li>
          <li>${project.jobDescription.role}</li>
          <li>${project.jobDescription.year}</li>
      </ul>
      <p class="description">${project.description}</p>
      <ul>
        <li ><a href="#" class="programming">${project.skills[0]}</a></li>
        <li ><a href="#" class="programming">${project.skills[1]}</a></li>
        <li ><a href="#" class="programming">${project.skills[2]}</a></li>
      </ul>
      <button type="button" data-modal-target="#btn">See projects</button>
    </div>
    `);
  section.appendChild(cards);
});

function popContent(current){

        const btns = document.querySelectorAll('[data-modal-target]');
        const division = document.createElement('div');
        division.innerHTML += (`<div class="overlay-content">
                          <div class="head-title">
                          <h3>${projects[current].tilte}</h3>
                          <span class="close">&times;</span>
                          </div>
        <ul class="work-place">
          <li class="titlej">${projects[current].jobDescription.company}&nbsp;&nbsp; &#8226; &nbsp;</li>
          <li class="year gray">${projects[current].jobDescription.role}&nbsp;&nbsp; &#8226; &nbsp;</li>
          <li class="year gray">${projects[current].jobDescription.year}</li>
        </ul>
        <img class= "popimg" src="/images/card.jpg" alt="">
        <div class="bottom">
          <p>${projects[current].paragraph}</p>
          <div class="right-side">
            <ul class="project-languages">
              <li ><a href="">${projects[current].skills[0]}</a></li>
              <li ><a href="">${projects[current].skills[1]}</a>/li>
              <li ><a href="">${projects[current].skills[2]}</a></li>
            </ul>
            <div class="popup-buttons">
              <button type="button" class="pop-btn">
                      <a class="btn-live"href="">
                        See live &nbsp;&nbsp;&nbsp;
                        <i class="btnicon bi bi-box-arrow-up-right"></i>
                      </a>
              </button>
              <button type="button" class="pop-btn">
                      <a class="btn-live"href="">
                        See Source&nbsp;&nbsp;&nbsp;
                        <i class="btnicon bi bi-github"></i>
                      </a>
              </button>
          </div>
        </div>
        </div>
        `);


}


btns.forEach((button) => {
  button.addEventListener('click', () => {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'block';
    overlay.appendChild(division);
  });
});
