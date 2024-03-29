const projects = [
  {
    title: 'Mawazine Website',
    jobDescription: {
      company: 'Mawazine',
      role: 'Front End Dev',
      year: '2022',
    },
    img: 'images/screenshoot-1.jpeg',
    description: 'A website for Mawazine festival in Morocco with a responsive design and a mobile version. The project was built using HTML, CSS, and JavaScript.',
    skills: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    link: 'https://maaloum.github.io/Capstone-I/',
    btn1: 'See live',
    btn2: 'See Source',
  },
  {
    title: 'Todo list',
    jobDescription: {
      company: 'Microverse',
      role: 'Front End Dev',
      year: '2022',
    },
    img: 'images/Screenshot-2.png',
    description: 'A todo list app built using HTML, CSS, and JavaScript. The app allows users to add, edit, and delete tasks. It also allows users to filter tasks by project.',
    skills: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    link: 'https://maaloum.github.io/To-do-list/dist/',
    btn1: 'See live',
    btn2: 'See Source',
  },
  {
    title: 'Prodecut-Management-System',
    jobDescription: {
      company: 'AmanSi',
      role: 'Front End Dev',
      year: '2015',
    },
    img: 'images/Screenshoot-3.png',
    description: 'A product management system built using HTML, CSS, and JavaScript. The app allows users to add, edit, and delete products. It also allows users to filter products by category or name of product.',
    skills: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    link: 'https://maaloum.github.io/Prodecut-Management-System/',
    btn1: 'See live',
    btn2: 'See Source',

  },
  {
    title: 'Multi-Post Stories',
    img: 'images/Snapshoot-Portfolio-2.jpg',
    jobDescription: {
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    btn1: 'See live',
    btn2: 'See Source',

  }];

/* -----------------------RENDERING CARD------------------------- */

const section = document.querySelector('.works');
const pop = document.querySelector('#pop-window');
projects.forEach((project, id) => {
  const cards = document.createElement('div');
  cards.classList.add('job');
  cards.innerHTML = (`
    <img class="projetc-image" src= "${project.img}">
    <div class="content project${id}">
      <h3>${project.title}</h3>
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
      <button type="button" id="popbtn">See projects</button>
    </div>
    `);
  section.appendChild(cards);
});

/* -----------------------POP UP WINDOW------------------------- */
function Popup(position) {
  const popContent = document.createElement('section');
  popContent.innerHTML = (`
  <div class="pop-content">
  <div class="head-title">
    <h3>${projects[position].title}</h3>
    <span class="close-icon">&times;</span>
  </div>
  <ul class="work-place">
    <li class="year">${
    projects[position].jobDescription.company
    }&nbsp;&nbsp; &#8226; &nbsp;</li>
    <li class="year gray">${
    projects[position].jobDescription.role
    }&nbsp;&nbsp; &#8226; &nbsp;</li>
    <li class="year gray">${projects[position].jobDescription.year}</li>
  </ul>
  <img class= "popimg" src="${projects[position].img}" alt="">
  <div class="bottom">
    <p>${projects[position].description}</p>
    <div class="right-side">
      <ul class="project-languages">
        <li ><a class= "programming" href="">${projects[position].skills[0]}</a></li>
        <li ><a class= "programming" href="">${projects[position].skills[1]}</a></li>
        <li ><a class= "programming" href="">${projects[position].skills[2]}</a></li>
      </ul>
      <div class="popup-buttons">
        <button type="button" class="pop-btn">
                <a class="btn-live"href="${projects[position].link}" target="_blank">
                ${
    projects[position].btn1
    } &nbsp;&nbsp;&nbsp;
                  <i class="btnicon bi bi-box-arrow-up-right"></i>
                </a>
        </button>
        <button type="button" class="pop-btn">
                <a class="btn-live"href="">
                ${
    projects[position].btn2
    } &nbsp;&nbsp;&nbsp;
                  <i class="btnicon bi bi-github"></i>
                </a>
        </button>
    </div>
  </div>
  </div>`);

  pop.appendChild(popContent);
  if (pop.style.display === 'block') {
    pop.style.display = 'none';
  } else {
    pop.style.display = 'flex';
    document.querySelector('.close-icon').addEventListener('click', () => {
      pop.removeChild(popContent);
      pop.style.display = 'none';
    });
  }
}

const projectnBtn = document.querySelectorAll('#popbtn');
projectnBtn.forEach((btn, ind) => {
  btn.addEventListener('click', () => {
    Popup(ind);
  });
});

/* -----------------------Validation form client side------------------------- */

const form = document.querySelector('#form');
const inputName = form.name;
const inputEmail = document.querySelector('#email');
const inpuTextArea = form.message;

const validateEmail = (email) => {
  if (email === email.toLowerCase()) return true;
  return false;
};

form.addEventListener('submit', (e) => {
  const invalidMessage = 'Email should be lowercase letters';
  const messageDisplay = document.getElementById('message');
  e.preventDefault();

  if ((!validateEmail(inputEmail.value.trim()))) {
    messageDisplay.innerHTML = invalidMessage;
    messageDisplay.classList.add('message');
  } else {
    messageDisplay.innerHTML = '';
    form.submit();
  }
});

/* -----------------------LOCAL STORAGE------------------------- */

const data = JSON.parse(localStorage.getItem('formData')) || [];
const addData = (name, email, textArea) => {
  data.push({
    name,
    email,
    textArea,
  });
  window.localStorage.setItem('formData', JSON.stringify(data));
};

form.onsubmit = (e) => {
  e.preventDefault();
  addData(inputName.value, inputEmail.value, inpuTextArea.value);
};
