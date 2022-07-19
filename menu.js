function mobileMenu(){
  var container = document.querySelector(".container");
  var nav = document.querySelector("nav");
  var span = document.createElement('span');
  span.innerHTML += "<span>&times;</span>";
  span.classList.add("close");
  nav.appendChild(span);
  var menu = document.querySelector(".menu");
  var navMenu = document.querySelector(".nav-menu");
  var navLink = document.querySelector(".nav-link");

  if(nav.style.display === 'inline-block'){
    nav.style.display = "none";
  } else{
    nav.style.display = "block";
    nav.classList.add('nav-style');
    span.addEventListener("click", () => {
      container.removeChild(nav);
    });
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
      container.removeChild(nav);
    }));

  }

}
