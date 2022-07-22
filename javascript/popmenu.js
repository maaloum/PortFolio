import projects from '/javascript/data.js';

export function Pop() {
  const wrk = document.createElement('work');
  document.body.appendChild(wrk);
  wrk.classList.add('pop');
  const popContent = document.createElement('div');
  popContent.innerHTML = (`
      <div class="overlay-content">
          <h2 class="Project-Title">
             ${projects.title}
          </h2>
          <i class="closing-icon bi bi-x-lg "></i>
          <img class="project-img" src="images/Portfolio" alt="">

          <ul class="info-top">
            <li class="titlej">${projects.jobDescription.company}&nbsp;&nbsp; &#8226; &nbsp;</li>
            <li class="year gray">${projects.jobDescription.role}&nbsp;&nbsp; &#8226; &nbsp;</li>
            <li class="year gray">${projects.jobDescription.year}</li>
          </ul>
          <img class="desktop-img" src="images/Portfolio.png" alt="project tonic homepage test">
          <div class="popup-bottom">
            <p class="project-text">
              ${projects.description}
            </p>
            <div class="badges-buttons">
              <ul class="project-languages">
                <li class="language">${projects.skills[0]}</li>
                <li class="language">${projects.skills[1]}</li>
                <li class="language">${projects.skills[2]}</li>
              </ul>
              <div class="popup-buttons">
                <button type="button" class="btn project-button">
                        <a class="btn-live"href="">
                          See live &nbsp;&nbsp;&nbsp;
                          <i class="btnicon bi bi-box-arrow-up-right"></i>
                        </a>
                </button>
                <button type="button" class="btn project-button">
                        <a class="btn-live"href="">
                          See Source&nbsp;&nbsp;&nbsp;
                          <i class="btnicon bi bi-github"></i>
                        </a>
                </button>
              </div>
            </div>
          </div>
        </div>
    `);
  popup.classList.add('popup');
}

export default Pop;
